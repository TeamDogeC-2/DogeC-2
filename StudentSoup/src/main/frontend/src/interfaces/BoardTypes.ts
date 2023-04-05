export interface NoticePostsDataType {
  authentication: string;
  boardCategory: string;
  boardId: number;
  likedCount: number;
  nickname: string;
  reviewCount: string;
  tag: string;
  title: string;
  view: number;
  writeDate: string | Date;
}

export interface PostSearchPropsType {
  items: NoticePostsDataType[];
  setItems: React.Dispatch<React.SetStateAction<NoticePostsDataType[]>>;
  setPostPerPage: React.Dispatch<React.SetStateAction<number>>;
}
