import axios from 'axios';

export const signIn = async (id: string, password: string) => {
  const res = await axios.post('/members/login', {
    id,
    pwd: password,
  });
  return res;
};

export const signUp = async (id: string, password: string) => {
  const res = await axios.post('/members/signUp/2', {
    id,
    pwd: password,
  });
  return res;
};

export const getSignUpThird = async () => {
  const res = await axios.get('/members/signUp/3');
  return res;
};

export const postSignUpSchoolId = async (schoolId: string) => {
  const res = await axios.post('/members/signUp/3/' + schoolId);
  return res;
};

export const signUpIdCheck = async (memberId: string) => {
  const res = await axios.post('/members/signUp/2/Id', {
    memberId,
  });
  return res;
};

export const signUpNicknameCheck = async (nickname: string) => {
  const res = await axios.post('/members/signUp/3/Nickname', {
    nickName: nickname,
  });
  return res;
};

export const signUpEmailAuthenticate = async (email: string) => {
  const res = await axios
    // .post('/members/signUp/3/mail', { email: userEmail + '@' + majorData.domain })
    .post('/members/signUp/3/mail', { email: 'suljiye37@naver.com' });
  return res;
};

export const signUpEmailAuthenticateNumber = async (
  email: string,
  authenticationNumber: number,
) => {
  const res = await axios.post('/members/signUp/3/checkMail', {
    email: 'suljiye37@naver.com',
    authenticationNumber,
  });
  return res;
};

export const signUpComplete = async (
  id: string,
  password: string,
  nickname: string,
  email: string,
  gender: string,
  schoolId: string,
  departmentId: string,
) => {
  const res = await axios.post('/members/signUp/3', {
    id,
    pwd: password,
    nickname,
    email,
    gender,
    schoolId,
    departmentId,
  });
  return res;
};
