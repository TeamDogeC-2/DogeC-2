import axios, { type AxiosResponse } from 'axios';
import axiosInstance from './AxiosInterceptor';

export const postBoardCategory = async (
  category: string,
  page: number,
  size: number = 12,
  search: string = '',
): Promise<AxiosResponse> => {
  const response = await axios.post(`/board/${category}?title=${search}`, { page, size });
  return response;
};

export const postUserInfo = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.post('/member/info');
  return response;
};

export const postBoards = async (
  schoolId: number,
  memberId: number,
  departmentId: number | null = null,
  column: string | null = null,
  value: string | null = null,
  category: string,
  sorted: number = 0,
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

export const getDepartmentIdBoards = async (schoolId: number) => {
  const response = await axiosInstance.get(`/board/department/${schoolId}`);
  return response;
};
