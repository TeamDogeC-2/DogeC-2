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

// 회원 닉네임 및 비밀번호 학교 및 전공 이메일 수정 통합

export const EditNickname = async (
  memberId: number,
  schoolId: number,
  departmentId: number,
  id: string,
  nickname: string,
  email: string,
  pwd?: string,
) => {
  const response = await axiosInstance.post(`/members/edit/${memberId}`, {
    memberId,
    schoolId,
    departmentId,
    id,
    nickname,
    email,
    pwd,
  });
  return response.data;
};

// 학교키값, 학교이름 렌더링
export const GetSchoolList = async () => {
  const response = await axiosInstance.get('/members/signUp/3');
  return response.data;
};

// 학과 렌더링
export const GetMajorList = async (schoolId: number) => {
  const response = await axiosInstance.post(`/members/signUp/3/${schoolId}`, {
    schoolId,
  });
  return response.data;
};

// 이메일 인증번호 전송

export const SendMail = async (email: string) => {
  const response = await axiosInstance.post('/members/signUp/3/mail', {
    email,
  });
  return response.data;
};

// 이메일 인증번호 확인

export const CheckMail = async (email: string, authenticationNumber: number) => {
  const response = await axiosInstance.post('/members/signUp/3/checkMail', {
    email,
    authenticationNumber,
  });
  return response.data;
};
