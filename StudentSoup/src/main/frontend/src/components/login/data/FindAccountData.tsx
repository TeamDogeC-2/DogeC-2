import axios from 'axios';

export const FindId = async (email: string) => {
  return await axios.post('/members/find/id', {
    email,
  });
};
