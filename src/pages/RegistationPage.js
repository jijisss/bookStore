import "../components/default.css";
import "../components/registationPage.css";
import "../components/registationForm.css";
import React, { useState } from "react";
import Modal from "../components/Modal.js";

function RegistationPage({}) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal2 = (e) => {
    e.preventDefault();
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  return (
    <>
      <div className="registation-wrap">
        <h1 className="title">책/저자 등록하기</h1>
        <form id="registationBook-form" action="submit">
          <ul className="bookInfo-list">
            <li className="bookInfo-item">
              <label htmlFor="bookName">책 제목</label>
              <input type="text" id="bookName" name="bookName" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="bookThumbnail">책 표지 이미지</label>
              <input type="text" id="bookThumbnail" name="bookThumbnail" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="detailImg">상세 이미지</label>
              <input type="text" id="detailImg" name="detailImg" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="trailer">트레일러</label>
              <input type="text" id="trailer" name="trailer" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="authorName">저자</label>
              <input type="text" id="authorName" name="authorName" />
              <button
                onClick={openModal}
                className="authorName-btn authorName-pick-btn"
                id="authorName-pick-btn"
                style={{ fontFamily: "Gowun Batang" }}
              >
                선택
              </button>
              <Modal open={modalOpen} close={closeModal} header="저자 선택하기">
                <form action="submit" id="authorSelectForm">
                  <input
                    type="search"
                    id="authorSearchInput"
                    name="authorNameSearch"
                    placeholder="작가 이름 검색"
                  ></input>
                  <button
                    name="authorNameSearch"
                    id="authorSearchBtn"
                    style={{ fontFamily: "Gowun Batang" }}
                  >
                    검색
                  </button>
                </form>
              </Modal>
              <button
                onClick={openModal2}
                className="authorName-btn authorName-Register-btn"
                style={{ fontFamily: "Gowun Batang" }}
              >
                저자등록
              </button>
              <Modal
                open={modalOpen2}
                close={closeModal2}
                header="저자 등록하기"
              >
                <form action="submit" id="authorRegisterForm">
                  <ul className="registerAuthor-list">
                    <li className="registerAuthor-item">
                      <label htmlFor="registerAuthorName">작가 이름</label>
                      <input
                        type="text"
                        id="author"
                        name="registerAuthorName"
                      />
                    </li>
                    <li className="registerAuthor-item">
                      <label htmlFor="registerAuthorBirth">작가 출생년도</label>
                      <select
                        name="registerAuthorBirth"
                        id="registerAuthorBirth"
                      >
                        <option>년</option>
                      </select>
                    </li>
                    <li className="registerAuthor-item">
                      <label htmlFor="registerAuthorInfo">작가 정보</label>
                      <textarea name="registerAuthorInfo"></textarea>
                    </li>
                  </ul>
                  <button
                    id="authorRegisterBtn"
                    type="submit"
                    style={{ fontFamily: "Gowun Batang" }}
                  >
                    등록하기
                  </button>
                </form>
              </Modal>
            </li>
            <li className="bookInfo-item">
              <label htmlFor="translator">번역가</label>
              <input type="text" id="translator" name="translator" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="publisher">출판사</label>
              <input type="text" id="publisher" name="publisher" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="publicationDate">출판일</label>
              <input type="text" id="publicationDate" name="publicationDate" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="val">가격</label>
              <input type="text" id="val" name="val" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="valOrigin">원가</label>
              <input type="text" id="valOrigin" name="valOrigin" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="percent">할인률</label>
              <input type="text" id="percent" name="percent" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="point">적립포인트</label>
              <input type="text" id="point" name="point" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="deliveryFee">배송비</label>
              <input type="text" id="deliveryFee" name="deliveryFee" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="bookGenre">책 분야</label>
              <input type="text" id="bookGenre" name="bookGenre" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="bookIntro">책 소개</label>
              <textarea id="bookIntro" name="bookIntro"></textarea>
            </li>
            <li className="bookInfo-item">
              <label htmlFor="bookIntro">목차</label>
              <textarea id="bookIntro" name="bookIntro"></textarea>
            </li>
            <li className="bookInfo-item">
              <label htmlFor="bookPreview">책속으로</label>
              <textarea id="bookPreview" name="bookPreview"></textarea>
            </li>
            <li className="bookInfo-item">
              <label htmlFor="publisherReview">출판사 서평</label>
              <textarea id="publisherReview" name="publisherReview"></textarea>
            </li>
            <li className="bookInfo-item">
              <label htmlFor="isbn">ISBN</label>
              <input type="text" id="isbn" name="isbn" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="issueDate">발행 일자</label>
              <input type="text" id="issueDate" name="issueDate" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="totalPage">쪽수</label>
              <input type="text" id="totalPage" name="totalPage" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="size">크기</label>
              <input type="text" id="size" name="size" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="totalBookCount">총권수</label>
              <input type="text" id="totalBookCount" name="totalBookCount" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="revisionInfo">개정정보</label>
              <input type="text" id="revisionInfo" name="revisionInfo" />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="originalSignature">원서명</label>
              <input
                type="text"
                id="originalSignature"
                name="originalSignature"
              />
            </li>
            <li className="bookInfo-item">
              <label htmlFor="originalAuthorName">저자명</label>
              <input
                type="text"
                id="originalAuthorName"
                name="originalAuthorName"
              />
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

export default RegistationPage;
