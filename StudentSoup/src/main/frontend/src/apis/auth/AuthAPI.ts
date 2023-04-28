import axios, { type AxiosResponse } from 'axios';
import { type SignUpUserInfo } from '../../interfaces/AuthAPITypes';

const ACCESS_TOKEN_EXPIRE: number = 3600000 - 60000;
const REFRESH_TOKEN_EXPIRE: number = 1209600000 - 60000;

export const signIn = async (id: string, password: string) => {
  const res = await axios
    .post('/members/login', {
      id,
      pwd: password,
    })
    .then(response => {
      const accessToken = JSON.stringify({
        value: response.data.accessToken,
        expire: Date.now() + ACCESS_TOKEN_EXPIRE,
      });
      const refreshToken = JSON.stringify({
        value: response.data.refreshToken,
        expire: Date.now() + REFRESH_TOKEN_EXPIRE,
      });

      localStorage.setItem('access-token', accessToken);
      localStorage.setItem('refresh-token', refreshToken);
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
  const res = await axios
    .post('/jwt', {}, { headers: { Authorization: refreshToken } })
    .then(response => {
      const newAccessToken = JSON.stringify({
        value: response.data,
        expire: Date.now() + ACCESS_TOKEN_EXPIRE,
      });

      localStorage.removeItem('access-token');
      localStorage.setItem('access-token', newAccessToken);
    });

  return res;
};

export const getSignUpThird = async (): Promise<AxiosResponse> => {
  const res = await axios.get('/members/signUp/3');
  return res;
};

export const postSignUpSchoolId = async (schoolId: number): Promise<AxiosResponse> => {
  const res = await axios.post(`/members/signUp/3/${schoolId}`);
  return res;
};

export const signUpIdCheck = async (memberId: number): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/2/Id', {
    memberId,
  });
  return res;
};

export const signUpNicknameCheck = async (nickName: string): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/3/Nickname', {
    nickName,
  });
  return res;
};

export const signUpEmailAuthenticate = async (
  email: string,
  domain: string,
): Promise<AxiosResponse> => {
  const res = await axios.post('/members/signUp/3/mail', {
    email: `${email}@${domain}`,
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

export const postLogout = async (): Promise<AxiosResponse> => {
  const res = await axios.post('/members/logout');
  return res;
};
