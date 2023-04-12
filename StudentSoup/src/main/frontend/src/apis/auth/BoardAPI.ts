import axios, { type AxiosResponse } from 'axios';
import axiosInstance from './AxiosInterceptor';

export const postBoardCategory = async (category: string): Promise<AxiosResponse> => {
  const response = await axios.post(`/board/${category}`);
  return response;
};

export const postBoardCategorySearch = async (
  category: string,
  search: string,
): Promise<AxiosResponse> => {
  const response = await axios.post(`/board/${category}?title=${search}`);
  return response;
};

export const postUserInfo = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.post('/member/info');
  return response;
};
