import React, { useState } from 'react';

const reviewMoreImageView = (data: any) => {
  const imgArr = data.imageFileNameList;
  return (
    <>
      {imgArr.map((school: any) => (
        <img
          key={school}
          src={`${process.env.REACT_APP_IMG_KEY}/${school}`}
          className="ml-[3px] w-[146px] h-[135px] border-[1px]"
        />
      ))}
    </>
  );
};

export default reviewMoreImageView;
