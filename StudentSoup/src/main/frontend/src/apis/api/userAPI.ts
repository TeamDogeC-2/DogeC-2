import axios, { type AxiosResponse } from 'axios';

export const getDepartment = async (schoolId: number): Promise<AxiosResponse> => {
  const res = await axios.post(`/members/signUp/3/${schoolId}`);
  return res;
};
