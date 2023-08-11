import React, { useEffect, useRef, useState } from 'react';
import './adminmenumodal.scss';
import axiosInstance from 'apis/utils/AxiosInterceptor';
interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantId: number;
}
type CategoryType = 'Main' | 'Side' | 'Drink';
const AdminMenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, restaurantId }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const categoryMapping: Record<CategoryType, string> = {
    Main: '메인메뉴',
    Side: '사이드 메뉴',
    Drink: '음료 및 주류',
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append('restaurantId', restaurantId.toString());
      formData.append('name', name);
      formData.append('restaurantMenuCategory', category);
      formData.append('cost', price);

      if (image) {
        formData.append('multipartFile', image);
      }

      const response = await axiosInstance.post('/admin/restaurantMenu', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('메뉴가 성공적으로 등록되었습니다.');
    } catch (error) {
      console.error('메뉴 등록에 실패했습니다.', error);
    }
  };
  const handleImageRemove = () => {
    setImage(null);
    setPreviewImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  useEffect(() => {
    axiosInstance
      .get('/admin/restaurantMenu')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <div className={`adminmenumodal-menu-modal ${isOpen ? 'open' : ''}`}>
      <div className="adminmenumodal-menu-modal-content">
        <div>음식점 추가</div>
        <input
          type="text"
          placeholder="메뉴 이름"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">카테고리를 선택해주세요</option>
          {categories.map((option, index) => (
            <option key={index} value={option}>
              {categoryMapping[option]}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="가격"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={e => {
            const file = e.target.files?.[0] ?? null;
            setImage(file);
            if (file) {
              const reader = new FileReader();
              reader.onload = e => {
                setPreviewImage(e.target?.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        {previewImage && (
          <div className="adminmenumodal-imgcontainer">
            <img src={previewImage} alt="Preview" />
            <button className="adminmenumodal-delete-image-button" onClick={handleImageRemove}>
              사진 삭제
            </button>
          </div>
        )}
        <div className="adminmenumodal-bottom-button">
          <button onClick={handleSubmit}>저장</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default AdminMenuModal;
