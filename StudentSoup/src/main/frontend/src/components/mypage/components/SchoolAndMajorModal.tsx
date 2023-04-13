import React, { useEffect, useState } from 'react';
import './schoolAndMajorModal.scss';
import { GetSchoolList, GetMajorList } from '../data/MypageUserInfo';

interface SchoolAndMajorModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (school: string, major: string, email: string) => void;
  memberId: number;
  schoolId: number;
  departmentId: number;
  id: string;
  nickname: string;
  email: string;
  departmentName: string;
  schoolName: string;
}
interface School {
  schoolId: number;
  schoolName: string;
}

interface Major {
  departmentId: number;
  departmentName: string;
}
const SchoolAndMajorModal: React.FC<SchoolAndMajorModalProps> = ({
  show,
  onClose,
  onSubmit,
  memberId,
  schoolId,
  departmentId,
  id,
  nickname,
  email,
  departmentName,
  schoolName,
}) => {
  if (!show) {
    return null;
  }
  const [schools, setSchools] = useState<School[]>([]);
  const [majors, setMajors] = useState<Major[]>([]);
  const [emailId, setEmailId] = useState<string>(email.split('@')[1]);
  const [emailPrefix, setEmailPrefix] = useState<string>(email.split('@')[0]);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [showVerificationInput, setShowVerificationInput] = useState<boolean>(false);

  useEffect(() => {
    GetSchoolList().then(res => {
      setSchools(res);
    });
    GetMajorList(schoolId).then(res => {
      setMajors(res.departments);
    });
  }, []);

  const handleSchoolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSchoolId = parseInt(event.target.value);
    GetMajorList(selectedSchoolId).then(res => {
      setMajors(res.departments);
      setEmailId(res.domain);
    });
  };
  const handleVerifyButtonClick = () => {
    setShowVerificationInput(true);
  };

  const handleVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.target.value);
  };
  console.log(emailPrefix);
  return (
    <div className={`modalContainer ${show ? 'active' : ''}`}>
      <div className="modalOverlay"></div>
      <div className="modal">
        <div className="modal-header">
          <h2>학교 및 전공 수정</h2>
        </div>
        <div className="modal-body">
          <div className="modal-contents">
            <label htmlFor="school" className="modal-labelname">
              학교:
            </label>
            <select
              className="modal-selectbar"
              id="school"
              defaultValue={schoolId}
              onChange={handleSchoolChange}
            >
              {schools.map(school => (
                <option key={school.schoolId} value={school.schoolId}>
                  {school.schoolName}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-contents">
            <label htmlFor="major" className="modal-labelname">
              전공:
            </label>
            <select className="modal-selectbar" id="major" defaultValue={departmentId}>
              {majors.map(major => (
                <option key={major.departmentId} value={major.departmentId}>
                  {major.departmentName}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-contents">
            <label className="modal-labelname" htmlFor="email">
              이메일:
            </label>
            <input
              className="modal-inputtext"
              id="email-prefix"
              type="text"
              value={emailPrefix}
              onChange={e => setEmailPrefix(e.target.value)}
            />
            <input id="email-domain" type="text" value={`@${emailId}`} disabled />
            <button className="modal-verifybutton" onClick={handleVerifyButtonClick}>
              인증하기
            </button>
          </div>
          {showVerificationInput && (
            <div className="modal-contents">
              <label className="modal-labelname" htmlFor="verification-code">
                인증 코드:
              </label>
              <input
                className="modal-inputtext"
                id="verification-code"
                type="text"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
              />
              <button className="modal-verifybutton">인증</button>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="modal-footer-editbutton">수정</button>
          <button className="modal-footer-closebutton" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolAndMajorModal;
