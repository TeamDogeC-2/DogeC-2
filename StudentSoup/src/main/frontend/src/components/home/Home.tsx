import React, { useEffect, useState } from 'react';
import MainNavbar from '../common/mainNavbar';
import './home.scss';
import MainLogo_white from '../../img/mainLogo_white.svg';
import Search_icon from '../../img/search_icon.svg';
import { SchoolList, type SchoolListType } from './data/SchoolList';

const Home = () => {
  const [schoolComponent, setSchoolComponent] = useState<any>([]);
  const [schoolName, setSchoolName] = useState<string>('');
  const saveSchoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolName(e.target.value);
  };
  const handleClickSearch = () => {
    alert(schoolName);
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

  return (
    <>
      <MainNavbar />
      <div className="hero-text">
        <img className="sfoo-image" src={MainLogo_white} />
        <p>대학생들을 위한</p>
        <h2 className="link-texts">대학 주변 맛집 추천</h2>
        <div className="school_search_bar">
          <img src={Search_icon} />
          <input onChange={saveSchoolName} placeholder="지역 학교 명을 입력하세요."></input>
          <button onClick={handleClickSearch}>검색</button>
          {schoolComponent.map((school: SchoolListType) => (
            <div className="school-list" key={school.schoolId}>
              {school.schoolName}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
