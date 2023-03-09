import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bestSellerBook4.jpg";
import bookDetailImg from "../images/i9791197871269.jpg";

function BookDetailPage_stocksecret() {
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
                  <div className="prod-title-box">주식 시세의 비밀</div>
                  <div className="prod-desc-area">
                    <p>| 양장본 Hardcover</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">정재호 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          프런트페이지
                        </Link>
                        2023년 02월 20일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 27위 · 경제/경영 4위
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
                        <span className="val">19,800</span>
                        <s className="val-origin">22,000</s>
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
                          주식/증권
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          주식투자
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      중고가 수십만 원에 거래되는 전설의 투자서!
                      <br></br>
                      대한민국 대표 주식 전문가 부자아빠 시세관의 정수
                      <br></br>
                      《주식 시세의 비밀》 전면 개정판
                      <br></br>
                      <br></br>
                      “진정한 투자자는 시장을 탓하지 않는다!”
                    </div>
                    <div className="info-text">
                      40년 경력 개인 투자자들의 멘토 ‘부자아빠’ 정재호의 《주식
                      시세의 비밀》이 전면 개정판으로 출간되었다. 《주식 시세의
                      비밀》은 절판 이후 투자자들 사이에서 전설의 투자서라
                      불리며 중고가 수십만 원을 호가한 투자 필독서다.
                      <br></br>
                      2020년 호황 이후 시시각각으로 변하는 시장 상황에 상처받은
                      투자자들이 재출간을 강력하게 요청했고, 부자아빠는 이에
                      보답하기 위해 재출간을 결정했다. 2023년 재출간된 이번
                      개정판에서는 코로나 팬데믹 이후 시장의 최신 이슈를
                      업데이트하고, 종목 차트를 전면 교체했으며 새로운 에세이
                      원고들을 추가해 새 옷을 입었다.
                      <br></br>
                      주식투자를 하는 사람이라면 누구나 앞으로 주가가 오를지,
                      내릴지를 궁금할 것이다. 곧 오를 것이라는 소문을 듣고
                      매수했는데 오를 기미가 보이지 않고, 더 가지고 있다가는
                      바닥을 찍을 것 같아 매도했는데 반등하는 경우는
                      비일비재하다. 그렇기 때문에 주식투자에서 주가의 오르내림은
                      투자의 핵심이라 해도 과언이 아니다.
                      <br></br>
                      초보 투자자부터 재기를 꿈꾸는 투자자까지, 수많은 개인
                      투자자들을 손실의 늪에서 구한 부자아빠가 수익을 내는
                      올바른 시세관의 비밀을 낱낱이 공개한다. 270년 전 완성된
                      투자 고전에서 현대 투자자들에게 필요한 내용만을 골라 쉽고
                      재미있게 풀어낸 《주식 시세의 비밀》을 통해서 말이다.
                      대한민국 대표 주식 전문가 부자아빠의 시세관을 엿볼 수 있는
                      이 책을 읽다 보면 시장의 속성을 이해하고, 시장에 흔들리지
                      않는 투자의 원칙을 세울 수 있게 된다. 이제 한 치 앞도 알
                      수 없는 주식시장에서 혼란스러워하는 투자자에게 이 책이
                      든든한 길잡이가 되어줄 것이다.
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area product-trailer">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">북 트레일러</h2>
                  </div>
                  <div className="video-wrap" id="detail-video1">
                    <iframe
                      src="https://www.youtube.com/embed/yBL1bEgfUjw?enablejsapi=1"
                      title="주식 시세의 비밀ㅣ부자아빠 정재호 인터뷰ㅣ중고 최고가 100만 원에 거래된 전설의 투자서 마침내 재출간!"
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
                <div className="prod-detail-area product-person">
                  <div class="title-wrap title-size-md">
                    <h2 class="title-heading">작가정보</h2>
                  </div>

                  <div className="gray-box">
                    <div class="title-wrap title-size-def">
                      <h3 class="title-heading">
                        <span class="title-prefix">저자(글)</span>
                        <span class="text">정재호</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="writer-profile">
                        <img
                          data-kbbfn="s3-image"
                          loading="lazy"
                          alt="정재호"
                          src="https://contents.kyobobook.co.kr/dtl/author/1000313802.jpg"
                          data-src="https://contents.kyobobook.co.kr/dtl/author/1000313802.jpg"
                        />
                      </div>
                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              부자아빠 정재호
                              <br></br>
                              실전 투자 경력 40년의 주식 전문가. 개인 투자자들의
                              멘토로 구독자 25만 명의 유튜브 채널
                              ‘부자아빠주식학교’를 이끌며 온라인 투자 교육방송
                              ‘88TV’, ‘(주)모든국민은주주다’의 회장으로 활발하게
                              활동하고 있다. 가난한 목사의 아들로 태어나 어려운
                              유년시절을 보내며 부자의 꿈을 키웠다. 자식들에게
                              가난을 물려주기 싫어 시작한 주식투자 경력이 벌써
                              40년이 되었다. 우리나라 주식시장에서 개인 투자가
                              본격적으로 시작된 1980년대 초부터 현재에
                              이르기까지 주식시장의 역사를 함께하며 한국
                              주식시장의 산증인으로 불리고 있다.
                              <br></br>그가 재야의 투자 고수로 유명세를 떨치기
                              시작한 것은 2001년부터였다. 9·11테러 영향으로
                              주가가 바닥까지 내려와 있을 때 그는 약세 마인드를
                              버리고 강세 마인드로 전환하라고 촉구하며
                              삼성전자를 강력하게 추천했다. 이를 계기로 그가 쓴
                              칼럼들이 투자자들의 이목을 집중시키며 증권계에
                              새로운 바람을 일으켰고, 이후 각종 증권 채널에서
                              강의 요청을 받아 주식 전문가로서의 삶을 시작했다.
                              <br></br>재치 있는 입담과 시원한 해설로 듣는 이의
                              귀를 사로잡지만 그가 하는 이야기는 듣기에 좋은
                              말들이 아니다. 가끔은 잔인하다 싶을 정도로
                              냉정하게 주식시장과 투자자의 마음을 분석해 반발을
                              사기도 한다. 2021년 초에는 삼성전자의 고점을,
                              2022년 초에는 테슬라와 TQQQ의 고점을 주장해
                              개미투자자들의 원성을 샀지만 결국 시장이 그의 말이
                              맞았다는 것을 증명해주었다.<br></br>한 치 앞을
                              예상하기 어려운 주식시장에서 개인 투자자들이
                              손실의 늪에 빠져 어려움을 겪지 않도록 지난 40년간
                              공부하고 경험으로 익힌 것들을 유튜브와 강연 등을
                              통해 나누고 있다. SBSCNBC 〈스톡챔피언〉, MTN
                              〈이브닝투자쇼 고수〉 등 다수의 증권 전문 방송에
                              출연했으며 한국경제TV에서 5년 연속 베스트 전문가
                              상을 수상했고 《주식투자로 성공한 부자아빠 무작정
                              따라하기》, 《팜시스템 주식투자법》, 《주식투자는
                              마음의 사업이다》 등의 책을 집필했다.
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
                            서문 | 고전 속에 숨겨진 주식 시세의 비밀<br></br>
                            <br></br>
                            [1장] 일본 주식시장의 고전 《삼원금천비록》<br></br>
                            거상이 깨우친 시세의 원리<br></br>왜
                            《삼원금천비록》인가<br></br>
                            부자아빠의 편지_주식으로 부자 되기를 꿈꾸는 당신에게
                            <br></br>
                            <br></br>
                            [2장] 시세의 원리<br></br>
                            시세의 비밀<br></br>
                            삼원의 실천<br></br>
                            이치 밖의 이치<br></br>
                            <br></br>
                            [3장] 매수와 매도의 절대 원칙<br></br>
                            만인이 비관할 때 매수하라<br></br>
                            기다림으로 매수 기회를 포착하라<br></br>
                            만인이 낙관할 때 매도하라<br></br>
                            시장의 관심은 꽃처럼 시든다<br></br>
                            강한 재료가 나오면 역행을 생각하라<br></br>
                            대중과 반대의 길을 가라<br></br>
                            강세장과 약세장에서의 매매 기법<br></br>
                            부자아빠의 편지_시세를 믿고 외로운 늑대처럼 혼자서
                            가라<br></br>
                            <br></br>
                            [4장] 주식시장의 흐름과 장세별 거래법<br></br>
                            시장에 존재하는 큰 흐름<br></br>
                            장세를 읽어라<br></br>
                            장세 전환의 신호<br></br>
                            주가의 천장과 바닥<br></br>
                            횡보장세에서의 대처법<br></br>
                            절반거래<br></br>
                            기다림의 미학<br></br>
                            <br></br>
                            [5장] 역발상 투자법<br></br>
                            공포가 시장을 지배할 때<br></br>
                            거래의 큰 비밀<br></br>
                            소심한 투자자 vs 소신파 투자자<br></br>
                            손실을 두려워 말고 도전하라<br></br>
                            부자아빠의 편지_위기를 기회로 바꾸는 안티프래질
                            투자법<br></br>
                            <br></br>
                            [6장] 자금관리법<br></br>
                            거래의 병사는 자금<br></br>
                            투자는 여유자금으로<br></br>
                            현금을 가진 자가 기회를 잡는다<br></br>
                            <br></br>
                            [7장] 마음을 다스리는 법<br></br>
                            현명한 투자의 적은 바로 투자자 자신<br></br>
                            투자의 세 가지 미덕<br></br>
                            조급한 거래는 실패의 원인<br></br>
                            자제와 인내의 미덕<br></br>
                            인내와 용기<br></br>
                            사고팔고 쉬어라<br></br>
                            <br></br>
                            부록1. 《삼원금천비록》 원문<br></br>
                            부록2. 역대 주도주 10선 차트 해설
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
                          내가 40년간 주식시장에 머무르며 느낀 것은 주식시장은
                          변하지 않는다는 사실이다. 270년 전 우시다가 매매했던
                          쌀뿐만 아니라 주식과 비트코인, 선물 등 현대 투자
                          상품의 시세 움직임에도 역시 《삼원금천비록》에서
                          말하는 시세의 본질이 그대로 적용된다.<br></br>
                          〈서문 : 고전 속에 숨겨진 주식 시세의 비밀〉 pp.11~12
                          <br></br>
                          <br></br>
                          주식투자를 한다 하면 모두 워런 버핏을 이야기하지만,
                          우리 같은 개인 투자자가 워런 버핏을 따라 하다가는
                          가랑이가 찢어지고 만다. 내가 주식투자를 해보니
                          ‘동네부자’, 즉 돈 걱정하지 않는 정도의 부자만 되려고
                          마음을 먹으면 주식시장에서도 편하게 성공할 수 있다.
                          투자를 하면서 자꾸 욕심이 날 때는 동네부자라는 말을
                          떠올리자. 목표를 동네부자로 설정한다면 파산을 경험하지
                          않고도 행복한 부자가 될 수 있을 것이다.<br></br>
                          〈주식으로 부자 되기를 꿈꾸는 당신에게〉 p.45<br></br>
                          <br></br>
                          한발 물러서서 시장을 바라본다면 누구나 쉽게 깨달을 수
                          있는 평범한 진리처럼 보이지만 막상 시장 안에 들어선
                          사람이 시세의 음과 양, 강세와 약세를 구분해내기란 쉽지
                          않다. 찌는 듯한 여름에 눈 내리는 겨울을 쉽게 떠올리지
                          못하고, 혹한의 겨울 날씨에 여름이 올 것을 기대하지
                          못하는 것과 같다.<br></br>
                          우시다의 음양관에서 한 가지 더 주목할 점은 바로
                          ‘움직이는 것이 지극하여 조용해진다’라는 구절이다.
                          시세란 어느 한 방향으로 끝까지 움직이다가 어느 순간
                          추가 상승을 못 하고 등락을 거듭하는 정체 구간에 이르기
                          마련이다. 이때가 음과 양이 바뀌기 위해 조용해지는
                          순간이다. 이 짧은 침묵 속에서 새로운 움직임이
                          시작된다. 이것이 바로 추세 변화의 신호탄이 된다.
                          <br></br>
                          〈시세의 비밀〉 pp.51~52<br></br>
                          <br></br>
                          시장이라는 것은 모두가 강세일 때 하락하고, 모두가
                          약세일 때 상승하기 마련이다. 즉 사람의 마음과 기분을
                          역행한다는 뜻이다. 이것이 바로 시장의 재미있는 점이다.
                          눈에 보이지 않는 무언가가 시장을 조종하는 것일까? 이런
                          현상 때문에 시장의 원리를 ‘이치 밖의 이치’라 말하는
                          것이다.<br></br>
                          〈이치 밖의 이치〉 p.65<br></br>
                          <br></br>
                          “만인이면 만인, 모두 비관적이 되면 상승의 이치를 품는
                          쌀이 된다.”<br></br>
                          시장의 흐름을 관찰하다 보면 우시다가 지적한 것과 같이
                          비관적인 상황에 이르렀을 때가 주식투자를 하기에 가장
                          좋은 때라는 것을 알 수 있다. 가장 비관적일 때 사야만
                          돈을 벌 수 있다. 그러나 실제로 이러한 때의 시장
                          분위기는 어떠한가? 아무도 주식을 쳐다보지 않는다.
                          삼삼오오 모인 자리에서도 입 밖으로 주식 이야기를
                          꺼내는 사람이 없다.<br></br>
                          하지만 바로 이때가 주식시장에서 바겐세일이 진행되는
                          때다. 이럴 때 주식시장은 조용히 상승을 준비한다.
                          현명한 투자자만이 세일 때 좋은 물건을 싸게 살 수
                          있다는 것을 안다. 오랜 경험에서 비롯한 통찰 덕분이다.
                          <br></br>
                          〈만인이 비관할 때 매수하라〉 pp.71~72<br></br>
                          <br></br>
                          그러나 나는 2021년부터 꾸준히 삼성전자와 카카오가
                          위험해 보인다고 언급해왔고, 2021년 11월부터는 미국
                          시장에 대해서도 한발 물러날 것을 권했다. 시세가
                          다했다는 징조를 읽었기 때문이다. 많은 전문가가
                          삼성전자를 칭송할 때 나는 홀로 하락을 주장했다.
                          “만인이면 만인 모두 낙관적이면 바보가 되어 쌀을 팔아야
                          한다. 시세의 비밀 중 한 구절입니다.” 하지만 사람들은
                          10만 전자를 노래하며 듣지 않았다. 돌아보니 어떠한가?
                          이미 고점을 찍은 시세는 아무리 꿈을 들이부어도
                          상승세를 이어갈 수 없다.<br></br>
                          〈시세를 믿고 외로운 늑대처럼 혼자서 가라〉 p.141
                          <br></br>
                          <br></br>
                          지나치게 한쪽으로 치우친 시세관은 손해다. 혹여
                          비관적인 세계관을 갖고 있다고 하더라도 그것이 시세를
                          보는 눈까지 점령하게 해서는 안 된다. 주식시장에서
                          성공하려면 시장에 적합한 시세관을 갖기 위해 노력해야
                          한다. 시장에서 살아남아 성공한 사람들은 하나같이
                          철저한 시장주의자들이다.<br></br>
                          〈소심한 투자자 vs 소신파 투자자〉 p.188
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
                          주식투자 경력 40년!<br></br>
                          재야의 투자 고수 ‘부자아빠’ 정재호가 말하는<br></br>
                          흔들리지 않는 시세관의 모든 것<br></br>
                          <br></br>
                          출간되자마자 ‘출간되기를 기다렸다’, ‘출간해줘서
                          고맙다’라는 감사 인사가 달린 책이 있다. 투자자들
                          사이에서 꼭 읽어야 할 책으로 입소문이 나서 절판된 후
                          중고가 수십만 원에 거래된 책, 《주식 시세의 비밀》
                          이야기다.<br></br>이 책의 저자 부자아빠 정재호는
                          우리나라에서 개인 주식투자가 본격적으로 시작된
                          1980년대 초부터 지금까지 주식투자를 해온 한국
                          주식시장의 산증인이자 재야의 투자 고수다. 가난한
                          목사의 아들로 태어났던 그는 자식들에게 절대로 가난을
                          물려주지 않겠다고 다짐하며 부자가 되는 방법을
                          연구했다. 그리고 연구 끝에 자본주의 사회에서 부자가
                          되는 방법은 사업을 하거나 사업을 잘하는 회사의 주주가
                          되는 것 외에는 없다는 것을 깨닫고 주식투자에
                          뛰어들었다.<br></br>
                          40년간 주식투자를 하며 큰 부를 이루었지만 그런 그도
                          처음부터 투자를 잘했던 것은 아니었다. 초반 20년 동안은
                          5번이나 파산하며 큰돈을 잃었고 잠실 아파트도 날려야만
                          했다. 투자에 실패해 가족들을 생활전선으로 내몰며
                          자괴감에 빠지기도 했지만, 결국 다시 일어나 호황에도
                          불황에도 수익을 내는 투자 고수가 되었다.<br></br>
                          그가 더 이상 파산하지 않고 투자에 성공할 수 있었던
                          비결은 무엇일까? 말 그대로 그의 운명을 바꾼 책을
                          만났기 때문이다. 일본 주식시장의 투자 바이블
                          《삼원금천비록》이 그 주인공이다. 부자아빠는 이 책을
                          통해 시세의 비밀을 깨닫고 시세관을 완성했으며 책을
                          접한 이후 한 번도 멀리한 적이 없다고 말한다. 이제 이
                          책이 더 많은 사람들의 운명을 바꿔주기를 기대하며
                          《삼원금천비록》에 담긴 내용 중 현대 투자자들에게
                          필요한 내용만을 뽑아 쉽게 풀어 쓴 책을 펴냈다. 시장
                          상황에 관계없이 수익을 내는 시세관을 갖고 싶은 이들을
                          위한 투자 바이블, 《주식 시세의 비밀》이다.<br></br>
                          <br></br>
                          “대중이 낙관할 때 매도를 준비하고<br></br>
                          대중이 비관할 때 매수하라!”<br></br>
                          시대를 초월한 투자 비법을 담은<br></br>
                          새로운 투자 고전의 탄생<br></br>
                          <br></br>
                          《삼원금천비록》은 1750년대 일본 쌀 시장의 거상 우시다
                          곤자부로가 60년간 쌀 매매를 하며 깨달은 시세의 원리를
                          담은 책이다. 270년 전 완성된 책이지만 오늘날에도 일본
                          주식시장의 투자 고전으로 통하며 많은 사람의 사랑을
                          받고 있다.<br></br>이 책의 핵심은 시세에 음양이 있다는
                          것, 즉 시세가 오름과 내림을 반복한다는 것이다. 이는
                          현대 주식시장의 강세장, 약세장과 통하는 개념이다.
                          시장은 결코 오르기만 하거나 내리기만 하는 곳이 아니다.
                          시장이 강세일 때는 한없이 오를 것으로 예측하고, 내릴
                          때는 한없이 내릴 것으로 예상하는 대중들의 시세관을
                          바로잡아야 하는 이유다.<br></br>
                          오래된 투자 고전이 여전히 많은 사람에게 읽히는 이유는
                          이 책에서 말하는 시장의 속성이 오늘날과 무척이나
                          유사하기 때문이다. 부자아빠는 이 책을 읽으며 270년 전
                          쌀 시장에서 쌀 가격이 형성되는 원리와 현대
                          주식시장에서 주가가 결정되는 원리가 놀랍도록
                          동일하다는 것을 발견했다고 한다. 그래서 변하지 않는
                          시장에 대응하는 투자 전략으로 시대를 초월한 투자
                          비법을 선택했다.<br></br>
                          상인으로서 60년간 직접 쌀 매매를 하며 거상이 된 우시다
                          곤자부로가 쓴 책을 개인 투자자로서 40년간 실전 투자를
                          하며 부를 축적한 부자아빠가 풀이한 《주식 시세의
                          비밀》은 두 대가의 시세관이 집약된 새로운 투자
                          고전이다. 이 책에는 시세관뿐만 아니라 구체적인 거래
                          기법, 자금관리법, 마음관리법 등 투자자들이라면
                          궁금해할 만한 이야기들이 가득 담겨 있어 가히
                          투자자들을 위한 종합선물세트라 할 수 있다. 부자아빠가
                          수십 년간 직접 보고, 듣고, 경험한 한국 주식시장의
                          사례들이 풍부하게 펼쳐지기 때문에 주식투자를 이제 막
                          시작한 사람도 경험이 많은 사람도 흥미롭게 읽을 수 있을
                          것이다.<br></br>
                          시장을 이기는 투자 철학을 정비하고 싶다면, 냉혹한
                          주식시장에서 살아남고 싶다면 《주식 시세의 비밀》이
                          바로 그 답이 될 것이다. 이 책을 통해 시세관을 정비하고
                          투자 전략을 바로 잡는다면 어느새 돈 걱정 없는 행복한
                          부자의 길에 올라타 있는 자신을 발견하게 될 것이다.
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
                            9791197871269 ( 1197871268 )
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
                    <span class="val">19,800</span>
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

export default BookDetailPage_stocksecret;
