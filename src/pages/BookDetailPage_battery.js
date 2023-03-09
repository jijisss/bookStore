import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bestSellerBook6.jpg";
import bookDetailImg from "../images/i9791191521221.jpg";

function BookDetailPage_battery() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
                  <div className="prod-title-box">K 배터리 레볼루션</div>
                  <div className="prod-desc-area">
                    <p>향후 3년, 새로운 부의 시장에서 승자가 되는 법</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">박순혁 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          지와인
                        </Link>
                        2023년 02월 20일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 3위 · 경제/경영 1위
                        </span>
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
                        <span className="val">17,100</span>
                        <s className="val-origin">19,000</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">1,100p</div>
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
                                <strong>내일(3/10,금) 도착예정</strong>
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
                          경제/경영
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          재테크/금융
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          재테크
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          부자되는법
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
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2023년 2월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 서울신문 >
                              2023년 2월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 한국일보 >
                              2023년 2월 4주 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      알만한 이들은 모두가 기다리고 고대하던
                      <br></br>
                      박순혁 이사의 배터리 시장에 대한 단 한 권의 책!
                      <br></br>
                      <br></br>
                      정해진 부의 미래, 배터리 혁명은 이제 시작이다!
                      <br></br>
                      “이 분의 말을 듣고 후회한 적이 없다!”
                      <br></br>
                      유튜브 1천 만 조회! 여의도를 뒤흔드는 최고의 전문가가
                      말하는
                      <br></br>K 배터리에 대해 가장 정확한 분석과 전망을 담은 단
                      한 권의 책!
                    </div>
                    <div className="info-text">
                      인류 전반에 거대한 혁신이 일어나고 부의 판도가 바뀔 때는
                      항상 ‘에너지 혁명’이 있었다. 반도체에 이어 세계 경제를
                      좌우하게 될 배터리 혁명은 이제 시작이다. 전기차를 중심으로
                      배터리 산업은 어떻게 세계 각국을 바꿀 것인가. 왜 그 혁명을
                      한국의 배터리 기업이 좌우할 수밖에 없는가.<br></br>
                      『K 배터리 레볼루션』은 그간 대중들에게는 다소 생소했던
                      배터리 산업에 대해 기본적인 지식부터 향후 10년을 좌우하게
                      될 미래 전망까지를 제대로 담은 단 한 권의 책이다. 알만한
                      사람들은 모두 나오기를 고대하던 여의도를 뒤흔드는 ‘밧데리
                      아저씨’ 박순혁 이사의 책으로, 이차전지 산업에 대해 꼭
                      알아야 할 지식과 핵심 이슈들을 엄선해 담았다.<br></br>
                      불확실의 시대이기 때문에 더욱더 ‘정해진 부’, 미래에 올
                      수밖에 없는 부에 투자해야 한다. 그것이 바로 배터리
                      분야이고, 그 핵심이 한국의 배터리 기업이다. 왜 글로벌
                      넘버원은 K 배터리 기업인 것일까. 배터리 시장에 대한 거짓은
                      무엇이고 진실은 무엇일까. 어떻게 투자해야 배터리 산업이
                      열게 될 새로운 부의 시장에서 승자가 될 수 있을까. 이 책은
                      진실, 성실, 절실의 모토로 쓴 미래의 부에 대한 안내서이다.
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area product-person">
                  <div class="title-wrap title-size-md">
                    <h2 class="title-heading">작가정보</h2>
                  </div>

                  <div className="gray-box">
                    <div class="title-wrap title-size-def">
                      <h3 class="title-heading">
                        <span class="title-prefix">저자(글)</span>
                        <span class="text">박순혁</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="writer-profile">
                        <img
                          data-kbbfn="s3-image"
                          loading="lazy"
                          alt="박순혁"
                          src="https://contents.kyobobook.co.kr/dtl/author/1116818401.jpg"
                          data-src="https://contents.kyobobook.co.kr/dtl/author/1116818401.jpg"
                        />
                      </div>
                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              대한민국 배터리 산업의 전도사, 일명 ‘밧데리
                              아저씨’라 불린다. ‘사심과 편견’ 없이 현장에서
                              취재한 데이터와 팩트를 기반으로 미래 산업의 핵심이
                              될 배터리 산업을 가장 정확하게 전망하고, 쉽게
                              설명하는 최고의 전문가이다. 1995년 대한민국 증권
                              시장의 양대 산맥이었던 대한투자신탁의 애널리스트로
                              시작해 뉴데이터 테크놀로지 기업들을 담당했고,
                              3,500억 원 규모의 자금 운영을 책임지는 등 30여
                              년을 여의도의 성장과 함께했다. 투자는 기업의
                              성장에 대한 투명하고 신뢰성 높은 커뮤니케이션을
                              바탕으로 해야 하기에, 해당 산업에 대한 제대로 된
                              이해가 필수라는 강한 신념을 가지고 활동해왔다.
                              지난날 반도체가 세계 경제의 판도를 바꾸고
                              대한민국을 경제대국으로 만들었다면, 다음은
                              배터리의 차례로 특히 한국의 배터리 기업들의 성장에
                              주목하던 중, 이차전지 기업인 금양의 IR을 맡으면서
                              본격적으로 K 배터리 산업을 대중들에게 알리는 길에
                              뛰어들었다. 유튜브, 방송, 기고 등 무엇이든 가리지
                              않고 한국 배터리 산업의 본 모습과 위상을 제대로
                              알리는 데 온 힘을 다했다. 각고의 노력 끝에 불과
                              1년 여 만에, 국내 유수 경제 유튜브와 공중파
                              방송에서 앞다투어 찾는 최고의 전문가가 되었다. 이
                              과정에서 여의도 증권가의 잘못된 정보와 ‘코리아
                              디스카운트’를 불러오는 잘못된 투자 습관을
                              바로잡아주면서 개인 투자자들의 경제 멘토로
                              떠올랐다. 배터리 분야는 물론 모든 기업에 대한
                              투자는 산업과 국가 경제 전체의 성장을 향해야
                              한다는 사명감을 모두가 가지게 되기를 바라고 있다.
                            </p>
                          </div>
                        </div>
                        <div class="auto-overflow-footer">
                          <button
                            type="button"
                            class="btn-more-body"
                            data-btn-toggle=""
                          >
                            <span class="text">펼치기</span>
                            <span class="ico-arw"></span>
                          </button>
                        </div>
                      </div>
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
                            프롤로그 새로운 부의 시장에서 승자가 되는 법
                            <br></br>
                            <br></br>
                            chapter 1. 배터리 산업, 이것만 알면 반은 먹고
                            들어간다<br></br>
                            인류에게 전기차가 먼저였다<br></br>
                            혁명의 시대를 연 건 테슬라가 아니다<br></br>
                            미래 산업의 핵심, 에너지밀도<br></br>
                            양극재만 기억하라<br></br>
                            고려청자의 기적이 현대에 재현되다<br></br>
                            <br></br>
                            chapter 2. 미래를 준비한 4명의 거인<br></br>
                            따라올 수 없는 과감한 투자 : LG 구본무 회장<br></br>
                            재벌도 포기한 일을 이뤄낸 뚝심 : 에코프로 이동채
                            회장<br></br>
                            14년의 좌절을 딛고 얻어낸 ‘하얀 유전’ : 포스코그룹
                            권오준 회장<br></br>
                            수소차, 전기차가 우리의 미래다 : 현대그룹 정주영
                            회장<br></br>
                            <br></br>
                            chapter 3. K 배터리의 기술 초격차 전략<br></br>
                            값도 싸고 질도 좋다 : 하이니켈 양극재 기술<br></br>
                            싸고 가볍고 부피도 적다 : 파우치형 폼팩터 기술
                            <br></br>
                            배터리 화재, K 배터리는 걱정 뚝 : 화재 안정성 기술
                            <br></br>
                            전기차 제작의 표준을 꿈꾸는 GM-LG 연합 : 얼티엄
                            플랫폼<br></br>
                            <br></br>
                            chapter 4. 향후 K 배터리의 미래를 좌우할 요인들
                            <br></br>
                            ‘광물 의존도’라는 분명한 문제<br></br>
                            ‘백색 석유’ 리튬 확보 전쟁<br></br>
                            미국 IRA 법안에 대한 진실과 거짓<br></br>
                            경제도 국민의 수준이 좌우한다<br></br>안 될 일이
                            아니라 미래를 위해 해결해야 할 일<br></br>
                            <br></br>
                            chapter 5. 배터리 산업에 대한 5가지 거짓과 진실
                            <br></br>
                            자동차 회사들이 결국 배터리를 직접 만들 것이다
                            <br></br>
                            테슬라 4680 배터리는 게임 체인저다<br></br>
                            중국 CATL이 세계 최고의 배터리 회사다<br></br>
                            대륙 특유의 허풍 기술에 속지 말자<br></br>왜 LFP는
                            중국에서만 사용되다 사라질 운명인가<br></br>
                            <br></br>
                            chapter 6. K 배터리 주식, 10배 더 성장하는 이유
                            <br></br>
                            사이즈가 다르다<br></br>
                            미국을 먹는 자가 과반을 먹는다<br></br>
                            혁명의 시대, 글로벌 넘버원은 더 크게 성장한다
                            <br></br>
                            강물을 거슬러 오르는 연어 같은 기업<br></br>
                            <br></br>
                            chapter 7. 당신을 부자로 만들어 줄 K 배터리 기업
                            <br></br>
                            배터리의 미래는 나를 중심으로 : LG에너지솔루션,
                            SK이노베이션<br></br>
                            양극재는 우리 손에 : 에코프로비엠, LG화학,
                            포스코케미칼<br></br>
                            작지만 강한 기업 : 나노신소재<br></br>
                            원자재를 지배하는 자 : 에코프로, POSCO홀딩스
                            <br></br>
                            <br></br>
                            참고문헌
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
                <div className="prod-detail-area book-inside">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">책 속으로</h2>
                  </div>
                  <div className="auto-overflow-wrap type-text overflow active">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <p className="info-text">
                          2022년 가을 무렵, 한 분이 ‘아시아 3대 성인’이라는 짤을
                          보내주셨습니다. 유진투자증권 강영현 이사와 한 미국계
                          중국인과 그리고 제가 개미투자자들을 지켜 준 사람이라는
                          의미를 담고 있는 우스개 짤이었습니다. 그간 소위 여의도
                          전문가들이 입에 침이 바르도록 칭찬하던 테슬라 주가가
                          급락했습니다. 다들 테슬라에 열광하고 있을 때, 저는
                          유튜브 등을 통해 계속해서 테슬라를 조심해야 한다는
                          경고를 했었습니다. 그 이유는 별 게 없습니다. 제겐
                          ‘사심과 편견’이 없기 때문이다. 특정 주식이나 특정
                          펀드를 마케팅하려는 사심, 우리 것은 함부로 업신여기고
                          외국의 산업을 이유 없이 더 낫게 평가하는 편견 같은
                          것들이 저에게는 없었을 뿐입니다.<br></br>
                          _「프롤로그」 중에서<br></br>
                          <br></br>
                          여의도에는 이차전지 산업에 대해 심각한 오해들이
                          많았습니다. 미국의 테슬라가 곧 4680 원통형 배터리
                          개발에 성공해서 배터리 시장을 제패할 것이라든지,
                          중국의 CATL이 세계 최고의 배터리 회사로써 K 배터리
                          회사들을 압도하고 있다든지, 자동차 회사들이 곧 배터리
                          내재화에 성공해서 K 배터리 회사들은 곧 하청업체 따위로
                          전락할 거라든지. 이런 말도 안 되는 이야기가 여의도
                          전역에 널리 퍼져 있었습니다. 산업계와 투자시장
                          사이에는 정말 엄청난 간극이 있는 상태였습니다. 한
                          기업의 성장은 산업계 전체의 성장, 국가 경제 전체의
                          성장, 또 수많은 투자자들의 지원과 밀접한 관련이
                          있습니다. 이를 위해서는 이 간극을 줄이는 일이
                          중요합니다.<br></br>
                          _「프롤로그」 중에서<br></br>
                          <br></br>
                          전기차는 오래전부터 존재했다. 전기차가 역사에서
                          일시적으로 사라졌던 것은 전기차를 만드는 기술이
                          없어서가 아니라 배터리 기술이 발전하지 못했기
                          때문이다. 오늘날 다시금 전기차가 대세가 된 것은
                          테슬라와 같은 기업이 전기차를 잘 만들어서가 아니라 K
                          배터리 업체들이 배터리 기술을 비약적으로 발전시킨
                          덕분이다. 전기차만이 아니라 스마트폰, 노트북,
                          재생에너지 산업에 이르기까지 언제나 가장 중요한 것은
                          배터리이다.<br></br>
                          _「chapter 1. 배터리 산업, 이것만 알면 반은 먹고
                          들어간다」 중에서<br></br>
                          <br></br>
                          배터리 산업은 과거의 반도체 산업 못지않게 세계 경제의
                          판도를 좌우하게 될 것이다. 반도체 산업과 관련된 많은
                          내용들이 경제 상식이 되었듯이, 곧 이차전지 산업,
                          배터리 시장과 관련된 내용들을 어느 정도는 알아야 하는
                          시대가 올 것이다. 그러나 많은 이들이 배터리, 이차전지
                          산업을 이해하는 데 어려움을 겪는다. 이 산업과 시장에
                          대한 설명을 찾아보다가도 포기하고 만다. 그 이유 중
                          하나가 지나치게 복잡한 이론적 용어들에 장벽을 느끼기
                          때문이다.<br></br>
                          _「chapter 1. 배터리 산업, 이것만 알면 반은 먹고
                          들어간다」 중에서<br></br>
                          <br></br>
                          전기차 시대에 먼저 선두로 나선 것은 테슬라이다.
                          테슬라는 모델 S, 3, X, Y 단 4개의 혁신적 모델로 세계
                          전기차 시장을 선점했다. 이에 대한 GM의 대응은 과거
                          100여 년 전에 그랬던 것과 마찬가지로 다양한 형태의
                          차종을 내놓는 것이다. 유연성을 강점으로 가진 얼티엄
                          플랫폼을 기반으로 무려 30여 종의 전기차를 내놓음으로써
                          불과 4종에 불과한 모델만 생산하고 있는 테슬라를
                          따라잡겠다는 것이 GM의 전략이다. 100여 년 전의 역사가
                          되풀이될지 귀추가 주목된다. 분명한 것은 얼티엄
                          플랫폼이 확장되고 표준화될수록 K 배터리가 세계 표준이
                          되어간다는 것이다. 이 또한 가장 앞선 기술력을 가진 K
                          배터리가 세계 전기차 시장을 장악할 수밖에 없는
                          이유이다.<br></br>
                          _「chapter 3. K 배터리의 기술 초격차 전략」 중에서
                          <br></br>
                          <br></br>
                          자원 문제와 관련하여 우리가 알아야 할 사실이 있다.
                          중국도 사실은 ‘자원 빈국’이다. 이차전지를 만드는 데
                          필요한 주요 광물 중 흑연 외에는 중국의 매장량이 많지
                          않다. 광물형 리튬은 오스트레일리아와 라틴아메리카
                          3국에 있고, 니켈은 인도네시아, 코발트는
                          콩고민주공화국에 주로 매장되어 있다. 애초에 광물 자원
                          자체가 중국에 주로 매장되어 있다면 해법은 없다. 그러나
                          광물의 처리 분야에서 중국이 지배력을 갖고 있는 것인
                          만큼, 당연히 해법도 존재한다.<br></br>
                          _「chapter 4. 향후 K 배터리의 미래를 좌우할 요인들」
                          중에서<br></br>
                          <br></br>
                          미국의 배터리 시장 규모가 심지어 유럽과 중국을 합친
                          것보다도 더 커질 것이라는 걸 예상할 수 있다. 결국 향후
                          배터리 시장의 왕좌는 미국 시장을 장악한 업체의 몫이 될
                          것이다. 그런데 이 미국 시장을 K 배터리가 거의 독점에
                          가깝게 차지하게 될 전망이다. 우선 미국 IRA 법안에 의해
                          중국은 아예 명함조차 내밀 수 없게 되었다. 일본의
                          배터리 기업은 사실상 파나소닉 한 회사만 있는 셈인데,
                          파나소닉은 글로벌 자동차 회사들 심지어 도요타, 혼다,
                          닛산 같은 자국 자동차 회사로부터도 철저히 외면받는
                          상황이다. 이러니 미국 시장에 의미 있게 배터리를 제공할
                          수 있는 것은 K 배터리 업체들밖에 없다. 가장 큰 시장인
                          미국 시장이 2023년부터 본격적으로 열린다.<br></br>
                          _「chapter 6. K 배터리 주식, 10배 더 성장하는 이유」
                          중에서<br></br>
                          <br></br>
                          중요한 건 주가가 아니라 기업이다. 자신이 투자한 기업이
                          원래 생각했던 대로 움직이지 않는다면 현재 마이너스가
                          얼마이든 간에 과감히 이별하고 더 전망이 좋은 기업으로
                          옮겨가는 용기가 필요하다. 그렇게 판단한다면 대한민국의
                          이차전지 산업만큼 전망이 밝은 산업이 세계적으로도
                          없다. 때문에 당연히 이차전지에 대해 제대로 공부하고 K
                          배터리 주식 중에서도 가장 높고 깊은 해자를 가진 주식,
                          성장 가능성이 높은 주식에 투자해서 적어도 3~5년간은
                          지켜보면서 투자를 해야 한다는 것이다.<br></br>
                          _「chapter 7. 당신을 부자로 만들어 줄 K 배터리 기업」
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
                        <span class="text">접기</span>
                        <span class="ico-arw"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area book-publish-review">
                  <div class="title-wrap title-size-md">
                    <h2 class="title-heading">출판사 서평</h2>
                  </div>
                  <div className="auto-overflow-wrap type-text overflow active">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <p className="info-text">
                          배터리를 이해 못 하면, 세상의 변화를 이해 못 한다.
                          <br></br>
                          배터리는 인류 모두가 사활을 걸고 있는 산업이다. 지구
                          환경문제 해결에 필수적일 뿐만 아니라, 자연재해 등의
                          긴급한 재난 상황에서도 에너지를 사용하기 위해서는
                          ‘에너지 저장 장치’, 배터리의 혁신이 더없이 중요하다.
                          1972년 전자시계용 소형배터리에서 시작하여 2023년 본격
                          전기차의 시대를 열고 있는 배터리 기술의 놀라운 발전!
                          드디어 배터리 레볼루션이 시작되었다.<br></br>
                          향후 세계 경제의 판도를 바꿀 배터리 시장. 이 시장의
                          주도권을 한국의 배터리 기업들이 장악하고 있는 이유는
                          무엇일까. 중국도 유럽도 미국도 따라오지 못하는 K
                          배터리의 놀라운 힘은 무엇일까. 지난 세기 반도체 산업이
                          한국 경제를 이끌었다면, 이번에는 배터리의 차례다.
                          <br></br>
                          <br></br>
                          “당신이 누구라도 이제 배터리 시장을 정확하게 이해할 수
                          있다!”<br></br>
                          배터리 시장에 대한 관심이 점점 커지고 있지만, 쉽게
                          설명하면서도 제대로 알려주는 전문가를 찾기란 하늘의 별
                          따기였다. 그 이유는 배터리 시장은 배터리 자체에 대한
                          이해가 필수적인데, 관련 용어가 일반인들에게는 매우
                          어렵기 때문이다. 또 다른 이유 중 하나는 세계 배터리
                          산업의 성패를 좌우하는 자원 확보와 기술력의 현황에
                          대해 솔직한 정보를 말하는 이들이 별로 없기 때문이다.
                          <br></br>
                          이러다 보니 언론은 제대로 된 기사를 내기 어렵고,
                          일반인들은 잘못된 정보를 얻기 일쑤다. 대표적인 예가
                          바로 중국 배터리 업체가 세계를 지배할 것이며, 전기차
                          시장을 테슬라가 주도할 것이라는 예측이었다. 백 명 중
                          아흔아홉 명이 이같이 예견할 때, 홀로 꿋꿋하게 데이터와
                          팩트를 중심으로 배터리 산업에 대한 올바른 정보를
                          알려온 사람이 있다. 일명 ‘밧데리 아저씨’라는 별명으로
                          불리는 박순혁 이사다. 일반인의 눈높이에 맞춰 전문
                          지식을 쉽게 이해시키고, 30년 애널리스트의 내공을
                          바탕으로 시장을 정확하게 전망하는 유일무이한 최고의
                          전문가. 유수의 경제 유튜브 방송 등을 통해 ‘알만한
                          사람들’로부터 엄청난 신뢰를 받아온 그가 배터리 시장과
                          관련하여 꼭 알아야 하는 내용만 엄선한 안내서를
                          출간했다.<br></br>
                          <br></br>
                          향후 3년, 새로운 부의 시장에서 승자가 되는 법<br></br>
                          이 책은 모두 7개의 장으로 이루어져 있다. 배터리 산업의
                          기본을 탄탄하게 이해시키는 필수 지식에서부터, K 배터리
                          기업들의 DNA를 속속들이 알 수 있는 도전의 역사, 배터리
                          시장의 성패를 가르는 초격차 기술을 다룬 1장~3장까지가
                          전반부라면, 앞으로 왜 K 배터리 산업이 더 커질 수밖에
                          없는지, 배터리 시장에 대해 벗어나야 할 잘못된 오해는
                          무엇인지, 기업-투자자-국가가 함께 해결해야 할 과제는
                          무엇인지, IT 혁명을 이끌었던 빅테크 기업처럼 에너지
                          혁명을 이끌 핵심 K 배터리 기업은 어디인지를 알려주는
                          내용이 후반부에 담겨 있다.<br></br>
                          <br></br>이 책을 읽다 보면 기술은 기술대로, 시장은
                          시장대로, 투자는 투자대로, 국가경제는 국가경제대로,
                          이렇게 따로 생각하는 사고가 얼마나 잘못된 것인지를
                          느끼게 된다. 해당 산업에 대한 정확한 기본 이해를
                          바탕으로, 미래에 반드시 올 수밖에 없는 부 앞에서
                          흔들리지 않고, 좋은 기업을 함께 키워가겠다는 마인드가
                          향후 3년 새로운 부의 시장에서 승자가 되는 유일한
                          방법이다. 수많은 정보들이 난립하는 지금, 흔들리지 않는
                          부의 기준을 알려줄 단 한 권의 책. 이 책이 여러분들에게
                          행운을 주리라 확신한다.<br></br>
                          <br></br>
                          **<br></br>
                          <br></br>■ 추천의 말<br></br>
                          <br></br>
                          언론으로부터 얻는 정보로는 알 수 없었던 내용에 대해
                          이제 확실한 그림을 그릴 수 있게 되었습니다.__〈달란트
                          투자〉, 김**<br></br>
                          <br></br>
                          방송을 볼 때마다 느끼는데 처음부터 끝까지 매번 팩트를
                          가지고 굴하지 않고 이야기하는 걸 보면 대단한
                          내공·연륜·철학·신념이 제 마음을 후벼팝니다.
                          _〈머니랩〉, 방**<br></br>
                          <br></br>K 배터리와 세계의 상황을 잘 정리한 최고의
                          강의입니다._〈삼프로TV〉, 전**<br></br>
                          <br></br>
                          박순혁 님, 진심으로 응원합니다. 왜냐하면 하시는
                          말씀들이 데이터를 근거로 한 명확한 판단에 기인하기
                          때문입니다._〈서정덕TV〉, 확*<br></br>
                          밧데리 아저씨가 있어서 정말 다행입니다. 어두운 바다에
                          제대로 된 등대 같은 분입니다._〈선대인TV〉, 유**
                          <br></br>
                          <br></br>
                          박순혁 이사님의 강의는 늘 진정성이 있어 공부하는 데
                          많은 도움이 됩니다._〈웅달책방〉, 박**<br></br>
                          <br></br>박 이사님의 마인드가 바로 돈이네요.
                          감사합니다._〈815머니톡〉, m***
                        </p>
                      </div>
                    </div>
                    <div class="auto-overflow-footer">
                      <button
                        type="button"
                        class="btn-more-body active"
                        data-btn-toggle=""
                      >
                        <span class="text">접기</span>
                        <span class="ico-arw"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area basic-info">
                  <div class="title-wrap title-size-md">
                    <h2 class="title-heading">기본정보</h2>
                  </div>
                  <div className="tbl-row-wrap">
                    <div className="wrap-inner">
                      <ul className="basic-info-list">
                        <li className="basic-info-item">
                          <p className="info-item-title en">ISBN</p>
                          <p className="info-item-text">
                            9791191521221 ( 1191521222 )
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">발행(출시)일자</p>
                          <p className="info-item-text">2023년 02월 20일</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">쪽수</p>
                          <p className="info-item-text">준비중</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">크기</p>
                          <p className="info-item-text">
                            147 * 209 * 29 mm / 496 g
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">총권수</p>
                          <p className="info-item-text">1권</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product-detail-area claim-info-wrap">
                  <div class="title-wrap title-size-md">
                    <h2 class="title-heading">교환/반품/품절 안내</h2>
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
                      <li class="claim-info-item">
                        <div class="title-wrap title-size-sm">
                          <p class="title-heading">반품/교환가능 기간</p>
                        </div>
                        변심반품의 경우 수령 후 7일 이내,<br></br>상품의 결함 및
                        계약내용과 다를 경우 문제점 발견 후 30일 이내
                      </li>
                      <li class="claim-info-item">
                        <div class="title-wrap title-size-sm">
                          <p class="title-heading">반품/교환비용</p>
                        </div>
                        변심 혹은 구매착오로 인한 반품/교환은 반송료 고객 부담
                      </li>
                      <li class="claim-info-item">
                        <div class="title-wrap title-size-sm">
                          <p class="title-heading">반품/교환 불가 사유</p>
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
                      <li class="claim-info-item">
                        <div class="title-wrap title-size-sm">
                          <p class="title-heading">상품 품절</p>
                        </div>
                        공급사(출판사) 재고 사정에 의해 품절/지연될 수 있으며,
                        품절 시 관련 사항에 대해서는 이메일과 문자로
                        안내드리겠습니다.
                      </li>
                      <li class="claim-info-item">
                        <div class="title-wrap title-size-sm">
                          <p class="title-heading">
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
                    <div class="info-text-box size-lg">
                      <p class="bul-item-dot font-size-xxs">
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
                  <span class="prod-info-title">총 상품 금액</span>
                  <span class="prod-info-price">
                    <span class="val">17,100</span>
                    <span class="unit">원</span>
                  </span>
                </div>
                <div className="right-area">
                  <div id="prodBtnWrap" class="btn-wrap multi">
                    <button type="button" class="btn-wish size-lg">
                      <span class="ico-wish"></span>
                      <span class="hidden">찜하기</span>
                    </button>
                    <button
                      id="basket"
                      type="button"
                      class="btn-lg btn-light-gray"
                    >
                      <span class="text">장바구니</span>
                    </button>

                    <div id="prodBuyWrap" class="btn-wrap overlap single">
                      <Link
                        to=""
                        id="buy"
                        type="button"
                        class="btn-lg btn-primary"
                      >
                        <span class="text">구매하기</span>
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

export default BookDetailPage_battery;
