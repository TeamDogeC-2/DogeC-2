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
  const [images, setImages] = useState<File[] | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', name);
    formData.append('address', address);
    formData.append('restaurantCategory', category);
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);
    formData.append('schoolId', schoolId);
    formData.append('coordinate', coordinate);
    formData.append('tel', tel);
    formData.append('tag', tag);
    formData.append('detail', detail);
    formData.append('isDelivery', delivery);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('multipartFileList', images[i]);
      }
    }

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const images: File[] = [];
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.startsWith('image/')) {
          alert('이미지 파일만 선택할 수 있습니다.');
          e.target.value = '';
          return;
        }
        images.push(files[i]);
      }

      if (images.length > 5) {
        alert('최대 5개의 이미지를 선택할 수 있습니다.');
        e.target.value = '';
        return;
      }

      setImages(images);
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
        <input type="file" accept="image/*" multiple onChange={handleFileChange} />
        <ul>
          {images?.map((image, index) => (
            <li key={index}>{image.name}</li>
          ))}
        </ul>

        <input type="submit" value="레스토랑 등록" />
      </form>
    </div>
  );
};

export default Adminpage;
