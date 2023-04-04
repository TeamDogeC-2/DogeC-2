import React, { useState } from 'react';
import MypageNavbar from '../common/MypageNavbar';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import './mypageMain.scss';
import MemberImg from '../../img/circle_human.png';
import MypagePreview from './MypagePreview';
import MypageContents from './MypageContents';
import MypagReview from './MypageReview';
import MypageModify from './MypageModify';
import Swal from 'sweetalert2';
import { ReactComponent as SchoolIcon } from '../../img/SchoolIcon.svg';
import { ReactComponent as SchoolSkillIcon } from '../../img/SchoolSkillIcon.svg';

const MypageMain = () => {
  const [selectPage, setSelectPage] = useState<string>('preview');
  const handleSelectPage = (pagename: string) => {
    setSelectPage(pagename);
  };

  const handleEditProfile = async () => {
    const result = await Swal.fire({
      html: `
        <form id="password-form" class="password-form">
          <input type="text" id="username-input" autocomplete="username" style="display:none" />
          <label for="password-input">비밀번호 확인</label>
          <input type="password" id="password-input" placeholder="기존 비밀번호를 입력해주세요" autocomplete="new-password" />
        </form>
      `,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      showCancelButton: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const passwordInput = document.getElementById('password-input') as HTMLInputElement;
        return passwordInput.value;
      },
      didOpen: () => {
        const passwordInput = document.getElementById('password-input') as HTMLInputElement;
        passwordInput.focus();
        passwordInput.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            Swal.clickConfirm();
          }
        });
      },
    });

    if (result.dismiss) {
      return;
    }

    if (result.value === 'test123!') {
      setSelectPage('modify');
    } else {
      Swal.fire({
        icon: 'error',
        title: '비밀번호가 일치하지 않습니다.',
        text: '다시 시도해주세요.',
      }).then(() => {
        handleEditProfile();
      });
    }
  };
  return (
    <>
      <MypageNavbar />
      <DesktopHeader>
        <div className="mypagemain-container">
          <div className="mypagemain-banner"></div>
          <div className="mypagemain-usercontainer">
            <div className="mypagemain-userinfo">
              <div className="mypagemain-imgbox">
                <img src={MemberImg} className="mypagemain-img" />
                <div className="hover-text">이미지 수정</div>
              </div>
              <div className="mypagemain-username">어떻게이름이열두글자임미</div>
              <div className="mypagemain-schoolname">
                <SchoolIcon />
                <span className="mypagemain-schooltext">청운대학교 인천캠퍼스</span>
              </div>
              <div className="mypagemain-schoolskill">
                <SchoolSkillIcon />
                <span className="mypagemain-schooltext">컴퓨터공학과</span>
              </div>
              <button
                onClick={selectPage === 'modify' ? undefined : handleEditProfile}
                className="mypagemain-editprofile"
                disabled={selectPage === 'modify'}
              >
                {selectPage === 'modify' ? '내 정보' : '내 프로필 편집'}
              </button>
              <p className="mypagemain-date">가입일 : 2020년 2월28일</p>
            </div>
            {selectPage === 'preview' && <MypagePreview handleSelectPage={handleSelectPage} />}
            {selectPage === 'boardreply' && <MypageContents />}
            {selectPage === 'review' && <MypagReview />}
            {selectPage === 'modify' && <MypageModify />}
          </div>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div className="tablet-mypagemain-container">
          <div className="tablet-mypagemain-banner"></div>
          <div className="tablet-mypagemain-usercontainer">
            <div className="tablet-mypagemain-userinfo">
              <div className="tablet-mypagemain-imgbox">
                <img src={MemberImg} className="tablet-mypagemain-img" />
                <div className="tablet-hover-text">이미지 수정</div>
              </div>
              <div className="tablet-mypagemain-username">어떻게이름이열두글자임미</div>
              <div className="tablet-mypagemain-schoolname">
                <SchoolIcon />
                <span className="tablet-mypagemain-schooltext">청운대학교 인천캠퍼스</span>
              </div>
              <div className="tablet-mypagemain-schoolskill">
                <SchoolSkillIcon />
                <span className="tablet-mypagemain-schooltext">컴퓨터공학과</span>
              </div>
              <button
                onClick={selectPage === 'modify' ? undefined : handleEditProfile}
                className="tablet-mypagemain-editprofile"
                disabled={selectPage === 'modify'}
              >
                {selectPage === 'modify' ? '내 정보' : '내 프로필 편집'}
              </button>
              <p className="tablet-mypagemain-date">가입일 : 2020년 2월28일</p>
            </div>
            {selectPage === 'preview' && <MypagePreview handleSelectPage={handleSelectPage} />}
            {selectPage === 'boardreply' && <MypageContents />}
            {selectPage === 'review' && <MypagReview />}
            {selectPage === 'modify' && <MypageModify />}
          </div>
        </div>
      </MobileHeader>
      <Mobile>
        <div className="mobile-mypagemain-container">
          <div className="mobile-mypagemain-banner"></div>
          <div className="mobile-mypagemain-usercontainer">
            <div className="mobile-mypagemain-userinfo">
              <div className="mobile-mypagemain-imgbox">
                <img src={MemberImg} className="mobile-mypagemain-img" />
                <div className="mobile-hover-text">이미지 수정</div>
              </div>
              <div className="mobile-mypagemain-username">어떻게이름이열두글자임미</div>
              <div className="mobile-mypagemain-schoolname">
                <SchoolIcon />
                <span className="mobile-mypagemain-schooltext">청운대학교 인천캠퍼스</span>
              </div>
              <div className="mobile-mypagemain-schoolskill">
                <SchoolSkillIcon />
                <span className="mobile-mypagemain-schooltext">컴퓨터공학과</span>
              </div>
              <button
                onClick={selectPage === 'modify' ? undefined : handleEditProfile}
                className="mobile-mypagemain-editprofile"
                disabled={selectPage === 'modify'}
              >
                {selectPage === 'modify' ? '내 정보' : '내 프로필 편집'}
              </button>
              <p className="mobile-mypagemain-date">가입일 : 2020년 2월28일</p>
            </div>
            {selectPage === 'preview' && <MypagePreview handleSelectPage={handleSelectPage} />}
            {selectPage === 'boardreply' && <MypageContents />}
            {selectPage === 'review' && <MypagReview />}
            {selectPage === 'modify' && <MypageModify />}
          </div>
        </div>
      </Mobile>
    </>
  );
};
export default MypageMain;
