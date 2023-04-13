import axios, { type AxiosResponse } from 'axios';
import axiosInstance from './AxiosInterceptor';

export const postBoardCategory = async (
  category: string,
  search: string = '',
): Promise<AxiosResponse> => {
  const response = await axios.post(`/board/${category}?title=${search}`);
  return response;
};

export const postUserInfo = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.post('/member/info');
  return response;
};

export const postBoards = async (
  schoolId: number,
  memberId: number,
  departmentId: number,
  column: string = '',
  value: string = '',
  category: string,
  sorted: number,
  page: number,
  size: number = 12,
) => {
  const response = await axiosInstance.post(
    `/boards?category=${category}&column=${column}&value=${value}&sorted=${sorted}&page=${page}&size=${size}`,
    {
      schoolId,
      memberId,
      departmentId,
    },
  );
  return response;
};
