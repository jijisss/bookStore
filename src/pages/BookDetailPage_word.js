import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/popularBook4.jpg";
import BookDetailImage from "../images/i9788901253060.jpg";

function BookDetailPage_word() {
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
                  <div className="prod-title-box">
                    너의 말이 좋아서 밑줄을 그었다
                  </div>
                  <div className="prod-desc-area">
                    <p>림태주 에세이</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">림태주 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          웅진지식하우스
                        </Link>
                        2021년 10월 15일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">시/에세이 489위</span>
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
                        <span className="val">13,500</span>
                        <s className="val-origin">15,000</s>
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
                          나라별 에세이
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          한국에세이
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
                              전문기관 추천도서 > 문학나눔 선정도서 > 2022년
                              선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      “나와 당신의 언어들이 우리 사이를 채웠으면 좋겠다”
                      <br></br>
                      진심을 담은 가장 단순한 삶의 문장들과
                      <br></br>
                      마음의 사이를 잇는 보통의 언어에 대하여
                    </div>
                    <div className="info-text">
                      뜨겁지도 차갑지도 않은 적정한 온도로 배어드는 관계의
                      언어가 있다. 수십만 수백만 개의 말들 중 바로 그 언어가
                      우리 사이를 채운다. 시인은 말한다. 인생이란 결국 어떤
                      사람에게 선을 잇고 어떤 언어에 줄을 그을 것인가를 선택하는
                      일이라고. 세상의 많고 많은 말들 중에 내가 밑줄을 그은
                      말들이 나의 언어가 된다고. 그리고 끊임없이 묻는다. 당신이
                      어떤 언어를 사랑했는지, 어떤 환상을 좇았는지, 어떤 빛이
                      되고 싶어 했는지. 시인의 언어를 따라다가 보면, 나의 언어로
                      누군가의 어두운 마음을 어떻게 비출 수 있을지 헤아리게
                      된다. 그리고 깨닫게 된다. 상대의 말을 온 마음으로 들을 때
                      비로소 ‘우리’라는 관계가 피어난다는 사실을.
                      <br></br>
                      결국 이 책은 언어로 이룬 관계에 대한 에세이다. 오늘 당신이
                      밑줄을 그어 사랑하는 사람에게 건네고 싶은 언어는 무엇인가?
                      그 언어가 마음의 사이를 이어줄 것이다. 시인의 진심을 담은
                      삶의 문장으로 채워진 페이지를 넘기며 밑줄을 그어도 좋다.
                      지금 떠오르는 바로 그 사람에게 밑줄 가득한 이 책을
                      건네보는 건 어떨까. 그렇게 ‘우리’가 시작될지도 모르는
                      일이니 말이다.
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
                          <span className="text">림태주</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                최소한의 삶이 최선의 삶이다. 나는 이 정언을
                                믿으며 쓴다. 거의 실패하지만 나만이 쓸 수 있는
                                가장 단순한 삶의 문장을 꿈꾼다. 한때 서정시를
                                썼으나 지금은 보통의 언어로 생활에 정박해 있다.
                                세상에 와서 가장 많은 신세를 지는 마음이라는
                                정체를 알고 싶었다. 『관계의 물리학』이 사람
                                사이에 작용하는 마음의 중력을 물리적 상상력으로
                                풀어냈다면, 『너의 말의 좋아서 밑줄을 그었다』는
                                언어의 명도가 마음의 채도에 미치는 영향과 그
                                둘의 관계를 보정하는 화학식을 찾으려고 온 마음을
                                다해 썼다.
                                <br></br>
                                지난 작품들 덕분에 지금이 있다. 아무도
                                그리워하지 않으려고 쓴 『그리움의 문장들』,
                                동백꽃처럼 더운 사랑으로 쓴 『그토록 붉은
                                사랑』은 여전히 나를 흔들어 붉고 외롭게 한다.
                                언어의 연금술사들이 많지만 나도 그 직업에
                                종사한다는 자긍을 부끄러워한 적이 없다.
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
                              Prologue ◆ 내가 만난 최고의 문장<br></br>
                              <br></br>
                              1부 ◆ 사이의 명도<br></br>
                              진심을 알아보는 법<br></br>
                              믿는다는 말에 대하여<br></br>
                              나의 삶을 설명하는 일<br></br>
                              사랑의 화학<br></br>
                              은어의 세계<br></br>
                              가끔은 혼자여도 좋다<br></br>
                              싸움의 기술<br></br>
                              관계의 말들<br></br>
                              사랑하지 않는 것도 사랑이다<br></br>
                              당신이 오래 살았으면 좋겠다<br></br>
                              말의 표정<br></br>
                              언어의 화학<br></br>
                              지금 하는 말<br></br>
                              당신이 하지 않은 말<br></br>
                              <br></br>
                              <br></br>
                              2부 ◆ 마음의 날씨<br></br>
                              삶에 응답하는 중<br></br>
                              마음의 말을 배우는 시간<br></br>
                              나를 지키는 말들<br></br>
                              고요의 원리<br></br>
                              은유는 아름답지 않다<br></br>
                              고픈 게 아픈 것보다 더 아프다<br></br>그 거짓말,
                              정말인가요?<br></br>
                              때로는 낯간지러워도 좋다<br></br>
                              마음보다 말이 앞설 때<br></br>
                              우리는 적당히 외로웠어야 했다<br></br>
                              마음으로 보는 사람<br></br>
                              손이 하는 말<br></br>
                              혼잣말은 아프다<br></br>
                              <br></br>
                              <br></br>
                              3부 ◆ 식물의 빛깔<br></br>
                              활짝 활착하기를<br></br>
                              식물의 은어<br></br>
                              꽃이 하는 말<br></br>
                              채소만 기분이 있는 게 아니에요<br></br>
                              끝이 있기에 아름다운<br></br>
                              식물의 힘<br></br>
                              어떤 말은 인생을 바꾼다<br></br>
                              꿈꾸는 식물들<br></br>
                              식물 집사를 거부한다<br></br>
                              나무를 켜는 시간<br></br>
                              주저하는 마음<br></br>
                              수국즙을 대접하고 싶군요<br></br>
                              식물 중에도 저 같은 식물이 있나요?<br></br>
                              햇볕을 모아두는 식물은 없다<br></br>
                              <br></br>
                              4부 ◆ 글의 채도<br></br>
                              <br></br>
                              시의 오묘한 세계<br></br>
                              언어의 연금술사<br></br>
                              삶이 글을 만드는 순간<br></br>
                              말의 처음을 생각하다<br></br>
                              국어사전 사용법<br></br>잘 쓴 글과 좋은 글
                              <br></br>내 인생은 나만 살아봤으니까<br></br>
                              읽기의 쓸모<br></br>
                              빼기의 미학<br></br>
                              여행에서 얻은 한 문장<br></br>
                              살의 말들<br></br>
                              의미심장이라는 말<br></br>
                              <br></br>
                              Epilogue ◆ 가장 아름다운 것
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
                            인생이란 어떤 사람에게 선을 잇고 어떤 언어에 줄을
                            그을 것인가를 선택하는 일이다. 세상의 많고 많은 말들
                            중에 내가 밑줄을 그은 말들이 나의 언어가 된다. 이 책
                            안에 쓸모 있는 문장들이 있어서 단 몇 줄이라도 그대의
                            것이 된다면, 나는 메밀꽃처럼 환히 흐드러지겠다. -
                            〈Prologue - 내가 만난 최고의 문장〉, 8쪽<br></br>
                            <br></br>
                            <br></br>
                            ‘믿는다’는 말은 진짜 믿기 어려운 말이다. 예전에 나도
                            참 많이 쓴 말인데 이 말에 점점 거리를 두게 되었다.
                            ‘이 좋은 말을 왜?’ 하고 반문할지 모르겠다. 실상 이
                            선량한 말은 아무런 잘못이 없다. 늘 그렇듯이 본뜻과
                            달리 왜곡해서 사용하는 사람이 문제다. (…) 나는
                            믿는다는 말의 속뜻을 헤아려보았다. 약속을 지켜라,
                            기대를 저버리지 마라, 실망시키지 마라, 내 뜻을
                            거스르지 마라, 기필코 해내라. 이런 의미가
                            아니었을까. 이토록 숨 막히는 말을 내가 사랑하는
                            사람들에게 버젓이 해대고 있었다.<br></br>-
                            〈믿는다는 말에 대하여〉, 22~23쪽<br></br>
                            <br></br>
                            바쁘다고 핑계를 대고 만나주지 않는 사람과 바쁘더라도
                            흔쾌히 시간을 내주는 사람의 차이가 관계의 진정성을
                            가른다. 시간이야말로 확실한 진심의 지표다. 오늘 생을
                            마감하는 사람에게 내일이라는 시간은 전 재산을 주고도
                            사지 못하는 가치를 지닌다. 우리 모두는 시간 앞에서
                            유한한 존재들이다. 내가 가진 시간의 양이 목숨이다.
                            그러므로 내가 누군가에게 시간을 내고 있다는 말은 내
                            목숨의 일부를 내주고 있다는 의미다. 누군가를
                            사랑하고 있을 때, 누군가를 미워하고 있을 때,
                            누군가를 기다리고 있을 때도 내 목숨이 사용된다.
                            그래서 인생에서 시간은 어느 것에 더 목숨을 소비하고
                            사용했느냐의 결과를 말한다.<br></br>- 〈진심을
                            알아보는 법〉, 19쪽<br></br>
                            <br></br>
                            돌이켜보면 우리의 사랑이 실패한 이유는 상대방의
                            언어를 제대로 이해하지 못한 데 원인이 있었다. 내가
                            쓰는 언어와 다르지 않다고 판단해 모든 것을 내
                            관점에서 말하고 내 언어 체계로 이해하려 들었다.
                            상대의 말을 그만의 은어라고 여기지 않았다. 탐구하며
                            배우려 하지 않았고 시간과 인내가 소요되는 일임을
                            고려하지 않았다. 자꾸 다른 데서 관계의 하자를 찾으려
                            했으므로 실패를 반복했다. (…) 은어를 직역할 수준이
                            됐을 때, 드디어 우리는 속삭일 수 있게 된다. 아주
                            낮은 목소리로도 몇 마디의 짧은 밀어로도 사랑의
                            본질에 닿을 수 있게 된다. - 〈은어의 세계〉, 36~37쪽
                            <br></br>
                            <br></br>
                            <br></br>
                            우리는 매일매일 말의 연금술에 몰두한다. 오늘 어떤
                            사람은 당신이 미치도록 보고 싶다는 화학의 말로
                            상대의 심장을 설탕물같이 녹이는 데 성공하고, 어떤
                            아이는 세상에서 엄마가 제일 예쁘다는 화학의 말로
                            엄마의 허파에 헬륨가스 같은 물질을 불어넣는 데
                            성공한다. 어떤 말들은 일산화탄소를 잔뜩 머금고 있다.
                            그 말들은 색깔도 향기도 맛도 없이 스며들어 숨 막혀
                            죽게 만든다. 살려면 신선하고 맑은 말을 쐬어야 한다.
                            활짝 열리는 창문 같은 사람을 만나 마음을 환기해야
                            한다.- 〈언어의 화학〉, 66쪽<br></br>
                            <br></br>
                            <br></br>
                            모든 인생은 와중이나 도중이나 진행 중에 있다. 그
                            삶이 끝나면 더 이상 중을 쓸 수 없다. 죽음에는 중을
                            붙일 수가 없다. 입원 중, 수술 중, 회복 중의 반대는
                            사망이나 영면이지, 사망 중이거나 영면 중은 없다.
                            그래서 살아서 하는 모든 행위는 ‘중’이다. 그게 너무
                            당연해서 중을 생략한다. (…) 나는 지금 어떤 도중인가?
                            나는 지금 무엇을 하는 와중인가? 인생이란 이 질문에
                            대한 대답을 모아놓은 것이다.<br></br>- 〈삶에
                            응답하는 중〉, 81~82쪽<br></br>
                            <br></br>
                            <br></br>
                            “사랑해.” 사랑의 관성을 알아채는 때가 있다. 설렘도
                            없고 눈빛도 흔들리는데 입에서는 사랑한다고 나간다.
                            사랑에 대한 모독이 분명한데 무슨 사정인지 사랑의
                            실낱을 붙들고 있다. 이 말이 사랑의 현재가 아니라
                            사랑해야 한다는 의지를 다잡는 말일 때, 아플까 봐
                            이별을 늦추고 있는 말일 때, 우리는 너무 멀리 와버린
                            사랑의 그림자를 본다. 아득하고 공허한 사랑의 발설,
                            아직은 사랑이라고 믿고 싶은 미련의 잔량. 그 사랑은
                            거짓말이면서 지독한 연민이다. - 〈그 거짓말,
                            정말인가요〉, 103쪽<br></br>
                            <br></br>
                            <br></br>
                            우리는 적당히 외로웠어야 했다. 적당히 거리를 두고
                            적당히 생산해내고 적당히 소비했어야 했다. 마음이
                            오고 가는 궤도를 파괴하고, 서로 숨 쉴 수 있는 존중의
                            거리를 무시했다. 모든 개체는 생존 공간이 필요하고
                            상생을 위해 지켜야 할 경계가 있다. 각자의 궤도가
                            있다. 그 물리적 거리는 가깝게 느껴지거나 멀게
                            느껴지는 감각의 차이가 있을 뿐, 결코 변하거나 사라진
                            적이 없다. 우리는 독립된 행성이기에 각자의 궤도를
                            돌며 자기의 위치에 존재한다. - 〈우리는 적당히
                            외로웠어야 했다〉, 113쪽<br></br>
                            <br></br>
                            <br></br>
                            주기적인 보살핌 혹은 기계적인 관심, 나는 이것을
                            정확한 사랑이라고 부른다. 이 사랑은 정해진 약속을 잘
                            지키면 유지된다. 상당히 편리하고 예측 가능해서
                            괜찮은 사랑법이다. 그런데 정말 괜찮은 걸까. 식물이나
                            사람은 변화무쌍한 날씨 같은 존재들인데. (…) 정확하게
                            말하면 그건 사랑이 아니라 관리다. 양육이 아니라
                            사육이다. 식물 화분이 내게 오면 요즘은 끊임없이
                            묻는다. 네 이름은 뭐니? 넌 어디서 왔니? 네가
                            좋아하는 것은 무엇이니? 네 친구들은 누구니? 내가 널
                            어떻게 해주길 바라니? 그러면 식물은 조금씩 자기에
                            대해 들려준다. 잎이나 꽃으로 신호를 보내오기도 한다.
                            그럴 땐 가슴이 좀 뭉클해진다.<br></br>- 〈식물의
                            은어〉, 135~136쪽<br></br>
                            <br></br>
                            <br></br>
                            좋아하는 무언가를 가진 사람들은 자주 망설인다. 그것
                            앞에서는 마음도 행동도 쉽게 결정하지 못해 머뭇거리곤
                            한다. 이런 유보적이고 우유부단한 태도는 사람들
                            사이에서 환영받지 못한다. 결단력과 추진력이 있어야
                            유능한 사람으로 인정받는다. 그런데 무언가를 아끼는
                            사람에게 이 머뭇거리는 마음은 어쩔 수 없다. (…)
                            사람과 사람 사이에도 이런 사월의 행간이 필요하다.
                            모든 관계가 직선 구간처럼 시원하게 거침없이 뚫려
                            있으면 좋겠는데, 조금 돌아가야 하고 조금 참아줘야
                            하고 조금 기다려줘야 하는 커브 구간이 있다. 지리
                            시간에 배운 게 있다. 기름진 삼각주는 유속이 빠른 강
                            상류가 아니라 하류의 느린 커브 지대에 형성된다.
                            머뭇거리는 마음의 하류에 퇴적되는 아름다운 관계를
                            나는 ‘봄’이라고 부른다. -〈주저하는 마음〉,
                            169~171쪽<br></br>
                            <br></br>
                            삶은 더하기인 줄 알았다. 무엇이든 가지고 무엇이든
                            배우고 무엇이든 채우려고 했다. 그런데 더할수록 비어
                            있음이 많이 보였다. 인생은 더하고 채우는 것이 아님을
                            점차 알게 됐다. 과식이 비만을 데리고 와서 나를
                            가르쳤다. 빼기가 중요하다는 생각이 들자 또 빼는 일에
                            과욕을 부렸다. 살도 점도 사랑니도 무분별한 관계도
                            뺐다. 그러다 문득 깨달았다. 애초에 덜 가지는 게 더
                            현명한 일이라는 것을. 지금 이 순간에도 나는 글을
                            쓰면서 열심히 뺀다. -〈빼기의 미학〉, 227쪽
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
                            “너였다. 지금껏 내가 만난 최고의 문장은. 나는 오늘도
                            너라는 낱말에 밑줄을 긋는다. 너라는 말에는 다정이
                            있어서, 진심이 있어서, 쉬어갈 자리가 있어서, 차별이
                            없어서, 사람이 있어서 좋았다. 나는 너를 수집했고
                            너에게 온전히 물들었다.”
                            <br></br>
                            _프롤로그 중에서
                            <br></br>
                            <br></br>
                            너와 나 사이를 채운 관계의 언어,
                            <br></br>그 말에 밑줄을 그으며
                            <br></br>
                            ‘우리’라는 순간이 시작된다
                            <br></br>
                            <br></br>
                            『관계의 물리학』의 저자, 림태주 작가의 신작이 3년
                            만에 출간되었다. 이번 에세이는 ‘문장’, 즉 ‘언어’의
                            세계에서 시작된다. 『관계의 물리학』이 사람 사이에
                            작용하는 마음의 중력을 시적 상상력으로 물리학에
                            빗대어 풀어냈다면, 이번 책 『너의 말이 좋아서 밑줄을
                            그었다』는 나를 살피고 타인을 살리는 말들, 수많은
                            관계를 만들어내는 언어들을 사유한다.
                            <br></br>
                            <br></br>
                            1부 ‘사이의 명도’에서는 우리 사이를 채우는 언어를
                            읽어나간다. ‘믿는다’는 말이 주는 부담스러운 진심을,
                            ‘하지 않은 말’이 지켜주는 관계를 바라보는 식이다.
                            2부 ‘마음의 날씨’는 오로지 마음으로 들어야만 이해할
                            수 있는 말들에 대해 이야기한다. 시인은 말한다.
                            머리가 아닌 마음으로 받아들여야 하는 말, 그 언어를
                            제대로 이해할 때 관계의 역학은 달라진다고. 3부
                            ‘식물의 빛깔’에서는 식물의 언어에 감각을 열어둔다.
                            마지막으로 4부 ‘글의 채도’에는 자신만의 언어로
                            무엇을 어떻게 쓸 것인지에 대한 고민들이 담겨 있다.
                            <br></br>
                            <br></br>
                            <br></br>왜 시인은 언어의 세계에서 글을 시작했을까.
                            그에 따르면, 우리는 모두 ‘언어의 연금술사’다. 수십만
                            수백만 개의 말들 중 고작 몇 개의 단어와 표현을
                            고르고 세상에 내놓는다. 그러므로 내가 사용하는
                            언어는 곧 나 자신이라고 말할 수 있다. 그러니 나를
                            제대로 알기 위해서도, 또 내가 알고 싶은 그를
                            이해하기 위해서도 반드시 각자의 언어를 들여다보아야
                            한다. 시인에 따르면, 우리의 모든 실패한 사랑들은
                            상대방의 언어를 제대로 이해하지 못한 데 원인이 있다.
                            가까워지고 싶은 상대가 있다면, 제일 먼저 그의 언어를
                            배워야 한다.
                            <br></br>
                            “다시 말하면 은어는 이방인의 세계에 들어가는 비밀
                            코드다. (…) 둘만의 사적인 은어를 밀어(密語)라고
                            한다. 은어를 직역할 수준이 됐을 때, 드디어 우리는
                            속삭일 수 있게 된다. 아주 낮은 목소리로도 몇 마디의
                            짧은 밀어로도 사랑의 본질에 닿을 수 있게 된다.”
                            <br></br>- 본문 중에서
                            <br></br>
                            <br></br>
                            시인은 마음의 사이를 잇는 언어를 찾기 위해, 사랑의
                            본질에 닿기 위해 상대방의 언어를 온 마음으로
                            들어보자고 말한다. 기계적인 사랑과 보살핌 대신에
                            “오늘 기분이 어때요?”라는 은근한 배려의 물음과
                            상대의 말을 헤아리는 노력이 우리 사이를 채워줄
                            것이라는 말이다.
                            <br></br>
                            <br></br>
                            사는 동안, 어떤 언어로 어떤 관계를 만들어나갈
                            것인가. 누구의 말에 밑줄을 그으며 ‘우리’라는 순간을
                            써나갈 것인가. 시인은 언어가 머무는 정거장에서
                            차분히, 다정한 언어로 말을 건넨다. 그렇게 언어로
                            이룬 관계에 대한 에세이는 우리가 어떤 언어로 각자의
                            삶을 살아낼 것인지, 어떻게 커다란 사랑의 우주를
                            지켜낼 것인지 그 길을 비춰줄 것이다.
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
                              9788901253060 ( 8901253062 )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text">2021년 10월 15일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">248쪽</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">
                              131 * 205 * 15 mm / 447 g
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
                      <span className="val">13,500</span>
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

export default BookDetailPage_word;
