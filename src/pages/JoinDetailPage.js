import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import "../components/JoinDetailPage.css";
import Address from "../components/Address.js";
import profileSettingImage from "../images/btn_profile_setting@2x.png";

function JoinDetailPage({}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addressData, setAddressData] = useState({});

  const setAddressDatas = (text) => {
    setAddressData(text);
  };

  return (
    <div id="JoinDetail">
      <div className="JoinDetailWrap">
        <h1 className="join">회원가입</h1>
        <form id="user-info-form" action="">
          <div className="essential-info">
            <ul className="enter-info-list">
              <li className="enter-info-item">
                <p className="input-name">프로필 사진</p>
                <input
                  id="enter-profileImage-input"
                  className="user-id-input info-form-input"
                  name="profile"
                  type="text"
                  maxLength={8}
                  required
                />
                <span className="profile-setting-ic">
                  <img src={profileSettingImage} />
                </span>
              </li>
              <li className="enter-info-item">
                <p className="input-name">닉네임</p>
                <input
                  id="enter-id-input"
                  className="user-nickName-input info-form-input"
                  name="nickName"
                  type="text"
                  maxLength={8}
                  required
                />
              </li>
              <li className="enter-info-item">
                <p className="input-name">아이디</p>
                <input
                  id="enterIdInput"
                  className="user-id-input info-form-input"
                  name="id"
                  type="text"
                  maxLength={8}
                  required
                />
              </li>
              <li className="enter-info-item">
                <p className="input-name">비밀번호</p>
                <input
                  id="enterPasswordInput"
                  className="user-password-input info-form-input"
                  name="password"
                  type="password"
                  required
                />
              </li>
              <li className="enter-info-item">
                <p className="input-name">비밀번호 확인</p>
                <input
                  id="enterPasswordConfirmInput"
                  className="user-password-confirm-input info-form-input"
                  name="passwordConfirm"
                  type="password"
                  required
                />
              </li>
              <li className="enter-info-item">
                <p className="input-name">이름</p>
                <input
                  id="enterNameInput"
                  className="user-name-input info-form-input"
                  name="name"
                  type="text"
                />
              </li>
              <li className="enter-info-item" id="gender-info-item">
                <p className="input-name">성별</p>
                <fieldset>
                  <label id="genderLabel">
                    <input
                      type="radio"
                      name="gender"
                      id="genderBtn"
                      value="WOMAN"
                      checked
                    />
                    <span>남성</span>
                  </label>
                  <label id="genderLabel">
                    <input
                      type="radio"
                      name="gender"
                      id="genderBtn"
                      value="MAN"
                    />
                    <span>여성</span>
                  </label>
                </fieldset>
              </li>
              <li className="enter-info-item mobile-info-item">
                <p className="input-name">휴대전화</p>
                <select
                  className="info-form-input first-num-input"
                  name="mobileNumber"
                >
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                  <option>019</option>
                </select>
                <input className="info-form-input" name="mobileNumber" />
                <input className="info-form-input" name="mobileNumber" />
              </li>
              {/* 주소 입력창 */}
              <li className="address-input">
                <input
                  type="text"
                  id="sample4_postcode"
                  name="zipCode"
                  className="user-address-input info-form-input"
                  defaultValue={addressData.zipCode}
                  placeholder="우편번호"
                  onClick={() => setModalIsOpen(true)}
                />
                <input
                  type="button"
                  name="searchZipCode"
                  className="user-address-input info-form-input ads-btn"
                  defaultValue={addressData.searchZipCode}
                  value="우편번호 찾기"
                  onClick={() => setModalIsOpen(true)}
                />
                <br></br>
                <input
                  type="text"
                  id="sample4_roadAddress"
                  name="newAddress"
                  className="user-address-input info-form-input"
                  defaultValue={addressData.newAddress}
                  placeholder="주소"
                  onClick={() => setModalIsOpen(true)}
                />
                <span
                  id="guide"
                  style={{ color: "#999", display: "none" }}
                  onClick={() => setModalIsOpen(true)}
                ></span>
                <input
                  type="text"
                  id="sample4_detailAddress"
                  name="detailAddress"
                  className="user-address-input info-form-input"
                  placeholder="상세주소"
                />
                <input
                  type="text"
                  id="sample4_extraAddress"
                  name="reference"
                  className="user-address-input info-form-input"
                  placeholder="참고항목"
                />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  ariaHideApp={false}
                >
                  <button
                    id="popup-close-btn"
                    onClick={() => setModalIsOpen(false)}
                  >
                    X
                  </button>
                  <Address
                    value={addressData}
                    setAddressDatas={setAddressDatas}
                  />
                </Modal>
              </li>
              <li className="enter-info-item">
                <p className="input-name">이메일</p>
                <input
                  className="user-email-input info-form-input"
                  name="email"
                  type="text"
                />
              </li>
            </ul>
          </div>
          <div className="additory-info">
            <ul className="additory-info-list">
              <li className="additory-info-item">
                <p>생년월일</p>
              </li>
              <li className="additory-info-item">
                <select className="year-check birth-check-sel">
                  <option value="1950년">1950년</option>
                  <option>1951년</option>
                  <option>1952년</option>
                  <option>1953년</option>
                  <option>1954년</option>
                  <option>1955년</option>
                  <option>1956년</option>
                  <option>1957년</option>
                  <option>1958년</option>
                  <option>1959년</option>
                  <option>1960년</option>
                  <option>1961년</option>
                  <option>1962년</option>
                  <option>1963년</option>
                  <option>1964년</option>
                  <option>1965년</option>
                  <option>1966년</option>
                  <option>1967년</option>
                  <option>1968년</option>
                  <option>1969년</option>
                  <option>1970년</option>
                  <option>1971년</option>
                  <option>1972년</option>
                  <option>1973년</option>
                  <option>1974년</option>
                  <option>1975년</option>
                  <option>1976년</option>
                  <option>1977년</option>
                  <option>1978년</option>
                  <option>1979년</option>
                  <option>1980년</option>
                  <option>1981년</option>
                  <option>1982년</option>
                  <option>1983년</option>
                  <option>1984년</option>
                  <option>1985년</option>
                  <option>1986년</option>
                  <option>1987년</option>
                  <option>1988년</option>
                  <option>1989년</option>
                  <option>1990년</option>
                  <option>1991년</option>
                  <option>1992년</option>
                  <option>1993년</option>
                  <option>1994년</option>
                  <option>1995년</option>
                  <option>1996년</option>
                  <option>1997년</option>
                  <option>1998년</option>
                  <option>1999년</option>
                  <option>2000년</option>
                  <option>2001년</option>
                  <option>2002년</option>
                  <option>2003년</option>
                  <option>2004년</option>
                  <option>2005년</option>
                  <option>2006년</option>
                  <option>2007년</option>
                  <option>2008년</option>
                  <option>2009년</option>
                  <option>2010년</option>
                </select>
                <select className="month-check birth-check-sel">
                  <option>1월</option>
                  <option>2월</option>
                  <option>3월</option>
                  <option>4월</option>
                  <option>5월</option>
                  <option>6월</option>
                  <option>7월</option>
                  <option>8월</option>
                  <option>9월</option>
                  <option>10월</option>
                  <option>11월</option>
                  <option>12월</option>
                </select>
                <select className="day-check birth-check-sel">
                  <option>1일</option>
                  <option>2일</option>
                  <option>3일</option>
                  <option>4일</option>
                  <option>5일</option>
                  <option>6일</option>
                  <option>7일</option>
                  <option>8일</option>
                  <option>9일</option>
                  <option>10일</option>
                  <option>11일</option>
                  <option>12일</option>
                  <option>13일</option>
                  <option>14일</option>
                  <option>15일</option>
                  <option>16일</option>
                  <option>17일</option>
                  <option>18일</option>
                  <option>19일</option>
                  <option>20일</option>
                  <option>21일</option>
                  <option>22일</option>
                  <option>23일</option>
                  <option>24일</option>
                  <option>25일</option>
                  <option>26일</option>
                  <option>27일</option>
                  <option>28일</option>
                  <option>29일</option>
                  <option>30일</option>
                  <option>31일</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="temrs">
            <input type="checkbox" name="all-agree"></input>
            <label className="all-agree" name="all-agree">
              전체 동의
            </label>
            <div className="temrs-list-box">
              <ul className="temrs-list">
                <li className="tems-list-item">
                  <input
                    type="checkbox"
                    name="temrs-agree1"
                    className="temrs-agree1"
                  ></input>
                  <label name="temrs-agree1" className="temrs-agree1">
                    <Link to="">
                      <span className="useTerms terms-chk">이용약관</span> 동의
                    </Link>
                  </label>
                </li>
                <li className="tems-list-item">
                  <input
                    type="checkbox"
                    name="terms-agree2"
                    className="terms-agree2"
                  ></input>
                  <label name="terms-agree2" className="temrs-agree2">
                    <Link to="">
                      <span className="infoTerms terms-chk">
                        개인 정보 수집 및 이용{" "}
                      </span>
                      동의
                    </Link>
                  </label>
                </li>
                <li className="tems-list-item">
                  <input
                    type="checkbox"
                    name="terms-agree3"
                    className="terms-agree3"
                  ></input>
                  <label name="terms-agree3">
                    <Link to="">[선택] 만 14세 이상입니다.</Link>
                  </label>
                </li>
                <li className="tems-list-item">
                  <input
                    type="checkbox"
                    name="terms-agree4"
                    className="terms-agree4"
                  ></input>
                  <label name="terms-agree4">
                    <Link to="">[선택] 마케팅 활용 동의 및 광고 수신 동의</Link>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <button
            type="submit"
            id="memberJoinBtn"
            style={{ fontFamily: "Gowun Batang" }}
          >
            <span className="memberJoinBtn-txt">동의하고 가입하기</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinDetailPage;
