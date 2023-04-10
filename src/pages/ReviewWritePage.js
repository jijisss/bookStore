import "../components/default.css";
import "../components/reviewWritePage.css";
import bookImg from "../images/bookImage_manglegom.jpg";

function ReviewWritePage() {
  return (
    <>
      <div className="reviewWrite-contents-wrap">
        <h1 className="reviewWrite-contents-tit">리뷰 작성</h1>
        <div className="review-book-info">
          <p className="review-book-img">
            <img src={bookImg} />
          </p>
          <div className="review-bookName-box">
            <p className="review-bookName">망그러진 곰</p>
          </div>
          <div className="review-book-rating">별점 들어갈 공간</div>
        </div>
        <form id="reviewWrite-form">
          <textarea
            id="reviewWrite-form-textarea"
            placeholder="10자 이상 작성해주세요. 주제오 무관한 댓글, 악플, 배송문의 등의 글은 임의 삭제될 수 있습니다."
          ></textarea>
          <button
            type="submit"
            id="reviewWrite-form-btn"
            style={{ fontFamily: "Gowun Batang" }}
          >
            작성하기
          </button>
        </form>
      </div>
    </>
  );
}

export default ReviewWritePage;
