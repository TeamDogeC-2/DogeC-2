import axios from 'axios';
import axiosInstance from '../../../apis/auth/AxiosInterceptor';

// 이미지 업로드
export const ImageUpload = async (memberId: number, multipartFile: File) => {
  return await axiosInstance.post(
    '/members/edit/image',
    {
      memberId,
      multipartFile,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

// 프로필 이미지 기본으로 변경
export const ImageDelete = async (memberId: number) => {
  return await axiosInstance.delete('/members/delete/image', { params: { memberId } });
};
