import axiosInstance from '../../../apis/utils/AxiosInterceptor';

export interface UserInfoType {
  memberId: number;
  schoolId: number;
  schoolName: string;
  departmentId: number;
  departmentName: string;
  fileName: string;
  id: string;
  nickname: string;
  email: string;
  registrationDate: string;
  memberClassification: string;
}
export const RestaurantUserInfo = async () => {
  return await axiosInstance.post('/member/info');
};
