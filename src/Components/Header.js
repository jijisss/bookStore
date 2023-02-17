import "./Header.css";
import React from "react";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="HeaderInner">
          <div className="Header_top">
            <p className="HeaderText">
              <span className="en">Life on the book.</span> 책 속의 삶을
              살아갑니다.
            </p>
            {/* loginBar */}
            <div className="loginMenu">
              <ul className="loginMenu_list">
                <li className="loginMenu_list_item menu_list_item">로그인</li>
                <li className="loginMenu_list_item menu_list_item">회원가입</li>
              </ul>
            </div>
          </div>
          <div className="Header_bot">
            {/* logo */}
            <h1 className="logo HeaderLogo en">
              <span className="logoIcon"></span>
              LifeBooks
            </h1>
            {/* searchBar */}
            <div className="searchBar">
              <input
                type="search"
                id="HeaderSearchBar"
                name="HeaderSearch"
              ></input>
              <button id="HeaderSearchBtn" name="HeaderSearch">
                <IoIosSearch style={{ fontSize: "24px" }} />
              </button>
            </div>
            {/* menu */}
            <div className="menu Header_menu">
              <ul className="menu_list">
                <li className="myMenu_list_item menu_list_item">장바구니</li>
                <li className="myMenu_list_item menu_list_item">마이페이지</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
