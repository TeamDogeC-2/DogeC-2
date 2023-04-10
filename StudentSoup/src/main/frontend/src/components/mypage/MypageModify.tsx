/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useState, useEffect } from 'react';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import MypageNavbar from '../common/MypageNavbar';
import Swal from 'sweetalert2';
import './mypageModify.scss';
import { EditNickname, SendEmail, CheckEmail } from './data/MypageUserInfo';
import { getSignUpThird, postSignUpSchoolId } from '../../apis/auth/AuthAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
interface propTypes {
  memberId: number;
  schoolId: number;
  departmentId: number;
  id: string;
  nickname: string;
  email: string;
  departmentName: string;
  schoolName: string;
  onNicknameChange: (newNickname: string) => void;
}
interface SchoolDataResponse {
  schoolId: number | undefined;
  schoolName: string | undefined;
}
interface MajorDataResponse {
  departmentId: number | undefined;
  domain: string | undefined;
  departmentName: string | undefined;
}
const MypageModify = (props: propTypes) => {
  const [editNickName, setEditNickName] = useState<string>(props.nickname);
  const [selectedSchoolId, setSelectedSchoolId] = useState<number>(props.schoolId);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<number>(props.departmentId);
  const [emailId, setEmailId] = useState<string>(props.email.split('@')[0]);
  const [emailVerified, setEmailVerified] = useState<boolean>(true);
  const [schoolData, setSchoolData] = useState<SchoolDataResponse[]>();
  const [majorData, setMajorData] = useState<MajorDataResponse[]>();
  const [emailDomain, setEmailDomain] = useState('');
  const handleNicknameEdit = async () => {
    const { value: newNickname } = await Swal.fire({
      title: '닉네임 수정',
      input: 'text',
      inputLabel: '새로운 닉네임을 입력하세요',
      inputPlaceholder: '새로운 닉네임',
      showCancelButton: true,
      confirmButtonText: '수정',
      cancelButtonText: '취소',
      inputValidator: (value: string) => {
        if (!value) {
          return '닉네임을 입력해주세요';
        }
        if (value.length > 12) {
          return '닉네임의 최대 길이는 12글자입니다';
        }
        return null;
      },
    });

    if (newNickname && props?.memberId && props?.schoolId && props?.departmentId) {
      EditNickname(
        props.memberId,
        props.schoolId,
        props.departmentId,
        props.id,
        newNickname,
        props.email,
      )
        .then(() => {
          setEditNickName(newNickname);
          props.onNicknameChange(newNickname);
          Swal.fire({
            icon: 'success',
            title: '닉네임 수정 완료',
            text: '닉네임이 성공적으로 수정되었습니다.',
            timer: 3000,
            showConfirmButton: true,
            confirmButtonText: '확인',
            showCancelButton: false,
            timerProgressBar: true,
          });
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: '오류 발생',
            text: err.response.data.message,
          }).then(() => {
            handleNicknameEdit();
          });
        });
    }
  };
  const handlePasswordEdit = async () => {
    const result = await Swal.fire({
      title: '비밀번호 수정',
      html:
        '<form>' +
        '<div style="display: flex; flex-direction: row; align-items: center; font-size:1rem">' +
        '<label for="username" style="width: 30%;">아이디:</label>' +
        '<input id="username" type="text" class="swal2-input" value="' +
        props.id +
        '" style="width: 70%;" readonly autocomplete="username">' +
        '</div>' +
        '<div style="display: flex; flex-direction: row; align-items: center; font-size:1rem">' +
        '<label for="password" style="width: 30%;">비밀번호:</label>' +
        '<input id="password" type="password" class="swal2-input" placeholder="새로운 비밀번호" style="width: 70%;" autocomplete="new-password">' +
        '</div>' +
        '<div style="display: flex; flex-direction: row; align-items: center; font-size:1rem">' +
        '<label for="password-confirm" style="width: 30%;">비밀번호 확인:</label>' +
        '<input id="password-confirm" type="password" class="swal2-input" placeholder="새 비밀번호 확인" style="width: 70%;" autocomplete="new-password">' +
        '</div>' +
        '</form>',
      preConfirm: (): any => {
        const password = (Swal.getPopup()?.querySelector('#password') as HTMLInputElement)?.value;
        const passwordConfirm = (
          Swal.getPopup()?.querySelector('#password-confirm') as HTMLInputElement
        )?.value;

        if (!password) {
          Swal.showValidationMessage('비밀번호를 입력해주세요');
          return false;
        }

        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/.test(password)) {
          Swal.showValidationMessage(
            '비밀번호는 대문자 1개 이상, 숫자를 포함하여 8~20글자 이내로 입력해주세요.',
          );
          return false;
        }

        if (password !== passwordConfirm) {
          Swal.showValidationMessage('비밀번호가 일치하지 않습니다.');
          return false;
        }

        return { password, passwordConfirm };
      },
      confirmButtonText: '수정',
      cancelButtonText: '취소',
      showCancelButton: true,
      didOpen: () => {
        const passwordInput = Swal.getPopup()?.querySelector('#password') as HTMLInputElement;
        const passwordConfirmInput = Swal.getPopup()?.querySelector(
          '#password-confirm',
        ) as HTMLInputElement;
        const form = Swal.getPopup()?.querySelector('form');

        if (form) {
          form.addEventListener('submit', event => {
            event.preventDefault();
            Swal.clickConfirm();
          });
        }
        passwordInput.focus();
        passwordInput.addEventListener('keydown', (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            Swal.clickConfirm();
          }
        });
        passwordConfirmInput.addEventListener('keydown', (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            Swal.clickConfirm();
          }
        });
      },
    });

    if (result.isConfirmed) {
      const { password, passwordConfirm } = result.value as {
        password: string;
        passwordConfirm: string;
      };
      if (editNickName && props?.memberId && props?.schoolId && props?.departmentId) {
        EditNickname(
          props.memberId,
          props.schoolId,
          props.departmentId,
          props.id,
          editNickName,
          props.email,
          password,
        )
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: '비밀번호 수정 완료',
              text: '비밀번호가 성공적으로 수정되었습니다.',
              timer: 3000,
              showConfirmButton: true,
              confirmButtonText: '확인',
              showCancelButton: false,
              timerProgressBar: true,
            });
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  };

  return (
    <>
      <MypageNavbar />
      <DesktopHeader>
        <div className="mypagemodify-container">
          <div className="mypagemodify-boardmain">
            <h2 className="mypagemodify-boardmainname">프로필 정보</h2>
            <FontAwesomeIcon
              icon={faEdit}
              size="lg"
              className="mypagemodify-editicon"
              onClick={handleNicknameEdit}
            />
          </div>
          <table className="mypagemodify-boardtable">
            <thead>
              <tr>
                <td>닉네임</td>
                <th>{editNickName}</th>
              </tr>
            </thead>
          </table>
          <div className="mypagemodify-boardmain">
            <h2 className="mypagemodify-boardmainname">계정 정보</h2>
            <FontAwesomeIcon
              icon={faEdit}
              size="lg"
              className="mypagemodify-editicon"
              onClick={handlePasswordEdit}
            />
          </div>
          <table className="mypagemodify-boardtable">
            <thead>
              <tr>
                <td>아이디</td>
                <th>{props.id}</th>
              </tr>
              <tr>
                <td>비밀번호</td>
                <th></th>
              </tr>
            </thead>
          </table>
          <div className="mypagemodify-boardmain">
            <h2 className="mypagemodify-boardmainname">학교 및 전공</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="mypagemodify-editicon" />
          </div>
          <table className="mypagemodify-boardtable">
            <thead>
              <tr>
                <td>학교</td>
                <th>{props.schoolName}</th>
              </tr>
              <tr>
                <td>전공</td>
                <th>{props.departmentName}</th>
              </tr>
              <tr>
                <td>이메일</td>
                <th>{props.email}</th>
              </tr>
            </thead>
          </table>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div className="tablet-mypagemodify-container">
          <div className="tablet-mypagemodify-boardmain">
            <h2 className="tablet-mypagemodify-boardmainname">프로필 정보</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="tablet-mypagemodify-editicon" />
          </div>
          <table className="tablet-mypagemodify-boardtable">
            <thead>
              <tr>
                <td>닉네임</td>
                <th>닉네임의최대길이는열두글자</th>
              </tr>
            </thead>
          </table>
          <div className="tablet-mypagemodify-boardmain">
            <h2 className="tablet-mypagemodify-boardmainname">계정 정보</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="tablet-mypagemodify-editicon" />
          </div>
          <table className="tablet-mypagemodify-boardtable">
            <thead>
              <tr>
                <td>아이디</td>
                <th>dummyTest1</th>
              </tr>
              <tr>
                <td>비밀번호</td>
                <th></th>
              </tr>
            </thead>
          </table>
          <div className="tablet-mypagemodify-boardmain">
            <h2 className="tablet-mypagemodify-boardmainname">학교 및 전공</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="tablet-mypagemodify-editicon" />
          </div>
          <table className="tablet-mypagemodify-boardtable">
            <thead>
              <tr>
                <td>학교</td>
                <th>청운대학교</th>
              </tr>
              <tr>
                <td>전공</td>
                <th>컴퓨터공학과</th>
              </tr>
              <tr>
                <td>이메일</td>
                <th>dummyTest1@defult.com</th>
              </tr>
            </thead>
          </table>
        </div>
      </MobileHeader>
      <Mobile>
        <div className="mobile-mypagemodify-container">
          <div className="mobile-mypagemodify-boardmain">
            <h2 className="mobile-mypagemodify-boardmainname">프로필 정보</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="mobile-mypagemodify-editicon" />
          </div>
          <table className="mobile-mypagemodify-boardtable">
            <thead>
              <tr>
                <td>닉네임</td>
                <th>닉네임의최대길이는열두글자</th>
              </tr>
            </thead>
          </table>
          <div className="mobile-mypagemodify-boardmain">
            <h2 className="mobile-mypagemodify-boardmainname">계정 정보</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="mobile-mypagemodify-editicon" />
          </div>
          <table className="mobile-mypagemodify-boardtable">
            <thead>
              <tr>
                <td>아이디</td>
                <th>dummyTest1</th>
              </tr>
              <tr>
                <td>비밀번호</td>
                <th></th>
              </tr>
            </thead>
          </table>
          <div className="mobile-mypagemodify-boardmain">
            <h2 className="mobile-mypagemodify-boardmainname">학교 및 전공</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="mobile-mypagemodify-editicon" />
          </div>
          <table className="mobile-mypagemodify-boardtable">
            <thead>
              <tr>
                <td>학교</td>
                <th>청운대학교</th>
              </tr>
              <tr>
                <td>전공</td>
                <th>컴퓨터공학과</th>
              </tr>
              <tr>
                <td>이메일</td>
                <th>dummyTest1@defult.com</th>
              </tr>
            </thead>
          </table>
        </div>
      </Mobile>
    </>
  );
};

export default MypageModify;
