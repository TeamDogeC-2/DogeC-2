import axios from 'axios';

export const postBoardCategory = async (category: string) => {
  const response = await axios.post(`/board/${category}`);
  return response;
};

export const postBoardCategorySearch = async (category: string, search: string) => {
  const response = await axios.post(`/board/${category}?title=${search}`);
  return response;
};
