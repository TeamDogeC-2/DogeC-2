const FindPw = () => {
  return (
    <div className="break-keep">
      <div className="w-full px-[22px] py-[18px] flex flex-col space-y-[12px] break-keep text-[#939393] bg-[#F6F6F6]">
        <p className="text-[#484848]">비밀번호 찾기</p>
        <ul className="ml-[10px] space-y-[12px] list-disc list-outside break-keep marker:text-[#939393] text-[#939393]">
          <li>회원정보에 등록된 정보로 비밀번호를 찾습니다.</li>
          <li>회원가입시 등록하신 이름, 이메일 주소를 입력해주세요.<br/>회원정보와 다를 경우 조회가 되지 않습니다.</li>
          <li>비밀번호 재 설정을 원하시는 경우 [내 프로필 편집- 내 프로필 설정]에 들어가셔서 설정 하시길 바랍니다.</li>
        </ul>
      </div>
      <input placeholder="아이디 입력" className="w-full h-[54px] px-[23px] py-[16px] mt-[18px] border border-[#BCBCBC] outline-none"/>
      <div className="mt-[9px] flex space-x-[25px]">
        <input placeholder="이메일 입력" className="w-[50%] h-[54px] px-[23px] py-[16px] text-[#939393] border border-[#BCBCBC] outline-none"/>
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
export default FindPw;
