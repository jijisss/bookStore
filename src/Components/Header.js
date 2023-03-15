import { Link } from "react-router-dom";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <>
      <div id="Header">
        <div className="HeaderInner">
          <div className="Header_top">
            <p className="HeaderText">
              <span className="en">Life on the book.</span> 책 속의 삶을
              살아갑니다.
            </p>
            {/* loginBar */}
            <div className="loginMenu">
              <ul className="loginMenu_list">
                <Link to="/login">
                  <li
                    className="loginMenu_list_item menu_list_item"
                    style={{
                      color: "#000",
                    }}
                  >
                    로그인
                  </li>
                </Link>
                <Link to="/join">
                  <li
                    className="loginMenu_list_item menu_list_item"
                    style={{
                      color: "#000",
                    }}
                  >
                    회원가입
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="Header_bot">
            {/* logo */}
            <Link to="/" className="logo HeaderLogo en">
              <span className="logoIcon"></span>
              LifeBooks
            </Link>
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
                <Link
                  to="/CartPage"
                  className="myMenu_list_item menu_list_item"
                  style={{
                    color: "#000",
                  }}
                >
                  장바구니
                </Link>
                <Link
                  to="/MyPage"
                  className="myMenu_list_item menu_list_item"
                  style={{
                    color: "#000",
                  }}
                >
                  마이페이지
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
