export interface BoardDataType {
  [key: string]: string | number | undefined;
  authentication: string;
  boardCategory: string;
  boardId: number;
  likedCount: number;
  nickname: string;
  reviewCount: string;
  tag: string;
  title: string;
  view: number;
  writeDate: string;
}

export interface PostSearchPropsType {
  pageTitle: string;
  setItems: React.Dispatch<React.SetStateAction<BoardDataType[]>>;
  setPostPerPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface TableProps {
  headings: string[];
  data: BoardDataType[];
}

export interface TableHeadTextType {
  [key: string]: string | undefined;
  title: string;
  authentication?: string;
  writeDate: string;
  view?: string;
}

export interface NoticeAndServiceProps {
  items: BoardDataType[];
  setItems: React.Dispatch<React.SetStateAction<BoardDataType[]>>;
  currentPosts: BoardDataType[];
  currentPage: number;
  count: number;
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
  postPerPage: number;
  setPostPerPage: React.Dispatch<React.SetStateAction<number>>;
  pageTitle: string;
  tableHeader: string[];
}
