import axios, { type AxiosResponse } from 'axios';
import { type SignUpUserInfo } from '../../interfaces/AuthAPITypes';

export const signIn = async (id: string, password: string): Promise<AxiosResponse> => {
  const res = await axios.post('/members/login', {
    id,
    pwd: password,
  });
  return res;
};

export const signUp = async (id: string, password: string): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/2', {
    id,
    pwd: password,
  });
  return res;
};

export const authRefreshToken = async (refreshToken: string) => {
  const response = await axios.post('/jwt', { refreshtoken: JSON.parse(refreshToken) });
  return response;
};

export const getSignUpThird = async (): Promise<AxiosResponse> => {
  const res = await axios.get('/members/signUp/3');
  return res;
};

export const postSignUpSchoolId = async (schoolId: string): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/3/' + schoolId);
  return res;
};

export const signUpIdCheck = async (memberId: string): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/2/Id', {
    memberId,
  });
  return res;
};

export const signUpNicknameCheck = async (nickname: string): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/3/Nickname', {
    nickName: nickname,
  });
  return res;
};

export const signUpEmailAuthenticate = async (
  email: string,
  domain: string,
): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/3/mail', {
    email: email + '@' + domain,
  });
  return res;
};

export const signUpEmailAuthenticateNumber = async (
  email: string,
  authenticationNumber: number,
): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/3/checkMail', {
    email,
    authenticationNumber,
  });
  return res;
};

export const signUpComplete = async (userData: SignUpUserInfo): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/3', userData);
  return res;
};
