const Footer = () => {
  return (
    <div className="relative h-[277px] pt-[59px] pl-[155px] space-y-[19px] font-[20px] text-[#DBD6D6] bg-[#565252]">
      <div className="space-x-[14px]">
        <span>개인정보처리 방침</span>
        <span>|</span>
        <span>이용약관</span>
        <span>|</span>
        <span>위치기반 서비스 이용약관</span>
        <span>|</span>
        <span>이용약관</span>
        <span>|</span>
        <span>공지사항</span>
      </div>
      <div className="space-x-[31px]">
        <span>(주)스푸</span>
        <span>대표: 문종운</span>
        <span>소재지: 인천광역시 미추홀구 주안</span>
      </div>
      <div className=""> 이메일 문의: answkdud1234@sfoo.com </div>
      <div> 전화 문의: 031-123-4567 </div>
      <div className="absolute bottom-[40px] right-[91px] space-x-[14px]">
        <span className="font-bold">한국어</span>
        <span>|</span>
        <span>English</span>
        <span>|</span>
        <span>中國語</span>
      </div>
    </div>
  );
};

export default Footer;
