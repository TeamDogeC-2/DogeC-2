import './findID.scss';

const FindID = () => {
  return (
    <>
      <div className="find-id-background">
        <div className="find-id-div">
          <span>아이디 찾기</span>
          <ul>
            <li>회원정보에 등록된 정보로 아이디를 찾습니다.</li>
            <li>
              회원가입시 등록하신 이메일 주소를 입력해주세요.
              <br />
              회원정보와 다를 경우 조회가 되지 않습니다.
            </li>
          </ul>
        </div>
        <form>
          <div className="find-id-email-form">
            <input placeholder="이메일 입력" required className="find-id-input-email" />
          </div>
          <div className="find-id-auth-button-div">
            <button className="find-id-auth-button">인증하기</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FindID;
