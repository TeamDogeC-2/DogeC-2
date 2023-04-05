import axios from 'axios';

export const postBoardNotice = async () => {
  const response = await axios.post('/board/ANNOUNCEMENT');
  return response;
};

export const postBoardNoticeSearch = async (search: string) => {
  const response = await axios.post('/board/ANNOUNCEMENT?title=' + search);
  return response;
};
