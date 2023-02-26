import { Link } from "react-router-dom";
import "../components/JoinPage.css";

import googleLogo from "../images/google_logo.png";
import facebookLogo from "../images/facebook_logo.png";
import kakaoLogo from "../images/kakao_logo.jpg";
import naverLogo from "../images/naver_logo.png";

function Join() {
  return (
    <div id="Join">
      <div className="JoinWrap">
        <h1 className="join">회원가입</h1>
        <Link to="/join-detail" className="jogin-btn">
          회원가입
        </Link>
        <p className="or">또는</p>
        <div className="simple-join">
          <p>간편 가입하기</p>
          <ul className="simple-join-list">
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
  );
}

export default Join;
