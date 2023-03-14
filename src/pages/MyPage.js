import "../components/top-btn.css";
import "../components/MyPage.css";
import { Link } from "react-router-dom";

function MyPage() {
  return (
    <>
      <div className="breadcrumb-wrap">
        <div className="breadcrumb-inner">
          <ol id="TopBreadcrumb" className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/myPage">My page</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="contents-wrap">
        <div className="contents-inner">
          <div className="contents">
            <aside className="aside-wrap">
              <div className="aside-body">
                <div id="AsideMyProfile" className="my-profile-area">
                  <div className="profile-thumb-box">
                    <Link className="btn-setting">
                      <div className="thumb-box"></div>
                      <span className="hidden">프로필 설정 바로가기</span>
                    </Link>
                  </div>
                  <div className="profile-name-box">
                    <span className="name">님</span>
                  </div>
                </div>
                <div className="snb-wrap">
                  <ul id="LeftNavList" className="snb_list">
                    <li className="sub-item" data-id="1">
                      <Link to="" className="snb-link depth-title">
                        쇼핑내역
                      </Link>
                      <ul className="snb-list">
                        <li className="sub-item">
                          <Link to="">주문/배송목록</Link>
                        </li>
                        <li className="sub-item">
                          <Link to="">온라인 영수증</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-item" data-id="2">
                      <Link to="" className="snb-link depth-title">
                        혜택/포인트
                      </Link>
                      <ul className="snb-list">
                        <li className="sub-item">
                          <Link to="">포인트</Link>
                        </li>
                        <li className="sub-item">
                          <Link to="">쿠폰</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-item" data-id="3">
                      <Link to="" className="snb-link depth-title">
                        회원정보
                      </Link>
                      <ul className="snb-list">
                        <li className="sub-item">
                          <Link to="">배송주소록</Link>
                        </li>
                        <li className="sub-item">
                          <Link to="">회원정보관리</Link>
                        </li>
                        <li className="sub-item">
                          <Link to="">나의 회원등급</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-item" data-id="4">
                      <Link to="" className="snb-link depth-title">
                        문의내역
                      </Link>
                      <ul className="snb-list">
                        <li className="sub-item">
                          <Link to="">1:1 문의</Link>
                        </li>
                        <li className="sub-item">
                          <Link to="">상품 문의</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            <div id="VoucherStats" className="benefit-info-wrap">
              <div className="benefit-group">
                <div className="benefit-item coupon">
                  <Link to="" className="benefit-link">
                    <span className="benefit-title">쿠폰</span>
                    <div className="benefit-val">
                      <span className="val">2</span>
                      <span className="unit">장</span>
                    </div>
                  </Link>
                </div>
                <div className="benefit-item point">
                  <Link to="" className="benefit-link">
                    <span className="benefit-title">통합포인트</span>
                    <div className="benefit-val">
                      <span className="val">0</span>
                      <span className="unit">P</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPage;
