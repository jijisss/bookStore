import "./Login.css";
import googleLogo from "../images/google_logo_symbol.png";
import facebookLogo from "../images/facebook_logo_symbol.png";
import kakaoLogo from "../images/kakao_logo_symbol.jpg";
import naverLogo from "../images/naver_logo_symbol.png";

function Login() {
  return (
    <div id="Login">
      <div className="LoginWrap">
        <h1>로그인</h1>
        <form action="submit" className="loginForm">
          <input
            type="text"
            className="login_input id_input"
            placeholder="아이디"
          ></input>
          <input
            type="password"
            className="login_input password_input"
            placeholder="비밀번호"
          ></input>
          <button type="submit" className="login_btn">
            로그인
          </button>
          <div className="id_save_box">
            <input type="checkbox" name="id_save" id="id_save_check"></input>
            <label name="id_save" className="id_save">
              아이디 저장
            </label>
          </div>
        </form>
        <div className="findAccount">
          <p className="find_id">아이디 찾기</p>
          <p className="find_password">비밀번호 찾기</p>
        </div>
        <p className="createAccount">회원가입</p>
        <div className="socialAccountWrap">
          <p className="another_account_login">다른 계정으로 로그인하기</p>
          <ul className="socialAccount_list">
            <li>
              <p className="socialAccount account_google">
                <img src={googleLogo} alt="googleLogo" />
              </p>
            </li>
            <li>
              <p className="socialAccount account_kakao">
                <img src={kakaoLogo} alt="kakaoLogo" />
              </p>
            </li>
            <li>
              <p className="socialAccount account_naver">
                <img src={naverLogo} alt="naverLogo" />
              </p>
            </li>
            <li>
              <p className="socialAccount account_facebook">
                <img src={facebookLogo} alt="facebookLogo" />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
