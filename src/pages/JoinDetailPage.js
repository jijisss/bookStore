import React, { useState } from "react";
import Modal from "react-modal";
import "../components/JoinDetailPage.css";
import Address from "../components/Address.js";
import profileSettingImage from "../images/btn_profile_setting@2x.png";
import Checkbox from "../components/CheckBox";
import Register from "../components/Register";

function JoinDetailPage({}) {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  // const [birth, setBirth] = React.useState("");

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState("");
  const [nameMessage, setNameMessage] = React.useState("");
  const [nickNameMessage, setNickNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");
  const [emailMessage, setEmailMessage] = React.useState("");
  const [phoneMessage, setPhoneMessage] = React.useState("");
  // const [birthMessage, setBirthMessage] = React.useState("");

  // 유효성 검사
  const [isId, setIsId] = React.useState(false);
  const [isname, setIsName] = React.useState(false);
  const [isNickName, setIsNickName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);
  // const [isBirth, setIsBirth] = React.useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4~12 글자 사이 영문 대소문자 또는 숫자만 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디입니다.");
      setIsId(true);
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  const onChangeNickName = (e) => {
    const currentName = e.target.value;
    setNickName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNickNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요.");
      setIsName(false);
    } else {
      setNickNameMessage("사용가능한 닉네임입니다.");
      setIsNickName(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };

  const onChangePhone = (getNumber) => {
    const currentPhone = getNumber;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다.");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다.");
      setIsPhone(true);
    }
  };

  const addHyphen = (e) => {
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    if (currentNumber.length == 3 || currentNumber.length == 8) {
      setPhone(currentNumber + "-");
      onChangePhone(currentNumber + "-");
    } else {
      onChangePhone(currentNumber);
    }
  };

  // 모달 useState
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addressData, setAddressData] = useState({});

  const setAddressDatas = (text) => {
    setAddressData(text);
  };

  return (
    <div id="JoinDetail">
      <div className="JoinDetailWrap">
        <h1 className="join">회원가입</h1>
        <Register />
        <form id="user-info-form" action="submit">
          <ul className="enter-info-list">
            <li className="enter-info-item" id="profile-info-item">
              <label className="input-name" htmlFor="profilePhoto">
                프로필 사진
              </label>
              <input
                id="enter-profileImage-input"
                className="user-id-input info-form-input"
                name="profilePhoto"
                type="text"
                maxLength={8}
                required
              />
              <span className="profile-setting-ic">
                <img src={profileSettingImage} />
              </span>
            </li>
            <li className="enter-info-item">
              <div className="input-box">
                <label className="input-name" htmlFor="name">
                  이름
                </label>
                <input
                  id="enterNameInput"
                  className="user-name-input info-form-input"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  type="text"
                  required
                />
              </div>
              <p className="message"></p>
            </li>
            <li className="enter-info-item">
              <div className="input-box">
                <label className="input-name" htmlFor="nickName">
                  닉네임
                </label>
                <input
                  id="enter-id-input"
                  className="user-nickName-input info-form-input"
                  name="nickName"
                  type="text"
                  value={nickName}
                  onChange={onChangeNickName}
                  maxLength={8}
                  required
                />
              </div>
              <p className="message">{nickNameMessage}</p>
            </li>
            <li className="enter-info-item">
              <div className="input-box">
                <label className="input-name" htmlFor="id">
                  아이디
                </label>
                <input
                  id="enterIdInput"
                  className="user-id-input info-form-input"
                  name="id"
                  type="text"
                  value={id}
                  onChange={onChangeId}
                  maxLength={8}
                  required
                />
              </div>
              <p className="message"> {idMessage} </p>
            </li>
            <li className="enter-info-item">
              <div className="input-box">
                <label className="input-name" htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="enterPasswordInput"
                  className="user-password-input info-form-input"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  type="password"
                  required
                />
              </div>
              <p className="message">{passwordMessage}</p>
            </li>
            <li className="enter-info-item">
              <div className="input-box">
                <label className="input-name" htmlFor="passwordConfirm">
                  비밀번호 확인
                </label>
                <input
                  id="enterPasswordConfirmInput"
                  className="user-password-confirm-input info-form-input"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={onChangePasswordConfirm}
                  type="password"
                  required
                />
              </div>
              <p className="message">{passwordConfirmMessage}</p>
            </li>
            <li className="enter-info-item" id="gender-info-item">
              <p className="input-name">성별</p>
              <fieldset id="genderFieldset">
                <label id="genderLabel">
                  <input
                    type="radio"
                    name="gender"
                    className="genderBtn"
                    value="WOMAN"
                  />
                  <span>남성</span>
                </label>
                <label id="genderLabel">
                  <input
                    type="radio"
                    name="gender"
                    className="genderBtn"
                    value="MAN"
                  />
                  <span>여성</span>
                </label>
              </fieldset>
            </li>
            <li className="enter-info-item">
              <div className="input-box">
                <label className="input-name" htmlFor="phone">
                  휴대전화
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="user-phone-input info-form-input"
                  value={phone}
                  onChange={addHyphen}
                />
              </div>
              <p className="message">{phoneMessage}</p>
            </li>
            {/* 주소 입력창 */}
            <div className="address-input-box">
              <p className="input-name">주소</p>
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
            </div>
            <li className="enter-info-item">
              <div className="input-box">
                <p className="input-name">이메일</p>
                <input
                  className="user-email-input info-form-input"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  type="text"
                  required
                />
              </div>
              <p className="message">{emailMessage}</p>
            </li>
            <li className="enter-info-item">
              <div className="input-box">
                <p className="input-name">생년월일</p>
                <div className="year-select-box">
                  <select className="year-check birth-check-sel" name="year">
                    <option>1950년</option>
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
                  <select className="month-check birth-check-sel" name="month">
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
                  <select className="day-check birth-check-sel" name="day">
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
                </div>
              </div>
            </li>
          </ul>
          <div className="terms">
            <Checkbox />
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
