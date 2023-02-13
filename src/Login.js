import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login_Container">
      <h1>로그인</h1>
      <form action="submit" className="loginForm">
        <input type="text" className="login_input id_input"></input>
        <input type="password" className="login_input password_input"></input>
        <button type="submit" className="login_btn">
          로그인
        </button>
        <div className="id_save_box">
          <label name="id_save" className="id_save">
            아이디 저장
          </label>
          <input
            type="checkbox"
            name="id_save"
            className="id_save_checkBox"
          ></input>
        </div>
      </form>
      <div className="user_searching">
        <p className="find_id">아이디</p>
        <p className="find_password">비밀번호 찾기</p>
      </div>
      <p className="join">회원가입</p>
    </div>
  );
}

export default Login;
