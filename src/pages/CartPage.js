import "../components/top-btn.css";
import "../components/CartPage.css";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div className="contents-wrap">
        <div className="contents">
          <div className="inner">
            <div className="title-wrap">
              <h1 className="title-heading">장바구니</h1>
            </div>
            <div className="cart-body">
              <div className="cart-body-inner">
                <div className="no-data">
                  <div className="no-data-desc">
                    장바구니에 담긴 상품이 없어요!
                  </div>
                  <div className="login-link-wrap">
                    <Link to="/login">
                      <span className="login-link">로그인</span>
                    </Link>
                  </div>
                </div>
                <div className="cart-info-wrap">
                  <div className="payments-info-area">
                    <div className="payments-info-box">
                      <ul className="payments-info-list">
                        <li className="payments-info-item">
                          <p className="label">상품금액</p>
                          <div className="right-box">
                            <span className="price">
                              <span className="val spot">0</span>
                              <span className="unit">원</span>
                            </span>
                          </div>
                        </li>
                        <li className="payments-info-item">
                          <p className="label">배송비</p>
                          <div className="right-box">
                            <span className="price">
                              <span className="val">+ 0</span>
                              <span className="unit">원</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="payments-info-box">
                      <ul className="payments-info-list">
                        <li className="payments-info-item total">
                          <p className="label">결제 예정 금액</p>
                          <div className="right-box">
                            <span className="price">
                              <span className="val spot">0</span>
                              <span className="unit">원</span>
                            </span>
                          </div>
                        </li>
                        <li className="payments-info-item point">
                          <p className="label">적립 예정 포인트</p>
                          <div className="right-box">
                            <span className="price">
                              <span className="val spot">0</span>
                              <span className="unit">P</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="btn-wrap">
                    <button className="btn-primary">
                      <span
                        className="text"
                        style={{
                          fontFamily: "Gowun Batang",
                        }}
                      >
                        주문하기
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
