import "../components/default.css";
import "../components/ReviewPage.css";
import userProfileImg from "../images/img_no_profile@2x.png";
import { Link } from "react-router-dom";

function ReviewPage() {
  return (
    <>
      <div className="review-contents-wrap">
        <h1 className="review-contents-tit">전체 리뷰</h1>
        <div className="review-registration-btn">
          <button id="registration-btn" style={{ fontFamily: "Gowun Batang" }}>
            <Link to="/review-write">리뷰 작성하기</Link>
          </button>
        </div>
        <div className="review-box">
          <ul className="review-list">
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
            <li className="review-item">
              <div className="review-content-item-left-box">
                <p className="seller-profileImg">
                  <img src={userProfileImg} />
                </p>
                <span className="seller-nickName">해씨냠냠 님</span>
              </div>
              <div className="review-content-item-right-box">
                <div className="review-text-preview">
                  <p className="preview-txt">
                    "책 상태가 너무 좋아요! 판매자분이 너무 친절하셨습니다..!"
                  </p>
                </div>
                <div className="buyer-info">
                  <p className="buyer-nickName">하하하 님</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="review-pageNumber-index-box">
          <ul className="review-pageNumber-index-list">
            <li className="review-pageNumber-index-item">
              <button id="review-pageNumber-index-btn">1</button>
            </li>
            <li className="review-pageNumber-index-item">
              <button id="review-pageNumber-index-btn">2</button>
            </li>
            <li className="review-pageNumber-index-item">
              <button id="review-pageNumber-index-btn">3</button>
            </li>
            <li className="review-pageNumber-index-item">
              <button id="review-pageNumber-index-btn">4</button>
            </li>
            <li className="review-pageNumber-index-item">
              <button id="review-pageNumber-index-btn">5</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ReviewPage;
