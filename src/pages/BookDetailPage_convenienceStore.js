import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bestSellerBook10.jpg";
import bookDetailImg from "../images/i9791161571188.jpg";

function BookDetailPage_convenienceStore() {
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
                    불편한 편의점(40만부 기념 벚꽃 에디션)
                  </div>
                  <div className="prod-desc-area">
                    <p>김호연 장편소설</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">김호연 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          나무옆의자
                        </Link>
                        2021년 04월 20일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 19위 · 소설 3위
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
                                <strong>3월 11(토) 도착예정</strong>
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
                          소설
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          한국소설
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          한국소설일반
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
                              전문기관 추천도서 > 국립중앙도서관 사서 추천도서 >
                              2021년 8월 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 경향신문 >
                              2023년 2월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 동아일보 >
                              2022년 8월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2021년 12월 5주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2022년 6월 2주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2022년 7월 1주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2022년 9월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2022년 10월 2주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2022년 9월 5주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2022년 10월 3주 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      ※ 인터넷 한정 특별판: 매장 구매, 바로드림 구매 시에는 다른
                      표지의 에디션으로 제공됩니다.
                      <br></br>
                      <br></br>원 플러스 원의 기쁨, 삼각김밥 모양의 슬픔, 만
                      원에 네 번의 폭소가 터지는 곳!
                      <br></br>
                      힘겨운 시대를 살아가는 우리들에게 다가온 조금 특별한
                      편의점 이야기
                    </div>
                    <div className="info-text">
                      누적 판매 40만부 돌파, 2022년 가장 사랑받는 소설<br></br>
                      ★★★전 서점 종합베스트 1위, 2021 올해의 책,<br></br>
                      ★★★국립중앙도서관 사서추천도서, 해외 6개국 판권 수출
                      <br></br>
                      <br></br>
                      김호연 작가의 장편소설 『불편한 편의점』이 누적 판매
                      40만부 돌파를 기념하여 벚꽃 에디션으로 새 단장 했습니다.
                      2021년 4월에 출간되어 전 연령층의 폭넓은 공감을 얻으며
                      소설 읽기 바람을 일으킨 『불편한 편의점』의 열기는 지금도
                      현재진행형입니다. “읽는 내내 마음이 따뜻하고 먹먹했다”
                      “눈가에 미소와 눈물이 떠나지 않았다” “시간 가는 줄 모르고
                      몰입해서 읽었다” “작은 친절과 소통의 소중함을 일깨워준 책”
                      “힘든 시기를 버티게 해준 책” 등의 독자 리뷰 하나하나가
                      책이 가진 힘을 말해줍니다. 청파동 골목 모퉁이의 작은 가게,
                      서울역 노숙인이었던 정체불명의 야간 알바가 지키는 곳,
                      불편한데 자꾸 가고 싶은 봄날의 편의점으로 여러분을
                      초대합니다.<br></br>
                      <br></br>
                      2013년 세계문학상 우수상 수상작 『망원동 브라더스』로
                      데뷔한 후 일상적 현실을 위트 있게 그린 경쾌한 작품과
                      인간의 내밀한 욕망을 기발한 상상력으로 풀어낸 스릴러
                      장르를 오가며 독자적인 작품 세계를 쌓아올린 작가 김호연.
                      그의 다섯 번째 장편소설 『불편한 편의점』이 나무옆의자에서
                      출간되었다. 『불편한 편의점』은 청파동 골목 모퉁이에 자리
                      잡은 작은 편의점을 무대로 힘겨운 시대를 살아가는 우리
                      이웃들의 삶의 속내와 희로애락을 따뜻하고 유머러스하게
                      담아낸 작품이다. 『망원동 브라더스』에서 망원동이라는
                      공간의 체험적 지리지를 잘 활용해 유쾌한 재미와 공감을
                      이끌어냈듯 이번에는 서울의 오래된 동네 청파동에 대한
                      공감각을 생생하게 포착해 또 하나의 흥미진진한 ‘동네
                      이야기’를 탄생시켰다.<br></br>
                      <br></br>
                      서울역에서 노숙인 생활을 하던 독고라는 남자가 어느 날 70대
                      여성의 지갑을 주워준 인연으로 그녀가 운영하는 편의점에서
                      야간 알바를 하면서 이야기가 시작된다. 덩치가 곰 같은 이
                      사내는 알코올성 치매로 과거를 기억하지 못하는 데다 말도
                      어눌하고 행동도 굼떠 과연 손님을 제대로 상대할 수 있을까
                      의구심을 갖게 하는데 웬걸, 의외로 그는 일을 꽤 잘해낼 뿐
                      아니라 주변 사람들을 묘하게 사로잡으면서 편의점의 밤을
                      지키는 든든한 일꾼이 되어간다.<br></br>
                      현실감 넘치는 캐릭터와 그들 간의 상호작용을 점입가경으로
                      형상화하는 데 일가견이 있는 작가의 작품답게 이 소설에서도
                      독특한 개성과 사연을 지닌 인물들이 차례로 등장해 서로
                      티격태격하며 별난 관계를 형성해간다. 고등학교에서 역사를
                      가르치다 정년퇴임하여 매사에 교사 본능이 발동하는 편의점
                      사장 염 여사를 필두로 20대 취준생 알바 시현, 50대 생계형
                      알바 오 여사, 매일 밤 야외 테이블에서 참참참(참깨라면,
                      참치김밥, 참이슬) 세트로 혼술을 하며 하루의 스트레스를
                      푸는 회사원 경만, 마지막이라는 각오로 청파동에 글을 쓰러
                      들어온 30대 희곡작가 인경, 호시탐탐 편의점을 팔아치울
                      기회를 엿보는 염 여사의 아들 민식, 민식의 의뢰를 받아
                      독고의 뒤를 캐는 사설탐정 곽이 그들이다. 제각기 녹록지
                      않은 인생의 무게와 현실적 문제를 안고 있는 이들은 각자의
                      시선으로 독고를 관찰하는데, 그 과정에서 발생하는 오해와
                      대립, 충돌과 반전, 이해와 공감은 자주 폭소를 자아내고 어느
                      순간 울컥 눈시울이 붉어지게 한다. 그렇게 골목길의 작은
                      편의점은 불편하기 짝이 없는 곳이었다가 고단한 삶을
                      위로하고 웃음을 나누는 특별한 공간이 된다.
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area product-trailer">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">북 트레일러</h2>
                  </div>
                  <div className="video-wrap" id="detail-video1">
                    <iframe
                      src="https://www.youtube.com/embed/fTf-KrprLW4"
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
                <div className="prod-detail-area product-person">
                  <div class="title-wrap title-size-md">
                    <h2 class="title-heading">작가정보</h2>
                  </div>
                  <div className="gray-box">
                    <div class="title-wrap title-size-def">
                      <h3 class="title-heading">
                        <span class="title-prefix">저자(글)</span>
                        <span class="text">김호연</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="writer-profile">
                        <img
                          data-kbbfn="s3-image"
                          loading="lazy"
                          alt="김호연"
                          src="https://contents.kyobobook.co.kr/dtl/author/1101838905.jpg"
                          data-src="https://contents.kyobobook.co.kr/dtl/author/1101838905.jpg"
                        />
                      </div>
                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              영화·만화·소설을 넘나들며 온갖 이야기를 써나가는
                              전천후 스토리텔러.<br></br>
                              1974년 서울생. 고려대학교 인문대학 국어국문학과를
                              졸업했다. 첫 직장인 영화사에서 공동 작업한
                              시나리오 「이중간첩」이 영화화되며 시나리오 작가가
                              되었다. 두 번째 직장인 출판사에서 만화 기획자로
                              일하며 쓴 「실험인간지대」가 제1회 부천만화스토리
                              공모전에서 대상을 수상하며 만화 스토리 작가가
                              되었다. 같은 출판사 소설 편집자로 남의 소설을
                              만지다가 급기야 전업 작가로 나섰다. 이후 ‘젊은 날
                              닥치는 대로 글쓰기’를 실천하던 중 장편소설
                              『망원동 브라더스』로 2013년 제9회 세계문학상
                              우수상을 수상하며 소설가가 되었다. 장편소설
                              『망원동 브라더스』(2013), 『연적』(2015),
                              『고스트라이터즈』(2017), 『파우스터』(2019)와
                              산문집 『매일 쓰고 다시 쓰고 끝까지
                              씁니다』(2020)를 펴냈고, 영화 「이중간첩」(2003),
                              「태양을 쏴라」(2015)의 시나리오와
                              「남한산성」(2017)의 기획에 참여했다. 2021년
                              『망원동 브라더스』에 이은 ‘동네 이야기’ 시즌 2
                              『불편한 편의점』을 출간했다.
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
                            산해진미 도시락<br></br>
                            제이에스 오브 제이에스<br></br>
                            삼각김밥의 용도<br></br>원 플러스 원<br></br>
                            불편한 편의점<br></br>네 캔에 만 원<br></br>
                            폐기 상품이지만 아직 괜찮아<br></br>
                            ALWAYS<br></br>
                            <br></br>
                            감사의 글
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
                                정여울 (『1일 1페이지 세상에서 가장 짧은
                                심리수업 365』 저자)
                              </p>
                              <p className="info-text">
                                서울역 홈리스로 지내면서도 자기의 안위보다는
                                지갑을 잃어버린 낯선 부인의 안부를 걱정하는 독고
                                씨. 그런 독고를 향해 우정과 치유의 손길을 내미는
                                편의점 사장 염 여사. 두 사람의 아름다운 우정의
                                역사는 코로나 사태 이후 고독과 불안을 더욱
                                예민하게 느끼게 된 우리들에게 눈부신 영감의
                                씨앗을 심어준다. 모두가 무시하고, 외면하고,
                                회피하던 홈리스 독고 씨의 변신은 어쩌면 덜
                                놀라운 사실이다. 독고 씨의 진짜 재능은 많은
                                사람을 너끈히 구할 수 있는 눈물겹도록 따스한
                                마음이기에.
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
                          “근데 이게 마지막 술이에요. 이거 먹고 술 끊는 조건으로
                          우리 가게 일 좀 봐줘요.”<br></br>
                          독고 씨의 커다란 머리가 갸우뚱거렸다.<br></br>
                          “제, 제가……요?”<br></br>
                          “독고 씨 할 수 있어요. 곧 날 추워질 텐데 밤에도 따뜻한
                          편의점에 머물고 돈도 벌고 얼마나 좋아요.”<br></br>염
                          여사는 독고 씨의 눈을 똑바로 응시하며 답을 기다렸다.
                          독고 씨는 시선을 피한 채 곤란한 듯 광대를 연신
                          씰룩이다가 작은 눈을 돌려 그녀를 살폈다.<br></br>
                          “저한테 왜…… 잘해주세요?”<br></br>
                          “독고 씨 하는 만큼이야. 게다가 나 힘들고 무서워 밤에
                          편의점 못 있겠어요. 그쪽이 일해줘야 해요.”<br></br>
                          “나…… 누군지…… 모르잖아요.”<br></br>
                          “뭘 몰라. 나 도와주는 사람이죠.”<br></br>
                          “나를 나도 모르는데…… 믿을 수 있어요?”<br></br>
                          “내가 고등학교 선생으로 정년 채울 때까지 만난 학생만
                          수만 명이에요. 사람 보는 눈 있어요. 독고 씨는 술만
                          끊으면 잘할 수 있을 거예요.” (49~50쪽)<br></br>
                          <br></br>
                          “그런데 담배 어떻게 그렇게 쉽게 찾았어요?”<br></br>
                          “가, 간밤에 담배 손님 많아서…… 후딱 외웠어요. 에쎄는
                          에쎄원, 에쎄 스페셜 골드, 에쎄 스페셜 골드 1밀리, 에쎄
                          스페셜 골드 0.5, 에쎄 클래식, 에쎄 수 0.5, 에쎄 수
                          0.1, 에쎄 골든 리프, 에쎄 골든 리프 1밀리…….”<br></br>
                          독고 씨가 마치 구구단 외우듯 담배 종류를 줄줄
                          내뱉었다. 깜짝 놀란 시현은 한동안 멍하니 있다가 그의
                          말을 끊었다.<br></br>
                          “됐고요, 그걸 하루에 다 외웠다고요?”<br></br>
                          “……밤새 할 일도 없고…… 잠도 오고 해서…….”<br></br>
                          “혹시 애연가였어요?”<br></br>
                          “모, 몰라요.”<br></br>
                          “몰라요? 담배 피운 기억이 없어요?”<br></br>
                          “피웠는지 안 피웠는지…… 모른다니까요.”<br></br>
                          “기억상실증인 거예요?”<br></br>
                          “술 때문에…… 머리가…… 갔어요.”<br></br>
                          “그럼 과거 언제까지 기억해요?”<br></br>
                          “모, 몰라요.”<br></br>
                          아오, 씨……. 시현은 대화를 자제하기로 한 아까의 다짐을
                          또 까먹은 걸 후회했다. 그럼에도 제이에스를 그렇게
                          퇴치한 건 정말이지 통쾌하지 않을 수 없었다. (70~71쪽)
                          <br></br>
                          <br></br>
                          말없이 삼각김밥을 내려다보는 선숙의 귀에 독고 씨의
                          중얼거림이 들려왔다.<br></br>
                          “근데 김밥만 주면…… 안 돼요. 편지…… 같이 줘요.”
                          <br></br>
                          선숙이 고개를 들어 독고 씨를 바라보았다. 독고 씨가
                          선숙을 똑바로 응시하고 있었는데, 그녀에게는 그런 그가
                          정말로 골든 레트리버처럼 보였다.<br></br>
                          “아들한테…… 그동안 못 들어줬다고, 이제 들어줄 테니
                          말……해 달라고…… 편지 써요. 그리고…… 거기에 삼각김밥……
                          올려놔요.”<br></br>
                          선숙은 독고 씨가 건넨 삼각김밥을 다시 내려다보며
                          입술을 깨물었다. 독고 씨가 바지 주머니에서 꼬깃꼬깃한
                          천 원짜리 지폐 세 장을 꺼냈다.<br></br>
                          “내가 사는 거예요. 어서…… 찍어요.”<br></br>
                          선숙은 상사의 지시를 따르듯 독고 씨가 시키는 대로
                          삼각김밥에 바코드 리더기를 가져갔다. 삑, 소리와 함께
                          ‘결제가 완료되었습니다’라는 기계음이 들리자, 그녀의
                          머릿속을 복잡하게 오가던 불안감이 완료된 기분이었다.
                          사람 대신 개를 믿는 선숙은, 착한 큰 개처럼 보이는 독고
                          씨의 말에 다시 한 번 고개를 끄덕였다. (109~110쪽)
                          <br></br>
                          <br></br>
                          따뜻했다.<br></br>
                          소주도, 그 소주가 담긴 컵도. 사내가 경만을 위해 특별히
                          마련했다는 온기를 주는 물건도. 경만은 왕따였지만
                          이곳에서만큼은 왕따가 아니었다. 이놈의 불편한 편의점이
                          한순간에 자신만의 공간으로 돌아왔다. 경만은 VIP로
                          컴백한 기분이었다.<br></br>
                          순식간에 참참참을 해치웠다. 그는 온기를 더 느끼고
                          싶었지만 일어나야 한다는 걸 알았다. 그런데 사장이 마치
                          값을 치러야 한다는 듯 경만 앞에 다시 나타났다. 한
                          손에는 얼음이 든 것으로 추정되는 종이컵과 다른 손에는
                          옥수수수염차를 들고서. 오 마이 갓. (125쪽)<br></br>
                          <br></br>
                          인경은 낮과 밤이 바뀐 사이클을 계속 활용하기로 했다.
                          그녀는 새벽에 일어나 출근하듯 편의점에 가 산해진미
                          도시락을 먹으며 독고 씨와 이야기를 나눴다. 생각보다
                          똑똑하고 눈치도 빠른 사람이었다. 며칠 같이 이야기를
                          나누던 인경은 이후로는 아예 수첩을 들고 가 그와의 대화
                          꼭지를 기록하기 시작했다. 뜻하지 않은 취재는 그녀에게
                          글을 쓸 수 있을 거라는 용기를 불어넣어주었다.
                          (155~156쪽)<br></br>
                          <br></br>
                          “계산하셔야죠.”<br></br>
                          “아, 계산. 나 여기 아들이에요. 그냥 찍어놔요.”
                          <br></br>
                          그제야 민식은 자신이 편의점 사장의 아들임을 밝히지
                          않았다는 걸 떠올렸다. 그런데 신분을 밝혔음에도 사내는
                          꿈쩍 않고 선 채로 그를 응시할 뿐이었다. 오호라, 나잇살
                          먹었다고 불편하다 이건가?<br></br>
                          “왜? 일 안 해?”<br></br>
                          이럴 땐 먼저 반말로 야코를 죽여야 한다. 하지만 사내는
                          여전히 꿈쩍도 안 했다.<br></br>
                          “나 여기 주인 할머니 아들이라니까? 못 알아들어?”
                          <br></br>
                          “증명……해봐.”<br></br>
                          “뭐?”<br></br>
                          “증명해보라고. 사장님…… 아들인 거.”<br></br>
                          “지금 반말했냐?”<br></br>
                          “어. 너처럼.”<br></br>
                          “야 이 자식아. 너 사장님 못 봤어? 나랑 닮았잖아.
                          눈매며 매부리<br></br>
                          코며. 안 그래?”<br></br>
                          “안…… 그래. 안…… 닮았어.” (179~180쪽)<br></br>
                          <br></br>
                          마스크 대란이 일고 사람들이 줄을 서서 약국에서
                          마스크를 구입하기 시작했다. 수많은 감염자가 발생한
                          대구로 전국의 의료진이 투입되었다. 코로나19로 세계가
                          뒤집어진 지금 나는 마스크를 쓴 채 골몰했다. 무언가
                          변화하고 있었다. 세계도, 나도. TV에서는 코로나19로
                          죽어가는 가족의 임종을 지키지 못한 채 보내야 하는
                          이탈리아 가족의 슬픈 사연이 소개되고 있었다.<br></br>
                          내 머릿속에서도 전염병이 돌듯 하나의 생각만이 나를
                          잠식하고 있었다. 전염병 같은 기억들이 내게 진짜 삶을
                          선택해야 할 때라고 외치고 있었다. 신기했다. 죽음이
                          창궐하자 삶이 보였다. 나는 마지막 삶이어도 좋을 그
                          삶을 찾으러 가야 했다. (242~243쪽)
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
                          불편한데 자꾸 가고 싶은 편의점이 있다!<br></br>
                          <br></br>
                          힘들게 살아낸 오늘을 위로하는 편의점의 밤<br></br>
                          정체불명의 알바로부터 시작된 웃음과 감동의 나비효과
                          <br></br>
                          『망원동 브라더스』 김호연의 ‘동네 이야기’ 시즌 2
                          <br></br>
                          <br></br>
                          청파동 골목에 자리 잡은 작은 편의점 ALWAYS.<br></br>
                          어느 날 서울역에서 살던 사내가 야간 알바로 들어오면서
                          <br></br>
                          편의점에 변화의 바람이 일기 시작한다!<br></br>
                          <br></br>
                          사람들이 기피하고 편견 어린 시선으로 바라보던 인물의
                          변신과 반전, 아이러니한 상황 전개는 이 소설의 가장
                          흥미로운 지점이다. 염 여사의 편의점은 직원들
                          입장에서는 비교적 좋은 대우를 받으며 안정적으로 일할
                          수 있는 곳이지만 주변에 편의점이 하나둘 생기면서
                          경쟁에서 밀리자 장사가 잘 되지 않는 상황에 봉착한다.
                          그러다 보니 동네 사람들에게 ‘불편한 편의점’으로
                          인식되는데, 이런 와중에 얼마 전까지 노숙자였던 ‘미련
                          곰탱이’ 같은 사내에게 야간 시간대를 맡긴다니 기존
                          직원들로서는 불안할 수밖에. 그런데 걱정도 잠시, 그가
                          들어온 후 편의점에는 신선한 변화의 바람이 일기
                          시작한다. 그는 물건을 슬쩍한 뒤 튀려는 불량학생이나
                          한밤중의 취객을 제법 잘 다루고, 일명 제이에스라 불리는
                          진상 손님까지 두 손 들고 나가 떨어지게 만든다. 뿐만
                          아니라 편의점은 비싸다며 오지 않던 동네 노인들마저
                          독고의 싹싹한 태도에 마실 나오듯 편의점을 어슬렁거리기
                          시작하고, 그로 인해 오전 매출이 쑥 올라간다.<br></br>
                          독고가 일으킨 변화의 바람은 동료들에게도 전해진다.
                          편의점 알바를 하며 공무원시험을 준비하는 시현은 신참
                          독고에게 매장 업무 교육을 해주다 그가 불쑥 건넨 말
                          한마디에 자신의 숨은 재능을 발견한다. 얼마 후 그녀는
                          다른 편의점에 스카우트된다. 아들과의 관계 단절로 속을
                          태우는 오 여사는 자신의 하소연을 귀담아 들어주고
                          아들과 소통할 방법을 넌지시 알려주는 독고에게 큰
                          감명을 받는다. 그런가 하면 어떤 손님은 독고의 눈빛과
                          접객 태도에서 영락없는 사장의 풍모를 추리해내기도
                          한다. 집과 회사 양쪽에서 점점 존재감을 잃어가는
                          세일즈맨 경만은 퇴근길 편의점에서 하는 혼술이 유일한
                          낙인데, 어느 날부터 편의점을 밤을 장악한 사내를
                          사장이라 지레짐작하여 못마땅한 시선을 보낸다. 하지만
                          그 역시 독고의 순수한 호의 앞에서 얼어붙은 마음이
                          스르르 풀어지고 만다.<br></br>
                          독고 효과는 여기서 그치지 않는다. 염 여사로 하여금
                          독고를 쫓아내고 편의점을 팔게 하려던 민식은 그녀를
                          설득하는 과정에서 엄마와 더욱 돈독한 사이가 되고,
                          민식의 사주로 독고의 뒷조사를 하던 곽 씨는 오히려
                          타깃인 독고에게 감정이입을 하고 만다. 지친 상태로
                          대학로를 떠나와 마지막 글쓰기에 매달리는 희곡작가
                          인경은 서울역 홈리스였던 이상한 알바와 매일 밤 취재차
                          대화를 나누면서 글을 쓸 수 있다는 용기를 되찾는다.
                          어쩌면 이곳 편의점에서는 손님이든 직원이든 서로가
                          서로에게 구원과 영감을 주는 존재들인지 모른다. 애초에
                          염 여사가 도움의 손길을 내밀었을 때 독고가 이를
                          받아들인 것도 살기 위한 마지막 본능에 가까웠고, 염
                          여사 역시 덕분에 편의점의 밤을 맡길 든든한 인재를
                          얻었으니 그들은 서로를 지켜낸 셈이다.<br></br>
                          <br></br>
                          삶은 관계이자 소통,<br></br>
                          행복은 멀리 있지 않고 내 옆의 사람들과 마음을 나누는
                          데 있다<br></br>
                          <br></br>
                          소설은 일곱 개의 에피소드를 통해 편의점을 둘러싼
                          다양한 인물의 시선으로 독고의 모습을 비춘다. 그리고
                          마지막은 독고의 독백으로 마무리된다. 편의점 일에
                          숙달될수록 독고는 기억을 조금씩 되찾는다. 사람들을
                          만나고 대화를 나누다 보니 알코올로 굳어진 뇌가
                          활성화되면서 기억의 조각들이 맞춰지기 시작한 것이다.
                          그는 어쩌다가 모든 것을 잃고 술에 빠져 살다가 기억마저
                          잃어버리고 노숙인이 되었을까. 분명한 것은 그가
                          편의점에서 두 계절을 보내면서 다시 살아내기로 마음먹은
                          것이다. 그가 기억을 거의 회복할 무렵 대구 지역에서
                          코로나가 걷잡을 수 없이 확산되고 있다는 소식이 들린다.
                          그와 함께 독고에게도 결단의 시간이 찾아온다.<br></br>
                          불편한데도 자꾸 끌리는 이상한 편의점 이야기는 코로나로
                          인해 여전히 불편한 시대를 살아가는 우리에게 마침맞게
                          도착해 유쾌한 웃음과 다정한 위로를 건넨다. 마지막
                          페이지를 덮으면 삶은 관계이자 소통이며, 행복은 내 옆의
                          사람들과 마음을 나누는 데 있다는 한결같은 진리를
                          다시금 되새기게 될 것이다.<br></br>
                          <br></br>
                          편의점이란 사람들이 수시로 오가는 곳이고 손님이나
                          점원이나 예외 없이 머물다 가는 공간이란 걸, 물건이든
                          돈이든 충전을 하고 떠나는 인간들의 주유소라는 걸,
                          그녀는 잘 알고 있었다. 이 주유소에서 나는 기름만 넣은
                          것이 아니라 아예 차를 고쳤다. 고쳤으면 떠나야지. 다시
                          길을 가야지. 그녀가 그렇게 내게 말하는 듯했다. (243쪽)
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
                            9791161571188 ( 1161571183 )
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">발행(출시)일자</p>
                          <p className="info-item-text">2021년 04월 20일</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">쪽수</p>
                          <p className="info-item-text">268쪽</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">크기</p>
                          <p className="info-item-text">
                            137 * 204 * 25 mm / 333 g
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

export default BookDetailPage_convenienceStore;
