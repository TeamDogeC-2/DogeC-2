import axios from 'axios';
import axiosInstance from '../../../apis/auth/AxiosInterceptor';
// 게시글 프리뷰
interface Board {
  boardId: number;
  title: string;
  writeDate: string;
  likedCount: number;
  viewCount: number;
}

export interface PreViewBoardResponse {
  content: Board[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
export const PreViewBoard = async (
  memberId: number,
  page: number = 0,
  size: number = 3,
): Promise<PreViewBoardResponse> => {
  const response = await axiosInstance.post(
    '/mypage/board',
    {
      memberId,
    },
    { params: { page, size } },
  );

  return response.data;
};

// 댓글 프리뷰
interface Reply {
  boardId: number;
  content: string;
  likedCount: number;
  writeDate: string;
}

export interface PreViewReplyResponse {
  content: Reply[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
export const PreViewReply = async (
  memberId: number,
  page: number = 0,
  size: number = 3,
): Promise<PreViewReplyResponse> => {
  const response = await axiosInstance.post(
    '/mypage/boardReply',
    {
      memberId,
    },
    { params: { page, size } },
  );

  return response.data;
};
