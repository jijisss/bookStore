import { React, Link } from "react";
import "./JoinMembership.css";

function JoinMembership() {
  return (
    <div id="JoinMembership">
      <div className="JoinMembershipWrap">
        <h1>회원가입</h1>
        <p className="kakaoLogin">
          아이디, 비밀번호, 이름, 휴대번호 입력하기 귀찮으시죠? <br></br>
          카카오로 1초 만에 회원가입 하세요.
        </p>
        <button className="kakaoLogin_btn">카카오 1초 회원가입</button>
        <p className="memberJoin">일반 회원가입</p>
      </div>
    </div>
  );
}

export default JoinMembership;
