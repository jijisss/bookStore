import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/HomePage.css";
import "../components/BookView.css";
import { cm } from "../components/cm.js";
import { BookView } from "../components/BookView.js";

// image
// newArrival
import newArrivalBook1_t from "../assets/images/newArrivalBook1_t.jpg";
import newArrivalBook2_t from "../assets/images/newArrivalBook2_t.jpg";
import newArrivalBook3_t from "../assets/images/newArrivalBook3_t.jpg";
import newArrivalBook4_t from "../assets/images/newArrivalBook4_t.jpg";
import newArrivalBook5_t from "../assets/images/newArrivalBook5_t.jpg";
// bookOfMonth
import bookOfMonthImage from "../assets/images/bookOfMonth.jpg";
import bookOfWeekImage1 from "../assets/images/bookOfWeek1.jpg";
import bookOfWeekImage2 from "../assets/images/bookOfWeek2.jpg";
import bookOfWeekImage3 from "../assets/images/bookOfWeek3.jpg";
import bookOfWeekImage4 from "../assets/images/bookOfWeek4.jpg";
import bookOfWeekImage5 from "../assets/images/bookOfWeek5.jpg";
// popularity
import popularBookImage1 from "../assets/images/popularBook1.jpg";
import popularBookImage2 from "../assets/images/popularBook2.jpg";
import popularBookImage3 from "../assets/images/popularBook3.jpg";
import popularBookImage4 from "../assets/images/popularBook4.jpg";
import popularBookImage5 from "../assets/images/popularBook5.jpg";
// import popularBookImage6 from "../assets/images/popularBook6.jpg";
// import popularBookImage7 from "../assets/images/popularBook7.jpg";
// import popularBookImage8 from "../assets/images/popularBook8.jpg";
// import popularBookImage9 from "../assets/images/popularBook9.jpg";
// import popularBookImage10 from "../assets/images/popularBook10.jpg";
// bestSeller
import bestSellerBookImage1 from "../assets/images/bestSellerBook1.jpg";
import bestSellerBookImage2 from "../assets/images/bestSellerBook2.jpg";
import bestSellerBookImage3 from "../assets/images/bestSellerBook3.jpg";
import bestSellerBookImage4 from "../assets/images/bestSellerBook4.jpg";
import bestSellerBookImage5 from "../assets/images/bestSellerBook5.jpg";
import bestSellerBookImage6 from "../assets/images/bestSellerBook6.jpg";
import bestSellerBookImage7 from "../assets/images/bestSellerBook7.jpg";
import bestSellerBookImage8 from "../assets/images/bestSellerBook8.jpg";
import bestSellerBookImage9 from "../assets/images/bestSellerBook9.jpg";
import bestSellerBookImage10 from "../assets/images/bestSellerBook10.jpg";

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
      <Header />
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
                <span className="en">New Arrivals</span> 베스트 신작 도서
              </div>
            </h3>
            <div className="book-list">
              {/* data-id="0" */}
              <div className="book-item" data-id="0">
                <div className="book">
                  <div className="book-front">
                    <div
                      className="book-cover"
                      style={{
                        backgroundImage: `url(${newArrivalBook1_t})`,
                      }}
                    ></div>
                  </div>
                  <div
                    className="book-side"
                    style={{
                      backgroundImage: `url(${newArrivalBook1_t})`,
                    }}
                  >
                    <h2 className="book-side-title">나의 아름다운 날들</h2>
                  </div>
                </div>
              </div>
              {/* data-id="1" */}
              <div className="book-item" data-id="1">
                <div className="book">
                  <div className="book-front">
                    <div
                      className="book-cover"
                      style={{ backgroundImage: `url(${newArrivalBook2_t})` }}
                    ></div>
                  </div>
                  <div
                    className="book-side"
                    style={{ backgroundImage: `url(${newArrivalBook2_t})` }}
                  >
                    <h2 className="book-side-title">날씨와 얼굴</h2>
                  </div>
                </div>
              </div>
              {/* data-id="2" */}
              <div className="book-item" data-id="2">
                <div className="book">
                  <div className="book-front">
                    <div
                      className="book-cover"
                      style={{ backgroundImage: `url(${newArrivalBook3_t})` }}
                    ></div>
                  </div>
                  <div
                    className="book-side"
                    style={{ backgroundImage: `url(${newArrivalBook3_t})` }}
                  >
                    <h2 className="book-side-title">집 떠나 사는 즐거움</h2>
                  </div>
                </div>
              </div>
              {/* data-id="3" */}
              <div className="book-item" data-id="3">
                <div className="book">
                  <div className="book-front">
                    <div
                      className="book-cover"
                      style={{ backgroundImage: `url(${newArrivalBook4_t})` }}
                    ></div>
                  </div>
                  <div
                    className="book-side"
                    style={{ backgroundImage: `url(${newArrivalBook4_t})` }}
                  >
                    <h2 className="book-side-title">다이다이 서점에서</h2>
                  </div>
                </div>
              </div>
              {/* data-id="4" */}
              <div className="book-item" data-id="4">
                <div className="book book-dark">
                  <div className="book-front">
                    <div
                      className="book-cover"
                      style={{ backgroundImage: `url(${newArrivalBook5_t})` }}
                    ></div>
                  </div>
                  <div
                    className="book-side"
                    style={{ backgroundImage: `url(${newArrivalBook5_t})` }}
                  >
                    <h2 className="book-side-title">희망의 끈</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* category */}
        <div className="category">
          <ul className="category-list">
            <Link to="" className="category-list-item">
              전체
            </Link>
            <Link to="" className="category-list-item">
              문학
            </Link>
            <Link to="" className="category-list-item">
              시/에세이
            </Link>
            <Link to="" className="category-list-item">
              소설
            </Link>
            <Link to="" className="category-list-item">
              사회과학
            </Link>
            <Link to="" className="category-list-item">
              예술문화
            </Link>
            <Link to="" className="category-list-item">
              역사
            </Link>
            <Link to="" className="category-list-item">
              인문학
            </Link>
            <Link to="" className="category-list-item">
              건강
            </Link>
            <Link to="" className="category-list-item">
              자기계발
            </Link>
          </ul>
        </div>
        {/* home-reading-section */}
        <div className="home-reading-section">
          <div className="width-setter">
            <div>
              <h2 className="header-media-title">
                당신에게 추천하는 이달의 책
              </h2>
              <div className="header-media">
                <div className="content-image observer-ready">
                  <Link to="">
                    <img src={bookOfMonthImage} alt="book-image" />
                  </Link>
                </div>
                <div className="content-para observer-ready">
                  30년 동안 정신분석 전문의로 일해 온 김혜남이 벌써 마흔이 된
                  당신에게 해 주고 싶은 말들을 담은 책이다. 그녀는 지금껏 살면서
                  한 가지 후회하는 게 있다면 스스로를 너무 닦달하며 인생을
                  숙제처럼 산 것이라고 말한다. 의사로, 엄마로, 아내로, 며느리로,
                  딸로 살면서 늘 의무와 책임감에 치여 어떻게든 그 모든 역할을
                  잘해 내려 애썼고 그러다 보니 정작 누려야 할 삶의 즐거움들을
                  놓쳐 버렸다는 것이다. 그러다 22년 전 마흔세 살에 파킨슨병
                  진단을 받으며 비로소 알게 되었다. 자신이 없으면 집안도 병원도
                  제대로 안 굴러갈 것 같았는데 세상은 너무나 멀쩡히 잘 굴러갔다.
                  그제야 그녀는 자신의 곁을 지켜 주는 사람들을 다시 보게 되었고,
                  놓쳐서는 안 될 인생의 소중한 것들이 무엇인지를 돌아보게
                  되었다. 그래서 벌써 마흔이 되어 버린, 후회 없는 인생을 살고
                  싶은 사람들에게 말해 주고 싶은 것도 딱 한가지다. “하나의 문이
                  닫히면 또 하나의 문이 열린다. 그러니 더 이상 고민하지 말고
                  그냥 재미있게 살아라!” <br></br>
                  <br></br>이 책은 2015년 ‘오늘 내가 사는 게 재미있는 이유’라는
                  제목으로 출간, 독자들의 사랑을 받으며 10만 부 돌파
                  베스트셀러가 된 것을 기념해 펴낸 스페셜 에디션으로 저자가
                  30년간 정신분석 전문의로 일하며 깨달은 인생의 비밀과 22년간
                  파킨슨병을 앓으면서도 유쾌하게 살 수 있는 이유를 전한다. 또한
                  ‘완벽한 때는 결코 오지 않는 법이다’, ‘때론 버티는 것이
                  답이다’, ‘제발 모든 것을 상처라고 말하지 말 것’, ‘가까운
                  사람일수록 해서는 안 될 것들이 있다’ 등 환자들에게 미처 하지
                  못했던 그러나 꼭 해 주고 싶은 이야기들을 담고 있다.
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="content-para observer-ready">
                <h2>이주의 책</h2>
                <div className="book-of-week-content">
                  <ul className="book-of-week-content-list">
                    <li className="book-of-week-content-item">
                      <Link to="">
                        <img src={bookOfWeekImage1} />
                        <p className="book-title">세이노의 가르침</p>
                        <p className="author">세이노</p>
                      </Link>
                    </li>
                    <li className="book-of-week-content-item">
                      <Link to="">
                        <img src={bookOfWeekImage2} />
                        <p className="book-title">백조와 박쥐</p>
                        <p className="author">히가시노 게이고</p>
                      </Link>
                    </li>
                    <li className="book-of-week-content-item">
                      <Link to="">
                        <img src={bookOfWeekImage3} />
                        <p className="book-title">마지막 섬</p>
                        <p className="author">쥴퓌 리바넬리</p>
                      </Link>
                    </li>
                    <li className="book-of-week-content-item">
                      <Link to="">
                        <img src={bookOfWeekImage4} />
                        <p className="book-title">방자</p>
                        <p className="author">유키 하루오</p>
                      </Link>
                    </li>
                    <li className="book-of-week-content-item">
                      <Link to="">
                        <img src={bookOfWeekImage5} />
                        <p className="book-title">심연</p>
                        <p className="author">앨마 카츠</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="content-para observer-ready">
                <h2>인기 급상승 도서</h2>
                <div className="popularity-book-content">
                  <ul className="popularity-book-content-list">
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage1} />
                        <p className="book-title">망그러진 만화</p>
                        <p className="author">유랑</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage2} />
                        <p className="book-title">우리는 조구만 존재야</p>
                        <p className="author">조구만 스튜디오</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage3} />
                        <p className="book-title">
                          그대 늙어가는 것이 아니라 익어가는 것이다
                        </p>
                        <p className="author">오평선</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage4} />
                        <p className="book-title">
                          너의 말이 좋아서 밑줄을 그었다
                        </p>
                        <p className="author">림태주</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage5} />
                        <p className="book-title">별빛 너머의 별</p>
                        <p className="author">나태주</p>
                      </Link>
                    </li>
                    {/* <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage6} />
                        <p className="book-title">나에게 고맙다</p>
                        <p className="author">전승환</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage7} />
                        <p className="book-title">작은 별이지만 빛나고 있어</p>
                        <p className="author">소윤</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage8} />
                        <p className="book-title">결국 무엇이든 해내는 사람</p>
                        <p className="author">김상현</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage9} />
                        <p className="book-title">안녕, 소중한 사람</p>
                        <p className="author">정한경</p>
                      </Link>
                    </li>
                    <li className="popularity-book-content-list-item">
                      <Link tp="">
                        <img src={popularBookImage10} />
                        <p className="book-title">불안</p>
                        <p className="author">알랭 드 보통</p>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="content-para observer-ready">
                <h2>베스트 셀러</h2>
                <div className="bestSeller-book-content">
                  <ul className="bestSeller-book-content-list">
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage1} />
                        <p className="bestSeller-ranking en">1</p>
                        <p className="book-title">김미경의 마흔 수업</p>
                        <p className="author">김미경</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage2} />
                        <p className="bestSeller-ranking en">2</p>
                        <p className="book-title">1퍼센트 부자의 법칙</p>
                        <p className="author">사이토 히토리</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage3} />
                        <p className="bestSeller-ranking en">3</p>
                        <p className="book-title">세이노의 가르침</p>
                        <p className="author">세이노</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage4} />
                        <p className="bestSeller-ranking en">4</p>
                        <p className="book-title">주식 시세의 비밀</p>
                        <p className="author">정재호</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage5} />
                        <p className="bestSeller-ranking en">5</p>
                        <p className="book-title">
                          슬램덩크 리소스(THE FIRST SLAM DUNK re:SOURCE)
                        </p>
                        <p className="author">이노우에 타케히코</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage6} />
                        <p className="bestSeller-ranking en">6</p>
                        <p className="book-title">K 배터리 레볼루션</p>
                        <p className="author">박순혁</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage7} />
                        <p className="bestSeller-ranking en">7</p>
                        <p className="book-title">
                          원씽(The One Thing)(리커버 특별판)
                        </p>
                        <p className="author">게리 켈러 , 제이 파파산</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage8} />
                        <p className="bestSeller-ranking en">8</p>
                        <p className="book-title">
                          만일 내가 인생을 다시 산다면(10만 부 돌파기념 스페셜
                          에디션)
                        </p>
                        <p className="author">김혜남</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage9} />
                        <p className="bestSeller-ranking en">9</p>
                        <p className="book-title">정세현의 통찰</p>
                        <p className="author">정세현</p>
                      </Link>
                    </li>
                    <li className="bestSeller-book-content-item">
                      <Link to="">
                        <img src={bestSellerBookImage10} />
                        <p className="bestSeller-ranking en">10</p>
                        <p className="book-title">
                          불편한 편의점(40만부 기념 벚꽃 에디션)
                        </p>
                        <p className="author">김호연</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="content-para observer-ready">
                <h2>이벤트</h2>
                <div className="event-content">
                  <Link to="">
                    <div className="event-banner">
                      <p className="event-title">
                        우리의 책과 삶을 사랑하는 마음을 담아.
                      </p>
                      <p className="event-text">
                        이번달 읽은 책 속에서 독자 여러분의 마음을 울린, 위로가
                        되는 문구가 있었나요?
                        <br></br>그 문구를 LifeBooks에게 공유해주세요.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal-cover */}
        <div className="modal-cover"></div>

        {/* top btn */}
        <div className="top-btn">
          <button id="top" onClick={scrollToTop} type="button">
            TOP
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

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
