import { useHistory } from "react-router-dom";
import Reddit from "../../img/Reddit.svg";

const LoginNavbar = () => {
    const history = useHistory();
  
    return (
      <div className="w-full h-[88px] flex justify-between items-center sticky border-b border-[#FF4D14]">
        <div className="w-[162px] h-[80px] ml-6 flex items-center">
            <img src={Reddit} alt="" />
        </div>
        <div className="mr-[24px] flex items-center">
          <button
          onClick={() => {
            console.log("click FAQ");
          }}
            className="w-[65px] h-[60px] mr-[21px] flex justify-center items-center text-[25px]">
              FAQ
          </button>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="w-[93px] h-[40px] border-[1.2px] border-[#FF4D14] rounded-[41px] cursor-pointer text-[20px] text-[#FF4D14] bg-white"
          >
            로그인
          </button>
        </div>
      </div>
    );
  };
  
  export default LoginNavbar;