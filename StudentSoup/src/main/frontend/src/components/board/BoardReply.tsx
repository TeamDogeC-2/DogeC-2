import './boardReply.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { Desktop, Mobile } from '../../mediaQuery';
import BoardReplyFunction from './BoardReplyFunction';

interface Props {
  reply: any;
  memberId: number;
  nickname: string;
  getBoardId: number;
}

const BoardReply = ({ reply, memberId, nickname, getBoardId }: Props) => {
  return (
    <>
      <Desktop>
        {reply.map((reply: any) => (
          <>
            <div id={reply.boardReplyId} className="board-detail-bottom-reply-div">
              <BoardReplyFunction
                reply={reply}
                memberId={memberId}
                nickname={nickname}
                getBoardId={getBoardId}
              />
              <div className="board-detail-underline" />
            </div>
          </>
        ))}
      </Desktop>
      <Mobile>
        {reply.map((reply: any) => (
          <>
            <div id={reply.boardReplyId} className="board-detail-mobile-bottom-reply-div">
              <div className="board-detail-mobile-bottom-reply">
                <div className="board-detail-mobile-bottom-reply-left">
                  <div className="board-detail-mobile-bottom-reply-left-top">
                    <FontAwesomeIcon
                      icon={faArrowTurnUp}
                      className="board-detail-mobile-reply-icon"
                    />
                    <img
                      src={
                        reply.memberProfileImageName
                          ? `/image/${reply.memberProfileImageName}`
                          : Circle_human
                      }
                      alt=""
                    />
                    <span>
                      {reply.nickname} <p>{reply.writeDate}</p>
                    </span>
                  </div>
                  <p className="board-detail-mobile-bottom-reply-content">{reply.content}</p>
                </div>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="board-detail-mobile-reply-function-icon"
                />
              </div>
              <div className="board-detail-mobile-bottom-reply-right">
                <div className="board-detail-mobile-bottom-reply-right-heart">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="board-detail-mobile-reply-function-heart-icon"
                  />
                  <p>{reply.likeCount}</p>
                </div>
              </div>
              <div className="board-detail-mobile-underline" />
            </div>
          </>
        ))}
      </Mobile>
    </>
  );
};

export default BoardReply;
