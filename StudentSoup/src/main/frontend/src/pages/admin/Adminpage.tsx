import React, { useState, type ChangeEvent, type FormEvent, useEffect } from 'react';
import './adminpage.scss';
import axiosInstance from 'apis/utils/AxiosInterceptor';

const Adminpage = () => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [delivery, setDelivery] = useState<string>('');
  const [schoolId, setSchoolId] = useState<string>('');
  const [coordinate, setCoordinate] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();

    // 폼 데이터 추가
    formData.append('name', name);
    formData.append('address', address);
    formData.append('restaurantCategory', category);
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);
    formData.append('schoolId', '1');
    formData.append('coordinate', coordinate);
    formData.append('tel', tel);
    formData.append('tag', tag);
    formData.append('detail', detail);
    formData.append('isDelivery', delivery);

    // 파일 추가
    if (image) {
      formData.append('multipartFileList', image);
    }

    // axios 요청
    try {
      await axiosInstance.post('/admin/restaurant', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('데이터 전송에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    axiosInstance
      .get('/admin/restaurant')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="adminpage-maincontainer">
      <h1>어드민 페이지</h1>
      <form onSubmit={handleSubmit}>
        <label>레스토랑 이름:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />

        <label>카테고리:</label>
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} />

        <label>주소:</label>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} />

        <label>시작 시간:</label>
        <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />

        <label>종료 시간:</label>
        <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />

        <label>배달 여부:</label>
        <input type="text" value={delivery} onChange={e => setDelivery(e.target.value)} />

        <label>학교 ID:</label>
        <input type="text" value={schoolId} onChange={e => setSchoolId(e.target.value)} />

        <label>좌표:</label>
        <input type="text" value={coordinate} onChange={e => setCoordinate(e.target.value)} />

        <label>전화번호:</label>
        <input type="text" value={tel} onChange={e => setTel(e.target.value)} />

        <label>태그:</label>
        <input type="text" value={tag} onChange={e => setTag(e.target.value)} />

        <label>세부 사항:</label>
        <textarea value={detail} onChange={e => setDetail(e.target.value)} />

        <label>이미지:</label>
        <input type="file" onChange={handleFileChange} />

        <input type="submit" value="레스토랑 등록" />
      </form>
    </div>
  );
};

export default Adminpage;
