import "../components/BookOfMonth.css";
import { Link } from "react-router-dom";
import bookOfMonthImage from "../images/bookOfMonth.jpg";
import bookDetailImg from "../images/i9791190538510.jpg";

function BookOfMonth() {
  return (
    <>
      <div className="container-wrapper">
        <div id="contents" className="contents-wrap">
          {/* header */}
          <div className="prod-detail-header">
            <div className="header-contents-inner">
              <div className="prod-detail-title-wrap">
                <div className="prod-title-area">
                  <div className="prod-title-box">
                    만일 내가 인생을 다시 산다면
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-info-wrap">
                  <div className="prod-author">
                    <Link to="">김혜남 저자</Link>
                  </div>
                  <div className="prod-info-text publish-date">
                    <Link to="" className="btn-publish-link">
                      메이븐
                    </Link>
                    2022년 11월 11일
                  </div>
                  <div className="prod-best-box">
                    주간베스트{" "}
                    <span className="best-ranking">국내도서 19위 인문 2위</span>
                  </div>
                  <div className="prod-info-text">
                    가장 최근에 출시된 개정판입니다.
                    <Link to="" className="btn-xxs">
                      구판보기
                    </Link>
                  </div>
                </div>
                <div className="portrait-img-box">
                  <img src={bookOfMonthImage} />
                </div>
                <div className="prod-guide-box">
                  <div className="pro-guide-row">
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
                  <div className="prod-price-wrap">
                    <div className="prod-price">
                      <span className="percent">10%</span>
                      <span className="val">15,480</span>
                      <s className="val-origin">17,200</s>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* body */}
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
                      frameborder="0"
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
                <div className="prod-detail-area product_person"></div>
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
                            프롤로그_ 파킨슨병이 내게 가르쳐 준 것들
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
                            에필로그_ 내 인생의 버킷 리스트 10
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
                      <div className="auto_overflow-inner">
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area book-inside"></div>
                <div className="prod-detail-area book-publish-review"></div>
                <div className="prod-detail-area basic-info"></div>
              </div>
              <div className="prod-review"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookOfMonth;
