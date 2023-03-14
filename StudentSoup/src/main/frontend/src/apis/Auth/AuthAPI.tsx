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

export const signUpIdCheck = async (memberId: string) => {
  const res = await axios.post('/members/signUp/2/id', {
    memberId,
  });
  return res;
};
