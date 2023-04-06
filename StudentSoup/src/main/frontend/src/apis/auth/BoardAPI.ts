import axios from 'axios';

export const postBoardNotice = async () => {
  const response = await axios.post('/board/ANNOUNCEMENT');
  return response;
};

export const postBoardNoticeSearch = async (search: string) => {
  const response = await axios.post('/board/ANNOUNCEMENT?title=' + search);
  return response;
};

export const postBoardCustomerService = async () => {
  const response = await axios.post('/board/CUSTOMERSERVICE');
  return response;
};

export const postBoardServiceSearch = async (search: string) => {
  const response = await axios.post('/board/CUSTOMERSERVICE?title=' + search);
  return response;
};
