import axiosInstance from '../../../apis/auth/AxiosInterceptor';

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
export const MypageUserInfo = async () => {
  return await axiosInstance.post('/member/info');
};
