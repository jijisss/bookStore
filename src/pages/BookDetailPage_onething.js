import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bestSellerBook7.jpg";
import bookDetailImg from "../images/i9788997575169.jpg";

function BookDetailPage_onething() {
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
                    원씽(The One Thing)(리커버 특별판)
                  </div>
                  <div className="prod-desc-area">
                    <p>복잡한 세상을 이기는 단순함의 힘</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">
                            게리 켈러, 제이 파파산 저자 · 구세희 번역
                          </Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          비즈니스북스
                        </Link>
                        2013년 08월 30일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 6위 · 자기계발 4위
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
                        <span className="val">12,600</span>
                        <s className="val-origin">14,000</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">700p</div>
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
                          자기계발
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          성공/처세
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          자기관리/처세
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
                              미디어 추천도서 > 국립중앙도서관 사서 추천도서 >
                              2013년 11월 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 국민일보 >
                              2013년 8월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 동아일보 >
                              2013년 8월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2013년 8월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2022년 9월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2023년 2월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 문화일보 >
                              2022년 9월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 서울신문 >
                              2023년 1월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 조선일보 >
                              2014년 4월 2주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 중앙일보 >
                              2013년 8월 5주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 한겨레신문
                              > 2022년 11월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 한국일보 >
                              2013년 8월 4주 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      자신의 인생에서 가장 중요한 ‘원씽’을 찾아라!
                    </div>
                    <div className="info-text">
                      복잡한 세상을 이기는 단순함의 힘『원씽(THE ONE THING)』.
                      전 세계에서 두 번째로 큰 투자개발 회사의 대표이자 전미
                      130만 부 이상이 팔린 베스트셀러의 저자 게리 캘러가 더 적게
                      일함으로써 더 깊게 집중하여 더 크게 성공하는 비결이
                      무엇인지 제시하였다. 저자는 자신에게 가장 중요한 한 가지,
                      ‘원씽’을 찾아 집중하고 파고들라고 제안한다. 우리의 삶을
                      소모시키는 멀티스태킹을 비롯한 성공에 대한 거짓신화를
                      바로잡고, ‘원씽’의 일을 찾아 집중하는 법, 그리고 ‘원씽’을
                      찾기 위해 스스로 어떤 질문을 해야 하며, 이를 어떻게
                      습관화하고 삶의 부분에 적용할 수 있는지를 알려준다.
                      <br></br>
                      저자는 커리어가 됐든, 비즈니스가 됐든, 가정생활이든,
                      인간관계이든 삶의 각 분야에서 가장 중요한 가치를 찾아
                      몰두할 때, 일에서의 성공과 삶에서의 행복을 얻을 수 있다고
                      이야기한다. 이 책은 올바른 타이밍과 접근법으로 자신만의
                      ‘원씽’을 찾아 그에 집중하는 노하우를 소개한다. 우리의
                      인생에서 가장 중요한 것과 중요하지 않은 것을 구별하는
                      능력을 키워 가장 중요한 ‘단 하나’에 집중할 수 있도록
                      안내한다.
                    </div>
                  </div>
                  <div className="prod-detail-area product-trailer">
                    <div className="title-wrap title-size-md">
                      <h2 className="title-heading">북 트레일러</h2>
                    </div>
                    <div className="video-wrap" id="detail-video1">
                      <iframe
                        src="https://www.youtube.com/embed/nZIRPFUa2u8?enablejsapi=1"
                        title="복잡함을 이기는 단순함의 힘, 원씽! 리커버 출시!"
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
                        Window7의 경우 사운드 연결이 없을 시, 동영상 재생에
                        오류가 발생할 수 있습니다. 이어폰, 스피커 등이 연결되어
                        있는지 확인 하시고 재생하시기 바랍니다.
                      </li>
                    </ul>
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
                        <span class="text">게리 켈러</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              저자 게리 켈러는 켈러 윌리엄스 투자개발
                              회사(Keller Williams Realty, Inc.)의 공동
                              창립자이자 대표이사다. 저명한 사업 코치이자
                              트레이너로서 다양한 경력을 가지고 있는 게리 켈러는
                              텍사스 오스틴의 한 칸짜리 사무실에서 출발하여 현재
                              미국에서 가장 큰 투자개발 회사를 일구었고, 총
                              130만 부 이상이 팔린 세 권의 베스트셀러를
                              저술하기도 했다. 언스트앤영(Ernst & Young) 선정
                              ‘올해의 기업가 상’을 수상했고, 《Inc.》에서 선정한
                              ‘올해의 기업가’ 최종 후보에 오른 바 있다. 또한
                              그의 회사는 2012년에 세계적 마케팅리서치 회사 J.
                              D. 파워앤어소시에이츠(J. D. Power and
                              Associates)에서 선정하는 소비자만족 부분 1위,
                              《안트러프러너 매거진》(Entrepreneur Magazine)이
                              선정하는 500대 기업에 이름을 올렸다. 업계에서 가장
                              영향력 있는 리더로서 다양한 강연을 펼치며 교육에도
                              힘쓰고 있다. 이러한 그의 교육활동은 2009년
                              아메리칸 비즈니스 어워드(American Business
                              Awards)에서 ‘올해의 코칭 프로그램’으로 선정되어 그
                              가치를 인정받았다. 현재 공동저자인 제이 파파산과
                              함께 ‘원씽’(The One Thing) 프로그램을 운영하며
                              수많은 기업가들을 비롯해 사람들이 자신만의 ‘단
                              하나’를 찾을 수 있도록 돕고 있다.
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
                  <div className="gray-box">
                    <div class="title-wrap title-size-def">
                      <h3 class="title-heading">
                        <span class="title-prefix">저자(글)</span>
                        <span class="text">제이 파파산</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              저자 제이 파파산은 현재 켈러 윌리엄스 출판부의
                              부사장이자 렐릭 출판사의 대표이사다. 하퍼콜린스
                              편집자로 근무하는 동안 수많은 베스트셀러를
                              기획하고 편집한 바 있다. 게리 켈러와 함께 일한
                              10년 동안에는 켈러의 저서를 포함해 열 권의
                              베스트셀러를 공동 집필했다. 켈러 윌리엄스
                              국제대학교 교수진의 일원으로도 활발한 활동을
                              펼치고 있다.
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
                            한국의 독자들에게<br></br>
                            <br></br>
                            제1장 당신에게 가장 중요한 ‘단 하나’는 무엇인가
                            <br></br>
                            제2장 도미노 효과<br></br>
                            제3장 성공은 반드시 단서를 남긴다<br></br>
                            <br></br>
                            제1부 : 거짓말_의심해 봐야 할 성공에 관한 여섯 가지
                            믿음<br></br>
                            <br></br>
                            제4장 모든 일이 다 중요하다<br></br>
                            제5장 멀티태스킹은 곧 능력이다<br></br>
                            제6장 성공은 철저한 자기관리에서 온다<br></br>
                            제7장 의지만 있다면 못할 일은 없다<br></br>
                            제8장 일과 삶에 균형이 필요하다<br></br>
                            제9장 크게 벌이는 일은 위험하다<br></br>
                            <br></br>
                            제2부 : 진실_복잡한 세상에서 중심을 잃지 않는 법
                            <br></br>
                            <br></br>
                            제10장 미래의 크기를 바꾸는 초점탐색 질문<br></br>
                            제11장 도미노를 세워라<br></br>
                            제12장 삶의 해답으로 가는 길<br></br>
                            <br></br>
                            제3부 : 위대한 결과_인생의 반전을 불러오는 단순한
                            진리<br></br>
                            <br></br>
                            제13장 목적의식을 가지고 살아라<br></br>
                            제14장 우선순위에 따라 살아라<br></br>
                            제15장 생산성을 위해 살아라<br></br>
                            제16장 세 가지 약속<br></br>
                            제17장 네 종류의 도둑들<br></br>
                            제18장 위대함으로 가는 변화의 시작<br></br>
                            <br></br>
                            부록_ 단 하나를 실생활에 적용하는 방법<br></br>
                            감사의 말
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
                              <p className="title-heading ">뉴욕타임스</p>
                              <p className="info-text">
                                과중한 업무와 멀티태스킹이 만연한 이 세상에서
                                단순하지만 명확한 메시지를 전달하는 이 책은
                                베스트셀러에 오를 수밖에 없다. 당신이 에너지를
                                한 가지에 몰입하라. 놀라운 삶이 시작될 것이다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">월스트리트 저널</p>
                              <p className="info-text">
                                이 책은 당신의 성공을 가로막고, 당신의 계획을
                                좌절시키는 거짓말들이 무엇인지 보여 준다. 그리고
                                ‘단 하나’(The One Thing)를 통해 완벽하게 새로운
                                전략을 제안한다. 당신이 일하는 방식, 선택하는
                                방식, 그리고 성과를 내는 방식 그 모든 부분에서
                                이 책은 획기적인 변화를 선사할 것이다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">포브스</p>
                              <p className="info-text">
                                이 책은 어떻게 멀티태스킹을 가장한 ‘주의력
                                결핍’에서 벗어나며, 우선순위를 정하고 한 곳에
                                집중해야 하는지 알려 준다. 세계에서 가장 큰
                                투자개발 회사를 소유한 백만장자가 들려주는 가치
                                있는 성공의 조언들이 가득하다.
                              </p>
                            </div>
                          </li>
                          <li className="recommend-item">
                            <div className="title-wrap title-size-sm">
                              <p className="title-heading ">NBC</p>
                              <p className="info-text">
                                쳇바퀴 안에서 늘 똑같은 인생이 계속된다고
                                느끼는가? 지금 당장 이 책을 집어라. 당신의 삶에
                                기막힌 변화를 가져다줄 것이다. 당신의 선택에
                                인생의 성공이 달려 있다.
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
                <div className="prod-detail-area book-inside">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">책 속으로</h2>
                  </div>
                  <div className="auto-overflow-wrap type-text overflow active">
                    <div className="auto-overflow-contents">
                      <div className="auto-overflow-inner">
                        <p className="info-text">
                          우리에게 주어진 시간과 에너지는 한정되어 있다. 그것을
                          너무 넓게 펼치려 애쓰다 보면 노력은 종잇장처럼
                          얇아지게 된다. 사람들은 일의 양에 따라 성과가 점점 더
                          쌓이기를 바라는데, 그렇게 하려면 더하기가 아닌 빼기가
                          필요하다. 더 큰 효과를 얻고 싶다면 일의 가짓수를
                          줄여야 한다. 한 번에 너무 많은 일을 하려다 보면 설사
                          그렇게 하는 것이 효과가 있다고 해도, 아무것도 줄이지
                          않은 채 일을 자꾸 더하기만 하다가 결국엔 부정적인
                          결과를 맞게 된다. 마감 기한을 수시로 놓치게 되고,
                          만족스럽지 못한 결과가 나타나며, 스트레스가 높아지고,
                          업무 시간이 길어지며, 수면 시간이 줄어들고, 영양
                          상태가 나빠지며, 운동을 못하고, 가족은 물론이고
                          친구들과 함께 보내는 시간도 줄어든다. 이 모두가
                          생각보다 얻기 쉬운 것들을 좇으며 쓸데없이 노력을
                          낭비했기 때문이다. 파고드는 것은 남다른 성과를 내기
                          위한 간단한 방법이다. 게다가 효과도 좋다. 언제든,
                          어디에서든, 어떤 경우에서든 통한다. 왜일까? 단 하나의
                          목적의식, 궁극적으로 본인이 원하는 곳까지 도달한다는
                          단 하나의 목표만을 갖게 하기 때문이다.<br></br>
                          _19~20p(제1장, 당신에게 가장 중요한 ‘단 하나’는
                          무엇인가)<br></br>
                          <br></br>
                          훌륭한 성공은 동시다발적으로 일어나는 것이 아니라
                          순차적으로 일어나기 때문이다. 선형으로 시작된 것이
                          기하급수적으로 변한다. 올바른 결정을 내리고, 그 다음에
                          또 한 가지 올바른 결정을 내린다. 시간이 흐르면서
                          이것들이 쌓이다 보면 성공의 잠재력이 봇물 터지듯
                          발산된다. 도미노 효과는 당신의 업무나 사업처럼 큰
                          그림을 그려야 하는 일에도 적용되고, 매일 다음번엔 무슨
                          일을 할까처럼 결정을 내리는 아주 작은 순간에도
                          적용된다. 성공은 성공 위에 쌓이고, 이런 일이
                          반복적으로 일어나면 최고로 높은 수준의 성공을 향해
                          움직일 수 있게 된다.<br></br>
                          _26p.(제2장, 도미노 효과)<br></br>
                          <br></br>
                          그래서 그와 동료 연구원들은 262명의 학생들에게
                          설문지를 주고 그들이 얼마나 자주 멀티태스킹을 하는지
                          알아보았다. 그런 다음 학생들을 멀티태스킹을 잘하는(즉
                          자주 하는) 그룹과 못하는 그룹, 둘로 나누고 자주
                          멀티태스킹을 하는 사람들이 더 좋은 결과를 내리라는
                          가정을 바탕으로 실험을 시작했다. 하지만 그들의 이러한
                          생각은 틀린 것으로 판가름 났다.<br></br>
                          “그들에게 비밀의 능력 같은 것이 있으리라고
                          생각했습니다. 하지만 멀티태스킹을 잘하는 사람들은
                          오히려 관련 없는 일에 푹 빠져 쓸데없는 시간을 보내는
                          것이 관찰됐습니다.” 나스의 말이다. 그들의 성과는 모든
                          면에서 뒤떨어졌다. 그들 스스로나 세상 사람들이 보기에
                          그들은 멀티태스킹 능력에 매우 뛰어난 것 같았지만
                          거기에는 한 가지 문제가 있었다. 나스의 말을 빌리면
                          “멀티태스커들은 그저 모든 일에 엉망”이었던 것이다.
                          멀티태스킹이란 허상이다.<br></br>
                          _58~59p(제5장, 멀티태스킹은 곧 능력이다)<br></br>
                          <br></br>
                          스콧 포스톨이라는 사람의 이야기를 들려주고자 한다.
                          그는 새로운 팀에 필요한 인재들을 뽑는 자리에서
                          지원자들에게 이 일급기밀 프로젝트를 맡으면 “많은
                          실수를 저지르며 고생하겠지만 결과적으로 평생 기억에
                          남을 무언가를 하게 될 기회가 무궁무진할 것”이라고
                          말했다. 그는 회사 전반에 있는 인재들에게 이 알쏭달쏭한
                          말을 전했고, 이 도전에 즉각적으로 나선 사람들만
                          팀원으로 뽑았다. 나중에 그가 드웩의 책을 읽고 그녀에게
                          말한 것처럼 ‘성장의 사고방식’(growth-minded)을 가진
                          사람들을 찾고 있었던 것이다. 이 이야기가 왜 중요할까?
                          스콧 포스톨의 이름은 들어 본 적이 없다고 해도 그가
                          그렇게 소집한 팀이 내놓은 결과물을 모를 수는 없을
                          것이다. 포스톨은 애플의 수석 부사장이었고, 그가 뽑은
                          팀원들이 만든 것은 바로 아이폰이었다.<br></br>
                          _124p(제9장, 크게 벌이는 일은 위험하다)<br></br>
                          <br></br>
                          ‘오늘’을 당신이 가진 ‘모든 내일’과 연결시켜라. 이를
                          뒷받침하는 연구 결과도 있다. 총 262명의 학생들을
                          대상으로 시각화가 결과에 어떤 영향을 미치는지
                          조사했다. 학생들을 두 그룹으로 나누고 한 그룹의
                          학생들은 원하는 결과를 마음속에 그려 보았고(예를 들어
                          시험에서 A학점을 받는 것), 다른 한 그룹은 원하는
                          결과를 얻기 위해 필요한 과정(시험에서 A학점을 받기
                          위해 필요한 공부 과정 등)을 머릿속에 그렸다.
                          결론적으로 말하면 과정을 시각화한 학생들이 전반적으로
                          더 나은 결과를 얻었다. 결과만을 그려 본 학생들보다
                          먼저 공부를 시작하고 더 자주 함으로써 더 높은 성적을
                          거둔 것이다.<br></br>
                          _193~194p(제14장, 우선순위에 따라 살아라)
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
                          아마존 종합 베스트셀러 1위!<br></br>
                          아마존 자기계발 분야 260주 연속 스테디셀러!<br></br>
                          《월스트리트 저널》 종합 베스트셀러 1위! <br></br>
                          《뉴욕 타임스》《USA 투데이》《워싱턴
                          포스트》베스트셀러!<br></br>전 세계 독자들이 주목한
                          최고의 책!<br></br> 20만 부 판매 기념 리커버
                          특별한정판!<br></br> 인생의 반전을 불러오는 단순함의
                          힘<br></br> 당신의 삶을 소모시키는 멀티태스킹의
                          허상에서 벗어나라!<br></br>
                          <br></br> 당신에게는 성공의 첫 번째 도미노가 있는가?
                          <br></br> 주위를 돌아보면 ‘무슨 일을 해도 어쩌면
                          저렇게 잘 풀릴까’라는 생각이 들게 하는 사람이 한
                          명씩은 꼭 있기 마련이다. 반대로 정말 열심히 살지만
                          제대로 풀리는 게 없다고 여기는 사람들도 있다. 이들은
                          타고난 팔자라거나 운이 좋았다는 식으로 다른 사람의
                          성공을 단정 짓고 자신들의 ‘운 없음’에 좌절하곤 한다.
                          하지만 그건 사실이 아니다. 위대한 성과를 내는 남다른
                          인생과 평범한 인생을 결정짓는 차이는 바로 ‘꼭 해야 할
                          일’에만 파고들었느냐, ‘필요 없는 일’에 에너지를
                          낭비했느냐에 있다.<br></br> 성공은 도미노처럼
                          작동한다. 성공한 사람들은 늘 성공에 ‘꼭 필요한 일들’의
                          ‘순서’를 계획해놓고 ‘가장 알맞은 타이밍’에 첫 번째
                          일을 ‘제대로’ 해낸다. 한 번 넘어지기 시작하면 멈추지
                          않는 도미노처럼 그들은 처음의 성공을 다음 행동과 연결
                          지음으로써 더 크고 더 위대한 성공을 이끌어낸다. 그들은
                          첫 번째 도미노만 정확히 찾아 쓰러뜨린다면 줄지어
                          늘어선 수많은 도미노는 자연히 쓰러지게 된다는 성공의
                          도미노 효과를 누구보다 잘 알고 있다. 모든 일을
                          시작하게 하는 단 하나의 도미노, 우리가 ‘원씽(The One
                          Thing)’이라 부르는 이것을 찾아낼 수만 있다면 누구나
                          술술 잘 풀리는 인생을 경험할 수 있다.<br></br>
                          <br></br>
                          The One Thing, 복잡한 세상에서 나만의 중심을 잃지 않는
                          법<br></br> 《원씽 The One Thing》은 미국에서 가장 큰
                          투자개발 회사의 대표이자 총 130만 부 이상이 팔린
                          베스트셀러의 저자 게리 켈러와 제이 파파산이 쓴,
                          이제까지의 통념을 뒤엎는 신개념 자기계발서이다. 이
                          책이 말하고 있는 인생의 성공과 행복에 대한 단순한
                          진리는 바로 ‘원씽’(The One Thing), 자신에게 가장
                          중요한 단 하나, 가장 중요한 한 가지 일에 집중하고
                          파고들라는 것이다.<br></br>
                          ‘원씽One Thing’은 세상의 모든 분야에 적용될 수 있는
                          개념이다. 기업의 입장에서는 회사를 상징하거나 정체성을
                          드러내는 하나의 제품이나 서비스, 개인의 삶에서는
                          자신의 인생을 의미 있게 만들어주는 한 가지 목표를
                          의미한다. 다시 말해 기업의 수익성과 매출, 개인의
                          직업과 연봉과 같은 단선적인 시각이 아닌 보다 본질을
                          관통하는 주제이며 목적을 항해 나아가도록 해주는 원천인
                          것이다. 그래서 저자는 이 책에서 “당신에게 가장 중요한
                          ‘단 하나’는 무엇인가?”(What‘s your ONE Thing?)라고
                          계속해서 질문을 던진다.<br></br>
                          <br></br> 중요하지 않은 것은 버려라.<br></br>
                          당신의 에너지를 오직 한 가지에 집중하라!<br></br>{" "}
                          자신만의 ‘원씽’을 찾는 방법을 알려주기 위해 씌여진 이
                          책은 총 3부로 구성되어 있다. 먼저 1부에서는 모두가
                          성공의 원칙이라고 믿어온 여섯 가지 주장(모든 일이 다
                          중요하다/멀티태스킹은 곧 능력이다/성공은 철저한
                          자기관리에서 온다/의지만 있다면 못할 일은 없다/균형
                          잡힌 삶이 아름답다/크게 벌이는 일은 위험하다)의 허상을
                          조목조목 비판한다. 이런 잘못된 믿음으로 인해 우리는
                          바쁘게 일하는 것만이 능사이고, 모든 일을 다 완벽히
                          잘하기 위해 동시에 여러 가지 일을 하다 결국 아무것도
                          제대로 하지 못하고 지쳐 떨어지고 만다는 것이다. 또한
                          이렇게 여러 일을 해내지 못하면 ‘자기관리’와 ‘의지’가
                          부족한 것으로 자책하게 만드는 것 또한 각종 미디어와
                          자기계발서가 만들어낸 거짓일 뿐이라고 저자는 지적한다.
                          우리에게 필요한 것은 중요한 일을 지속시킬 수 있는
                          ‘습관’일 뿐이며 이러한 습관 만들기에 필요한 실질적인
                          지침을 소개한다.<br></br> 2~3부에서는 성공을 둘러싼
                          허상에서 벗어나 자신만의 큰 목표를 세우도록 우리를
                          안내한다. 그 첫 단계에 해당하는 ‘초점탐색 질문’은
                          ‘아무리 강렬한 햇빛이라도 초점을 맞추기 전에는 절대로
                          종이 한 장 태울 수 없다’는 말처럼 최종의 목표인
                          ‘원씽’에 다가가기 위해 지금 당장 해야 하는 ‘원씽’이
                          무엇인지 알려준다. 그리고 더 큰 성공에 도달하기 위한
                          도미노를 세우는 데 필요한 요소들을 분석한다. 이 과정을
                          통해 성공의 열쇠는 우리가 ‘모든 일’을 다 잘 해낼 때
                          오는 것이 아니라 가장 핵심적인 일을 가장 ‘적합한’
                          순간에 해내는 것임을 깨닫게 해주고 그 핵심적인 일을
                          찾기 위한 우선순위를 결정하는 법에 대해 명확히
                          설명해준다.<br></br>
                          <br></br> 인생에도 뺄셈이 필요하다<br></br> 오늘날
                          대부분의 사람들은 자신의 인생에 중요하지 않은 일들을
                          하고 필요 없는 관계들을 유지하느라 인생의 대부분의
                          시간과 에너지를 빼앗기고 있다. 당장 오늘 하루를
                          돌아보자. 오늘 한 일 중에서 자신이 생각하는 인생의
                          최종 목표에 반걸음이라도 가까이 가게 해준 것이 있는지,
                          혹 나의 꿈이 아닌 누군가의 꿈을 이뤄주기 위해 나의
                          소중한 하루를 희생하지 않았는지 말이다. 당신의
                          인생에서 가장 중요한 ‘원씽One Thing’은 무엇인가?
                          자신이 지금 하고 있는 일이 인생의 ‘원씽One Thing’에
                          이르기 위한 도미노 블록 중 하나인가? 이 두 가지 질문에
                          자신 있게 대답하지 못한다면 지금 바로 저자들의
                          이야기에 귀를 기울여야 할 것이다. 결코 모든 일을 다
                          잘하려고 하지 마라. 한꺼번에 많은 일을 해내는 사람이
                          승자가 되는 것이 아니라 한 가지라도 제대로 해내는
                          사람이 최종 승자가 된다는 단순명쾌한 진리를 한번
                          따라가 보자. 그리고 사방에 흩어져 있는 도미노들의 열을
                          우선순위에 맞춰 세우고 첫 번째 도미노를 쓰러뜨리자.
                          뒤로 줄줄이 넘어질 준비가 되어 있는 더 큰 성공으로
                          이어지는 긴 도미노를 발견하게 될 것이다.
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
                            9788997575169 ( 8997575163 )
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">발행(출시)일자</p>
                          <p className="info-item-text">2013년 08월 30일</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">쪽수</p>
                          <p className="info-item-text">280쪽</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">크기</p>
                          <p className="info-item-text">
                            148 * 210 * 20 mm / 462 g
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">총권수</p>
                          <p className="info-item-text">1권</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">원서명/저자명</p>
                          <p className="info-item-text">
                            The ONE Thing: The Surprisingly Simple Truth Behind
                            Extraordinary Results/Keller, Gary
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
                    <span class="val">12,600</span>
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

export default BookDetailPage_onething;
