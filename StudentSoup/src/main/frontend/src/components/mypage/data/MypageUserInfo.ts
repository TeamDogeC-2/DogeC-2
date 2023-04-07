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

// 마이페이지 회원 정보 수정시 아이디 비밀번호 검증

export const MypageEditProfile = async (memberId: number, id: string, pwd: string) => {
  const response = await axiosInstance.post(`/members/edit/${memberId}/validation`, {
    memberId,
    id,
    pwd,
  });
  return response.data;
};

// 회원 닉네임 수정

export const EditNickname = async (
  memberId: number,
  schoolId: number,
  departmentId: number,
  id: string,
  pwd: string | null,
  nickname: string,
  email: string,
) => {
  const response = await axiosInstance.post(`/members/edit/${memberId}`, {
    memberId,
    schoolId,
    departmentId,
    id,
    pwd: null,
    nickname,
    email,
  });
  return response.data;
};
