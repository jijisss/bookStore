import React, { useState } from "react";
import "./Tab.css";

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          id="tabs-list"
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          아이디 찾기
        </li>
      ),
      tabCont: (
        <div className="tabContent">
          <p className="using-phoneNumber">이메일로 찾기</p>
          <form className="find-id-form find-form">
            <ul>
              <li>
                <label className="input-title" name="user-name">
                  이름
                </label>
                <input placeholder="이름을 입력해주세요." name="user-name" />
              </li>
              <li>
                <label className="input-title" name="user-birth">
                  생년월일
                </label>
                <input placeholder="생년월일 8자리를 입력해주세요." />
              </li>
              <li>
                <label className="input-title" name="user-email">
                  이메일
                </label>
                <input placeholder="이메일 주소를 입력해주세요." />
              </li>
              <button
                className="confirm-btn"
                style={{
                  fontFamily: "Gowun Batang",
                }}
              >
                확인
              </button>
            </ul>
          </form>
        </div>
      ),
    },
    {
      tabTitle: (
        <li
          id="tabs-list"
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          비밀번호 찾기
        </li>
      ),
      tabCont: (
        <div className="tabContent">
          <p className="using-phoneNumber">이메일로 찾기</p>
          <form className="find-password-form find-form">
            <ul>
              <li>
                <label className="input-title" name="user-id">
                  아이디
                </label>
                <input placeholder="아이디를 입력해주세요." name="user-id" />
              </li>
              <li>
                <label className="input-title" name="user-name">
                  이름
                </label>
                <input placeholder="이름을 입력해주세요." name="user-name" />
              </li>
              <li>
                <label className="input-title" name="user-birth">
                  생년월일
                </label>
                <input placeholder="생년월일 8자리를 입력해주세요." />
              </li>
              <li>
                <label className="input-title" name="user-email">
                  이메일
                </label>
                <input placeholder="이메일 주소를 입력해주세요." />
              </li>
              <button
                className="confirm-btn"
                style={{
                  fontFamily: "Gowun Batang",
                }}
              >
                확인
              </button>
            </ul>
          </form>
        </div>
      ),
    },
  ];

  return (
    <div>
      <ul className="tabs is-boxed find-tabs">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}
