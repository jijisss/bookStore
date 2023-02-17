import "./Home.css";
import "./BookView.css";
import { cm } from "./cm.js";
import { BookView } from "./BookView.js";

import bookImage from "../images/book-image.jpg";

let loaderElem;
let observerElems;
let bookItemElems;
let shelfElem;
let bookListElem;
let modalCoverElem;

let bookView;

function Home() {
  return (
    <>
      <div id="before-load" className="before-load">
        {/* loader */}
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>

        {/* header */}
        <div className="header">
          <div className="header-inner width-setter">
            <h2 className="site-title observer-ready">
              <div className="site-title-inner en">LifeBooks Bookstore</div>
            </h2>
            <p className="header-description observer-ready">
              <span className="en">LifeBooks</span> 온라인 북스토어에 오신것을
              환영합니다. 여러분에게 읽기 좋은 책을 추천해드릴게요.
            </p>
          </div>
          {/* shelf */}
          <div className="shelf">
            <h3 className="shelf-title">
              <div className="width-setter">
                <span className="en">New Arrivals</span> 신작 도서
              </div>
            </h3>
            <div className="book-list">
              {/* data-id="0" */}
              <div className="book-item" data-id="0">
                <div className="book book-dark">
                  <div className="book-front">
                    <div className="book-cover" style={{}}></div>
                  </div>
                  <div className="book-side" style={{}}>
                    <h2 className="book-side-title">Grid Systems</h2>
                  </div>
                </div>
              </div>
              {/* data-id="1" */}
              <div className="book-item" data-id="1">
                <div className="book">
                  <div className="book-front">
                    <div className="book-cover" style={{}}></div>
                  </div>
                  <div className="book-side" style={{}}>
                    <h2 className="book-side-title">How to Design</h2>
                  </div>
                </div>
              </div>
              {/* data-id="2" */}
              <div className="book-item" data-id="2">
                <div className="book book-dark">
                  <div className="book-front">
                    <div className="book-cover" style={{}}></div>
                  </div>
                  <div className="book-side" style={{}}>
                    <h2 className="book-side-title">LOGO DESIGN LOVE</h2>
                  </div>
                </div>
              </div>
              {/* data-id="3" */}
              <div className="book-item" data-id="3">
                <div className="book">
                  <div className="book-front">
                    <div className="book-cover" style={{}}></div>
                  </div>
                  <div className="book-side" style={{}}>
                    <h2 className="book-side-title">Coloso Design</h2>
                  </div>
                </div>
              </div>
              {/* data-id="4" */}
              <div className="book-item" data-id="4">
                <div className="book book-dark">
                  <div className="book-front">
                    <div className="book-cover" style={{}}></div>
                  </div>
                  <div className="book-side" style={{}}>
                    <h2 className="book-side-title">Grid Systems</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* category */}
        <div className="category">
          <ul className="category_list">
            <li className="category_list_item">전체</li>
            <li className="category_list_item">문학</li>
            <li className="category_list_item">시/에세이</li>
            <li className="category_list_item">소설</li>
            <li className="category_list_item">사회과학</li>
            <li className="category_list_item">예술문화</li>
            <li className="category_list_item">역사</li>
            <li className="category_list_item">인문학</li>
            <li className="category_list_item">건강</li>
            <li className="category_list_item">자기계발</li>
          </ul>
        </div>
        {/* home-reading-section */}
        <div className="home-reading-section">
          <div className="width-setter">
            <div>
              <h2 className="bookOfMonth">이달의 당신에게 추천하는 책</h2>
              <div className="header-media">
                <p className="content-image observer-ready">
                  <img src={bookImage} alt="book-image" />
                </p>
                <p className="content-para observer-ready">
                  !책에 대해서 간단히 소개하는 내용! Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Fugit architecto possimus
                  reiciendis veritatis ipsum perferendis necessitatibus dicta,
                  numquam labore ea a rem eligendi amet commodi pariatur quia
                  molestiae vel magni facere quidem assumenda fuga nisi
                  voluptates eum. Harum error odio voluptates alias, quibusdam
                  laboriosam cupiditate esse, magnam voluptate architecto
                  quaerat ullam, repellendus vel dicta accusantium laudantium
                  non! Pariatur voluptatibus earum sed nostrum similique
                  placeat! Quo dolore earum sapiente ipsa accusamus consectetur
                  ullam aut beatae fugiat, vitae optio quaerat deleniti qui.
                </p>
              </div>
            </div>
            <div className="center-content">
              <p className="content-para observer-ready"></p>
              <p className="content-para observer-ready"></p>
              <p className="content-para observer-ready"></p>
            </div>
            <div></div>
          </div>
        </div>

        {/* modal-cover */}
        <div className="modal-cover"></div>
      </div>
    </>
  );
}

function setElems() {
  loaderElem = document.querySelector(".loader-wrapper");
  shelfElem = document.querySelector(".shelf");
  bookListElem = document.querySelector(".book-list");
  modalCoverElem = document.querySelector(".modal-cover");
  observerElems = document.querySelectorAll(".observer-ready");
  bookItemElems = document.querySelectorAll(".book-item");
}

function setCurrentBook(index) {
  cm.currentBookId = index;
  cm.currentBookElem = bookItemElems[index];
  console.log(cm.currentBookElem);
  console.log(cm.currentBookId);
  bookView.show();
}

window.addEventListener("load", () => {
  setElems();
  loaderElem.addEventListener("transitionend", () => {
    loaderElem.remove();
  });
  document.getElementById("before-load").classList.remove("before-load");

  // 각 .book-item들 위치 세팅
  bookItemElems.forEach((book, i) => {
    // .book-item의 width가 196
    book.style.left = `${196 * i}px`;
  });

  bookView = new BookView();

  bookListElem.addEventListener("click", (e) => {
    // console.log(e.target);
    e.preventDefault(); // 이벤트의 기본 동작 취소
    // console.log(e.target.getAttribute('href'));
    setCurrentBook(e.target.dataset.id);
  });

  modalCoverElem.addEventListener("click", () => {
    bookView.hide();
  });

  // 마우스 위치에 따라 책장 시점 변경
  window.addEventListener("mousemove", (e) => {
    // console.log(e.clientX, e.clientY);
    // console.log(e.clientY);
    // console.log(e.clientY / window.innerHeight);
    shelfElem.style.transform = `rotateX(${
      (5 * e.clientY) / window.innerHeight
    }deg)`;
  });

  // IntersectionObserver
  const io = new IntersectionObserver((entries, observer) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        observerElems[entries[i].target.dataset.index].classList.add(
          "observer-active"
        );
      }
    }
  });

  observerElems.forEach((item, i) => {
    item.dataset.index = i;
    io.observe(item);
  });
});

export default Home;
