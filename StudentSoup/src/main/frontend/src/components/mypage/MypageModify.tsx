import React, { useState, useEffect } from 'react';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import MypageNavbar from '../common/MypageNavbar';
import Swal from 'sweetalert2';
import './mypageModify.scss';
import { EditNickname } from './data/MypageUserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
interface propTypes {
  memberId: number | undefined;
  schoolId: number | undefined;
  departmentId: number | undefined;
  id: string;
  nickname: string;
  email: string;
  departmentName: string;
  schoolName: string;
}
const MypageModify = (props: propTypes) => {
  const handleNicknameEdit = async () => {
    const { value: newNickname } = await Swal.fire({
      title: '닉네임 수정',
      input: 'text',
      inputLabel: '새로운 닉네임을 입력하세요',
      inputPlaceholder: '새로운 닉네임',
      showCancelButton: true,
      confirmButtonText: '수정',
      cancelButtonText: '취소',
      inputValidator: (value: string): string | null => {
        if (!value) {
          return '닉네임을 입력해주세요';
        }
        if (value.length > 12) {
          return '닉네임의 최대 길이는 12글자입니다';
        }
        return null;
      },
    });

    if (newNickname && props?.memberId && props.schoolId && props.departmentId) {
      EditNickname(
        props.memberId,
        props.schoolId,
        props.departmentId,
        props.id,
        newNickname,
        props.email,
      )
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.error(err);
        });
      console.log('새로운 닉네임:', newNickname);
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
                <th>{props.nickname}</th>
              </tr>
            </thead>
          </table>
          <div className="mypagemodify-boardmain">
            <h2 className="mypagemodify-boardmainname">계정 정보</h2>
            <FontAwesomeIcon icon={faEdit} size="lg" className="mypagemodify-editicon" />
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
