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
  const [emailDomain, setEmailDomain] = useState<string>(email.split('@')[1]);
  const [emailPrefix, setEmailPrefix] = useState<string>(email.split('@')[0]);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [showVerificationInput, setShowVerificationInput] = useState<boolean>(false);
  const [selectSchoolId, setSelectSchoolId] = useState<number>(schoolId);
  const [selectedMajorId, setSelectedMajorId] = useState<number>(departmentId);
  const [verificationStarted, setVerificationStarted] = useState<boolean>(false);
  const [showVerificationMessage, setShowVerificationMessage] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<
    'none' | 'pending' | 'success' | 'error'
  >('none');
  const [verificationMessage, setVerificationMessage] = useState<string>('');
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
    setSelectSchoolId(selectedSchoolId);
    GetMajorList(selectedSchoolId).then(res => {
      setMajors(res.departments);
      setEmailDomain(res.domain);

      if (res.departments.length > 0) {
        setSelectedMajorId(res.departments[0].departmentId);
      } else {
        setSelectedMajorId(-1);
      }
    });
  };
  const handleMajorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMajorId(parseInt(event.target.value));
  };
  const handleVerifyButtonClick = () => {
    setShowVerificationInput(true);
    setVerificationStarted(true);
    setShowVerificationMessage(true);
  };

  const handleVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.target.value);
  };

  console.log(`
  초기 학교 아이디 : ${schoolId}
  선택된 학교아이디 : ${selectSchoolId}
  초기 전공 아이디 : ${departmentId}
  선택된 전공 아이디 : ${selectedMajorId}
  초기 이메일 아이디 : ${email}
  선택된 이메일 아이디 : ${emailPrefix}@${emailDomain}
  `);

  const handleVerification = () => {
    // 예시로 더미 인증 코드 사용
    const dummyVerificationCode = '123456';

    if (verificationCode === dummyVerificationCode) {
      setVerificationStatus('success');
      setVerificationMessage('인증이 완료되었습니다.');
    } else {
      setVerificationStatus('error');
      setVerificationMessage('인증 코드 오류');
    }
  };
  const handleEditButtonClick = () => {};
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
              defaultValue={selectSchoolId}
              onChange={handleSchoolChange}
              disabled={showVerificationInput}
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
            <select
              className="modal-selectbar"
              id="major"
              defaultValue={selectedMajorId}
              onChange={handleMajorChange}
              disabled={showVerificationInput}
            >
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
              disabled={showVerificationInput}
            />
            <input id="email-domain" type="text" value={`@${emailDomain}`} disabled />
            <button
              className={`modal-verifybutton ${verificationStarted ? 'disabled' : ''}`}
              onClick={handleVerifyButtonClick}
              disabled={verificationStarted}
            >
              인증하기
            </button>
          </div>
          {showVerificationMessage && (
            <p className="modal-verificationmessage">이메일 인증 번호가 전송되었습니다.</p>
          )}
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
              <button
                className="modal-verifybutton"
                onClick={handleVerification}
                disabled={verificationStatus === 'success'}
              >
                인증
              </button>
            </div>
          )}
          {verificationMessage && (
            <div
              className="verification-message"
              style={{
                color: verificationStatus === 'error' ? '#ff611d' : 'green',
              }}
            >
              {verificationMessage}
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="modal-footer-editbutton" onClick={handleEditButtonClick}>
            수정
          </button>
          <button className="modal-footer-closebutton" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolAndMajorModal;
