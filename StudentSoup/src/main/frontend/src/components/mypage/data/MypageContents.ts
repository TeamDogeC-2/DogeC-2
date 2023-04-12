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

// 리뷰 프리뷰

interface Review {
  restaurantReviewId: number;
  content: string;
  starLiked: number;
  likedCount: number;
  writeDate: string;
  imageName: string;
  restaurantId: number;
}

export interface PreviewReviewResponse {
  content: Review[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export const PreViewReview = async (
  memberId: number,
  filter: string = '',
  page: number = 0,
  size: number = 3,
): Promise<PreviewReviewResponse> => {
  const response = await axiosInstance.post(
    '/mypage/restaurantReview',
    {
      memberId,
    },
    { params: { filter, page, size } },
  );

  return response.data;
};

// 게시글/댓글 작성 수
export interface DetailCountResponse {
  boardReplyWriteCount: number;
  boardWriteCount: number;
}

export const DetailCount = async (memberId: number): Promise<DetailCountResponse> => {
  const response = await axiosInstance.post('/mypage/detail', { memberId });
  return response.data;
};

// 리뷰 수정 업데이트

export const ReviewEdit = async (
  memberId: number,
  restaurantReviewId: number,
  content: string,
  starLiked: number,
) => {
  const response = await axiosInstance.patch(
    `/restaurantReview/${memberId}/${restaurantReviewId}`,
    { content, starLiked },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};

// 시간표 등록
export const AddSchedule = async (
  memberId: number,
  dayOfWeek: string,
  startTime: number,
  endTime: number,
  color: string,
  subject: string,
) => {
  const response = await axiosInstance.put(`/schedule/${memberId}`, {
    dayOfWeek,
    startTime,
    endTime,
    color,
    subject,
  });
  return response.data.scheduleId; // 스케줄 아이디만 반환
};

// 시간표 조회
export const ViewSchedule = async (memberId: number) => {
  const response = await axiosInstance.post(`/schedule/${memberId}`);
  return response.data;
};

// 시간표 수정
export const EditSchedule = async (
  memberId: number,
  scheduleId: number,
  dayOfWeek: string,
  startTime: number,
  endTime: number,
  color: string,
  subject: string,
) => {
  const response = await axiosInstance.patch(`/schedule/${memberId}`, {
    scheduleId,
    dayOfWeek,
    startTime,
    endTime,
    color,
    subject,
  });
  return response.data;
};

// 시간표 삭제

export const DeleteSchedule = async (scheduleId: number) => {
  const response = await axiosInstance.delete(`/schedule/${scheduleId}`);
  return response.data;
};
