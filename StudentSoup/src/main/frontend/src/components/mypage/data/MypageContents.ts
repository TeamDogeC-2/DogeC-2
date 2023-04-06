import axios from 'axios';
import axiosInstance from '../../../apis/auth/AxiosInterceptor';

interface Board {
  boardId: number;
  title: string;
  writeDate: string;
  likedCount: number;
  viewCount: number;
}

interface Pageable {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface PreViewBoardResponse {
  content: Board[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
}
// 게시글 프리뷰
export const PreViewBoard = async (
  memberId: number,
  page: number = 1,
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
