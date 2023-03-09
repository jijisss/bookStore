import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/popularBook5.jpg";
import BookDetailImage from "../images/i9788925577067.jpg";

function BookDetailPage_star() {
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
                  <div className="prod-title-box">별빛 너머의 별</div>
                  <div className="prod-desc-area">
                    <p>나태주 시인의 인생에서 다시 없을 사랑 시 365편</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">나태주 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          알에이치코리아
                        </Link>
                        2023년 01월 25일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 528위 · 시/에세이 27위
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
                        <span className="val">16,200</span>
                        <s className="val-origin">18,000</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">750p</div>
                          </div>
                        </div>
                      </div>
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">배송안내</div>
                          <div className="prod-guide-cont">
                            <div className="delivery-guide-text">
                              <span id="OrderDeliveryType">
                                도서 포함 15,000원 이상 무료배송
                              </span>
                            </div>
                          </div>
                          <div className="prod-guide-cont">
                            <div className="delivery-guide-text">
                              <span id="OrderEstimatedDate">
                                <strong>3월 10일 출고예정</strong>
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
                    <img src={BookDetailImage} />
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
                          시/에세이
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          한국시
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          현대시
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      지나간 사랑도, 소비해버린 인생도
                      <br></br>
                      허무하지 않고 오히려 감사했다 고백한
                      <br></br>
                      나태주 시인의 사랑 시 365편
                    </div>
                    <div className="info-text">
                      그대 부디 별을 가슴에 안아라. 그러고는 별이 가짜가 아니라
                      진짜가 되기를 바라며 그대의 길을 가라.
                      <br></br>
                      그러노라면 그대의 인생도 가짜가 아니라 진짜가 되는 날이
                      있을 것이다.
                      <br></br>
                      _프롤로그 중에서
                      <br></br>
                      <br></br>시 쓰기는 길거리에 버려진 보석들을 줍는 것과
                      같다는 시인 나태주. 그래서인지 나태주 시인의 시 소재들은
                      사람, 자연, 세상 등 다양하다. 그 어떤 것에서든 영감을 찾는
                      시인은, 버려져 굴러다니는 돌덩이를 보며 시를 쓰기도 하고,
                      스마트폰 알람 글에서도, 얼굴을 간질이며 스쳐 지나가는
                      바람에서도 시를 쓰기도 하는 진정한 풀꽃 시인이다.
                      <br></br>
                      <br></br>
                      그가 10여 년 전부터 켜켜이 써내려간 사랑 시 365편을 엮어
                      《별빛 너머의 별》이라는 시선집을 출간했다. 세상을
                      사랑하고, 사람을 사랑해 마치 연애편지를 쓰듯 써내려갔던
                      나태주 시인의 사랑 시 365편은, 마치 시인의 일생을 담듯 한
                      편 한 편 정성스럽게 고르고 고른 시들이다. 그리하여 나태주
                      시인의 인생에서 다시없을 사랑 시라 해도 여한이 없을 정도로
                      시인 자신도 그동안의 사랑 시 중 결정판이라 강조하며 특별한
                      애정을 보이고 있다. 특히 이번 시선집은, 현재를 살아가면서
                      불확실한 미래로 막막하고, 불안정하며 우울한 이들에게 현상
                      너머 진짜를 보는 반짝이는 별이 되라고 시인 특유의 따뜻하고
                      진솔한 시어로 위로를 전하고 있다.
                    </div>
                  </div>
                  <div className="prod-detail-area product-person">
                    <div className="title-wrap title-size-md">
                      <h2 className="title-heading">작가정보</h2>
                    </div>
                    <div className="gray-box">
                      <div className="title-wrap title-size-def">
                        <h3 className="title-heading">
                          <span className="title-prefix">저자(글)</span>
                          <span className="text">나태주</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                풀꽃 시인. 초·중등학교 교과서에 시가 실리고,
                                독자들로부터 광화문 글판 가운데 가장 마음을
                                울리는 글로 선정될 만큼 많은 사랑을 받았다.
                                ‘자세히 보아야 예쁘다/ 오래 보아야 사랑스럽다/
                                너도 그렇다’라는 〈풀꽃〉 시로 유명하다. 인생과
                                자연을 사랑하는 시인이며, 메말라가는 화초에 물을
                                듬뿍 주어야 하는 것처럼 삶에 지친 사람들의
                                가슴에 촉촉한 감성의 시를 전해주어야 한다고 믿는
                                시인이다. 오랜 기간 초등학교 교단에서 아이들을
                                가르쳐, 아이들의 동심을 닮은 순수함을 지녔다.
                                1971년 《서울신문》 신춘문예로 등단한 이후
                                50권의 창작시집을 펴냈다. 공주문화원장,
                                한국시인협회장을 지냈다.
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
                              프롤로그 별을 그대 가슴에<br></br>
                              <br></br>
                              1부<br></br>
                              꼬마전구에 반짝 불이 켜지듯<br></br>별 1<br></br>
                              별 2<br></br>
                              개양귀비<br></br>
                              꽃그늘<br></br>
                              쾌청<br></br>꿈<br></br>
                              제비꽃<br></br>
                              일요일<br></br>
                              구름<br></br>
                              문자메시지 1<br></br>
                              못난이 인형<br></br>
                              퐁당<br></br>
                              날마다 기도<br></br>
                              선물 가게 1<br></br>
                              가을밤<br></br>
                              첫사랑<br></br>섬<br></br>
                              첫눈<br></br>
                              혼자 있는 날<br></br>
                              별처럼 꽃처럼<br></br>한 사람 건너<br></br>
                              떠난 자리<br></br>
                              못나서 사랑했다<br></br>
                              살아갈 이유<br></br>
                              사진을 자주 찍다<br></br>
                              어떤 흐린 날<br></br>
                              너도 그러냐<br></br>
                              새우 눈<br></br>
                              하나님께<br></br>
                              비밀일기 1<br></br>
                              비밀일기 2<br></br>
                              지상천국<br></br>
                              나도 모르겠다<br></br>
                              너한테 지고<br></br>
                              다짐 두는 말<br></br>한 소망<br></br>
                              나무 1<br></br>네 앞에서 1<br></br>네 앞에서 2
                              <br></br>
                              멀리<br></br>
                              까닭<br></br>
                              약속<br></br>
                              하나의 신비<br></br>
                              부탁이야<br></br>
                              대답<br></br>
                              져주는 사랑<br></br>
                              목련꽃 낙화<br></br>
                              가을의 차<br></br>
                              하나님만 아시는 일<br></br>
                              말은 그렇게 한다<br></br>
                              웃기만 한다<br></br>
                              민낯<br></br>
                              보석<br></br>그 애의 꽃나무<br></br>
                              사랑은 비밀<br></br>
                              문자메시지 2<br></br>
                              별을 사랑하여<br></br>
                              물고기<br></br>
                              숙이의 봄<br></br>
                              어린 아내<br></br>
                              물푸레나무 그늘 아래<br></br>
                              또다시 묻는 말<br></br>딸<br></br>
                              아버지 1<br></br>
                              아버지 2<br></br>
                              바로 말해요<br></br>
                              이별 예감<br></br>차<br></br>
                              숲속의 인사<br></br>
                              쑥부쟁이<br></br>
                              통화<br></br>
                              지구에서 이사 가는 날<br></br>그 아이<br></br>
                              이걸 어쩌나<br></br>
                              나무 2<br></br>
                              여행<br></br>
                              몌별袂別<br></br>
                              섬수국<br></br>
                              히말라야<br></br>
                              쏙소리감<br></br>
                              꽃에 대한 감격<br></br>꽃 1<br></br>
                              꿈처럼 오는 생각<br></br>
                              오는 봄<br></br>
                              눈사람<br></br>
                              밤이 깊을수록<br></br>
                              기다리는 시간<br></br>
                              은방울꽃<br></br>
                              옥잠화<br></br>
                              선물 1<br></br>
                              사랑은<br></br>
                              마지막 기도<br></br>
                              방문<br></br>
                              때로 사랑은<br></br>
                              들국화<br></br>
                              <br></br>
                              2부<br></br>
                              날마다 새날처럼 가슴 설레며<br></br>
                              도깨비 사랑<br></br>그 말<br></br>
                              짝사랑 1<br></br>
                              그래서 꽃이다<br></br>
                              각성<br></br>
                              붉은 꽃 한 송이<br></br>또 다른 행복<br></br>
                              짝사랑 2<br></br>
                              소망<br></br>
                              과연 사랑이었을까<br></br>
                              이별에게<br></br>
                              물봉선<br></br>
                              1월 1일<br></br>
                              미루나무 본다<br></br>한 마디<br></br>
                              바람 부는 지구 위에<br></br>
                              너를 보았다 1<br></br>
                              너는 바보다<br></br>한 사람<br></br>
                              비로소<br></br>
                              차가운 손<br></br>
                              감격<br></br>
                              뿐이랴<br></br>삶<br></br>
                              상생<br></br>
                              사랑에 감사<br></br>말<br></br>
                              너를 보았다 2<br></br>
                              황홀 극치<br></br>
                              약속<br></br>
                              어린 슬픔<br></br>
                              측은지심<br></br>
                              동백<br></br>꽃 2<br></br>꽃 3<br></br>꽃 4
                              <br></br>
                              사랑이 올 때<br></br>
                              이별 1<br></br>
                              선물 2<br></br>
                              제비꽃 사랑<br></br>
                              그런 사람으로<br></br>
                              별짓<br></br>
                              장식<br></br>
                              고백<br></br>꽃 5<br></br>
                              너에게 감사<br></br>
                              마음의 용수철<br></br>
                              마음의 길<br></br>
                              오밤중<br></br>
                              카톡 1<br></br>
                              몽유夢遊<br></br>
                              사랑에 답함<br></br>
                              왼손<br></br>
                              큰일<br></br>
                              느낌<br></br>
                              며칠<br></br>
                              혼자만 생각했을 때<br></br>
                              멀지 않은 봄<br></br>
                              묻지 않는다<br></br>
                              그리하여, 드디어<br></br>
                              태안 가는 길<br></br>
                              외면<br></br>
                              응답<br></br>
                              다시 제비꽃<br></br>
                              꽃잎<br></br>
                              이슬<br></br>
                              어린 사랑<br></br>
                              오리 눈뜨다<br></br>
                              가을도 저물 무렵<br></br>
                              후회<br></br>
                              영산홍<br></br>
                              그냥 약속<br></br>
                              매니큐어<br></br>
                              입술 1<br></br>
                              두고 온 사랑<br></br>
                              사막 무지개<br></br>별 3<br></br>
                              칸나<br></br>
                              소망<br></br>
                              잡은 손<br></br>
                              찬바람 분다<br></br>그 아이<br></br>
                              마른 꽃<br></br>
                              작은 깨침<br></br>
                              바람 부는 날<br></br>
                              답답함<br></br>
                              우정<br></br>
                              인상<br></br>
                              끝끝내<br></br>
                              환청<br></br>
                              돌담<br></br>내 곁에 오래<br></br>
                              그리하여 사랑은<br></br>
                              <br></br>
                              3부<br></br>
                              어느 강을 건너서 너를 만나랴<br></br>
                              생각 속에서<br></br>
                              까닭<br></br>
                              봄비가 내린다<br></br>
                              너를 위하여<br></br>
                              어떤 문장<br></br>
                              까닭 없이<br></br>
                              안쓰러움<br></br>
                              문간에서 웃다<br></br>
                              순간순간<br></br>
                              의자<br></br>
                              옆얼굴<br></br>
                              눈부처 1<br></br>
                              둘이 꽃<br></br>
                              별들도 아는 일<br></br>
                              그래도 남는 마음<br></br>
                              그래도<br></br>
                              부끄러움<br></br>
                              불평<br></br>
                              파도<br></br>
                              곡성 가서<br></br>너 하나의 꽃<br></br>
                              산행 길<br></br>
                              너를 두고 1<br></br>
                              어설픔<br></br>
                              함께 여행<br></br>
                              핑계<br></br>
                              너를 찾는다<br></br>
                              인생<br></br>
                              바다 같은<br></br>
                              어여쁨<br></br>
                              블루실 아이스크림<br></br>
                              청사과<br></br>
                              국수를 먹으며<br></br>
                              설렘 1<br></br>
                              설렘 2<br></br>
                              새초롬한<br></br>
                              꽃과 별<br></br>
                              여행의 끝<br></br>
                              떠남<br></br>
                              망각<br></br>
                              비파나무<br></br>
                              겨울 장미<br></br>눈 1<br></br>
                              혼자서 중얼거리네<br></br>
                              선물 3<br></br>
                              선물 가게 2<br></br>
                              어린 봄<br></br>
                              조용한 날<br></br>
                              제발<br></br>
                              허튼 말<br></br>
                              감사<br></br>
                              사랑<br></br>
                              앵초꽃<br></br>
                              찻집<br></br>
                              아침의 생각<br></br>
                              내일도<br></br>
                              여러 날<br></br>
                              휘청<br></br>
                              근황<br></br>
                              첫눈 같은<br></br>
                              모를 것이다<br></br>
                              시로 쓸 때마다<br></br>
                              야생화<br></br>
                              제비꽃 옆<br></br>
                              눈빛<br></br>
                              매직에 걸리다<br></br>
                              찻잔에<br></br>
                              별, 이별 1<br></br>
                              별, 이별 2<br></br>
                              별, 이별 3<br></br>
                              전화<br></br>
                              눈부처 2<br></br>
                              하루만 못 봐도<br></br>
                              기도의 자리<br></br>
                              미루나무<br></br>
                              스스로 선물<br></br>
                              꽃나무 아래<br></br>
                              누군가 울고 있다<br></br>
                              어린 시인에게<br></br>
                              송별 1<br></br>
                              송별 2<br></br>
                              벚꽃 이별<br></br>
                              그리고<br></br>
                              별것도 아닌 사랑<br></br>
                              사랑은 혼자서<br></br>
                              수은등 아래<br></br>
                              별이 흐르듯<br></br>
                              슬픔의 몫<br></br>
                              <br></br>
                              4부<br></br>
                              꽃비 내리는 날에 다시 만나서<br></br>
                              사진<br></br>
                              카톡 2<br></br>
                              재회 1<br></br>
                              재회 2<br></br>
                              선물 4<br></br>
                              오후의 시간<br></br>
                              바람 부는 날이면<br></br>
                              그만큼<br></br>
                              낙화<br></br>
                              어쩌면 좋으냐<br></br>
                              연인<br></br>
                              봄이니까<br></br>
                              날씨 좋다<br></br>별 4<br></br>
                              귀걸이<br></br>
                              맹목<br></br>
                              어디만큼 가서<br></br>
                              향기<br></br>
                              떠나는 너<br></br>
                              바다<br></br>
                              이별 사랑<br></br>
                              꽃구경<br></br>
                              철부지 마음<br></br>
                              노래로<br></br>
                              너를 두고 2<br></br>
                              호수 1<br></br>
                              늦여름<br></br>
                              아리잠직<br></br>
                              느낌으로<br></br>
                              목소리 듣고 싶은 날<br></br>
                              해거름 녘<br></br>
                              금세<br></br>
                              호수 2<br></br>손 인사<br></br>
                              재회 3<br></br>
                              재회 4<br></br>
                              가을날 맑아<br></br>
                              계단<br></br>
                              입술 2<br></br>
                              포옹<br></br>
                              봄비<br></br>
                              만나지 못하고<br></br>
                              맨발<br></br>
                              고칠 수 없는 병<br></br>
                              사랑은 이제<br></br>
                              선물 아침<br></br>
                              좋은 때<br></br>
                              행운<br></br>
                              작은 마음<br></br>
                              이별 이후<br></br>
                              그러므로<br></br>
                              추억<br></br>
                              애인<br></br>
                              육아 퇴근<br></br>
                              슬이의 애기<br></br>
                              젊은 엄마에게<br></br>
                              엄마 마음<br></br>
                              허둥대는 마음<br></br>
                              다시 초보 엄마에게<br></br>
                              모를 일<br></br>
                              그래도<br></br>너 보고 싶은 날<br></br>
                              분꽃 옆에<br></br>
                              부모 마음<br></br>
                              빈방<br></br>한 아름<br></br>
                              너에게도 봄<br></br>
                              네가 없음<br></br>
                              겨울에도 꽃 핀다<br></br>
                              발견<br></br>
                              옛날 찻집<br></br>또 하나 사랑<br></br>
                              셔터의 유혹<br></br>너 가다가<br></br>
                              새벽 감성<br></br>
                              멀리 기도<br></br>
                              드라이브<br></br>
                              황혼 무렵<br></br>
                              산버찌나무 아래서<br></br>
                              나의 소망<br></br>
                              가을 기다림<br></br>꽃 필 날<br></br>
                              오지 못하는 마음<br></br>
                              오키나와 여름<br></br>
                              벚꽃 만개<br></br>
                              우체국행<br></br>
                              쪽지글<br></br>
                              이제 사랑은<br></br>그 언약<br></br>
                              <br></br>
                              에필로그 꿈이었다
                            </li>
                          </ul>
                        </div>
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
                            약속<br></br>
                            <br></br>
                            달빛이 있는 곳까지만 함께 가자<br></br>
                            손가락 걸었다<br></br>
                            풀벌레 소리 있는 곳까지<br></br>
                            개울 물소리 나는 곳까지만 함께 가자<br></br>
                            손가락 걸었다<br></br>
                            끝내 마음이 있는 곳까지만<br></br>
                            함께 가자<br></br>
                            오늘 바로 그랬다.<br></br>
                            -본문 62쪽<br></br>
                            <br></br>
                            오는 봄<br></br>
                            <br></br>
                            나쁜 소식은 벼락 치듯 오고<br></br>
                            좋은 소식은 될수록 더디게<br></br>
                            굼뜨게 온다<br></br>
                            <br></br>
                            몸부림치듯, 몸부림치듯<br></br>
                            해마다 오는 봄이 그러하다<br></br>
                            내게 오는 네가 그렇다<br></br>
                            -본문 114쪽<br></br>
                            <br></br>
                            후회<br></br>
                            <br></br>
                            이담에 이담에 나는 너에게<br></br>
                            사랑한다는 말을 너무 여러 번 한 것을<br></br>
                            후회할 것이고<br></br>
                            <br></br>
                            너는 한 번도 나에게<br></br>
                            사랑한다는 말을 하지 않은 것을<br></br>
                            후회할지도 모른다.<br></br>
                            -본문 209쪽<br></br>
                            <br></br>
                            핑계<br></br>
                            <br></br>
                            못생겨서 예뻤다<br></br>
                            못생겨서 사랑스러웠다<br></br>
                            못생겨서 끝끝내<br></br>
                            잊혀지지 못했다.<br></br>
                            -본문 263쪽<br></br>
                            <br></br>
                            봄비<br></br>
                            <br></br>
                            사랑이 찾아올 때는<br></br>
                            엎드려 울고<br></br>
                            <br></br>
                            사랑이 떠나갈 때는<br></br>선 채로 울자<br></br>
                            <br></br>
                            그리하여 너도 씨앗이 되고<br></br>
                            나도 씨앗이 되자<br></br>
                            <br></br>
                            끝내는 우리가 울울창창<br></br>
                            서로의 그늘이 되자.<br></br>
                            -본문 378쪽<br></br>
                            <br></br>꽃 필 날<br></br>
                            <br></br>
                            내게도<br></br>꽃 필 날 있을까?<br></br>
                            그렇게 묻지 마라<br></br>
                            <br></br>
                            언제든<br></br>
                            꽃은 핀다<br></br>
                            <br></br>
                            문제는<br></br>
                            가슴의 뜨거움이고<br></br>
                            그리움, 기다림이다.<br></br>
                            -본문 427쪽
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
                    <div className="title-wrap title-size-md">
                      <h2 className="title-heading">출판사 서평</h2>
                    </div>
                    <div className="auto-overflow-wrap type-text overflow active">
                      <div className="auto-overflow-contents">
                        <div className="auto-overflow-inner">
                          <p className="info-text">
                            “세상은 다시금 빛나게 될 거야!”<br></br>
                            나태주 시인, 흔들리는 세상 속에서 빛과 같은 시로
                            응원하다<br></br>
                            <br></br>
                            당신의 반짝임을 사랑합니다.<br></br>
                            당신의 외로움을 사랑합니다.<br></br>
                            당신의 슬픔을 또한 사랑합니다.<br></br>
                            너무 힘들어하지 마시기 바랍니다.<br></br>
                            당신을 바라보며 나도 여기<br></br>
                            오래 반짝이는 별빛이려 합니다.<br></br>
                            <br></br>
                            우리는 코로나19라는 전대미문의 보이지 않는 현상과
                            싸우면서 지치고 힘든 시기를 건너왔다. 또한 최악의
                            경기침체로 인해 불안하고 우울한 감정에 휩싸여
                            방향성을 잃고 흔들리고 있다. 그렇게 버텨온 시간 속에
                            어김없이 새날은 밝아왔다. 나의 상황은 여전하지만,
                            세상은 야속하게도 잘만 돌아가고 있는 지금. “나에게
                            희망이 있다고, 나에게 내일이 있다고, 나에게 사랑이
                            있을 거라고 손짓하는” 시집이 있다. 바로 한국인이
                            가장 사랑하는 시인 나태주의 《별빛 너머의 별》
                            시선집이다. 이 시선집은 시인의 인생에서 굴레처럼
                            반복됐던 만남과 동행, 이별과 해후의 서사가 담긴 사랑
                            시 365편으로, 흔들리는 이 시대를 살고 있는
                            사람들에게 용기와 희망을 전하고 있다.<br></br>
                            <br></br>
                            “정작 별은 별빛 너머에 있다. 우리의 능력과 시간이
                            도달할 수 없는 미지의 공간에 있다. 그렇다고 별이
                            아주 없는 거라고 말해서는 안 된다. 어디까지나 별빛
                            너머에 별은 있다. 있어도 분명히 있다. 의심하지
                            말아라. 우리의 사랑도 그렇고 인생도 그러하리니. 우리
                            앞에 다가온 사랑과 인생도 그 표정 너머에 숨겨진
                            얼굴이 있다고 생각하자.<br></br>
                            사랑 너머에 사랑의 실체가 있고 인생 너머에 인생의
                            본질이 있다고 생각하면 얼핏 포기하고 싶어도 쉽사리
                            그러지 못하리라. 사실 너머의 사실, 현상 너머의 또
                            다른 현상을 그리워하고 그것을 끝내 찾아가는 것도
                            우리의 지혜요, 용기다.”<br></br>
                            <br></br>
                            “새로운 꿈이 자라고 이어진다!”<br></br>
                            시인의 고백이자, 살아갈 이에 대한 마음을 전하다
                            <br></br>
                            《별빛 너머의 별》은 총 4부로 구성돼 있다. ‘1부
                            꼬마전구에 반짝 불이 켜지듯’에서는 만남의 순간들을
                            이야기한다. ‘2부 날마다 새날처럼 가슴 설레며’는
                            동행의 걸음들을 담았고, ‘3부 어느 강을 건너서 너를
                            만나랴’에서는 이별의 아픔을 채웠다. 마지막 ‘4부 꽃비
                            내리는 날에 다시 만나서’는 해후의 다양한 모습을
                            표현했다. 이는 그 옛날 시인의 고백일 수도, 또는
                            세상을 향한 고뇌일 수도, 자연을 향한 예찬일 수도
                            있다. 그러나 중요한 것은 그것이 무엇이든 그 고리들이
                            연결되어 새로운 꿈으로 이어진다는 것이다. 그렇게
                            모아진 꿈들이 인생이고 사랑이라고 시인은 말하고
                            있다.<br></br>
                            세상은 점점 각박해져 가지만 나태주 시인은 아직
                            빛나는 세상이라 말하며 이번 시선집 《별빛 너머의
                            별》을 통해 위로 한 움큼을 고이 우리 손에 쥐어쥐듯
                            이 책을 선물처럼 내놓고 있다.
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
                              9788925577067 ( 8925577062 )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text">2023년 01월 25일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">440쪽</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">
                              142 * 214 * 34 mm / 827 g
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
                    <div className="title-wrap title-size-md">
                      <h2 className="title-heading">교환/반품/품절 안내</h2>
                    </div>
                    <div className="claim-info">
                      <ul className="claim-info-list">
                        <li className="claim-info-item">
                          <div className="title-wrap title-size-sm">
                            <p className="title-heading">반품/교환방법</p>
                          </div>
                          마이룸 > 주문관리 > 주문/배송내역 > 주문조회 >
                          반품/교환 신청, [1:1 상담 > 반품/교환/환불] 또는
                          고객센터 (1544-1900)
                          <br></br>* 오픈마켓, 해외배송 주문, 기프트 주문시 [1:1
                          상담>반품/교환/환불] 또는 고객센터 (1544-1900)
                        </li>
                        <li className="claim-info-item">
                          <div className="title-wrap title-size-sm">
                            <p className="title-heading">반품/교환가능 기간</p>
                          </div>
                          변심반품의 경우 수령 후 7일 이내,<br></br>상품의 결함
                          및 계약내용과 다를 경우 문제점 발견 후 30일 이내
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
                          1) 소비자의 책임 있는 사유로 상품 등이 손실 또는
                          훼손된 경우<br></br> (단지 확인을 위한 포장 훼손은
                          제외)
                          <br></br>2) 소비자의 사용, 포장 개봉에 의해 상품 등의
                          가치가 현저히 감소한 경우<br></br> 예) 화장품, 식품,
                          가전제품(악세서리 포함) 등<br></br>3) 복제가 가능한
                          상품 등의 포장을 훼손한 경우<br></br> 예)
                          음반/DVD/비디오, 소프트웨어, 만화책, 잡지, 영상 화보집
                          <br></br>4) 소비자의 요청에 따라 개별적으로 주문
                          제작되는 상품의 경우 ((1)해외주문도서)<br></br>5)
                          디지털 컨텐츠인 eBook, 오디오북 등을 1회 이상
                          다운로드를 받았을 경우<br></br>6) 시간의 경과에 의해
                          재판매가 곤란한 정도로 가치가 현저히 감소한 경우
                          <br></br>7) 전자상거래 등에서의 소비자보호에 관한
                          법률이 정하는 소비자 청약철회 제한 내용에 해당되는
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
                          상품 설명에 반품/교환 관련한 안내가 있는 경우 그
                          내용을 우선으로 합니다. (업체 사정에 따라 달라질 수
                          있습니다.)
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
                      <span className="val">16,200</span>
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

export default BookDetailPage_star;
