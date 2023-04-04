import MainNavbar from '../common/MainNavbar';
import './boardWrite.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const BoardWrite = () => {
  return (
    <div>
      <MainNavbar />
      <div className="board-write-main">
        <div className="board-write-top-div">
          <div className="board-write-top-left">
            <span>게시글 쓰기</span>
          </div>
          <div className="board-write-top-right">
            <p>전체/학과</p>
            <select defaultValue="학과이름" className="board-write-depart-select">
              <option value="학과이름" disabled>
                학과이름
              </option>
            </select>
            <p>게시판</p>
            <select defaultValue="게시판이름" className="board-write-category-select">
              <option value="게시판이름" disabled>
                게시판이름
              </option>
            </select>
          </div>
        </div>
        <div className="board-write-middle-div">
          <input type="text" placeholder="제목(2~50자)" className="board-write-title-input" />
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
              <span className="board-write-middle-notice-click">이용규칙 더보러가기</span>
            </div>
          </div>
          <textarea
            maxLength={1000}
            placeholder="내용(5~1000자)"
            className="board-write-textarea"
          ></textarea>
          <div className="board-write-add-img-div">
            <div className="board-write-add-img-div-top">
              <span>사진첨부</span>
              <button>사진첨부</button>
              <p>0/5</p>
              <p>사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부 가능합니다.</p>
            </div>
            <div className="board-write-add-img-div-bottom">
              {/* <div className="board-write-add-img-div">
                <img src={Circle_human} alt="" />
                <FontAwesomeIcon icon={faXmark} className="board-write-delete-button" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="board-write-bottom-button-div">
          <div className="board-write-bottom-button">
            <button className="board-write-cancel-button">취소하기</button>
            <button className="board-write-submit-button">작성하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
