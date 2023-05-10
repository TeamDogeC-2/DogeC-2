import React, { useEffect, useState } from 'react';
import './home.scss';
import MainLogo_white from 'assets/images/mainLogo_white.svg';
import Search_icon from 'assets/images/search_icon.svg';
import { SchoolList, type SchoolListType } from './data/SchoolList';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [schoolComponent, setSchoolComponent] = useState<any>([]);
  const [schoolName, setSchoolName] = useState<string>('');

  const navigate = useNavigate();

  const saveSchoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolName(e.target.value);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const handleClickSearch = () => {
    if (!schoolName) {
      Toast.fire({
        icon: 'error',
        title: '학교를 입력해주세요.',
      });
      return;
    } else if (
      schoolComponent.find((item: { schoolName: string }) => item.schoolName === schoolName) ===
      undefined
    ) {
      Toast.fire({
        toast: true,
        icon: 'error',
        title: '학교 정보가 없습니다.',
      });
      return;
    }
    navigate(`/restaurant/${schoolName}`, { state: schoolName });
  };

  const activeEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClickSearch();
    }
  };

  useEffect(() => {
    SchoolList()
      .then(res => {
        setSchoolComponent(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const filterSchoolName = schoolComponent.filter((item: { schoolName: string | string[] }) => {
    return item.schoolName.includes(schoolName);
  });

  return (
    <div className="home-hero-text">
      <img className="home-sfoo-image" src={MainLogo_white} />
      <p>대학생들을 위한</p>
      <h2 className="home-link-texts">대학 주변 맛집 추천</h2>
      <div className="home-school_search_bar">
        <img src={Search_icon} />
        <input
          type="text"
          onChange={saveSchoolName}
          value={schoolName}
          placeholder="지역 학교 명을 입력하세요."
          onKeyDown={e => activeEnter(e)}
        ></input>
        <button onClick={handleClickSearch}>검색</button>
        {schoolName && (
          <>
            {filterSchoolName.map((school: SchoolListType) => (
              <div
                onClick={() => {
                  setSchoolName(school.schoolName);
                }}
                className="home-school-list"
                key={school.schoolId}
              >
                {school.schoolName}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
