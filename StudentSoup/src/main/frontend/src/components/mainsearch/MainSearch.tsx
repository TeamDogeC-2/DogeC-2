import React from 'react'
import './mainsearch.css'

const MainSearch = () => {
  return (
    <div className='main'>
      <div className='mainBody'>
        <span className='mainTextTop'>
          대학생을 위한
        </span>
        <span className='mainTextBottom'>
          대학 주변 맛집 추천
        </span>
        <div className='searchbar'>
          <span className='searchIcon'>
            Icon
          </span>
          <input placeholder='지역 학교 명을 입력하세요.' className='searchInput'></input>
          <button className='searchButton'>검색</button>
        </div>
      </div>
    </div>
  )
}

export default MainSearch