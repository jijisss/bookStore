import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bestSellerBook9.jpg";
import bookDetailImg from "../images/i9791156754039.jpg";

function BookDetailPage_insight() {
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
                  <div className="prod-title-box">정세현의 통찰</div>
                  <div className="prod-desc-area">
                    <p>국제질서에서 시대의 해답을 찾다</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">정세현 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          푸른숲
                        </Link>
                        2023년 02월 16일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 81위 · 정치/사회 3위
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
                            <div className="point-text">950p</div>
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
                                <strong>내일(3/11,토) 도착예정</strong>
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
                          정치/사회
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          정치/외교
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          외교/국제관계
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          국제정치/국제관계
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
                              미디어 추천도서 > 주요일간지소개도서 > 조선일보 >
                              2023년 2월 2주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 한겨레신문
                              > 2023년 2월 4주 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      우크라이나 사태부터
                      <br></br>
                      2023 대한민국 외교 문제 나아가 북핵 문제까지
                      <br></br>
                      혼란한 시대, 어떻게 살아야 하는가?
                      <br></br>
                      <br></br>
                      “국제질서에서 시대의 해답을 찾다”
                    </div>
                    <div className="info-text">
                      정세현 전 통일부 장관이 “50년 가까이 학문적으로 그리고
                      직업적으로 천착했던 국제정치 속 남북관계가 나아가야 할 길,
                      그리고 대한민국 외교의 자국 중심성에 대한” 생각과 경험을
                      담은 신간이 출간됐다. 국제정치학을 공부하고 반평생
                      현장에서 통일문제를 다뤄온 저자는 삼국시대부터 현재까지
                      국제정치의 역학관계 속에서 우리가 취한 길들을 되짚는다.
                      이를 통해 외교사적 관점에서 자국 중심성, 자기 목표를
                      지향하는 것이 왜 중요한지, 그러려면 어떤 길로, 어떻게
                      나아가야 하는지 진심을 다해 모색한다. 오랫동안 국제질서의
                      안팎에서 일해온 정세현 장관이 시대를 꿰뚫는 통찰력으로
                      격변하는 지금의 시대를 지혜롭게 돌파해 나갈 방법을 알려줄
                      것이다.<br></br>
                      <br></br>
                      이번 책은 오랫동안 국제정세의 흐름을 파악하고 기민하게
                      읽어온 저자의 외교적 혜안을 바로 이 ‘자국 중심성’이란
                      시선으로 풀어낸다. 국제정치에서 가장 중요한 것은 무엇인지,
                      그리고 여전히 유효한 북핵 문제 해결법을 다룬다. 특히
                      삼국시대부터 한반도에 들어선 나라들이 오랫동안 일방적인
                      국제관계만을 맺은 역사적 맥락 속에서 “독립한 대한민국이
                      어떤 국제질서 속에서 어떻게 국제관계를 맺어왔는지”, 이승만
                      정부부터 문재인 정부까지 어떤 변화가 있었는지를
                      “남북관계와 관련된 국제관계 중 중요한 사건들”과 함께
                      되짚는다. 이는, “이해하고, 다시 생각해 보고, 새로
                      결심”하기 위해서다.<br></br>
                      <br></br>
                      무엇보다 《정세현의 통찰》은 2023년을 살아가는 우리에게
                      요긴한 시대정신을 담고 있다. 일본과 독일이 강대국으로
                      부상한 19세기 국제질서가 격동했듯이, 본격적인 G2시대가
                      시작된 21세기 이후 국제질서는 다시 격동하고 있기 때문이다.
                      우리는 우크라이나 사태를 통해 그 적나라한 현실을 목격하는
                      중이다. 다시 맞은 국제질서의 격변기, 우리는 어떻게 답을
                      찾아야 할까? 19세기 대한제국과 21세기 대한민국은 무엇이
                      다르고 어떻게 여전한가?
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
                        <span class="text">정세현</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="writer-profile">
                        <img
                          data-kbbfn="s3-image"
                          loading="lazy"
                          alt="정세현"
                          src="https://contents.kyobobook.co.kr/dtl/author/1112364102.jpg"
                          data-src="https://contents.kyobobook.co.kr/dtl/author/1112364102.jpg"
                        />
                      </div>
                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              제29대·30대 통일부 장관<br></br>
                              1945년 6월 북만주에서 출생. 8.15 해방 후 부모 등에
                              업혀 만주와 북한을 거쳐 귀국했다. 서울대학교
                              외교학과를 졸업하고 동 대학원에서 중국 외교 관련
                              연구로 정치학박사 학위를 받았다.<br></br>
                              1977년 11월 국토통일원에 들어간 후 ‘배운
                              도둑질’이라는 말마따나, 그는 항상 남북관계를
                              국제정치와 연계시켜 분석하고 대책을 모색했다.
                              남북대화 운영부장, 대통령 통일비서관, 통일부 차관,
                              통일부 장관, 민주평화통일자문회의 수석부의장으로
                              일했다. 1993년 3월 북핵 문제가 발생한 후에는 ‘북핵
                              문제와 남북관계 그리고 국제정치’가 30년째 그의
                              화두다.<br></br>
                              이화여자대학교 석좌교수, 원광대학교 총장을 지냈다.
                              저서로 《모택동의 국제정치사상》, 《정세현의
                              정세토크》, 《정세현의 통일토크》, 《정세현의
                              외교토크》, 《담대한 여정》, 《판문점의 협상
                              가》가 있고, 공저로 《한반도 특강》, 《정세현
                              정청래와 함께 평양 갑시다》 등이 있다.
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
                            저자의말<br></br>
                            <br></br>
                            1부 국제정치의 세계<br></br>
                            <br></br>
                            1장 국제정치란무엇인가?<br></br>: 우크라이나 사태로
                            본 국제정치의 민낯│ 우크라이나가 안 전해질 방법 │
                            2022년 푸틴이 읽은 국제질서의 변화<br></br>
                            <br></br>
                            2장 ‘국제’를 떼고 ‘정치’라는 건 무엇인가?<br></br>:
                            폭력 장치의 또 다른 이름, 정치│법은 멀고 주먹은
                            가깝다│폭력 장치는 국제정치에도 있다│ 영해는 왜
                            3해리였는가<br></br>
                            <br></br>
                            2부 서구 세력의 등장과 팽창하는 일본<br></br>
                            <br></br>
                            1장 팍스 시니카란 무엇인가?<br></br>: 천하를 거느린
                            중국식 국제질서│ 대(對)중국 복속은 언제
                            시작되었나?│중국의 국제질서 만들기<br></br>
                            <br></br>
                            2장 19세기 일본은 어떻게 강대국이 되었나?<br></br>:
                            중국이 아니라 영국을 배우자│일본이 무력으로 다룬 첫
                            나라, 조선│중심과 변방의 이론│일본의 도전,
                            ‘전범국에서 넘버2’로│ ‘팍스 자포니카’의 꿈<br></br>
                            <br></br>
                            3장 한국, 일본, 중국은 가까워질 수 있을까?<br></br>:
                            한국과 일본, 오랜 역사로 얽힌 은원관계│한국과 중국,
                            가까워도 같지 않은 두 나라│일본과 중국, 동아시아를
                            차지하려는 경쟁관계<br></br>
                            <br></br>
                            3부 미소 냉전 시기의 국제정치<br></br>
                            <br></br>
                            1장 미국은 어떻게 국제질서를 만들었나?<br></br>
                            :군사질서에서 경제질서로 그리고......│정보 질서가
                            만들어지는　과정│소련과　경쟁하던　시대<br></br>
                            <br></br>
                            2장 20세기 한국의 국제관계는 어떠했나?<br></br>:
                            이승만 정부: 친미와 반공, 명분이자
                            도구│박정희·전두환 군사정부: 친미를 통한 정통성
                            만들기│노태우 정부: 북방정책과 미국 모시기│미국이
                            우리 정통성의 근거인가?│외교정책의 1번 목표, 안보의
                            첫 번째 수단은?<br></br>
                            <br></br>
                            4부 미국 일방주의시대, G2로 올라선 중국과 선진국이
                            된 한국<br></br>
                            <br></br>
                            1장 미국의 세력권은 어디까지일까?<br></br>: 미국
                            중심 국제질서의 시작│유럽, 마음의 고향│중동, 석유가
                            있는 곳│중앙아시아, 러시아를 견제하다│아프리카,
                            미국의 직접적인 영향권은 아니지만│아시아 태평양
                            지역, G2 중국이 있다<br></br>
                            <br></br>
                            2장 중국은 어떻게 힘을 키웠나?<br></br>: 두 개의
                            백년의 꿈│중국몽 추구는 잘못된 것일까?│고속 성장의
                            잠재력, 인구│“나토의 안보에 도전하는 존재”│미국의
                            착각과 환상│정치가와 정책가는 반드시 달라야 한다
                            <br></br>
                            <br></br>
                            3장 미국 일방주의시대의 한국<br></br>: 김영삼 정부:
                            ‘버르장머리’ 정신과 한미공조│김대중 정부: 설득하고
                            끌고 갔다│노무현 정부: ‘바보 노무현’과 전략적
                            거래│이명박 정부: 미국에게만 ‘이보다 더 좋을 수
                            없는’ 동맹│참모의 자세│국제정치는 결국 배짱의 문제
                            <br></br>
                            <br></br>
                            5부 21세기 G2시대, 다시 격동하는 국제질서<br></br>
                            <br></br>
                            1장 21세기 G2시대 한국 외교는 어떤가?<br></br>:
                            국제질서 격변기에 서 있는 한국│박근혜 정부:
                            북한붕괴론과 미국의 우격다짐│투자와 호구의 결정적
                            차이│17세기 조선과 21세기 한국의 평행
                            이론│국제정치를 국내 정치에 이용하면 모시는 버릇과
                            머릿속 대미종속성<br></br>
                            <br></br>
                            2장 우리는 북핵 문제를 어떻게 풀 수 있을까?<br></br>
                            : 북핵 문제, 누구의 책임인가<br></br>
                            <br></br>
                            3장 문재인정부: 짧았던 한반도의 봄, 무엇을 기억해야
                            할까?<br></br>: 운 좋게, 평창올림픽│정상회담, 어떻게
                            이루어졌나?│강고한 기득권의 세계, 군산복합체
                            │사사건건 발목 잡는 ‘한미워킹그룹’│타미플루 사건과
                            하노이 회담 결렬│악마의 디테일, ‘완전한 조율’│애써온
                            문재인 정부에는 미안하지만│한미관계, 국력만큼
                            자주적으로 만들어야 할 때│군산복합체를 뚫을 현실적
                            전략의 모색│잊지 말아야 할 투자 리스트<br></br>
                            <br></br>
                            4장 우크라이나 사태, 북핵 문제와 우리 외교에 어떤
                            영향을 미칠까?<br></br>: 우크라이나가 믿은 약속│
                            북한에게 이제 CVID는 없다│북한의 6차 핵실험은
                            5+1차가 아니다│ 한미일 삼각동맹에서 한국의
                            위치│미국에 너무 가까이 가면 일본 밑으로 들어갈 수
                            있다│북핵 문제를 푸는 다른 시각, 남북연합
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
                              <p className="title-heading">
                                김준형 (前 국립외교원장, 現 한동대 교수)
                              </p>
                              <p className="info-text">
                                작금은 탈냉전 체제가 흔들리면서 대안 질서는
                                보이지 않는 그야말로 혼란의 시대다. 정세현전
                                통일부 장관의 이번 책은 제목 그대로 격변하고
                                있는 국제질서의 실체에 관한 통찰을 제시한다.
                                가장 필요한 시점에서 이론과 실무를 겸비한 그가
                                동시대 사람들에게 선물하는 최고의 지침서다.
                                국가를 마피아에 빗댄 찰스 틸리처럼 국제정치를
                                조폭의 세계로 규정하면서 팍스 시니카 이후
                                한·중·일의 동북아 국제정치와 미소 냉전기를 거쳐
                                미국 패권체제, 그리고 G2 체제를 관통하는
                                국제정치의 함의를 추적한다. 또한 격변의
                                국제질서와 어려운 한반도 문제를 함께 대처해야
                                하는 한국 외교의 영민함과 자율성에 대한 강조를
                                잊지 않는다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">
                                전범선 (칼럼니스트, 밴드 양반들 보컬)
                              </p>
                              <p className="info-text">
                                국제질서가 어지럽다. ‘팍스 아메리카나’가
                                무너지고 있다. 1등이 약해지고 2등이 강해지면
                                서열 다툼이 일어나는 법이다. 미국과 중국
                                사이에서 한국이 살 길은 무엇인가? 정세현 전
                                통일부 장관은 정치가가 아닌 정책가로서 해답을
                                제시한다. 독보적인 연륜과 지혜를 쉬운 말로
                                풀어낸다. 정글 같은 국제정치의 현실을 차갑게
                                분석하되 희망을 놓지 않는다. ‘원로’라는 수식이
                                이보다 적절할 수 있을까? 한반도 평화를 꿈꾸는
                                이라면 《정세현의 통찰》을 참고해야 한다. 나는
                                이 책에서 길을 찾았다. 남한뿐만 아니라
                                북한에서도 필독서가 되길 바란다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">
                                일리야 (러시아 출신 귀화 방송인, 교수)
                              </p>
                              <p className="info-text">
                                국제정치에 관심이 많은 나는 이 책을 단숨에
                                읽었다. 특히 우크라이나 사태에 대한 복잡하고
                                중요한 이야기는 누구나 이해할 만큼 쉽게 설명되어
                                있다. 2022년 2월 24일 이후 국제질서는 다시 한번
                                변했다. 이 책은 혼란한 와중에 대한민국이 어떤
                                방향으로 나아가야 할지 최고의 ‘인사이트’를 준다.
                                국제질서를 꿰뚫어 보는 정세현 전 통일부 장관의
                                통찰력에 탄복한다. 복잡한 세상의 이치를 읽을 수
                                있는 그림이 필요하다면 지금 이 책을 읽어야 한다.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="auto-overflow-footer">
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
                <div className="prod-detail-area book-publish-review">
                  <div class="title-wrap title-size-md">
                    <h2 class="title-heading">출판사 서평</h2>
                  </div>
                  <div className="auto-overflow-wrap type-text overflow active">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <p className="info-text">
                          50년이 넘는 세월 동안 국제정치와 한반도 통일문제에
                          몸담아 온 정세현 전 통일부 장관의 신간 《정세현의
                          통찰》이 푸른숲에서 출간됐다. 국제정치학을 공부하고
                          국토통일원에서 공무원 생활을 시작한 저자는 늘 한반도의
                          통일문제를 외교 문제와 평행선으로 두고 국내외 정세를
                          고민해 왔다. 오랜 시간 이러한 고민을 해온 저자가
                          고안한 개념이 바로 ‘자국 중심성’이다. 외교든
                          통일문제든 결국 자국 중심성이 있어야만 강대국들
                          사이에서 흔들리지 않고 우리가 원하는 것을 얻을 수
                          있음을 몸소 깨달은 것이다.<br></br>
                          <br></br>
                          이번 책은 오랫동안 국제정세의 흐름을 파악하고 기민하게
                          읽어온 저자의 외교적 혜안을 바로 이 ‘자국 중심성’이란
                          시선으로 풀어낸다. 국제정치에서 가장 중요한 것은
                          무엇인지, 그리고 여전히 유효한 북핵 문제 해결법을
                          다룬다. 특히 삼국시대부터 한반도에 들어선 나라들이
                          오랫동안 일방적인 국제관계만을 맺은 역사적 맥락 속에서
                          “독립한 대한민국이 어떤 국제질서 속에서 어떻게
                          국제관계를 맺어왔는지”, 이승만 정부부터 문재인
                          정부까지 어떤 변화가 있었는지를 “남북관계와 관련된
                          국제관계 중 중요한 사건들”과 함께 되짚는다. 이는,
                          “이해하고, 다시 생각해 보고, 새로 결심”하기 위해서다.
                          <br></br>
                          <br></br>
                          무엇보다 《정세현의 통찰》은 2023년을 살아가는
                          우리에게 요긴한 시대정신을 담고 있다. 일본과 독일이
                          강대국으로 부상한 19세기 국제질서가 격동했듯이,
                          본격적인 G2시대가 시작된 21세기 이후 국제질서는 다시
                          격동하고 있기 때문이다. 우리는 우크라이나 사태를 통해
                          그 적나라한 현실을 목격하는 중이다. 다시 맞은
                          국제질서의 격변기, 우리는 어떻게 답을 찾아야 할까?
                          19세기 대한제국과 21세기 대한민국은 무엇이 다르고
                          어떻게 여전한가?<br></br>
                          <br></br>
                          “국제정치에는 크고 높은 나라만 있을 뿐 작고 낮은
                          나라는 없다”<br></br>
                          ‘조폭의 세계’와 다름없는 국제정치 속, 대한민국 외교의
                          나아가야 할 길<br></br>
                          <br></br>총 5부로 구성된 책에서 저자는 먼저 ‘조폭의
                          세계’와 다름없는 외교의 적나라한 본질을 여러 역사적
                          장면을 통해 보여주고 현재의 강대국인 미국과 중국
                          그리고 일본이 가진 국력의 핵심과 야망의 실체를 짚는다.
                          국제정치라는 것의 본질이 무엇인지 알고 싶다면 이
                          책에서 확인할 수 있다. 또한 여전히 끝나지 않은
                          러시아와 우크라이나 사태의 핵심 원인과 앞으로 일어날
                          일 이를 본보기 삼아 대한민국은 어떤 외교를 해야
                          하는지를 간략하게 담았다.<br></br>
                          <br></br>
                          2부에서는 중국이 천하를 거느리던 ‘팍스 시니카’ 시절,
                          한국과 중국, 일본 세 나라의 관계를 되짚는다. 세 나라
                          중 일본이 왜 가장 먼저 국제질서 속에 편입될 수
                          있었는지, 또 유난히 중국에 기대었던 한국의 외교정책을
                          일본과 비교해 보며, 이 두 나라가 지금과 같은 국제적
                          위치를 얻게 됐는지 이해할 수 있다. 무엇보다 중화사상,
                          즉 세상의 중심이었던 중국이 어쩌다 서양 세력에 의해
                          빠르게 무너졌을까? 답은 이 장에 있다. 세계의 흐름을
                          읽느냐, 읽지 못하냐에 따라 세 나라의 운명은 빠르게
                          갈라졌다.<br></br>
                          <br></br>
                          한편 서양에서는 냉전 시대가 저물고, 미국 중심의
                          국제질서가 급부상한다. 3부에서는 미국이 세계를 장악해
                          나가는 과정과 그 속에서 한국의 국제관계는 어떠했는지
                          살핀다. 이승만 정부를 시작으로 박정희, 전두환, 노태우
                          정부가 맺은 한미관계 나아가 정전협정 이후의 남북관계를
                          통해 한반도를 중심으로 펼쳐진 국제정세의 흐름을 역으로
                          유추해볼 수 있다. 이들 정부 중 지금도 쓸모 있는
                          외교론을 펼친 대통령은 누구였을까?<br></br>
                          <br></br>
                          이어 미국의 패권이 기울고 중국이 부상하며 국제질서가
                          요동치는 ‘G2시대의 오늘’을 살핀다. 내일을 전망하며
                          동시에 경제, 군사, 문화 등에서 명실상부 선진국으로
                          지위가 바뀐 한국이 그 국력에 걸맞은 자주적인 국제관계,
                          외교의 자국 중심성을 어떻게 강화하고 국익을 챙길
                          것인지 밝힌다. 4부와 5부에서는 김영삼 정부를 시작으로
                          김대중, 노무현, 이명박, 박근혜, 문재인 정부의 주요한
                          외교정책을 설명한다. 특히 시계열적 개념으로 분석한
                          북핵 문제 관련 사건들의 인과관계를 통해 북핵 문제가
                          누구의 책임인지 밝히고 때로는 미국도 비판해야 하는
                          목소리를 낼 필요가 있음을 강조한다.<br></br>
                          <br></br>
                          마지막으로 우크라이나 사태가 북핵 문제와 우리 외교에
                          어떤 영향을 미칠지 다시금 강조하며, 그러므로 지금,
                          우리는 무엇을 경계하고 무엇을 새로 결심해야 하는지에
                          대한 저자의 솔직한 견해를 밝힌다. 남북통일은 여전히
                          유효한지에 대한 저자의 견해 역시 이 장에서 만나볼 수
                          있다.<br></br>
                          <br></br>
                          저자는 나라의 녹을 먹으며 배운 이 경험들이 늘
                          공공재라고 생각했다. 최초의 북핵 실험을 가까이에서
                          지켜보았고, 김영삼, 김대중, 노무현 대통령까지 세 번의
                          정부에서 요직을 거치며 국제정치라는 험난한 파도 속에서
                          대한민국의 역할을 고민해 왔다. 이러한 저자의 오랜
                          연륜에서 나온 직업적 성찰과 어른으로서의 혜안은
                          외교관이 되려는 젊은 세대뿐만 아니라 세상으로
                          나아가려는 개인에게도 생각할 거리를 준다. 이 책을 읽고
                          나면 알게 된다. 시대의 해답은 늘 그렇듯 국제질서에
                          있다.<br></br>
                          <br></br>
                          저자는 50여 년 전 대학생 때 들은 이용희 교수의 말을
                          지금도 새긴다.<br></br>
                          <br></br>
                          “외교의 세계에서는 내 나라가 아니면 모두가 남의
                          나라다. 여러분들은 앞으로 외교관이 되더라도 남의
                          나라의 이익을 위해서 종사하는 외교관이 되지 말고, 내
                          나라의 이익을 위해서 고생하는 그런 외교관이 돼라.
                          정신을 똑바로 차리고 일을 해야 한다. 국제정치의
                          세계에서 내 나라와 남의 나라를 분별하는 습관을 들이지
                          않으면 결과적으로 어느 국가의 이익을 위해서 분주하게
                          뛰었는지 알 수 없는 그런 어리석은 결과를 가져오게 될
                          것이다.”(7쪽)
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
                            9791156754039 ( 1156754038 )
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">발행(출시)일자</p>
                          <p className="info-item-text">2023년 02월 16일</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">쪽수</p>
                          <p className="info-item-text">292쪽</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">크기</p>
                          <p className="info-item-text">
                            141 * 205 * 27 mm / 512 g
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

export default BookDetailPage_insight;
