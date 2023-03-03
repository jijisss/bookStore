import "../components/BookOfMonth.css";
import bookOfMonthImage from "../images/bookOfMonth.jpg";

function BookOfMonth() {
  return (
    <>
      <div className="container-wrapper">
        <div id="contents" className="contents-wrap">
          {/* header */}
          <div className="prod-detail-header">
            <div className="header-contents-inner">
              <div className="prod_detail_title_wrap">
                <div className="prod_title_area">
                  <div className="prod_title_box">
                    만일 내가 인생을 다시 산다면
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod_info_wrap">
                  <div className="prod-series-box">리더스원</div>
                  <div className="author">김혜남 저자(글)</div>
                </div>
                <div className="portrait-img-box">
                  <img src={bookOfMonthImage} />
                </div>
                <div className="prod-guide-box">
                  <div className="pro-guide-row">
                    <div className="prod-guide-title">배송안내</div>
                    <div className="prod_guide_cont">
                      <div className="delivery-guide-text">
                        <span id="OrderDeliveryType">무료배송</span>
                      </div>
                      <div className="pro-guide-row">
                        <div className="prod-guide-cont">
                          <div className="delivery-guide-text">
                            <span id="OrderEstimatedDate"></span>
                            <span>
                              <strong>3월 7일 출고예정</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="prod-price-wrap">
                        <div className="prod-price">
                          <span className="percent">10%</span>
                          <span className="val">26,100</span>
                          <s className="val">29,000</s>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="prod-detail-body">
        <div className="prod-detail-contents">
          <div className="prod_detail_contents_inner"></div>
        </div>
      </div>
    </>
  );
}

export default BookOfMonth;
