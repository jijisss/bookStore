import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../components/JoinDetailPage.css";
import Address from "../components/Address.js";
import profileSettingImage from "../images/btn_profile_setting@2x.png";
import { data } from "jquery";

function JoinDetailPage({}) {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [checkBoxActive, setCheckboxActive] = useState(true);

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
  const [isName, setIsName] = React.useState(false);
  const [isNickName, setIsNickName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);

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
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다.");
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

  useEffect(() => {
    const birthYearEl = document.querySelector("#birth-year");
    // option 목록 생성 여부 확인
    let isYearOptionExisted = false;
    birthYearEl.addEventListener("focus", function () {
      // year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isYearOptionExisted) {
        isYearOptionExisted = true;
        let year = new Date().getFullYear();
        for (var i = 1940; i <= year; i++) {
          // option element 생성
          const yearOption = document.createElement("option");
          yearOption.setAttribute("value", i);
          yearOption.innerText = i;
          // birthYearEl의 자식 요소로 추가
          this.appendChild(yearOption);
        }
      }
    });

    const birthMonthEl = document.querySelector("#birth-month");
    // option 목록 생성 여부 확인
    let isMonthOptionExisted = false;
    birthMonthEl.addEventListener("focus", function () {
      // year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isMonthOptionExisted) {
        isMonthOptionExisted = true;
        for (var i = 1; i <= 12; i++) {
          let result = "";
          if (i < 10) {
            result = "0" + i;
          } else {
            result = i;
          }
          // option element 생성
          const monthOption = document.createElement("option");
          monthOption.setAttribute("value", result);
          monthOption.innerText = result;
          // birthYearEl의 자식 요소로 추가
          this.appendChild(monthOption);
        }
      }
    });

    const birthDayEl = document.querySelector("#birth-day");
    // option 목록 생성 여부 확인
    let isDayOptionExisted = false;
    birthDayEl.addEventListener("focus", function () {
      // year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isDayOptionExisted) {
        isDayOptionExisted = true;
        for (var i = 1; i <= 31; i++) {
          let result = "";
          if (i < 10) {
            result = "0" + i;
          } else {
            result = i;
          }
          // option element 생성
          const dayOption = document.createElement("option");
          dayOption.setAttribute("value", result);
          dayOption.innerText = result;
          // birthYearEl의 자식 요소로 추가
          this.appendChild(dayOption);
        }
      }
    });
  }, []);

  // 체크박스 유효성 검사
  const isCheckBoxClicked = () => {
    setCheckboxActive(!checkBoxActive);
    console.log(checkBoxActive);
  };

  function handleSubmit(e) {
    console.log(e);

    // 데이터 등록하기
    let data = {};
    data.memberId = id;
    data.memberName = name;
    data.nickName = nickName;
    data.email = email;
    data.contact = phone;
    data.password = password;
    let radioGender = document.getElementsByName("gender");
    radioGender.forEach((node) => {
      if (node.checked) data.eGender = node.value;
    });
    data.address = document.getElementById("newAddress").value;
    data.addressDetail = document.getElementById("detailAddress").value;
    data.postcode = document.getElementById("postcode").value;
    data.birth = Number(
      document.getElementById("birth-year").value +
        document.getElementById("birth-month").value +
        document.getElementById("birth-day").value
    );
    data.eLoginPlatform = "NONE";
    data.homeAddressYn = "Y";
    console.log(data);

    // fetch 보내기
    fetch("http://localhost:8080/member/memberRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((response) => console.log(response));
  }

  return (
    <div id="JoinDetail">
      <div className="JoinDetailWrap">
        <h1 className="join">회원가입</h1>
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
                  maxLength={5}
                  type="text"
                  required
                />
              </div>
              <p className="message">{nameMessage}</p>
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
                    value="MAN"
                  />
                  <span>남성</span>
                </label>
                <label id="genderLabel">
                  <input
                    type="radio"
                    name="gender"
                    className="genderBtn"
                    value="WOMAN"
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
                  required
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
                  id="postcode"
                  name="postcode"
                  className="user-address-input info-form-input"
                  defaultValue={addressData.zipCode}
                  placeholder="우편번호"
                  onClick={() => setModalIsOpen(true)}
                  required
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
                  id="newAddress"
                  name="newAddress"
                  className="user-address-input info-form-input"
                  defaultValue={addressData.newAddress}
                  placeholder="주소"
                  onClick={() => setModalIsOpen(true)}
                  required
                />
                <span
                  id="guide"
                  style={{ color: "#999", display: "none" }}
                  onClick={() => setModalIsOpen(true)}
                ></span>
                <input
                  type="text"
                  id="detailAddress"
                  name="detailAddress"
                  className="user-address-input info-form-input"
                  placeholder="상세주소"
                  required
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
                  <select className="box" id="birth-year" defaultValue={0}>
                    <option disabled value={0}>
                      출생 연도
                    </option>
                  </select>
                  <select className="box" id="birth-month" defaultValue={0}>
                    <option disabled value={0}>
                      월
                    </option>
                  </select>
                  <select className="box" id="birth-day" defaultValue={0}>
                    <option disabled value={0}>
                      일
                    </option>
                  </select>
                </div>
              </div>
            </li>
          </ul>
          <div className="terms">
            <input
              type="checkbox"
              className="terms-checkbox"
              onClick={isCheckBoxClicked}
              name="checkbox"
            />
            <label htmlFor="checkbox">
              이용약관 및 개인 정보 수집 및 이용 동의
            </label>
          </div>
          <button
            type="submit"
            id="memberJoinBtn"
            style={{ fontFamily: "Gowun Batang" }}
            onClick={handleSubmit}
            // disabled={
            //   !(
            //     isId &&
            //     isName &&
            //     isNickName &&
            //     isPassword &&
            //     isPasswordConfirm &&
            //     isPhone &&
            //     isEmail
            //   )
            // }
          >
            <span className="memberJoinBtn-txt">동의하고 가입하기</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinDetailPage;
