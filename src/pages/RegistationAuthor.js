import "../components/default.css";
import "../components/registationForm.css";

function RegistationAuthor() {
  return (
    <>
      <div className="registationAuthor-wrap">
        <h1 className="title">저자 등록하기</h1>
        <form id="registationAuthor-form" action="submit">
          <ul className="authorInfo-list">
            <li className="authorInfo-item">
              <label htmlFor="authorName">저자 이름</label>
              <input type="text" id="authorName" name="authorName" />
            </li>
            <li className="authorInfo-item">
              <label htmlFor="authorImage">저자 이미지</label>
              <input type="text" id="authorImage" name="authorImage" />
            </li>
            <li className="authorInfo-item">
              <label htmlFor="authorInfo">저자 정보</label>
              <textarea type="text" id="authorInfo" name="authorInfo" />
            </li>
          </ul>
          <button
            type="submit"
            id="formBtn"
            style={{ fontFamily: "Gowun Batang" }}
          >
            <p className="formBtn-text">등록하기</p>
          </button>
        </form>
      </div>
    </>
  );
}

export default RegistationAuthor;
