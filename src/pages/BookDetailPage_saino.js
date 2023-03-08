import { Link } from "react-router-dom";
import "../components/BookDetail.css";
import bookPreviewImage from "../images/bookOfWeek1.jpg";

function BookDetail_saino() {
  return (
    <>
      <div className="container-wrapper">
        <div id="contents" className="contents-wrap">
          {/* prod-detail-header */}
          <div className="prod-detail-header">
            <div className="header-contents-inner">
              <div className="prod-detail-title-wrap">
                <div className="prod-title-area">
                  <div className="prod-title-box">세이노의 가르침</div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">세이노 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          데이원
                        </Link>
                        2023년 03월 02일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 1위 자기계발 1위
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
                        <span className="val">6,480</span>
                        <s className="val-origin">7,200</s>
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
                              <span id="OrderDeliveryType">
                                도서 포함 15,000원 이상 무료배송
                              </span>
                            </div>
                          </div>
                          <div className="prod-guide-cont">
                            <div className="delivery-guide-text">
                              <span id="OrderEstimatedDate">
                                <strong>내일(3/9, 목) 도착예정</strong>
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
                              미디어 추천도서 > 주요일간지소개도서 > 문화일보 >
                              2023년 2월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 조선일보 >
                              2023년 1월 4주 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      머릿글: 초판 한정 블랙 에디션
                      <br></br> <br></br>
                      재야의 명저 《세이노의 가르침》 2023년판 정식 출간! 순자산
                      천억 원대 자산가, 세이노의 ‘요즘 생각’을 만나다
                      <br></br>
                    </div>
                    <div className="info-text">
                      2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로
                      만든 제본서는 물론, 전자책과 앱까지 나왔던 《세이노의
                      가르침》이 드디어 전국 서점에서 독자들을 마주한다. 여러
                      판본을 모으고 저자의 확인을 거쳐 최근 생각을 추가로
                      수록하였다. 정식 출간본에만 추가로 수록된 글들은 목차와
                      본문에 별도 표시하였다.<br></br>
                      <br></br>더 많은 사람이 이 책을 보고 힘을 얻길 바라기에
                      인세도 안 받는 저자의 마음을 담아, 700쪽이 넘는 분량에도
                      7천 원 안팎에 책을 구매할 수 있도록 했다. 정식 출간 전자책
                      또한 무료로 선보인다.<br></br>
                      <br></br> *필명 ‘세이노(Say No)’는 당신이 믿고 있는 것들에
                      ‘No!’를 외치고 제대로 살아가라는 뜻이다. 세이노는 지난
                      20여 년간 여러 칼럼을 통해 인생 선배로서 부와 성공에 대한
                      지혜와 함께 삶에 대한 체험적 지식을 나누어 주었다. 그래서
                      그의 글을 좋아하는 사람들은 그를 ‘세이노 스승님’이라
                      부른다.
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
                          <span className="text">세이노</span>
                        </h3>
                      </div>
                      <div className="writer_info_box">
                        <div className="auto_overflow_wrap overflow active">
                          <div className="auto_overflow_contents">
                            <div className="auto_overflow_inner">
                              <p className="info_text">
                                필명 세이노는 현재까지 믿고 있는 것들에 대해
                                No라고 말하라(Say No)는 뜻이다. 2023년 기준
                                순자산 천억 원대 자산가다. 1955년생. 의사의
                                장남으로 태어나 서너 살 유년기부터 아버지의
                                가르침을 받았다. 아버지가 전 재산을 사기로 모두
                                날린 후 사망하면서 친부모를 모두 여의고
                                고교시절부터 생활고에 크게 시달렸다.<br></br>
                                고교 3학년 때 건강과 가난 때문에 휴학하고 친구
                                아버님과 친구들의 투자를 받아 사업을 했으나 실패
                                후 복학하여 고교를 4년 만에 졸업하고 입대했다.
                                공군사병으로 복무하는 동안 군부대 부동산 관리
                                업무와 도서관 관장을 맡았고, 제대 후 영어공부에
                                몰두하여 미8군 내 메릴랜드대학 분교에
                                입학하였다. 학비를 벌고자 보따리 장사부터
                                시작하여 과외ㆍ입시영어학원ㆍ번역업 등을 했다.
                                <br></br>결혼 후에는 거의 십여 년 이상 쉬는 날
                                없이 밤늦도록 일과 공부에 몰두하면서
                                의류업ㆍ정보처리ㆍ컴퓨터ㆍ음향기기ㆍ유통업ㆍ무역업
                                등으로 자산을 모으기 시작했다. 그 자산을
                                외환투자ㆍ부동산경매ㆍ주식 등으로 증대시켰고
                                학연ㆍ혈연ㆍ지연ㆍ정치적 배경 없이 홀로 현재의
                                자산을 이룩했다.<br></br>세계적인 다국적 기업의
                                아시아 지역 부사장직도 겸임하였고 사업상 70여
                                개국을 여행했다. 국내에서 경영하였던 회사들은
                                수출탑과 산업훈장을 받았으며, 인재경영대상후보로
                                오르기도 했다.<br></br>2003년부터는 사업을 줄여
                                왔고 광범위한 독서ㆍ음악ㆍ영화감상을 즐긴다.
                                가장 좋아하는 것은 문제를 해결하는 것, 사람을
                                가르치고 깨우치는 것이며, 가장 싫어하는 것은
                                접대 술자리, 기업 정치가들, 부자인 척하는 자들의
                                블러핑. 매년 십억 원대의 소득세를 2000년까지 5년
                                이상 세이노 개인이 납부하였고 2001년부터는 가족
                                단위로 납부하고 있다.
                              </p>
                            </div>
                          </div>
                          <div className="auto_overflow_footer">
                            <button
                              type="button"
                              className="btn_more_body active"
                              data-btn-toggle=""
                            >
                              <span className="text">접기</span>
                              <span className="ico_arw"></span>
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
                              ※ 예전 글에 저자가 요즘 생각을 덧붙인 글과 새롭게
                              작성한 글은 모두 글꼭지 앞에 '2022' 표시가
                              있습니다.(책에서는 회색과 검정색으로 '2022' 표시를
                              구분해 두었으니, 본문 미리보기에서 '일러두기'
                              페이지를 참조해 주세요.)
                              <br></br>
                              <br></br>
                              서문 6<br></br>
                              <br></br>
                              1부 아무것도 가진 게 없다고 느껴질 때<br></br>
                              앞길이 보이지 않을 때<br></br>
                              2022 삶이 그대를 속이면 분노하라 25
                              <br></br>
                              2022 천재 앞에서 주눅 들지 말라 31
                              <br></br>
                              2022 스트레스의 뿌리를 없애라 38
                              <br></br>
                              2022 실패하면 제로 점으로 내려가라 47
                              <br></br>
                              2022 미래를 미리 계산하지 마라 53
                              <br></br>
                              2022 건강을 잃으면 모든 것을 잃는다고? 61
                              <br></br>
                              2022 10분 이상 고민하지 말라 68
                              <br></br>
                              <br></br>내 학력이 초라하게 느껴질 때<br></br>
                              2022 학력이나 학벌이 빈약한 경우 어떻게 해야 하나
                              70
                              <br></br>
                              2022 학벌 좋은 사람들이 알아야 할 것 75
                              <br></br>
                              2022 부자가 되려면 학교 공부를 열심히 해야 하는가
                              80
                              <br></br>
                              2022 고학력은 부자가 되는 데 도움이 되는가 97
                              <br></br>
                              2022 자격증의 환상에서 벗어나라 104
                              <br></br>
                              2022 전문직에 종사하면 부자가 될까 109
                              <br></br>
                              2022 전공은 취직하는 데 있어 어떤 역할을 하는가
                              114
                              <br></br>
                              전공은 실전에서 어떤 의미가 있는가 120
                              <br></br>
                              2022 무엇을 공부하여야 하는가 124
                              <br></br>
                              <br></br>
                              어떤 일을, 어떻게 해야 하는가
                              <br></br>
                              2022 성격에 맞는 일을 하라 134
                              <br></br>
                              2022 무슨 일이든지 더 잘하는 방법이 있다 140
                              <br></br>
                              2022 이런 일은 하지 말아라 147
                              <br></br>
                              2022 아무 일이나 재미있게 하라 152
                              <br></br>
                              2022 허드렛일부터 제대로 해라 158
                              <br></br>
                              2022 주 5일제 근무 좋아하지 마라 163
                              <br></br>
                              2022 하기 싫은 일을 해야 몸값이 오른다 166
                              <br></br>
                              돈주머니를 쥔 올바른 사장을 골라라 171
                              <br></br>
                              2022 8시간 근무에 집착하지 말라 177
                              <br></br>
                              2022 세상이 원하는 기준에 맞추어 일하라 182
                              <br></br>
                              2022 Integrity - 높은 지위에 오르고 싶다면 186
                              <br></br>
                              2022 일의 대가는 질로 따져라 192
                              <br></br>
                              2022 일의 종류에 따라 부자 되는 길이 다르다 199
                              <br></br>
                              2022 좋아하는 일이라고 섣불리 하지 마라 204
                              <br></br>
                              2022 장사를 할 때의 자세 211
                              <br></br>
                              사업을 할 때 알아야 할 것들 (1) 217
                              <br></br>
                              사업을 할 때 알아야 할 것들 (2) - 사람 관리 222
                              <br></br>
                              2022 사업을 할 때 알아야 할 것들 (3) 233
                              <br></br>
                              2022 장사나 사업의 아이템 237
                              <br></br>
                              영업이 뭡니까? 240
                              <br></br>
                              2022 영업에 대하여 (1) 241
                              <br></br>
                              2022 영업에 대하여 (2) 245
                              <br></br>
                              2022 영업에 대하여 (3) 247
                              <br></br>
                              <br></br>
                              2부 부자로 가는 길목에서
                              <br></br>
                              돈, 똑바로 알자
                              <br></br>
                              2022 돈에 대한 위선을 버려라 251
                              <br></br>
                              2022 돈과 먼저 친해져라 256
                              <br></br>
                              2022 시간이 돈이 되게 만들어라 261
                              <br></br>
                              돈은 오직 기회의 첫 단추만 채워 준다 264
                              <br></br>돈 갖고 사람을 차별하면 안 된다고? 268
                              <br></br>
                              2022 돈을 모을 때는 날파리들을 조심해라 273
                              <br></br>
                              2022 사기꾼 판별법 281
                              <br></br>
                              나는 무소유의 삶은 살지 못한다 295
                              <br></br>
                              <br></br>
                              성공을 향해 나아가려면
                              <br></br>
                              2022 너만의 게임을 만들어라 300
                              <br></br>
                              2022 젊을수록 돈을 아껴라 317
                              <br></br>
                              2022 이생망(이번 생은 망했다), 정말 그럴까? 323
                              <br></br>
                              2022 변화가 없는 삶은 불행하다 327
                              <br></br>
                              전쟁터에서 휴머니즘을 찾지 마라 332
                              <br></br>
                              2022 야망을 갖지 마라 335
                              <br></br>
                              2022 LIFE와 LIVING 339
                              <br></br>
                              <br></br>
                              나는 가난한 사람인가?
                              <br></br>
                              가난은 사회구조적 현상인가 344
                              <br></br>
                              2022 가난이 세습되는 이유 350
                              <br></br>
                              2022 가난한 사람들은 선량한가? 356
                              <br></br>
                              가난한 자의 특성은 버려라 363
                              <br></br>
                              2022 부자가 되지 못하게 만드는 심리 368
                              <br></br>
                              <br></br>
                              부자들은 대체 어떤 사람들인가?
                              <br></br>
                              2022 부자들의 쇼윈도 앞에서 서성이지 말아라 372
                              <br></br>
                              2022 부자들에게는 금덩어리가 없다 378
                              <br></br>
                              부자는 불행한 도둑놈이 아니다 381
                              <br></br>
                              2022 부자들에게는 과소비가 없다 387
                              <br></br>
                              2022 있는 놈들은 돈을 어디에 얼마나 펑펑 쓸까? 391
                              <br></br>
                              2022 부자는 검소하면 안 된다 397
                              <br></br>
                              2022 어느 필명 기부자의 나눔 이야기 403
                              <br></br>
                              <br></br>
                              〈부자아빠의 진실게임〉 기고글 일부
                              <br></br>
                              금융지식이 부자 만들어 주지 않는다 408
                              <br></br>
                              2022 그래도 집을 사는 것이 낫다 409
                              <br></br>
                              삶의 우열은 돈으로 가려지는 것이 아니다 411
                              <br></br>
                              주식 투자는 쓸 일이 없는 여유자금으로 하라 413
                              <br></br>
                              놀면서 돈을 벌 수 있다는 헛된 환상을 버려라 414
                              <br></br>
                              부자가 되려면 좁은 문으로 가라 416
                              <br></br>
                              이게 재테크인가? 418
                              <br></br>
                              <br></br>
                              3부 삶의 전반에 조언이 필요할 때<br></br>
                              세상을 살아가는 지혜
                              <br></br>
                              혼자 끙끙대지 마라 421
                              <br></br>
                              2022 좋은 의사를 만나는 법 424
                              <br></br>
                              2022 좋은 변호사를 만나려면 434
                              <br></br>
                              2022 책을 어떻게 읽을 것인가 453
                              <br></br>
                              2022 협상 능력을 길러라 465
                              <br></br>
                              2022 은행 저축은 목돈을 만들 때까지만 해라 473
                              <br></br>
                              2022 운명적 사랑을 믿지 말아라 481
                              <br></br>
                              2022 기회는 사람이 준다. 윗사람에게 잘해라 486
                              <br></br>
                              2022 외로움을 즐겨라 491
                              <br></br>
                              2022 법을 어느 정도나 지켜야 할까? 494
                              <br></br>
                              2022 공무원 만나는 법 504
                              <br></br>
                              2022 공무원하고의 다툼은 판례해석 다툼이다
                              (문과생을 위한 글) 538
                              <br></br>
                              2022 대한항공 땅콩사건, 서울시향 불화 등에 대한
                              생각 541
                              <br></br>
                              2022 성공할 남자 고르는 법원제 ‘내 딸들아. 이런
                              놈은 제발 만나지 말아라’ 553
                              <br></br>
                              2022 개새끼들에게는 욕을 하자 565
                              <br></br>
                              2022 Fuck You Money 574
                              <br></br>
                              2022 물건을 잘 사야 잘산다 578
                              <br></br>
                              2022 접대를 받지 말라 587
                              <br></br>
                              2022 아내들이여, 남편부터 변화시켜라 595
                              <br></br>
                              2022 나는 평등주의가 싫다 599
                              <br></br>
                              2022 나의 어린 시절과 아버지 607
                              <br></br>
                              2022 공인중개사에 대하여 615
                              <br></br>
                              2022 공대에 관하여 617
                              <br></br>
                              2022 심청이는 효녀가 아니었다 619
                              <br></br>
                              2022 망년회를 하지 마라 628
                              <br></br>
                              <br></br>
                              이코노미스트 및 신동아 기고글 일부
                              <br></br>
                              싸워 봤자 나만 손해 본다! 634
                              <br></br>
                              法과 친구가 되라! 637
                              <br></br>
                              정리해고의 사회학 639
                              <br></br>
                              <br></br>
                              세이노가 독자들에게
                              <br></br>
                              2022 메일을 보낸 독자들을 위한 공통 답변 2004. 6.
                              8. 654
                              <br></br>
                              차라리 점쟁이에게 가라: 짜증이 나서 올리는 글
                              2004. 6. 30. 662
                              <br></br>
                              2022 설날? 내게서 덕담을 기대하지 마라 2006. 1.
                              31. 663
                              <br></br>
                              2022 나는 도전한다, 그러므로 존재한다 2007. 2. 8.
                              670
                              <br></br>
                              2022 프로강사가 되려면 2007. 6. 12. 676
                              <br></br>
                              조루증 독자들에게 2007. 6. 19. 677
                              <br></br>
                              미안하다 2008. 10. 11. 678
                              <br></br>
                              KBS2 다큐멘터리를 봐라! 2009. 5. 16. 679
                              <br></br>
                              <br></br>
                              동아일보 기고글 일부
                              <br></br>
                              ‘바가지 요금’ 탓하지 말라 2001. 1. 14. 680
                              <br></br>
                              삶이 만만하다면 미래는 없다 2001. 2. 4. 682
                              <br></br>
                              일터와 가까운 곳에 살아라 2001. 2. 25. 684
                              <br></br>
                              당신의 가족부터 만족시켜라 2001. 3. 14. 685
                              <br></br>집 쉽게 팔려면 여심을 잡아라 2001. 3. 25.
                              687
                              <br></br>
                              내가 신문에 글을 쓰는 이유 2001. 5. 27. 688
                              <br></br>
                              전문가라고 모든 걸 맡기진 말라 2001. 5. 30. 690
                              <br></br>돈 빌려줄 땐 주민-호적등본 받아라 2001.
                              6. 24. 692
                              <br></br>
                              말이 통하지 않을 땐 침묵하라 2001. 6. 27. 693
                              <br></br>
                              당신은 정말 시간이 없는가 2001. 7. 1. 695
                              <br></br>
                              인터넷은 놀이터가 아니다 2001. 7. 22. 697
                              <br></br>
                              승자는 적이, 패자는 친구가 많다 2001. 7. 18. 699
                              <br></br>
                              당신의 아군이 적군이다 2010. 11. 9. 701
                              <br></br>
                              부동산에 빨리 눈떠라 2001. 8. 1. 707
                              <br></br>
                              친구와 상품거래 할 때 2001. 8. 5. 708
                              <br></br>
                              이해관계 속에는 우정이 설 자리가 없다 2001. 8. 22.
                              710
                              <br></br>
                              빨리 부자 되려면 부자들 마음을 읽어라 2001. 8. 29.
                              712
                              <br></br>
                              목돈 빌려줄 땐 친구라도 냉철하게 2001. 9. 2. 714
                              <br></br>
                              부티보다 귀티 나게 외모에도 신경 쓰라 2001. 9. 5.
                              716
                              <br></br>
                              <br></br>
                              번외 글<br></br>
                              세이노의 성공담 2001. 1. 11. 주간동아 718
                              <br></br>
                              SBS ‘그것이 알고 싶다’ 311회 인터뷰 2004. 10. 2.
                              721
                              <br></br>
                              <br></br>
                              마무리
                              <br></br>이 책을 마무리하며 722
                              <br></br>
                              부록 1 | 세이노를 만나다 724
                              <br></br>
                              부록 2 | 세이노 추천도서 734
                              <br></br>
                              저자와의 만남 736
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
                            첫 문장 : 삶이 그대를 속이면 분노하라.
                            <br></br>
                            <br></br>
                            인생은 자전거와 같다. 뒷바퀴를 돌리는 것은 당신의
                            발이지만 앞바퀴를 돌려 방향을 잡는 것은 당신의
                            손이며 눈이고 의지이며 정신이다. 당신의 발이
                            ‘생활’이라는 이름으로 당신을 움직여는 주지만 정작
                            당신의 손은 호주머니 속에 깊이 박혀 있는지도 모른다.
                            정작 당신의 눈은 당신 앞에 놓인 길을 바라보지 않고
                            옆에서 빠른 속도로 지나가는 오토바이들과 스포츠카만
                            부러운 마음으로 바라볼지도 모른다. 때문에 비록
                            열심히 페달을 밟고는 있지만 당신이 탄 자전거는
                            제자리를 맴돌 뿐이다. -‘삶이 그대를 속이면 분노하라’
                            中<br></br>
                            <br></br>
                            삶에 비굴하게 질질 끌려가지 마라. 명심해라. 당신이
                            분노하여야 할 대상은 이 세상이 아니다. 현재의 당신의
                            삶에 먼저 슬퍼하고 분노하면서 ‘No!’라고 말하라(Say
                            No!). 그리고 당신의 삶을 스스로 끌고 나가라. 당신이
                            주인이다. -‘삶이 그대를 속이면 분노하라’ 中<br></br>
                            <br></br>
                            그들은 일이 잘못되어 갖고 있던 것을 모두 다 날리는
                            실패를 당하게 되어도 제로 점으로 ‘되돌아가’ 재출발을
                            할 줄 안다. 수없이 많은 부자들이 사업이나 투자에서
                            실패하거나 홍수나 화재 등으로 전 재산을 날렸다가도
                            재기에 성공하는 이유가 바로 거기에 있다. -‘실패하면
                            제로 점으로 내려가라’ 中<br></br>
                            <br></br>
                            학력이 없는 사람들이 저지르는 잘못은 일을 배우려는
                            것이 아니라 돈을 쫓아다닌다는 것이다. 누구나 쉽게
                            배울 수 있는 일은 절대 하지 말라. -‘학력이나 학벌이
                            빈약한 경우 어떻게 해야 하나’ 中<br></br>
                            <br></br>
                            투자를 잘해야 부자가 된다는 말에 현혹되지 말라! 일이
                            우선이고 투자는 나중이다, 이 바보들아. -‘아무 일이나
                            재미있게 하라’ 中<br></br>
                            <br></br>
                            당신이 무슨 일을 하건 간에 재테크 기법이 똑같은 것은
                            아니다. 자신이 하는 일과 그 일에 대한 보상 시스템이
                            어떻게 구성되어 있는가에 따라 재테크 기법은 달라져야
                            한다. -‘일의 종류에 따라 부자 되는 길이 다르다’ 中
                            <br></br>
                            <br></br>
                            사람들은 영업을 하면서 구매자의 비위를 맞추는 것을
                            비법으로 생각하는 경향이 있다. 그러면서 자기 얘기는
                            하지 않고 구매자의 얘기만 들으려 한다. 천만에.
                            당신은 구매자에게 형제자매가 되어야 한다. -‘영업에
                            대하여 - 2’ 中<br></br>
                            <br></br>한 가족이 부자가 되려면 우선은 작은
                            항아리에라도 물이 가득 차 있어야 한다. 정, 가족
                            날파리를 돕고 싶다면 일단은 악착같이 작은
                            항아리에라도 물을 채워 놓고 그 항아리를 감추어 놓은
                            상태에서 그 가족 구성원의 정신 상태를 냉정히 파악한
                            뒤 이자로 나오는 한 바가지 정도만 퍼 주어라. -‘돈을
                            모을 때는 날파리들을 조심해라’ 中<br></br>
                            <br></br>
                            부자로 살고 싶다면 젊은 시절에 철저하게 돈을
                            움켜쥐어라. 부모가 부자가 아니라면 결혼식도 간소하게
                            하고 모든 허례허식을 물리쳐라. -‘젊을수록 돈을
                            아껴라’ 中<br></br>
                            <br></br>
                            당신이 미래에 부자가 될 수 있는지 없는지를 판가름할
                            수 있는 방법이 있다. 가난한 친구들을 찾아가 부자가
                            되는 방법에 대한 그들의 말을 귀담아들어 보라. 그들의
                            말에 당신이 공감을 한다면 당신도 가난한 자들의
                            공통적 특성을 갖고 있음을 깨달아라. -‘가난한 자의
                            특성은 버려라’ 中<br></br>
                            <br></br>
                            사람들은 재테크를 한다고 하면서도 남들에게 돈을
                            지불하는 일에는 대단히 너그럽다. 자기 스스로 배워
                            직접 해 보려는 생각은 없고 가구 하나 스스로 만들어
                            보려고 하지 않는다. 진짜 재테크는 그런 것이 아니다.
                            나는 별걸 다 직접 몸으로 수행하면서 돈을 아꼈다.
                            -‘이게 재테크인가?’ 中<br></br>
                            <br></br>
                            부자들이 원하는 것을 알아라. 당신이 부자가 아니라면
                            부자들은 당신이 먹어 본 음식, 당신이 받아 온 서비스,
                            당신이 느끼는 기분, 그 이상을 이미 경험한
                            사람들이다. 당신에게 괜찮아 보이는 수준 정도라면
                            그들이 지갑을 열 까닭이 없다. -‘빨리 부자 되려면
                            부자들 마음 읽어라’ 中
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
                            피보다 진하게 살아라!<br></br>이 책은 부자 되는 법을
                            가르치는 책이 아니다. 목차를 훑어보자. 재테크 기법
                            같은 것은 전혀 나오지 않는다. 이 책의 저자는 돈이
                            삶의 우열을 결정하지 않는다고 설파한다. 대신, 삶을
                            어떻게 살아갈지에 대한 고민을 나눈다. 스스로의
                            인생을 위해 삶의 자세부터 바로잡고, ‘피보다 진하게
                            살라’ 한다. 세이노 사전에서 ‘노력’이란, 힘들고
                            어려운 일일수록 치열하게 열심히 해내는 것이다. 하기
                            싫었던 일조차 좋아질 만큼!
                            <br></br>
                            <br></br>
                            돈에 기죽지 마라!
                            <br></br>
                            저자는 돈에 대해서는 물론, 직접 겪은 자만이 알 수
                            있는 가난과 부의 실체에 대해서도 숨김없이
                            털어놓는다. 자본주의 사회에서 돈 없이 살아갈 수 있는
                            사람은 없다. 이 사회에서 돈은 마치 ‘피’와 같다. 피가
                            우리 몸 전체를 순환하며 생명을 유지시키듯, 돈은 돌고
                            돌아야 한다. 그래서 저자는 피가 부족한 이를 위해
                            피를 나누듯 이 책을 썼다. 이 책을 읽는 이들이 삶을
                            살아가는 데 필요한 지혜를 수혈받길 바란다. 그리하여
                            어디의 누구든 어떤 이유로든, 살아가면서 소중한 걸
                            포기하지 않는 세상이 되기를 꿈꾼다. 돈보다 소중한
                            것이 너무도 많으니까.
                            <br></br>
                            <br></br>
                            *조선일보 기자와 데이원 편집부가 합동으로 세이노의
                            보유 자산을 조사하였습니다. 구체적 증거도 없이 자산
                            규모가 회자되는 인물들에게 종종 현혹되는 현실에 대해
                            검증이 필요하다는 사명감으로 조사에 임했으며, 전체
                            자산의 세부 구성과 납세 기록 등을 꼼꼼히 살펴보는
                            과정을 통해, 세이노가 최소 1천억 원 이상의 순자산
                            보유자라는 사실을 확인하였음을 밝힙니다.
                            <br></br>
                            <br></br>
                            *〈세이노의 가르침〉 전자책을 무료 공개합니다.
                            종이책 발행일인 2023년 3월 2일에 맞추어 주요
                            서점에서 무료 전자책이 공개되고 데이원 블로그에서도
                            무료 다운로드 가능한 PDF와 epub 파일이 공개됩니다.
                            어떠한 암호도 걸려 있지 않은 파일이고 아무런 비용도
                            받지 않을 것입니다. (blog.naver.com/dayonepress)
                            <br></br>
                            <br></br>
                            *〈세이노의 가르침〉은 저자에게 판매수익이 지급되지
                            않습니다. 저자는 다른 이에게 지식을 나누는 데에 있어
                            일체의 비용을 받지 않습니다. 사칭에 유의하세요.
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
                            <p className="info-item-text">2023년 03월 02일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">준비중</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">
                              153 * 225 * 37 mm / 1020 g
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
        </div>
      </div>
    </>
  );
}

export default BookDetail_saino;
