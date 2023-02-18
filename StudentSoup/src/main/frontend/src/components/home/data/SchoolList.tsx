import axios from 'axios';

export interface SchoolListType {
  schoolId: number;
  schoolName: string;
}

export const SchoolList = async () => {
  return await axios.get('/home');
};
