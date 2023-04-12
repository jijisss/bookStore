import "../components/LoginPage.css";
import { Link } from "react-router-dom";
import googleLogo from "../images/google_logo.png";
import facebookLogo from "../images/facebook_logo.png";
import kakaoLogo from "../images/kakao_logo.jpg";
import naverLogo from "../images/naver_logo.png";
import { useState } from "react";

function Login() {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    console.log(JSON.stringify(values));

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(values),
    }).then((response) => console.log(response));
    // .then((response) => response.text())
    // .then((response) => console.log(response));
  };

  return (
    <>
      <div id="Login">
        <div className="LoginWrap">
          <h1 className="login">로그인</h1>
          <form className="loginForm">
            <input
              type="text"
              className="login_input id_input"
              placeholder="아이디"
              name="memberId"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              className="login_input password_input"
              placeholder="비밀번호"
              name="password"
              onChange={handleChange}
            ></input>
            <button onClick={handleSubmit} className="login_btn">
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
            <Link to="/find-id-password" className="find_id">
              아이디 찾기
            </Link>
            <Link to="/find-id-password" className="find_password">
              비밀번호 찾기
            </Link>
          </div>
          <Link to="/join" className="createAccount">
            회원가입
          </Link>
          <div className="socialAccountWrap">
            <p className="another_account_login">다른 계정으로 로그인하기</p>
            <ul className="socialAccount_list">
              <li>
                <Link to="">
                  <p className="socialAccount account_google">
                    <img src={googleLogo} alt="googleLogo" />
                  </p>
                </Link>
              </li>
              <li>
                <Link to="">
                  <p className="socialAccount account_kakao">
                    <img src={kakaoLogo} alt="kakaoLogo" />
                  </p>
                </Link>
              </li>
              <li>
                <Link to="">
                  <p className="socialAccount account_naver">
                    <img src={naverLogo} alt="naverLogo" />
                  </p>
                </Link>
              </li>
              <li>
                <Link to="">
                  <p className="socialAccount account_facebook">
                    <img src={facebookLogo} alt="facebookLogo" />
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
