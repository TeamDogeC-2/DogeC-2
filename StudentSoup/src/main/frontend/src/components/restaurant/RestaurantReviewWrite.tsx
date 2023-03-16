import './restaurantReviewWrite.scss';
import review_basic_color from '../../img/review_basic_color.svg';
import camera from '../../img/camera.svg';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const RestaurantReviewWrite = () => {
  return (
    <div className="restaurant-detail-review-write-div">
      <div className="restaurant-detail-review-write-top">
        <div className="restaurant-detail-review-write-text">
          <img src={review_basic_color} alt="" />
          <p>리뷰 작성하기</p>
        </div>
        <div className="restaurant-detail-review-write-caution">
          ※홍보 및 비방 등 부적절한 평가는 평점 산정에서 제외될 수 있습니다.
        </div>
      </div>
      <div className="restaurant-detail-review-write-middle">
        <span>맛있게 드셨나요?</span>
        <div>별점 들어갈 곳</div>
        <p>고객님의 리뷰가 다른 고객드에게 도움이 될 수 있어요!</p>
      </div>
      <div className="restaurant-detail-review-write-middle-textarea-div">
        <textarea
          className="restaurant-detail-review-write-middle-textarea"
          placeholder="업주와 다른 사용자들이 상처받지 않도록 좋은 표현과 주문하신 메뉴 및 매장 서비스에 대해서 작성해주세요 :)"
          maxLength={399}
        ></textarea>
        <div className="restaurant-detail-review-write-middle-text-count">0/400 (최소 5글자)</div>
      </div>
      <div className="restaurant-detail-review-write-middle-img-div">
        <div className="restaurant-detail-review-write-middle-add-img">
          <div className="restaurant-detail-review-write-middle-img-input-div">
            <img src={camera} alt="" />
            <span>사진 첨부</span>
            <p>0/4</p>
            <input
              type="file"
              multiple
              accept=".png,.jpg,.gif,.jpeg,.bmp,.svg"
              className="restaurant-detail-review-write-middle-img-input"
            />
          </div>
        </div>
        <div className="restaurant-detail-review-write-middle-add-img-item-div">
          <div className="restaurant-detail-review-write-middle-add-img-item">
            <img src={Circle_human} alt="" />
            <FontAwesomeIcon
              icon={faXmark}
              className="restaurant-detail-review-write-middle-delete-button"
            />
          </div>
        </div>
      </div>
      <span className="restaurant-detail-review-write-bottom-text">
        사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부 가능합니다.
      </span>
      <button className="restaurant-detail-review-write-bottom-submit-button">등록하기</button>
    </div>
  );
};

export default RestaurantReviewWrite;
