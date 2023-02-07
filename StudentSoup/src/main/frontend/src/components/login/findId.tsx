import Arrow from '../../img/board/icon_selectbox_arrow.png';

const FindId = () => {
  return (
    <div className="w-full">
      <div className="w-full px-[22px] py-[18px] flex flex-col  bg-[#F6F6F6]">
        <p className="mb-[12px] text-[#484848]">아이디 찾기</p>
        <ul className="ml-[10px] space-y-[12px] list-disc list-outside break-keep marker:text-[#939393] text-[#939393]">
          <li>회원정보에 등록된 정보로 아이디를 찾습니다.</li>
          <li>회원가입시 등록하신 이메일 주소를 입력해주세요.<br/>회원정보와 다를 경우 조회가 되지 않습니다.</li>
        </ul>
      </div>
      <div className="mt-[18px] flex space-x-[25px]">
        <input placeholder="이메일 입력"
          className="w-[50%] h-[54px] px-[23px] py-[16px] text-[#939393] border border-[#BCBCBC] outline-none"/>
        <select className="w-[50%] px-[23px] py-[16px] text-[#939393] border border-[#BCBCBC] outline-none">
          <option selected></option>
          <option>@ gmail.com</option>
          <option>@ naver.com</option>
          <option>@ hanmail.net</option>
        </select>
      </div>
    </div>
  );
}
export default FindId;
