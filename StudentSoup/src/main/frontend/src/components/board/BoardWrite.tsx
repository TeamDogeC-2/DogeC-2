import MainNavbar from '../common/MainNavbar';
import './boardWrite.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DesktopHeader, Mobile, MobileHeader } from '../../mediaQuery';
import ReactQuill from 'react-quill';
import type Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import {
  WriteDepartmentData,
  PostRegistration,
  UploadImgURL,
  GetUploadImgURL,
} from './data/BoardWriteData';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Category {
  categoryKey: string;
  categoryValue: string;
}

interface Department {
  departmentId: number;
  departmentName: string;
}
const BoardWrite = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<any>('');
  const [title, setTitle] = useState('');
  const [currentLength, setCurrentLength] = useState<number>(0);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<number | null>(null);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('');
  const location = useLocation();
  const userInformation = { ...location.state };
  const maxLength = 600;

  useEffect(() => {
    WriteDepartmentData(userInformation.memberId, userInformation.schoolId).then(res => {
      setDepartments(res.departments);
      setCategories(res.category);
    });
  }, [userInformation.memberId, userInformation.schoolId]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setTitle(inputValue);
  };
  const handleQuillChange = (value: any) => {
    const maxLength = 600;
    const strippedValue = value.replace(/<(?:.|\n)*?>/gm, '');
    const newLength = strippedValue.length;

    if (newLength <= maxLength) {
      setContent(value);
      setCurrentLength(newLength);
    } else {
      alert(`최대 작성 가능한 글자수는 ${maxLength}자 입니다.`);
      const newContent = strippedValue.substring(0, maxLength);
      setContent(newContent);
      setCurrentLength(maxLength - 1);
    }
  };
  const handleClickSubmit = () => {
    if (title.length < 2 || title.length > 50) {
      alert('제목은 2~50자입니다.');
      return;
    }
    if (!selectedCategoryKey) {
      alert('게시판을 선택해주세요.');
      return;
    }
    const strippedContent = content.replace(/<(?:.|\n)*?>/gm, '').trim();
    if (!strippedContent || strippedContent.length < 5) {
      alert('본문은 최소 5자 이상이어야 합니다.');
      return;
    }
    PostRegistration(
      userInformation.memberId,
      title,
      selectedCategoryKey,
      content,
      selectedDepartmentId,
      undefined,
    ).then(res => {
      alert('성공적으로 작성하였습니다.');
      navigate('/board', { state: userInformation });
    });
  };
  async function imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        if (file.size > 20 * 1024 * 1024) {
          alert('이미지 파일은 최대 20MB까지 첨부할 수 있습니다.');
          return;
        }
        if (!/^(image\/jpeg|image\/png|image\/gif)$/.test(file.type)) {
          alert('지원되는 이미지 파일 형식은 JPG, PNG, GIF입니다.');
          return;
        }

        const memberId = userInformation.memberId;
        try {
          const fileName = await UploadImgURL(memberId, file).then(() => {
            GetUploadImgURL(userInformation.memberId).then(res => {
              console.log(res);
              const url = `/image/${res}`;
              const range = quillRef.current?.getEditor().getSelection()?.index ?? 0;
              quillRef.current?.getEditor().insertEmbed(range, 'image', url, 'user');
            });
          });
        } catch (error) {
          console.error('Image upload failed:', error);
        }
      }
    };
  }

  const quillRef = useRef<ReactQuill>(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  console.log(content);

  return (
    <>
      <DesktopHeader>
        <div>
          <MainNavbar />
          <div className="board-write-main">
            <div className="board-write-top-div">
              <div className="board-write-top-left">
                <span>게시글 쓰기</span>
              </div>
              <div className="board-write-top-right">
                <p>전체/학과</p>
                <select
                  defaultValue=""
                  className="board-write-depart-select"
                  onChange={e => setSelectedDepartmentId(Number(e.target.value) || null)}
                >
                  <option value="">{userInformation.schoolName}</option>
                  {departments.map(department => (
                    <option key={department.departmentId} value={department.departmentId}>
                      {department.departmentName}
                    </option>
                  ))}
                </select>
                <p>게시판</p>
                <select
                  defaultValue=""
                  className="board-write-category-select"
                  onChange={e => setSelectedCategoryKey(e.target.value)}
                >
                  <option value="" disabled>
                    선택
                  </option>
                  {categories.map(category => (
                    <option key={category.categoryKey} value={category.categoryKey}>
                      {category.categoryValue}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="board-write-middle-div">
              <input
                type="text"
                placeholder="제목(2~50자)"
                className="board-write-title-input"
                value={title}
                onChange={handleTitleChange}
              />
              <div className="board-write-middle-notice-div">
                <div className="board-write-middle-notice">
                  <span className="board-write-middle-notice-span">
                    글 작성하기 이전, 상단에 있는 카테고리를 클릭하여
                    <span className="board-write-middle-notice-span-offset">
                      주제에 맞는 카테고리를 선택하여 게시글을 작성
                    </span>
                    해주시길 바랍니다.
                  </span>
                  <span className="board-write-middle-notice-span">
                    건강한 게시판 운영을 위해
                    <span className="board-write-middle-notice-span-offset">
                      불법사진, 혹은 상대를 향한 명예훼손 혹은 폭언등에 대한 작성은 불가 및 이용이
                      제한됩니다.
                    </span>
                  </span>
                  <div className="board-write-middle-notice-click">
                    <span>이용규칙 더보러가기</span>
                  </div>
                </div>
              </div>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={handleQuillChange}
                modules={modules}
                placeholder="내용(5~1000자)"
                className="board-write-textarea"
                ref={quillRef}
              />
              <div className="character-count">
                {currentLength}/{maxLength} 글자
              </div>
            </div>
            <div className="board-write-add-img-div">
              <div className="board-write-add-img-div-top">
                <p>사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 5장까지 첨부 가능합니다.</p>
              </div>
            </div>
            <div className="board-write-bottom-button-div">
              <div className="board-write-bottom-button">
                <button className="board-write-cancel-button">취소하기</button>
                <button onClick={handleClickSubmit} className="board-write-submit-button">
                  작성하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div>
          <MainNavbar />
          <div className="board-write-tablet-main">
            <div className="board-write-tablet-top-div">
              <div className="board-write-tablet-top">
                <div className="board-write-tablet-top-left">
                  <span>게시글 쓰기</span>
                </div>
                <div className="board-write-tablet-top-right">
                  <p>전체/학과</p>
                  <select defaultValue="학과이름" className="board-write-tablet-depart-select">
                    <option value="학과이름" disabled>
                      학과이름
                    </option>
                  </select>
                  <p>게시판</p>
                  <select defaultValue="게시판이름" className="board-write-tablet-category-select">
                    <option value="게시판이름" disabled>
                      게시판이름
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="board-write-tablet-middle-div">
              <input
                type="text"
                placeholder="제목(2~50자)"
                className="board-write-tablet-title-input"
              />
              <div className="board-write-tablet-middle-notice-div">
                <div className="board-write-tablet-middle-notice">
                  <span className="board-write-tablet-middle-notice-span">
                    글 작성하기 이전, 상단에 있는 카테고리를 클릭하여
                    <span className="board-write-tablet-middle-notice-span-offset">
                      주제에 맞는 카테고리를 선택하여 게시글을 작성
                    </span>
                    해주시길 바랍니다.
                  </span>
                  <span className="board-write-tablet-middle-notice-span">
                    건강한 게시판 운영을 위해
                    <span className="board-write-tablet-middle-notice-span-offset">
                      불법사진, 혹은 상대를 향한 명예훼손 혹은 폭언등에 대한 작성은 불가 및 이용이
                      제한됩니다.
                    </span>
                  </span>
                  <div className="board-write-tablet-middle-notice-click">
                    <span>이용규칙 더보러가기</span>
                  </div>
                </div>
              </div>
              <textarea
                maxLength={1000}
                placeholder="내용(5~1000자)"
                className="board-write-tablet-textarea"
              ></textarea>
              <div className="board-write-tablet-add-img-div">
                <div className="board-write-tablet-add-img-div-top">
                  <span>사진첨부</span>
                  <button>사진첨부</button>
                  <p>0/5</p>
                  <p>사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부 가능합니다.</p>
                </div>
                <div className="board-write-tablet-add-img-div-bottom">
                  {/* <div className="board-write-tablet-add-img-div">
                <img src={Circle_human} alt="" />
                <FontAwesomeIcon icon={faXmark} className="board-write-tablet-delete-button" />
              </div> */}
                </div>
              </div>
            </div>
            <div className="board-write-tablet-bottom-button-div">
              <div className="board-write-tablet-bottom-button">
                <button className="board-write-tablet-cancel-button">취소하기</button>
                <button className="board-write-tablet-submit-button">작성하기</button>
              </div>
            </div>
          </div>
        </div>
      </MobileHeader>
      <Mobile>
        <div>
          <MainNavbar />
          <div className="board-write-mobile-main">
            <div className="board-write-mobile-top-div">
              <div className="board-write-mobile-top">
                <div className="board-write-mobile-top-left">
                  <span>게시글 쓰기</span>
                </div>
                <div className="board-write-mobile-top-right">
                  <div className="board-write-mobile-top-right-select-div">
                    <p>전체/학과</p>
                    <select defaultValue="학과이름" className="board-write-mobile-depart-select">
                      <option value="학과이름" disabled>
                        학과이름
                      </option>
                    </select>
                  </div>
                  <div className="board-write-mobile-top-right-select-div">
                    <p>게시판</p>
                    <select
                      defaultValue="게시판이름"
                      className="board-write-mobile-category-select"
                    >
                      <option value="게시판이름" disabled>
                        게시판이름
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="board-write-mobile-middle-div">
              <input
                type="text"
                placeholder="제목(2~50자)"
                className="board-write-mobile-title-input"
              />
              <div className="board-write-mobile-middle-notice-div">
                <div className="board-write-mobile-middle-notice">
                  <span className="board-write-mobile-middle-notice-span">
                    글 작성하기 이전, 상단에 있는 카테고리를 클릭하여
                    <span className="board-write-mobile-middle-notice-span-offset">
                      주제에 맞는 카테고리를 선택하여 게시글을 작성
                    </span>
                    해주시길 바랍니다.
                  </span>
                  <span className="board-write-mobile-middle-notice-span">
                    건강한 게시판 운영을 위해
                    <span className="board-write-mobile-middle-notice-span-offset">
                      불법사진, 혹은 상대를 향한 명예훼손 혹은 폭언등에 대한 작성은 불가 및 이용이
                      제한됩니다.
                    </span>
                  </span>
                  <div className="board-write-mobile-middle-notice-click">
                    <span>이용규칙 더보러가기</span>
                  </div>
                </div>
              </div>
              <textarea
                maxLength={1000}
                placeholder="내용(5~1000자)"
                className="board-write-mobile-textarea"
              ></textarea>
              <div className="board-write-mobile-add-img-div">
                <div className="board-write-mobile-add-img-div-top">
                  <div className="board-write-mobile-add-img-div-top-top">
                    <span>사진첨부</span>
                    <button>사진첨부</button>
                    <p>0/5</p>
                  </div>
                  <div className="board-write-mobile-add-img-div-top-bottom">
                    <p>사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부 가능합니다.</p>
                  </div>
                </div>
                <div className="board-write-mobile-add-img-div-bottom">
                  <div className="board-write-mobile-add-img-div">
                    <img src={Circle_human} alt="" />
                    <FontAwesomeIcon icon={faXmark} className="board-write-mobile-delete-button" />
                  </div>
                  <div className="board-write-mobile-add-img-div">
                    <img src={Circle_human} alt="" />
                    <FontAwesomeIcon icon={faXmark} className="board-write-mobile-delete-button" />
                  </div>
                  <div className="board-write-mobile-add-img-div">
                    <img src={Circle_human} alt="" />
                    <FontAwesomeIcon icon={faXmark} className="board-write-mobile-delete-button" />
                  </div>
                  <div className="board-write-mobile-add-img-div">
                    <img src={Circle_human} alt="" />
                    <FontAwesomeIcon icon={faXmark} className="board-write-mobile-delete-button" />
                  </div>
                  <div className="board-write-mobile-add-img-div">
                    <img src={Circle_human} alt="" />
                    <FontAwesomeIcon icon={faXmark} className="board-write-mobile-delete-button" />
                  </div>
                </div>
              </div>
            </div>
            <div className="board-write-mobile-bottom-button-div">
              <div className="board-write-mobile-bottom-button">
                <button className="board-write-mobile-cancel-button">취소하기</button>
                <button className="board-write-mobile-submit-button">작성하기</button>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

// async function imageHandler() {
//   const input = document.createElement('input');
//   input.setAttribute('type', 'file');
//   input.setAttribute('accept', 'image/*');
//   input.click();

//   input.onchange = async () => {
//     const file = input.files ? input.files[0] : null;
//     if (file) {
//       const memberId = userInformation.memberId; // 여기서 memberId를 적절한 값으로 설정하세요.
//       try {
//         await UploadImgURL(memberId, file).then(res => console.log(res));
//       } catch (error) {
//         console.error('Image upload failed:', error);
//       }
//     }
//   };
// }

// BoardWrite.modules = {
//   toolbar: {
//     container: [
//       ['bold', 'italic', 'underline', 'strike'],
//       [{ list: 'ordered' }, { list: 'bullet' }],
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       [{ color: [] }, { background: [] }],
//       ['link', 'image'],
//       ['clean'],
//     ],
//     handlers: {
//       image: imageHandler,
//     },
//   },
// };

BoardWrite.formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'indent',
  'header',
  'color',
  'background',
  'link',
  'image',
];
export default BoardWrite;
