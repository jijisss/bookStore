import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bookOfMonth.jpg";
import bookDetailImg from "../images/i9791190538510.jpg";
import btnClickHandler from "./CloseOpenBtn";

function BookOfMonth() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const bookData = {
    bookName: "zz",
    authorName: "김혜남 저자",
  };

  window.onload = function () {
    document.getElementById("authorName").innerHTML = bookData.authorName;
  };

  return (
    <>
      <div className="container-wrapper">
        <div id="contents" className="contents-wrap">
          {/* prod-detail-header */}
          <div className="prod-detail-header">
            <div className="header-contents-inner">
              <div className="prod-detail-title-wrap">
                <div className="prod-title-area">
                  <div className="prod-title-box">
                    만일 내가 인생을 다시 산다면
                  </div>
                  <div className="prod-desc-area">
                    <p>벌써 마흔이 된 당신에게 해 주고 싶은 말들 42</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author" id="authorName">
                          <Link to=""></Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          메이븐
                        </Link>
                        2022년 11월 11일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 19위 · 인문 2위
                        </span>
                      </div>
                      <div className="prod-info-text">
                        가장 최근에 출시된 개정판입니다.
                        <Link to="" className="btn-xxs">
                          구판보기
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-prod-info thumb">
                    <div className="portrait-img-box">
                      <img src={bookPreviewImage} />
                    </div>
                  </div>
                  <div className="col-prod-info">
                    <div className="prod-price-wrap">
                      <div className="prod-price">
                        <span className="percent">10%</span>
                        <span className="val">15,480</span>
                        <s className="val-origin">17,200</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">360p</div>
                          </div>
                        </div>
                      </div>
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">배송안내</div>
                          <div className="prod-guide-cont">
                            <div className="delivery-guide-text">
                              <span id="OrderDeliveryType">무료배송</span>
                            </div>
                          </div>
                          <div className="prod-guide-cont">
                            <div className="delivery-guide-text">
                              <span id="OrderEstimatedDate">
                                <strong>3월 7일 출고예정</strong>
                              </span>
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
          {/* prod-detail-body */}
          <div className="prod-detail-body">
            <div className="tab-list-wrap">
              <div className="tab-list-inner">
                <div className="list-inner">
                  <ul className="tabs">
                    <li className="tab-item">
                      <Link to="">상품정보</Link>
                    </li>
                    <li className="tab-item">
                      <Link to="">리뷰</Link>
                    </li>
                    <li className="tab-item">
                      <Link to="">교환/반품/품절</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="prod-detail-contents">
              <div className="prod-detail-contents-inner">
                <div className="prod-detail-area detail-img">
                  <div className="inner">
                    <img src={bookDetailImg} />
                  </div>
                </div>
                <div className="prod-detail-area book-intro">
                  <div className="intro-book">
                    <div className="title-wrap title-size-md">
                      <h2 className="title-heading">책 소개</h2>
                    </div>
                    <div className="title-wrap title-size-sm">
                      <p className="title-heading fw-medium">
                        이 책이 속한 분야
                      </p>
                    </div>
                    <ul className="intro-category-list">
                      <li className="category-list-item">
                        <Link to="" className="intro-category-link">
                          국내도서
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          인문
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          심리학
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          교양심리
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="intro-award">
                    <div className="title-wrap title-size-sm">
                      <p className="title-heading">수상내역/미디어추천</p>
                    </div>
                    <div className="auto-overflow-wrap type-text">
                      <div className="auto-overflow-contents">
                        <div className="auto-overflow-inner">
                          <ul className="text-award-list">
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 서울신문 >
                              2023년 1월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 조선일보 >
                              2022년 11월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 한겨레신문
                              > 2022년 12월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 한국일보 >
                              2023년 1월 4주 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      "하나의 문이 닫히면 또 하나의 문이 열린다.
                      <br></br>
                      그러니 더 이상 고민하지 말고 그냥 재미있게 살아라!"
                    </div>
                    <div className="info-text">
                      30년 동안 정신분석 전문의로 일해 온 김혜남이 벌써 마흔이
                      된 당신에게 해 주고 싶은 말들을 담은 책이다. 그녀는 지금껏
                      살면서 한 가지 후회하는 게 있다면 스스로를 너무 닦달하며
                      인생을 숙제처럼 산 것이라고 말한다. 의사로, 엄마로,
                      아내로, 며느리로, 딸로 살면서 늘 의무와 책임감에 치여
                      어떻게든 그 모든 역할을 잘해 내려 애썼고 그러다 보니 정작
                      누려야 할 삶의 즐거움들을 놓쳐 버렸다는 것이다. 그러다
                      22년 전 마흔세 살에 파킨슨병 진단을 받으며 비로소 알게
                      되었다. 자신이 없으면 집안도 병원도 제대로 안 굴러갈 것
                      같았는데 세상은 너무나 멀쩡히 잘 굴러갔다. 그제야 그녀는
                      자신의 곁을 지켜 주는 사람들을 다시 보게 되었고, 놓쳐서는
                      안 될 인생의 소중한 것들이 무엇인지를 돌아보게 되었다.
                      그래서 벌써 마흔이 되어 버린, 후회 없는 인생을 살고 싶은
                      사람들에게 말해 주고 싶은 것도 딱 한가지다. “하나의 문이
                      닫히면 또 하나의 문이 열린다. 그러니 더 이상 고민하지 말고
                      그냥 재미있게 살아라!”
                      <br></br>
                      <br></br>이 책은 2015년 ‘오늘 내가 사는 게 재미있는
                      이유’라는 제목으로 출간, 독자들의 사랑을 받으며 10만 부
                      돌파 베스트셀러가 된 것을 기념해 펴낸 스페셜 에디션으로
                      저자가 30년간 정신분석 전문의로 일하며 깨달은 인생의
                      비밀과 22년간 파킨슨병을 앓으면서도 유쾌하게 살 수 있는
                      이유를 전한다. 또한 ‘완벽한 때는 결코 오지 않는 법이다’,
                      ‘때론 버티는 것이 답이다’, ‘제발 모든 것을 상처라고 말하지
                      말 것’, ‘가까운 사람일수록 해서는 안 될 것들이 있다’ 등
                      환자들에게 미처 하지 못했던 그러나 꼭 해 주고 싶은
                      이야기들을 담고 있다.
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area product-trailer">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">북 트레일러</h2>
                  </div>
                  <div className="video-wrap" id="detail-video1">
                    <iframe
                      src="https://www.youtube.com/embed/deUM3oCJVj0?enablejsapi=1"
                      title="정신과 의사가 말하는 사이 안 좋은 부부 공통점 “이것 안 한다”"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      id="youtube-video1"
                      data-gtm-yt-inspected-19="true"
                    ></iframe>
                  </div>
                  <ul className="bul-list">
                    <li className="bul-item-dot font-size-xxs">
                      출판사의 사정에 따라 서비스가 변경 또는 중지될 수
                      있습니다.
                    </li>
                    <li className="bul-item-dot font-size-xxs">
                      Window7의 경우 사운드 연결이 없을 시, 동영상 재생에 오류가
                      발생할 수 있습니다. 이어폰, 스피커 등이 연결되어 있는지
                      확인 하시고 재생하시기 바랍니다.
                    </li>
                  </ul>
                </div>
                <div className="prod-detail-area product-person">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">작가정보</h2>
                  </div>
                  <div className="gray-box">
                    <div className="title-wrap title-size-def">
                      <h3 className="title-heading">
                        <span className="title-prefix">저자(글)</span>
                        <span className="text">김혜남</span>
                      </h3>
                    </div>
                    <div className="writer-info-box open">
                      <div className="writer-profile">
                        <img
                          data-kbbfn="s3-image"
                          loading="lazy"
                          alt="김혜남"
                          src="https://contents.kyobobook.co.kr/dtl/author/1000129201.jpg"
                          data-src="https://contents.kyobobook.co.kr/dtl/author/1000129201.jpg"
                        />
                      </div>

                      <div className="auto-overflow-wrap overflow">
                        <div className="auto-overflow-contents">
                          <div className="auto-overflow-inner">
                            <p className="info-text">
                              정신분석 전문의
                              <br></br>
                              1959년 서울에서 태어나 고려대학교 의과대학을
                              졸업하고 국립 정신병원(현 국립정신건강센터)에서
                              12년 동안 정신분석 전문의로 일했다. 경희대 의대,
                              성균관대 의대, 인제대 의대 외래교수이자 서울대
                              의대 초빙교수로 학생들을 가르쳤고, 김혜남
                              신경정신과의원 원장으로 환자들을 돌보았다. 80만 부
                              베스트셀러 《서른 살이 심리학에게 묻다》,
                              《심리학이 서른 살에게 답하다》를 비롯해, 《나는
                              정말 너를 사랑하는 걸까?》, 《당신과 나 사이》,
                              《보이지 않는 것에 의미가 있다》 등 10여 권의 책을
                              펴내 130만 독자의 공감을 얻었다. 또한 2006년
                              한국정신분석학회 학술상을 받은 바 있다.
                              <br></br>
                              정신분석 전문의로, 두 아이의 엄마로, 시부모님을
                              모시고 사는 며느리로 눈코 뜰 새 없이 바빴던 그녀는
                              마흔 살까지만 해도 ‘내가 잘했으니까 지금의 내가
                              있는 거지’라고 생각했다. 집이고 병원이고
                              환자들이고 자신이 없으면 큰일이 난다고 생각한
                              것이다. 곁에 있는 사람들에게 고맙다고 말하면서도
                              속으로는 원망한 적이 더 많았다.
                              <br></br>
                              그런데 2001년 마흔세 살에 몸이 점점 굳어 가는
                              파킨슨병 진단을 받고 나서 병마와 싸우며 비로소
                              알게 되었다. 자신에게 주어진 모든 역할을 다 잘해
                              내고 싶은 마음에 스스로를 닦달하며 인생을 숙제처럼
                              살아오다 보니 정작 누려야 할 삶의 즐거움들을 너무
                              많이 놓쳐 버렸다는 사실을 말이다. 그리고 더
                              충격적인 것은 자신이 없는데도 세상이 너무나
                              멀쩡하게 잘 돌아간다는 사실이었다.
                              <br></br>
                              그녀는 자신에게 들이닥친 불행을 도저히 받아들일 수
                              없었다. 너무 억울하고, 사람들이 밉고, 세상이
                              원망스러워 아무것도 못 한 채 한 달 동안 침대에
                              누워 천장만 바라보았다. 그러던 어느 날 그녀는 문득
                              깨달았다. 아직 자신은 죽은 게 아니며 누워 있는다고
                              바뀌는 건 아무것도 없다는 사실을 말이다. 다행히
                              병이 초기 단계라 아직 할 수 있는 일들도 많았다.
                              그래서 일어났고, 하루를 살았고, 또 다음 날을
                              살았다. 대신에 해야만 하는 일보다 하고 싶지만 계속
                              미뤄 둔 일들을 먼저 하기 시작했다. 책을 쓰기
                              시작한 것도 그때부터다. 그렇게 22년 동안 병마와
                              싸우며 진료와 강의를 하고, 두 아이를 키우고, 열
                              권의 책을 썼다.
                              <br></br>
                              사람들은 파킨슨병을 앓으면서 어떻게 그 일들을 다
                              할 수 있었느냐고 신기해하지만 그녀는 담담히
                              말한다. 더 이상 인생을 숙제처럼 살지 않겠다고,
                              어차피 사는 거 재미있게 살겠다고 마음먹으니까
                              세상에 새롭고, 신기하고, 감탄할 만한 일들이 참
                              많았다고. 그래서 몸이 굳어 옆으로 돌아눕는 것조차
                              남의 도움을 받아야 할 만큼 고통스러운 때도 있지만
                              고통과 고통 사이에는 덜 아픈 시간이 있고, 그
                              시간에 할 수 있는 일들을 하며 하루하루를 차곡차곡
                              살아온 것뿐이라고. 2014년 1월 병이 악화되어 병원
                              문을 닫고 나서는 더 이상 환자들을 진료할 수 없게
                              되었고, 그 사이 크고 작은 수술을 다섯 차례 받으며
                              죽을 고비도 넘겼지만 그녀는 여전히 하고 싶은
                              일들이 많다고 말한다.
                              <br></br>
                              삶이 힘들고 어렵고 좀체 나아질 것 같지 않아 보여도
                              어느 때나 즐길 거리는 분명히 있다. 그리고 즐길
                              거리가 다양한 사람일수록 불가피한 불운과 불행 또한
                              잘 버틸 수 있다. 그래서 그녀는 앞으로 병이 더
                              악화되어 더 이상 몸을 움직일 수 없게 되더라도 그때
                              할 수 있는 일들을 찾아 하면서 재미있게 살고 싶다고
                              말한다. 벌써 마흔이 넘어 버린, 하루하루 잘 버텨
                              내고 있지만 가끔은 힘들고 외로운 사람들에게 해
                              주고 싶은 이야기도 딱 하나뿐이다.
                              <br></br>
                              “하나의 문이 닫히면 또 다른 문이 열린다. 그러니 더
                              이상 고민하지 말고 그냥 재미있게 살았으면 좋겠다.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="auto-overflow-footer">
                      <button
                        onClick={(e) => {
                          btnClickHandler(e, "writer-info-box");
                        }}
                        type="button"
                        className="btn-more-body"
                      >
                        <span
                          className="text open"
                          data-btn-toggle="open"
                        ></span>
                        <span className="ico-arw"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area book-contents">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">목차</h2>
                  </div>
                  <div className="auto-overflow-wrap overflow">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <ul className="book-contents-list">
                          <li className="book-contents-item">
                            10만 부 기념 스페셜 에디션을 펴내며
                            <br></br>
                            프롤로그- 파킨슨병이 내게 가르쳐 준 것들
                            <br></br>
                            <br></br>
                            Chapter 1. 30년 동안 정신분석 전문의로 일하며 깨달은
                            인생의 비밀
                            <br></br>
                            아무리 착하게 살아도 불행이 찾아올 때가 있다
                            <br></br>
                            완벽한 때는 결코 오지 않는 법이다
                            <br></br>딱 한 발짝만 내디뎌 볼 것<br></br>
                            처음은 누구나 서툴다
                            <br></br>
                            하나의 문이 닫히면 또 다른 문이 열린다
                            <br></br>
                            원하는 삶을 산다는 것의 진짜 의미
                            <br></br>
                            지금껏 살면서 가장 후회하는 일<br></br>해 봤자 안 될
                            게 뻔하다는 말부터 멈출 것<br></br>
                            <br></br>
                            Chapter 2. 환자들에게 미처 하지 못한, 꼭 해 주고
                            싶은 이야기
                            <br></br>
                            어른으로 산다는 것에 대하여
                            <br></br>
                            환자들이 내게 가장 많이 한 말<br></br>
                            과거가 현재를 지배하도록 놔두지 말 것<br></br>
                            사랑하는 사람을 함부로 치유하려 들지 말 것<br></br>
                            직장 선후배를 굳이 좋아하려 애쓰지 말 것<br></br>
                            내가 열등감을 가지고도 즐겁게 사는 비결
                            <br></br>
                            제발 모든 것을‘ 상처’라고 말하지 말 것<br></br>늘
                            혼자가 편하다고 말하는 사람들에게
                            <br></br>
                            나쁜 감정을 가졌다고 자책하는 사람들에게
                            <br></br>
                            <br></br>
                            Chapter 3. 내가 병을 앓으면서도 유쾌하게 살 수 있는
                            이유
                            <br></br>
                            22년간 파킨슨병을 앓으며 깨달은 것들
                            <br></br>
                            훨씬 더 행복해질 수 있는 나를 가로막은 것은 바로
                            나였다
                            <br></br>
                            내가 그를 용서한 진짜 이유
                            <br></br>내 슬픔을 등에 지고 가는 친구들에 대하여
                            <br></br>
                            내가 충고를 잘 하지 않는 까닭
                            <br></br>
                            남에게 휘둘리지 않고 나를 지키는 법<br></br>
                            공부의 즐거움에 대하여
                            <br></br>내 말에 귀 기울여 주는 사람이 있다는 것, 그
                            행운에 대하여
                            <br></br>
                            그냥 재미있게 살자고 마음먹었을 뿐이다
                            <br></br>
                            <br></br>
                            Chapter 4. 마흔 살에 알았더라면 더 좋았을 것들
                            <br></br>
                            아버지의 죽음 앞에서
                            <br></br>
                            나이 듦을 받아들이는 태도
                            <br></br>
                            아무것도 하지 않는 시간이 반드시 필요한 이유
                            <br></br>
                            나는 남편을 모르고, 남편은 나를 모른다는 사실
                            <br></br>
                            좋은 부모가 되려고 너무 애쓰지 말 것<br></br>
                            때론 버티는 것이 답이다
                            <br></br>
                            가까운 사람일수록 해서는 안 될 것들이 있다
                            <br></br>
                            나는 참 가진 게 많은 사람이었다
                            <br></br>
                            사람을 너무 믿지 마라, 그러나 끝까지 믿어야 할 것도
                            사람이다
                            <br></br>
                            <br></br>
                            Chapter 5. 만일 내가 인생을 다시 산다면
                            <br></br>더 많은 실수를 저질러 볼 것이다
                            <br></br>
                            나이 듦을 두려워하지 않을 것이다
                            <br></br>
                            상처를 입더라도 더 많이 사랑하며 살 것이다
                            <br></br>
                            나는 나의 길을 걷고, 아이는 아이의 길을 걷게 할
                            것이다
                            <br></br>한 번쯤은 무엇에든 미쳐 볼 것이다
                            <br></br>
                            힘든 때일수록 유머를 잃지 않을 것이다
                            <br></br>
                            어떤 순간에도 나는 나를 믿을 것이다
                            <br></br>
                            그리고 조용히 죽음을 맞이할 것이다
                            <br></br>
                            <br></br>
                            에필로그- 내 인생의 버킷 리스트 10
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="auto-overflow-footer">
                      <button
                        type="button"
                        className="btn-more-body"
                        data-btn-toggle
                      >
                        <span className="text">펼치기</span>
                        <span className="ico-arw"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area book-recommend">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">추천사</h2>
                  </div>
                  <div className="auto-overflow-wrap type-text overflow">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <ul className="recommend-list">
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">조선일보</p>
                              <p className="info-text">
                                고난에 봉착한 사람들에게 그 고난과 함께 살아가는
                                방법을 알려 준다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">동아일보</p>
                              <p className="info-text">
                                그는 몸은 다소 불편할지언정 마음은 세상에서 가장
                                건강하고 따뜻한 사람이었다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">중앙일보</p>
                              <p className="info-text">
                                지은이가 인생을 살아오며 깨달은 지혜와 주옥같은
                                말들이 곳곳에 담겨 있다. 담담하게 건네는
                                조언들이 마음을 울리는 책이다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">매일경제</p>
                              <p className="info-text">
                                22년간 파킨슨병을 앓으며 깨달은 삶의 비밀을
                                고스란히 담고 있다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">연합뉴스</p>
                              <p className="info-text">
                                저자는 독자들을 향해 예기치 않은 불행에 맞서는
                                길은 용기를 내어 한 발짝 앞으로 내딛는 것이라
                                말한다. ‘삶과 연애하라’는 저자의 긍정적 태도는
                                삶의 조건에 더해 울림을 준다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">한겨레신문</p>
                              <p className="info-text">
                                그는 최근 10가지 버킷 리스트를 만들었다. 그중 한
                                가지가 눈길을 잡는다. “나에게 상처를 준
                                사람들에게 욕 실컷 하고 싶어요. 그동안 너무
                                고상한 척, 아무렇지도 않은 척 살았어요. 욕쟁이
                                할머니처럼 나에게 상처를 준 사람들을 향해
                                시원하게 욕 한번 퍼붓고 싶어요.”
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">문화일보</p>
                              <p className="info-text">
                                그동안 독자의 어깨를 가만히 토닥이고 냉철하고
                                이성적인 조언을 해 주던 그가 이번엔 ‘자신’의
                                이야기를 한다. 가볍게 말하면 ‘김혜남이 재미있게
                                사는 이유’겠고, 무게를 잡자면 30년간 정신과
                                의사로 일한 저자의 ‘행복한 삶을 위한 조건’이다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">
                                이정엽 (정신분석 전문의)
                              </p>
                              <p className="info-text">
                                투병 중에 집필한 에세이여서 그런지 잔잔한 한
                                줄의 문장이라도 그것에는 가슴속 가장 깊은 곳까지
                                뒤흔드는 감동이 있다. 일상 속에서 작은 불편조차
                                간혹 투정을 부리곤 하는 나 스스로를 깊은 반성과
                                성찰로 이끄는 글이기도 하다.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="auto-overflow-footer">
                      <button
                        type="button"
                        className="btn-more-body active"
                        data-btn-toggle=""
                      >
                        <span className="text">접기</span>
                        <span className="ico-arw"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area book-inside">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">책 속으로</h2>
                  </div>
                  <div className="auto-overflow-wrap type-text overflow active">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <p className="info-text">
                          책을 정리하면서 정신분석의 선구자인 프로이트가 말한
                          정상의 기준을 다시 한번 들여다보게 되었다. 그의 기준에
                          따르면 사람이 ‘약간의 히스테리, 약간의 편집증, 약간의
                          강박’을 가지고 있는 것이 정상이다. 즉 세상에 문제 없는
                          사람은 없다. 모든 사람이 어느 정도의 문제는 다 가지고
                          있다. 그러니 자신에게 문제가 있다는 것을
                          부끄러워하거나 부정할 필요가 없다.
                          <br></br>- 서문 중에서
                          <br></br>
                          <br></br>
                          그럼에도 한 가지 후회하는 게 있다면 인생을 너무
                          숙제처럼 해치우듯 살았다는 것이다. 의사로, 엄마로,
                          아내로, 며느리로, 딸로 살면서 나는 늘 의무와 책임감에
                          치여 어떻게든 그 모든 역할을 잘해 내려 애썼다. 나
                          아니면 모든 게 잘 안 돌아갈 거라는 착각 속에 앞만 보며
                          달려왔고, 그러다 보니 정작 누려야 할 삶의 즐거움들을
                          놓쳐 버렸다. 아이를 키우는 기쁨을 즐기기는커녕 행여
                          아이에게 부족하고 좋은 엄마가 안 될까 봐 스스로를
                          닦달하면서 살았고, 일의 기쁨과 행복을 느끼기보다 행여
                          뒤처질세라 쫓기듯이 일을 하고 공부를 했다. 삶을
                          즐기려고 마음먹었다면 시간을 분배하고 내가 할 수 있는
                          일과 할 수 없는 일을 구분해 가족에게 도움을 청했을
                          텐데 나는 그러지 못했다. 삶을 즐기려고 마음먹었다면
                          집에 가자마자 저녁 준비한다고 서두르기 전에 아이와 눈
                          한 번 더 마주치며 안아 주었을 텐데 나는 그러지 못했다.
                          삶을 즐기려고 마음먹었다면 출근하며 하늘 한 번 쳐다볼
                          여유를 가지고 환자들을 기쁘게 맞이할 수 있었을 텐데
                          나는 그러지 못했다. 더 기가 막힌 것은 누군가 나에게
                          삶의 즐거움을 포기한 대가로 얻은 것이 무엇이냐고
                          물으면 할 말이 없다는 것이다. 그 시절에 가졌던
                          죄책감과 피해의식은 나의 기쁨을 앗아 가고 나를
                          피곤하게 만들었으며, 나를 분노하게 만들었을 뿐이다.
                          그래서 이제는 그러지 않으려고 한다. 무엇이든 다 잘해
                          내려는 욕심을 내려놓고, 방치해 두었던 나 자신을 챙기며
                          살기로 결심한 것이다. 그래서 컨디션이 좋은 날은 좋은
                          대로, 컨디션이 좋지 않은 날엔 그런 대로, 하고 싶었지만
                          바쁘다는 핑계로 미뤄 둔 일들을 하며 하루를 재미있게
                          보내려고 애쓴다.
                          <br></br>- 〈지금껏 살면서 가장 후회하는 일〉 중에서
                          <br></br>
                          <br></br>
                          언젠가 어느 기자가 나에게 물었다.
                          <br></br>
                          “환자들이 선생님께 가장 많이 하는 말이 뭔가요?”
                          <br></br>
                          “울음요.”
                          <br></br>
                          “네?”
                          <br></br>
                          지금은 정신과가 정신건강의학과로 바뀌었고 조금씩
                          사람들의 인식도 달라지고는 있지만 그럼에도 정신과를
                          찾는 사람을 이상하게 보는 시선은 여전히 남아 있다.
                          그래서 환자들은 나를 찾아오기까지 굉장히 많은 시간을
                          홀로 고통스럽게 보낸다. 그래서일까. 그들은 진료실에
                          들어와 내 앞에 앉으면 울음부터 터트리는 경우가 많았다.
                          그동안 너무 하고 싶었지만 그 누구한테도 털어놓지 못한
                          이야기를 하려니 그것이 먼저 울음으로 터져 나오는
                          것이었다.
                          <br></br>- 〈환자들이 내게 가장 많이 한 말〉 중에서
                          <br></br>
                          <br></br>
                          나는 최선이 아닌 차선의 길에서 더 많은 가능성을
                          발견했고 내가 미처 생각지 못한 것들을 배울 수 있었다.
                          사람들은 자기가 원하는 것은 꼭 이뤄져야 한다고
                          생각한다. 그래서 다른 길도 있을 수 있는데 원하는 게
                          이루어지지 않았다는 이유만으로 실패했다고 단정 짓는다.
                          하지만 그것은 하나의 문이 닫힌 것일 뿐, 그 이상도 그
                          이하도 아니다. 게다가 하나의 문이 닫히면 또 다른 문이
                          열린다. 그러니 최선이 이루어지지 않았다고 해서 좌절할
                          필요가 전혀 없다.
                          <br></br>- 〈하나의 문이 닫히면 또 다른 문이 열린다〉
                          중에서
                          <br></br>
                          <br></br>내 딸아이는 어릴 때 심장 수술을 받았다.
                          지금도 아이의 가슴에는 그때의 수술 자국이 길게 나
                          있다. 딸아이는 그 흉터 때문에 고민이 많았는데 어느 날
                          나는 아이를 꼭 안아 주며 말했다. “그 흉터는 바로 네가
                          큰 병을 이겨 냈다는 징표란다. 어린 나이에 그 큰 수술을
                          견뎌 내는 건 아무나 할 수 없는 일이었어. 그래서 나는
                          네 흉터가 오히려 자랑스럽다.” 당신도 마찬가지다.
                          상처는 쓰라렸지만 상처를 이겨 내는 과정은 힘들었지만
                          어쨌든 당신은 그것을 이겨 냈다. 흉터가 바로 그
                          증거이다. 흉터야말로 당신이 그만큼 용감했고,
                          강인했음을 말해 주는 삶의 훈장인 것이다.
                          <br></br>- 〈어떤 순간에도 나는 나를 믿을 것이다〉
                          중에서
                          <br></br>
                          <br></br>
                          지금까지 삶을 돌아보니 나와 맞지 않는 사람은 10명 중
                          2명 정도였다. 그리고 나와 맞지 않는 2명은 내가 아무리
                          노력한다고 해도 결코 가까워지는 법이 없었다. 아무리
                          좋은 남자와 좋은 여자를 만나게 해 줘도 그들 사이에
                          끌림이 없으면 연인 관계로 발전하기 힘든 것처럼, 아무리
                          괜찮은 사람들이라도 둘 사이는 막상 그리 친하지 않은
                          경우도 허다하다. 그러니 모든 사람들이 당신을 좋아해
                          줬으면 좋겠다는 생각에 껄끄러운 사람들과의 관계 개선에
                          너무 에너지를 쏟아붓지 않았으면 좋겠다.
                          <br></br>- 〈직장 선후배를 굳이 좋아하려 애쓰지 말
                          것〉 중에서
                          <br></br>
                          <br></br>
                          정신분석가인 융은 “마흔이 되면 마음에 지진이
                          일어난다”고 했다. 삶 전체가 흔들리는 듯한 혼란을 겪는
                          것이다. 제임스 홀리스에 따르면 우리는 1차 성인기인
                          12~40세까지 누구의 아들딸, 누구의 엄마 아빠, 어느
                          회사의 팀장으로서 가족과 사회 안에서 사회화된다.
                          그것은 진정한 본성에 따르기보다는 인생은 이렇게 살아야
                          하고 선택은 이렇게 해야 한다고 키워진 결과로서의 삶에
                          가깝다. 즉 진정한 자신에게서 멀어진 채 살아온 것이다.
                          <br></br>
                          그러다 마흔이 되면 우리가 보낸 시간들이 오롯이 기록된
                          과거의 책장을 넘기며, 이제껏 열심히 일궈 온 삶을
                          돌아보게 된다. 그 과정에서 모든 것을 손에 넣었다 해도,
                          내가 누구이고 내가 하고자 하는 일이 무엇인지, 그리고
                          단 한 번뿐인 인생에서 내가 성취한 게 과연 가치가 있는
                          것인지에 대한 회의가 몰려온다. 아직도 원하는 것이
                          많은데, 아직도 하고 싶은 일이 많은데, 시간은 계속
                          흐르고 우리에게 남은 선택의 폭은 점점 줄어만 가기
                          때문이다.
                          <br></br>- 〈나이 듦을 받아들이는 태도〉 중에서
                          <br></br>
                          <br></br>
                          버틴다고 하면 사람들은 흔히 그것이 굴욕적이라고
                          생각한다. 그래서 왜 그렇게까지 살아야 하는지
                          모르겠다고들 말한다. 하지만 버틴다는 것은 그저 말없이
                          순종만 하는 수동적인 상태를 이야기하는 게 아니다.
                          아무것도 하지 않고 방에 누워서 시간이 지나가기만을
                          기다리는 게 결코 아니라는 말이다. 버틴다는 것은
                          내적으로는 들끓어 오르는 분노나 모멸감, 부당함 등을
                          다스릴 수 있어야 하고, 외부에서 주어진 기대 행동에
                          나를 맞추면서도 나 자신을 잃지 않아야 하는 매우
                          역동적이면서도 힘든 과정이다. 그래서 버틴다는 것은
                          기다림이라 할 수 있다. 미래를 위해 현재를 참아 내는
                          것이고, 다음 단계로 나아가기 위해 오늘 부단한 노력을
                          하는 것이다.
                          <br></br>
                          내가 수험생 시절을 인내하지 않았다면 의사가 되기 위한
                          첫걸음인 의과대학에 가지 못했을 테고, 첫 직장에서 견뎌
                          내지 못했다면 정신분석을 공부할 생각을 못 했을 테고,
                          결혼을 깨 버렸다면 지금의 가족을 얻지 못했을 테고,
                          병으로부터 버티지 않았다면 지금처럼 책을 쓸 수 없었을
                          것이다. 그렇게 나는 버티면서 삶의 한가운데로 나아갈 수
                          있었고, 그로부터 많은 것을 배웠다.
                          <br></br>- 〈때론 버티는 것이 답이다〉 중에서
                          <br></br>
                          <br></br>
                          고통이 24시간 내내 똑같은 강도로 지속되는 것은 아니다.
                          고통과 고통 사이에 조금은 덜 아픈 시간이 분명 있다.
                          그래서 나는 그 시간을 기다렸다. 고통이 조금 수그러드는
                          시간을 기다리고, 약을 먹어서 움직일 수 있는 상태가
                          되기를 기다렸다. 그리고 아픔이 덜해 움직일 수 있거나
                          약 기운으로 걸어 다닐 수 있을 때는 그 시간에 할 수
                          있는 일들을 했다. 밥을 먹고, 운동을 하고, 산책을
                          나가고, 장을 보러 가기도 하고, 친구와 수다도 떨면서
                          말이다.
                          <br></br>
                          그래서 나에게 기다림은 언젠가부터 희망이었다. 덜
                          아프고 몸을 움직일 수 있는 상태가 반드시 찾아왔기
                          때문이다. 누구나 힘든 시간을 견디고 있을 때는 언제 이
                          고통이 끝날지 몰라 절망하게 된다. 하지만 언젠가 힘든
                          시간들이 지나가고 좋은 시절이 찾아온다고 생각하면 오늘
                          하루를 다르게 보낼 수 있다. 그러니 인생의 겨울을
                          지나고 있다면 기억해 두기 바란다. 당신에게도 봄은 꼭
                          올 것이다.
                          <br></br>- 〈22년간 파킨슨병을 앓으며 깨달은 것들〉
                          중에서
                        </p>
                      </div>
                    </div>
                    <div className="auto-overflow-footer">
                      <button
                        type="button"
                        className="btn-more-body active"
                        data-btn-toggle
                      >
                        <span className="text">접기</span>
                        <span className="ico-arw"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area book-publish-review">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">출판사 서평</h2>
                  </div>
                  <div className="auto-overflow-wrap type-text overflow active">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <p className="info-text">
                          ★ 한국출판산업진흥원 이달의 읽을 만한 책 선정
                          <br></br>★ 세종도서 선정 도서
                          <br></br>★ 10만 부 돌파 기념 스페셜 에디션, 2022년
                          전면 개정증보판!
                          <br></br>
                          <br></br>
                          “내가 22년간 파킨슨병을 앓으면서도 유쾌하게 살 수 있는
                          이유”
                          <br></br>- 마흔 살에 알았더라면 더 좋았을 것들
                          <br></br>
                          <br></br>
                          정신분석 전문의로, 두 아이의 엄마로, 시부모님을 모시고
                          사는 며느리로 눈코 뜰 새 없이 바빴던 저자는 마흔
                          살까지만 해도 ‘내가 잘했으니까 지금의 내가 있는
                          거지’라고 생각했다. 집이고 병원이고 환자들이고 자신이
                          없으면 큰일이 난다고 생각한 것이다. 곁에 있는
                          사람들에게 고맙다고 말하면서도 속으로는 원망한 적이 더
                          많았다.
                          <br></br>
                          그런데 2001년 마흔세 살에 갑자기 몸이 점점 굳어 가는
                          파킨슨병 진단을 받게 되었다. 두 아이의 엄마이자
                          정신분석 전문의로 할 일이 많은 나이였다. 게다가 꿈을
                          펼쳐 보겠다고 개인 병원을 시작한 지 1년이 채 되지 않은
                          시점이었다. 그녀는 자신에게 들이닥친 불행을 도저히
                          받아들일 수 없었다. 너무 억울하고, 사람들이 밉고,
                          세상이 원망스러워 아무것도 못 한 채 한 달 동안 침대에
                          누워 천장만 바라보았다. 그러던 어느 날 그녀는 문득
                          깨달았다. 아직 자신은 죽은 게 아니며 누워 있는다고
                          바뀌는 건 아무것도 없다는 사실을 말이다. 다행히 병이
                          초기 단계라 아직 할 수 있는 일들도 많았다. 그래서
                          일어났고, 하루를 살았고, 또 다음 날을 살았다. 대신에
                          해야만 하는 일보다 하고 싶지만 계속 미뤄 둔 일들을
                          먼저 하기 시작했다.
                          <br></br>
                          책을 쓰기 시작한 것도 그때부터다. 그렇게 22년 동안
                          병마와 싸우며 진료와 강의를 하고, 두 아이를 키우고, 열
                          권의 책을 썼다. 사람들은 파킨슨병을 앓으면서 어떻게 그
                          일들을 다 할 수 있었느냐고 신기해하지만 그녀는 말한다.
                          몸이 굳어 옆으로 돌아눕는 것조차 남의 도움을 받아야 할
                          만큼 고통스러운 때도 있지만 고통과 고통 사이에는 덜
                          아픈 시간이 있고, 그 시간에 할 수 있는 일들을 하며
                          하루하루를 차곡차곡 살아온 것뿐이라고. 2014년 1월 병이
                          악화되어 병원 문을 닫고 나서는 더 이상 환자들을 진료할
                          수 없게 되었고, 그 사이 크고 작은 수술을 다섯 차례
                          받으며 죽을 고비도 넘겼지만 그녀는 여전히 하고 싶은
                          일들이 많다고 말한다.
                          <br></br>
                          만약 22년 전 그녀가 계속 침대에 누워 병을 원망하고
                          세상을 원망하며 지냈다면 지금의 그녀는 없었을 테고
                          그저 의미 없는 하루하루가 반복되었을 것이다. 살다 보면
                          예기치 않은 불행이 찾아올 때가 있다. 그것을 피할 수
                          있는 방법은 없다. 하지만 그 후의 시간을 어떻게
                          보낼지는 우리가 마음먹기에 달려 있다. 그래서 그녀는
                          실패할까 봐 두렵고 무엇을 하든 겁부터 난다는
                          사람들에게 말한다. 용기 내어 딱 한 발짝만 내디뎌
                          보라고. 물론 선택한 길이 틀릴 수도 있고, 최선을
                          다했는데도 낭떠러지에 도착할 때도 있겠지만 그게 두려워
                          한 발짝도 떼지 않으면 영영 아무 데도 못 가게 된다고.
                          <br></br>
                          “내 경험상 틀린 길은 없었다. 실패를 하더라도
                          실패로부터 무언가를 배우면 그것은 더 이상 실패가
                          아니었고, 길을 잘못 들었다 싶어도 나중에 보면 그
                          길에서 내가 미처 몰랐던 것들을 배움으로써 내 삶이 더
                          풍요로워졌다. 그러니 당신이 누구든, 어떤 상황에 있든
                          한 발짝을 내디딘 순간 알게 될 것이다. 용기 내기를 참
                          잘했다는 것을.”
                          <br></br>
                          <br></br>
                          “하나의 문이 닫히면 하나의 문이 열린다.
                          <br></br>
                          그러니 더 이상 고민하지 말고 재미있게 살아라.”
                          <br></br>- 30년 동안 정신분석 전문의로 일하며 깨달은
                          인생의 비밀
                          <br></br>
                          <br></br>
                          고등학교 2학년 때 소울메이트 같았던 친언니의 죽음으로
                          한동안 방황하던 저자는 이왕 사는 거 누구보다 열심히
                          살기로 마음먹고는 의대에서의 6년 동안 치열하게
                          공부했고, 인턴 과정도 우수한 성적으로 마쳤다. 그러다
                          보니 당연히 대학병원에 남아 레지던트 과정을 밟고
                          전문의를 딸 거라 생각했다. 그런데 다른 사람이
                          레지던트로 뽑히면서 그녀는 차선으로 국립정신병원(현
                          국립정신건강센터)을 선택하게 되었다. 처음에는
                          대학병원에 남지 못하고 밀려났다는 자괴감에 빠져
                          괴로웠지만 국립정신병원에 있는 동안 다른 곳에서는 결코
                          할 수 없었을 소중한 경험들을 하게 되었다. 정신
                          치료법으로 약물 치료뿐만 아니라 사이코드라마, 예술
                          치료, 정신분석을 골고루 접하며 자신이 무엇에 관심이
                          있고 무엇을 잘할 수 있는지 깨달았고, 나중에는
                          레지던트들을 지도하면서 더 많은 것을 배울 수 있었던
                          것이다.
                          <br></br>
                          대학병원에 남지 못했을 때 저자는 인생이 끝났다고
                          생각했다. 그런데 차선으로 선택한 국립정신병원에서
                          다양한 경험을 하면서 새로운 인생이 열렸다. 그래서
                          그녀는 말한다. 원하는 게 이루어지지 않았다는 이유로
                          실패했다고 단정 짓지 말라고. 그것은 하나의 문이 닫힌
                          것일 뿐, 그 이상도 이하도 아니라고. 게다가 하나의 문이
                          닫히면 또 다른 문이 열린다고. 그러니 너무 스스로를
                          닦달하며 살 필요가 없다고. 정말 가 보지 않으면 모르는
                          게 인생이고, 끝까지 가 봐야 아는 게 인생이라고.
                          <br></br>
                          “지금껏 살면서 한 가지 후회하는 게 있다면 스스로를
                          너무 닦달하며 인생을 숙제처럼 살았다는 것이다. 의사로,
                          엄마로, 아내로, 며느리로, 딸로 살면서 나는 늘 의무와
                          책임감에 치여 어떻게든 그 모든 역할을 잘해 내려
                          애썼다. 그러다 보니 정작 누려야 할 삶의 즐거움들을
                          놓쳐 버렸다. 그러다 22년 전 마흔세 살에 파킨슨병
                          진단을 받으며 비로소 알게 되었다. 내가 없으면 집안도
                          병원도 제대로 안 굴러갈 것 같았는데 아니었다. 세상은
                          나 없이도 너무나 멀쩡히 잘 굴러갔다. 2014년 병원 문을
                          닫은 이후에는 그렇게나 많은 지인들도 다 어디로 갔는지
                          사라지고 없었다. 그제야 나는 내 곁을 지켜 주는
                          사람들을 다시 보게 되었고, 내가 놓쳐서는 안 될 인생의
                          소중한 것들이 무엇인지를 돌아보게 되었다.
                          <br></br>
                          당신은 부디 나처럼 후회하지 않았으면 좋겠다. 스스로를
                          너무 닦달하지 말고, 매사에 너무 심각하지 말고, 너무
                          고민하지 말고, 그냥 재미있게 살았으면 좋겠다. 삶이
                          힘들고 어렵고 좀체 나아질 것 같지 않아 보여도 어느
                          때나 즐길 거리는 분명히 있다. 그리고 즐길 거리가
                          다양한 사람일수록 불가피한 불운과 불행 또한 잘 버틸 수
                          있다.”
                          <br></br>
                          <br></br>
                          <br></br>
                          80만 부 베스트셀러 《서른 살이 심리학에게 묻다》
                          김혜남 심리학 완결판
                          <br></br>- 환자들에게 미처 하지 못했던, 그러나 꼭 해
                          주고 싶은 이야기들
                          <br></br>
                          <br></br>
                          10만 부 기념 스페셜 에디션을 펴내면서 저자는
                          환자들에게 미안하다는 말을 하고 싶었다고 했다. 2014년
                          병이 깊어지면서 더 이상 진료를 할 수 없게 되자 병원을
                          닫으면서 어쩔 수 없이 환자들을 돌려보냈는데 치료를
                          열심히 받아서 상태가 좀 나아지면 다시 진료를 할 수
                          있지 않을까 했지만 앞으로도 그러기는 힘들 것 같기
                          때문이다.
                          <br></br>
                          그래서 환자들에게 해 주고 싶은 이야기들을 추가로 다시
                          썼다. ‘환자들이 내게 가장 많이 한 말’, ‘과거가 현재를
                          지배하도록 놔두지 말 것’, ‘사랑하는 사람을 함부로
                          치유하려 들지 말 것’, ‘제발 모든 것을 상처라고 말하지
                          말 것’ 등 진료를 보면서 환자들에게 미처 하지 못했던,
                          그러나 꼭 해 주고 싶은 이야기들을 정리한 것이다.
                          <br></br>
                          “책을 정리하면서 정신분석의 선구자인 프로이트가 말한
                          정상의 기준을 다시 한번 들여다보게 되었다. 그의 기준에
                          따르면 사람이 ‘약간의 히스테리, 약간의 편집증, 약간의
                          강박’을 가지고 있는 것이 정상이다. 즉 세상에 문제 없는
                          사람은 없다. 모든 사람이 어느 정도의 문제는 다 가지고
                          있다. 그러니 자신에게 문제가 있다는 것을
                          부끄러워하거나 부정할 필요가 없다.
                          <br></br>
                          나도 마찬가지다. 오랫동안 병마와 싸워 오다 보니 가끔은
                          아무나 붙잡고 푸념을 늘어놓고 싶을 때가 있고, 고통을
                          참을 수 없어서 소리를 지르고 싶을 때도 있다. 후회할 걸
                          뻔히 알면서도 타인에게 상처 주는 말을 할 때도 있다. 늘
                          평정심을 잃지 않고 사람들에게 유쾌한 모습을 보이고
                          싶지만 뜻대로 되지 않을 때가 있는 것이다. 명색이
                          정신분석 전문의로 30년 넘게 일해 오며 수많은 환자들을
                          치료해 온 사람으로서 이처럼 못난 모습을 보이게 될
                          때마다 부끄럽기 그지없지만 나는 그런 나를 용서하기로
                          했다. 하루를 돌아보고 반성하면서 내일부터는 그러지
                          말아야지 생각하는 나 자신을 너그럽게 받아들이기로 한
                          것이다.
                          <br></br>
                          당신도 마찬가지다. 자신에게는 아무 문제가 없으며 늘
                          옳다고 생각하는 사람보다 문제가 있다고 생각해 그것을
                          고치고 싶어 하는 당신은 지극히 건강하다. 잘못한 것에
                          대해 후회하고 반성하며 내일은 그러지 말아야지 하면서
                          당신은 어떻게든 성장해 나갈 것이기 때문이다.”
                          <br></br>
                          <br></br>
                          <br></br>
                          “만일 내가 인생을 다시 산다면”
                          <br></br>- 벌써 마흔이 된 당신에게 해 주고 싶은 말들
                          42
                          <br></br>
                          <br></br>
                          정신분석가인 융은 “마흔이 되면 마음에 지진이
                          일어난다”고 했다. 삶 전체가 흔들리는 듯한 혼란을 겪는
                          것이다. 그도 그럴 것이 평균 수명이 길어지다 보니
                          100세를 놓고 보면 마흔 살이 되어도 아직 살아야 할
                          날들이 60년이나 남아 있다. 그러니까 뭘 새로 시작하려니
                          늦은 것 같고, 그렇다고 안 하려니 시간이 너무 많이 남아
                          있는 것 같은 나이, 그것이 바로 마흔인 것이다. 게다가
                          자신은 예나 지금이나 똑같은데, 마음속에는 젊은 시절의
                          열정이 그대로 살아 있고 앞으로도 많은 일들을 할 수
                          있을 것 같은데 몸의 신호가 자꾸만 아니라는 얘기를
                          건넨다. 흰머리와 잔주름, 떨어진 체력, 노안 등등이
                          마흔의 나를 한꺼번에 덮쳐 오는 것이다. 그래서 마흔은
                          슬프다. 왜냐하면 날마다 조금씩 젊은 시절의 나를
                          잃어가고 있기 때문이다. 인생의 중심이 흔들리고 주위의
                          많은 것들이 흩어져 사라지는 느낌에 소스라치게 된다.
                          사업을 하다 망한 친구, 불륜에 휩싸이거나 이혼한 친구,
                          불치의 병을 앓고 있는 친구도 하나둘씩 생긴다.
                          <br></br>
                          게다가 중년기에 접어들면 아이들을 떠나보내고 부모의
                          부모가 되어야 하는 운명에 맞닥뜨리게 된다. 아이들은
                          우리의 품을 떠나 자신들의 삶을 개척해 나가고, 그 사이
                          전에는 강하고 무섭게 보이던 부모님이 이제 우리에게
                          경제적, 심리적으로 의지해 온다. 그러면 우리는
                          부모로부터 독립해 삶을 꾸려 가고 있다가도 어느새
                          다시금 부모의 생활 속으로 잡혀 들어가는 느낌을 받게
                          된다.
                          <br></br>
                          하지만 그와 동시에, 중년의 위기 앞에서 우리는 삶을
                          재평가할 수 있는 기회를 가지게 된다. 즉 ‘지금까지
                          살아온 모습과 맡아 온 역할들을 빼고 나면 나는 대체
                          누구인가?’라는 질문을 스스로 던져 봄으로써 진정한 나를
                          만날 수 있는 기회를 얻게 되는 것이다.
                          <br></br>
                          그러나 대부분의 사람들은 나이 듦으로 인한 상실을
                          받아들이지 못하고 온 힘을 다해 다가오는 세월과 맞서
                          싸우려 든다. 어떤 사람들은 필사적으로 다시 젊어지려고
                          애쓰기도 한다. 하지만 그럴수록 늙어가는 자신을
                          부정하느라 자신을 소진시켜 버리는 아이러니에 직면하게
                          된다.
                          <br></br>
                          저자 또한 마흔이 넘었을 때 마음이 지진이 일어났다고
                          고백한다. 그래서 그럴 때 어떻게 무너지지 않고 다시
                          앞으로 나아갈 수 있는지에 대해 정신분석 전문의로서,
                          22년차 파킨슨병 환자로서 자신의 경험을 토대로 해 주고
                          싶은 이야기들을 이 책에 담았다. ‘아무것도 하지 않는
                          시간이 반드시 필요한 이유’, ‘때론 버티는 것이 답이다’,
                          ‘가까운 사람일수록 해서는 안 될 것들이 있다’ ‘내
                          슬픔을 등에 지고 가는 친구들에 대하여’ 등등 하루하루
                          잘 버텨 내고 있지만 가끔은 힘들고 외로운 당신에게
                          조그만 위로가 되기를 바라는 마음이 담겨 있다.
                          <br></br>
                          “‘내가 인생을 다시 산다면’은 내가 정말 좋아해서 번역을
                          하여 그림책으로 내기도 했던 시이다. 미국 켄터키 주의
                          어느 시골에 살던 할머니 나딘 스테어가 85세가 되던 해에
                          썼다고 알려져 있는데, 마치 내 마음을 그대로 고백해
                          놓은 것처럼 나와 닮아 있고 공감이 갔다. 《오늘 내가
                          사는 게 재미있는 이유》 10만 부 기념 스페셜 에디션을
                          준비하면서 마흔이 넘은 독자들을 위해 다시 원고를 쓰고
                          정리하다 보니 시가 그 내용과 더 어울리는 것 같아 이
                          책의 제목으로 가져오게 되었다.”
                        </p>
                      </div>
                    </div>
                    <div className="auto-overflow-footer">
                      <button
                        type="button"
                        className="btn-more-body active"
                        data-btn-toggle=""
                      >
                        <span className="text">접기</span>
                        <span className="ico-arw"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area basic-info">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">기본정보</h2>
                  </div>
                  <div className="tbl-row-wrap">
                    <div className="wrap-inner">
                      <ul className="basic-info-list">
                        <li className="basic-info-item">
                          <p className="info-item-title en">ISBN</p>
                          <p className="info-item-text">
                            9791190538510 ( 1190538512 )
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">발행(출시)일자</p>
                          <p className="info-item-text">2022년 11월 11일</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">쪽수</p>
                          <p className="info-item-text">280쪽</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">크기</p>
                          <p className="info-item-text">
                            146 * 210 * 22 mm / 518 g
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">총권수</p>
                          <p className="info-item-text">1권</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">이 책의 개정정보</p>
                          <p className="info-item-text">
                            가장 최근에 출시된 개정판입니다.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product-detail-area claim-info-wrap">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">교환/반품/품절 안내</h2>
                  </div>
                  <div className="claim-info">
                    <ul className="claim-info-list">
                      <li className="claim-info-item">
                        <div className="title-wrap title-size-sm">
                          <p className="title-heading">반품/교환방법</p>
                        </div>
                        마이룸 > 주문관리 > 주문/배송내역 > 주문조회 > 반품/교환
                        신청, [1:1 상담 > 반품/교환/환불] 또는 고객센터
                        (1544-1900)
                        <br></br>* 오픈마켓, 해외배송 주문, 기프트 주문시 [1:1
                        상담>반품/교환/환불] 또는 고객센터 (1544-1900)
                      </li>
                      <li className="claim-info-item">
                        <div className="title-wrap title-size-sm">
                          <p className="title-heading">반품/교환가능 기간</p>
                        </div>
                        변심반품의 경우 수령 후 7일 이내,<br></br>상품의 결함 및
                        계약내용과 다를 경우 문제점 발견 후 30일 이내
                      </li>
                      <li className="claim-info-item">
                        <div className="title-wrap title-size-sm">
                          <p className="title-heading">반품/교환비용</p>
                        </div>
                        변심 혹은 구매착오로 인한 반품/교환은 반송료 고객 부담
                      </li>
                      <li className="claim-info-item">
                        <div className="title-wrap title-size-sm">
                          <p className="title-heading">반품/교환 불가 사유</p>
                        </div>
                        1) 소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된
                        경우<br></br> (단지 확인을 위한 포장 훼손은 제외)
                        <br></br>2) 소비자의 사용, 포장 개봉에 의해 상품 등의
                        가치가 현저히 감소한 경우<br></br> 예) 화장품, 식품,
                        가전제품(악세서리 포함) 등<br></br>3) 복제가 가능한 상품
                        등의 포장을 훼손한 경우<br></br> 예) 음반/DVD/비디오,
                        소프트웨어, 만화책, 잡지, 영상 화보집<br></br>4)
                        소비자의 요청에 따라 개별적으로 주문 제작되는 상품의
                        경우 ((1)해외주문도서)<br></br>5) 디지털 컨텐츠인 eBook,
                        오디오북 등을 1회 이상 다운로드를 받았을 경우<br></br>6)
                        시간의 경과에 의해 재판매가 곤란한 정도로 가치가 현저히
                        감소한 경우<br></br>7) 전자상거래 등에서의 소비자보호에
                        관한 법률이 정하는 소비자 청약철회 제한 내용에 해당되는
                        경우
                      </li>
                      <li className="claim-info-item">
                        <div className="title-wrap title-size-sm">
                          <p className="title-heading">상품 품절</p>
                        </div>
                        공급사(출판사) 재고 사정에 의해 품절/지연될 수 있으며,
                        품절 시 관련 사항에 대해서는 이메일과 문자로
                        안내드리겠습니다.
                      </li>
                      <li className="claim-info-item">
                        <div className="title-wrap title-size-sm">
                          <p className="title-heading">
                            소비자 피해보상 환불 지연에 따른 배상
                          </p>
                        </div>
                        1) 상품의 불량에 의한 교환, A/S, 환불, 품질보증 및
                        피해보상 등에 관한 사항은 소비자분쟁 해결 기준
                        (공정거래위원회 고시)에 준하여 처리됨<br></br>2) 대금
                        환불 및 환불지연에 따른 배상금 지급 조건, 절차 등은
                        전자상거래 등에서의 소비자 보호에 관한 법률에 따라
                        처리함
                      </li>
                    </ul>
                    <div className="info-text-box size-lg">
                      <p className="bul-item-dot font-size-xxs">
                        상품 설명에 반품/교환 관련한 안내가 있는 경우 그 내용을
                        우선으로 합니다. (업체 사정에 따라 달라질 수 있습니다.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* prod-detail-footer */}
          <div className="prod-detail-footer">
            <div className="prod-purchase-info-wrap">
              <div className="footer-contents-inner">
                <div className="left-area">
                  <span className="prod-info-title">총 상품 금액</span>
                  <span className="prod-info-price">
                    <span className="val">15,480</span>
                    <span className="unit">원</span>
                  </span>
                </div>
                <div className="right-area">
                  <div id="prodBtnWrap" className="btn-wrap multi">
                    <button type="button" className="btn-wish size-lg">
                      <span className="ico-wish"></span>
                      <span className="hidden">찜하기</span>
                    </button>
                    <button
                      id="basket"
                      type="button"
                      className="btn-lg btn-light-gray"
                    >
                      <span className="text">장바구니</span>
                    </button>

                    <div id="prodBuyWrap" className="btn-wrap overlap single">
                      <Link
                        to=""
                        id="buy"
                        type="button"
                        className="btn-lg btn-primary"
                      >
                        <span className="text">구매하기</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* top btn */}
        <div className="top-btn">
          <button id="top" onClick={scrollToTop} type="button">
            TOP
          </button>
        </div>
      </div>
    </>
  );
}

export default BookOfMonth;
