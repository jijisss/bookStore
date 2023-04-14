import "../components/default.css";
import { useState, useEffect } from "react";
import "../components/JoinDetailPage.css";

function Register() {
  const [values, setValues] = useState({
    nameValue: "",
    phoneNumberValue: "",
    contentValue: "",
  });

  const { nameValue, phoneNumberValue, contentValue } = values;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
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

  useEffect(() => {
    if (phoneNumberValue.length === 11) {
      setValues({
        phoneNumberValue: phoneNumberValue.replace(
          /(\d{3})(\d{4})(\d{4})/,
          "$1-$2-$3"
        ),
      });
    } else if (phoneNumberValue.length === 13) {
      setValues({
        phoneNumberValue: phoneNumberValue
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    }
  }, [phoneNumberValue]);

  return (
    <>
      <form action="submit" id="user-info-form">
        <ul className="enter-info-list">
          <li className="enter-info-item">
            <div className="input-box">
              <label className="input-name">이름</label>
              <input
                className="info-form-input"
                name="nameValue"
                value={nameValue || ""}
                onChange={handleChange}
              />
            </div>
          </li>
          <li className="enter-info-item">
            <div className="input-box">
              <label className="input-name">전화번호</label>
              <input
                className="info-form-input"
                name="phoneNumberValue"
                value={phoneNumberValue || ""}
                onChange={handleChange}
              />
            </div>
          </li>
          <li className="enter-info-item">
            <div className="input-box">
              <label className="input-name">닉네임</label>
              <input
                className="info-form-input"
                name="contentValue"
                value={contentValue || ""}
                onChange={handleChange}
              />
            </div>
          </li>
          <button
            type="submit"
            id="memberJoinBtn"
            onClick={handleSubmit}
            style={{ fontFamily: "Gowun Batang" }}
          >
            <span className="memberJoinBtn-txt">동의하고 가입하기</span>
          </button>
        </ul>
      </form>
    </>
  );
}

export default Register;
