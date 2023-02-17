import "./Home.css";
import "./BookView.css";
import React from "react";
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
              <div className="site-title-inner en">
                Jieun's Design Bookstore
              </div>
            </h2>
            <p className="header-description observer-ready">
              <span className="en">Jieun's Design Bookstore</span> 온라인
              북스토어에 오신것을 환영합니다. 여러분에게 좋은 책을
              추천해드릴게요.
            </p>
          </div>

          {/* shelf */}
          <div className="shelf">
            <h3 className="shelf-title">
              <div className="width-setter en">New Arrivals</div>
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

        {/* home-reading-section */}
        <div className="home-reading-section">
          <div className="width-setter">
            <div>
              <h2 className="bookOfMonth en">Featured Book of the Month</h2>
              <div className="header-media">
                <p className="content-image observer-ready">
                  <img src={bookImage} alt="book-image" />
                </p>
                <p className="content-para observer-ready en">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit architecto possimus reiciendis veritatis ipsum
                  perferendis necessitatibus dicta, numquam labore ea a rem
                  eligendi amet commodi pariatur quia molestiae vel magni facere
                  quidem assumenda fuga nisi voluptates eum. Harum error odio
                  voluptates alias, quibusdam laboriosam cupiditate esse, magnam
                  voluptate architecto quaerat ullam, repellendus vel dicta
                  accusantium laudantium non! Pariatur voluptatibus earum sed
                  nostrum similique placeat! Quo dolore earum sapiente ipsa
                  accusamus consectetur ullam aut beatae fugiat, vitae optio
                  quaerat deleniti qui.
                </p>
              </div>
            </div>
            <div>
              <p className="content-para observer-ready en">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem nobis, animi optio molestiae perspiciatis velit
                amet harum itaque voluptatum nemo cumque dicta ipsum cupiditate
                assumenda provident voluptatem error at ea officiis dolorem
                quisquam quasi odio id repudiandae? Soluta amet, ab iusto a
                animi et qui sint possimus, aperiam, ducimus reprehenderit?
                Culpa deleniti libero, quo assumenda dolore, voluptate doloribus
                pariatur adipisci error aperiam quod sequi illum beatae, quasi
                fugit provident neque sit numquam.
              </p>
              <p className="content-para observer-ready">
                Consequuntur quia perspiciatis ex error maiores, soluta
                praesentium incidunt neque voluptatem reprehenderit aut quas, ea
                similique sit deleniti, accusantium nesciunt consectetur ipsum
                optio eum. Omnis, nemo unde amet aliquam repellat repudiandae
                dolores ex. Similique est facere iure soluta nulla, distinctio
                repellendus suscipit voluptate numquam, labore maiores quibusdam
                dolore beatae maxime reprehenderit. Corrupti laborum vel eveniet
                libero. Facere magni accusamus autem! Blanditiis similique earum
                accusamus temporibus iste vel! Minima illum dicta alias
                blanditiis recusandae suscipit facilis porro nobis omnis sit
                doloribus officia rem ex, similique sunt quia provident id
                accusantium quaerat qui aut odio! Repellendus dignissimos, culpa
                accusamus magnam modi totam ut dicta ex mollitia illo sunt
                praesentium natus aliquam quasi harum omnis, eaque ipsum maxime
                obcaecati asperiores. Maiores perferendis totam commodi omnis
                debitis rerum eveniet eligendi sapiente?
              </p>
              <p className="content-para observer-ready">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem nobis, animi optio molestiae perspiciatis velit
                amet harum itaque voluptatum nemo cumque dicta ipsum cupiditate
                assumenda provident voluptatem error at ea officiis dolorem
                quisquam quasi odio id repudiandae? Soluta amet, ab iusto a
                animi et qui sint possimus, aperiam, ducimus reprehenderit?
                Culpa deleniti libero, quo assumenda dolore, voluptate doloribus
                pariatur adipisci error aperiam quod sequi illum beatae, quasi
                fugit provident neque sit numquam.
              </p>
            </div>
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
