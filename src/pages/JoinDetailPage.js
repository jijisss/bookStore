import { Link } from "react-router-dom";
import "../components/JoinDetailPage.css";

function JoinDetailPage() {
  return (
    <div id="JoinDetail">
      <div className="JoinDetailWrap">
        <h1 className="join">회원가입</h1>
        <form id="user-info-form" action="">
          <div className="essential-info">
            <ul className="enter-info-list">
              <li className="enter-info-item">
                <p className="">아이디</p>
                <input
                  id="enter-id-input"
                  className="user-id-input info-form-input"
                  name="id-input"
                  type="text"
                  maxLength={8}
                />
              </li>
              <li className="enter-info-item">
                <p className="">비밀번호</p>
                <input
                  id="enter-password-input"
                  className="user-password-input info-form-input"
                  name="password-input"
                  type="password"
                />
              </li>
              <li className="enter-info-item">
                <p className="">비밀번호 확인</p>
                <input
                  id="enter-password-confirm-input"
                  className="user-password-confirm-input info-form-input"
                  name="password-confirm-input"
                  type="password"
                />
              </li>
              <li className="enter-info-item">
                <p className="">이름</p>
                <input
                  id="enter-name-input"
                  className="user-name-input info-form-input"
                  name="name-input"
                  type="text"
                />
              </li>
              <li className="enter-info-item">
                <p className="">주소</p>
                <input id="address-input1" name="address-input" />
                <button className="postcode-btn">우편번호</button>
                <input id="address-input2" name="address-input" />
                <input id="address-input3" name="address-input" />
              </li>
              <li className="enter-info-item">
                <p className="">휴대전화</p>
                <select id="mobile-first-number" name="mobile-input">
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                  <option>019</option>
                </select>
                <input id="mobile-second-number" name="mobile-input" />
                <input id="mobile-last-number" name="mobile-input" />
              </li>
              <li className="enter-info-item">
                <p className="">이메일</p>
                <input
                  className="user-email-input info-form-input"
                  name="email-input"
                  type="text"
                />
              </li>
            </ul>
          </div>
          <div className="additory-info">
            <p>생년월일</p>
            <input type="checkbox"></input>
            <label>양력</label>
            <input type="checkbox"></input>
            <label>음력</label>
            <input type="date" />
          </div>
          <div className="temrs">
            <input type="checkbox" name="all-agree"></input>
            <label className="all-agree" name="all-agree">
              전체 동의
            </label>
            <div className="temrs-list-box">
              <ul className="temrs-list">
                <li className="tems-list-item">
                  <input type="checkbox" name="temrs-agree1"></input>
                  <label name="temrs-agree1" className="temrs-agree1">
                    <Link to="">
                      <span>이용약관</span> 동의
                    </Link>
                  </label>
                </li>
                <li className="tems-list-item">
                  <input type="checkbox" name="terms-agree2"></input>
                  <label name="terms-agree2" className="temrs-agree2">
                    <Link to="">개인 정보 수집 및 이용 동의</Link>
                  </label>
                </li>
                <li className="tems-list-item">
                  <input type="checkbox" name="terms-agree3"></input>
                  <label name="terms-agree3">
                    <Link to="">[선택] 만 14세 이상입니다.</Link>
                  </label>
                </li>
                <li className="tems-list-item">
                  <input type="checkbox" name="terms-agree4"></input>
                  <label name="terms-agree4">
                    <Link to="">[선택] 마케팅 활용 동의 및 광고 수신 동의</Link>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinDetailPage;
