import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bestSellerBook1.jpg";
import bookDetailImg from "../images/i9791198013026.jpg";

function BookDetailPage_40class() {
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
                    이미 늦었다고 생각하는 당신을 위한 김미경의 마흔 수업
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">김미경 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          어웨이크북스
                        </Link>
                        2023년 02월 15일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 2위 · 자기계발 2위
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
                            <div className="point-text">900p</div>
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
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      160만 구독 MKTV 국민 멘토 김미경,
                      <br></br>
                      ≪김미경의 리부트≫ 이후 3년 만의 단독 신작 출간
                      <br></br>
                      <br></br>
                      100세 시대에 ‘갓생 1세대’, 40대를 재해석하다
                      <br></br>
                      마흔 이후 펼쳐질 진짜 인생을 나답게 사는 법
                    </div>
                    <div className="info-text">
                      전 국민이 힘겨워하는 불황에 여느 세대보다 더 많이 흔들리는
                      이들이 있다. 가족을 짊어지고 커리어의 정점을 향해가고 있는
                      40대들이다. 마흔이 되면 괜찮아질 줄 았았는데, 삶이 좀 더
                      안정될 거라 믿었는데 실상은 그렇지가 않다. 대기업과
                      금융권에서 올해 만 40세가 된 1982년생을 희망퇴직 대상자에
                      포함시킨다는 소식이 들려오면서 40대의 불안은 더욱 커지고
                      있다.
                      <br></br>
                      지금의 40대는 10~20대 시절 IMF 외환위기로 부모가 실직하는
                      모습을 지켜보고 대학에 진학해 ‘취업용 스펙’을 처음 쌓기
                      시작한 세대다. ‘안정’을 추구하는 공무원 열풍과 ‘오늘만
                      산다’는 욜로(YOLO) 열풍 사이에서 ‘나다운 삶’은 뭔지
                      고민하기 시작한 첫 세대, 젊은 시절부터 100세까지의 삶을
                      준비하는 첫 세대도 지금의 마흔이다. 이처럼 마흔이 살아가는
                      세상은 매일 엄청난 속도로 변하고 있지만, ‘40’이라는 나이에
                      대한 우리의 인식은 여전히 30년 전에 머물러 있다. 불혹,
                      중년. 퇴사, 창업 등 우리가 떠올리는 40대의 이미지는 이들의
                      부모 세대인 60~70대가 40대였던 시절에 만들어진 마흔의
                      이미지에서 거의 벗어나지 못하고 있다.
                      <br></br>
                      <br></br>
                      ≪김미경의 마흔 수업≫은 대한민국 자기계발 멘토이자 160만
                      구독자를 보유한 MKTV 크리에이터이며, 온라인 지식 커뮤니티
                      MKYU 대표인 김미경이 ≪김미경의 리부트≫ 이후 3년 만에
                      출간하는 단독 저서다. 30대 여성들에게 독한 코칭과 인생
                      솔루션을 제안하며 김미경에게 국민 멘토, 국민 강사, 국민
                      언니라는 타이틀을 안겨주었던 ≪언니의 독설≫을 펴낸 지 12년
                      만이다. 당시 서른의 불안과 두려움을 다독이며 30대의 10년을
                      열심히 살아온, 하지만 여전히 사는 게 어렵고 미래를
                      불안해하는 40대를 위해 김미경이 다시 한번 나선 것.
                      <br></br>
                      <br></br>이 책은 뭔가를 시작하기엔 이미 늦었다고 생각하는
                      사람들, 마흔이 되도록 이룬 게 없다고 생각하는 사람들,
                      40대를 어떻게 보내야 할지 모르는 사람들을 위한 일종의 성장
                      매뉴얼이다. 마흔에 대한 막연한 불안감을 해소하고, 지금
                      필요한 마음가짐을 익히고, 여러 역할 속에서 인생의 균형을
                      찾으며 50대 이후의 인생 후반전을 재미있고 의미 있게 살아갈
                      수 있도록 ‘인생 힌트’를 주는 김미경의 응원과 솔루션이
                      가득하다. 열심히 살아왔고 앞으로도 최선을 다해 살아갈,
                      자기 인생을 누구보다 사랑하는 모든 마흔에게 이 책을
                      추천한다.
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
                        <span class="text">김미경</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="writer-profile">
                        <img
                          data-kbbfn="s3-image"
                          loading="lazy"
                          alt="김미경"
                          src="https://contents.kyobobook.co.kr/dtl/author/1001103901.jpg"
                          data-src="https://contents.kyobobook.co.kr/dtl/author/1000129201.jpg"
                        />
                      </div>

                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              30년간 기업과 방송 등 강의 무대에서 활약해온
                              대한민국 최고의 자기계발 강사, 160만 구독자를
                              보유한 유튜브 채널 MKTV 크리에이터이자 18만 회원의
                              온라인 지식 커뮤니티 MKYU 대표.
                              <br></br>
                              사람들은 늘 궁금해한다. 자기 철학을 바탕으로 일을
                              추진해나가는 몰입력, 평생 공부를 멈추지 않는
                              꾸준함, 위기 때마다 해법을 찾아내는 긍정력, 사회에
                              발휘하는 선한 영향력까지 도전과 성장을 끊임없이
                              이어나가는 그의 성공 비결은 무엇일까. 그런데
                              사람들이 잘 모르는 것이 있다. 40대 중반까지 그도
                              무명 강사에 불과했다는 사실을. 자신의 이름을 내건
                              방송 프로그램 〈김미경 쇼〉도, 《꿈이 있는 아내는
                              늙지 않는다》 《언니의 독설》 등의 대표작도 모두
                              40대 후반에야 이룬 일이다. 마흔 즈음의 그는 초라한
                              인생 성적표와 불안한 미래 앞에서 하루하루
                              흔들렸다. 그런 그이기에 요즘 30~40대가 겪고 있는
                              우울과 불안에 누구보다 공감하며 뜨거운 위로를
                              보낸다. 마흔이 되면 좀 더 여유롭고 단단한 어른이
                              될 거라 믿었지만 여전히 하루하루 초조하고
                              불안하다면, 정상이다. 왜냐하면 마흔이란 결과가
                              아닌 ‘과정’이며, 안정보다는 ‘도전과 성장’이
                              어울리는 나이니까. 이 책은 그가 온몸으로 겪으며
                              한발 앞서 깨달은 40대에 관한 통찰이자 100세 시대에
                              새로 쓰는 인생 해석집이다.
                              <br></br>
                              그는 인생에서 가장 빛나는 시절을 살고 있는
                              마흔들이 계속해서 꿈꾸고 도전하기를 간절히 바란다.
                              마흔이 해야 할 일은 인생 정산이 아니라 오늘 하루를
                              진정한 황금기를 만드는 것이기에.
                              <br></br>
                              <br></br>
                              유튜브 @MKTV
                              <br></br>
                              MKYU www.mkyu.co.kr
                              <br></br>
                              인스타그램 @mikyungkim_kr
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
                            프롤로그 | 괜찮다, 이만하면 잘했다. 당신이 맞다
                            <br></br>
                            <br></br>
                            1부 | 오늘도 불안에 지친 마흔에게<br></br>
                            <br></br>
                            지금 당신이 불안하고 우울한 이유<br></br>: 마흔,
                            희망이 현실로 드러나는 나이 | 당신은 잘못 살지
                            않았다<br></br>
                            <br></br>
                            마흔인데 이룬 게 없다고? 정상입니다<br></br>: 마흔
                            즈음의 내 인생 성적표 | 이룬 게 없어 보이는 것은
                            당연하다 | 함부로 인생을 정산하지 마라 | 마흔은
                            잘못이 없다<br></br>
                            <br></br>두 번째 인생, 세컨드 라이프가 온다<br></br>
                            : 다 내려놓으라는 거짓말 | 인생의 황금기를 언제로
                            정의할 것인가 | 당신의 마흔은 아직 오전이다<br></br>
                            <br></br>내 인생 최고의 파트너를 만나는 법<br></br>:
                            어떻게 자존감과 품격을 지키며 살 것인가 | 단단한
                            철학을 만드는 연습 | 진짜 나를 만나는 시간, 리얼 미
                            리추얼<br></br>
                            <br></br>
                            10년 후를 즐겁게 기대하는 법<br></br>: 기대가 없으면
                            현재를 열심히 살 수 없다 | 삶이 더 이상 가슴 뛰지
                            않는다면<br></br>
                            <br></br>
                            마흔이 낀 세대? 갓생 1세대!<br></br>: 아래위를
                            끌어당기는 중심 | 늘 증명해야 하는 삶 | 실력과
                            내공으로 빛나는 시작을<br></br>
                            <br></br>
                            2부 | 나를 단단하게 만드는 마음가짐<br></br>
                            <br></br>
                            비교하는 마음 때문에 힘들어요<br></br>: 비교를
                            재해석하는 법 | 그 사람도 자기만의 밑바닥이 있음을 |
                            스스로 내는 상처가 더 아프다 | 부러운 마음은 딱
                            10분만<br></br>
                            <br></br>
                            마음이 크는 나이, 마흔<br></br>: 더는 이렇게 살고
                            싶지 않아서 | 죽어도 못 할 일은 없다<br></br>
                            <br></br>
                            아이를 대하듯 나를 대하라<br></br>: 더 이상 나를
                            방치하지 않겠습니다 | 내 안의 어린아이를 보살피는 법
                            | 최선의 답은 나만이 안다<br></br>
                            <br></br>
                            나만의 인생 해석집을 만들자<br></br>: 당연한 것들을
                            나답게 해석하기 | 기록하면 내가 된다 | 누구도 아닌,
                            나에게 정직한 사람들의 특징<br></br>
                            <br></br>
                            나를 끌어내리는 것들과 싸워라<br></br>: 가장 가까운
                            존재에게 상처받은 사람들 | 감히 그 누구도 끼어들지
                            못하게<br></br>
                            <br></br>내 공간과 시간을 반드시 확보하자<br></br>:
                            누구나 자기만의 책상을 가져야 한다 | 투자하지 않는데
                            성장하는 사람은 없다 | 내 꿈에 대한 권리를 주장하는
                            법<br></br>
                            <br></br>
                            3부 | 인생의 균형을 유지하는 연습<br></br>
                            <br></br>
                            이제라도 결혼해야 할까<br></br>: 나에게 최선일까
                            물어볼 기회 | 결혼이 해결해주지 않는 것 | 혼자여도
                            당당해야 둘일 때 행복하다<br></br>
                            <br></br>
                            관계에도 밸런스가 필요해<br></br>: 네 가지 사랑, 네
                            가지 관계 | 사람에게 부지런한 좋은 사람<br></br>
                            <br></br>
                            부부의 새로운 파트너십을 만들어라<br></br>: 마흔에
                            아내의 조력자가 된 남편 | 파트너십을 재조정하는 법 |
                            마흔 넘으면 50점이 만점이다<br></br>
                            <br></br>내 방식이 아이의 표준값이 된다<br></br>: 내
                            삶의 방식은 대물림된다 | 자녀 교육의 필수과목 ‘How’
                            | 아이에게 태도의 선물을 주자<br></br>
                            <br></br>
                            마흔도 아직 인재다<br></br>: 끝나지 않는 뒷바라지의
                            함정 | 투자가 도박이 되지 않으려면 | 교육비 때문에
                            ‘흑자도산’ 하지 마라 | 아이 말고 어른에게 투자하자
                            <br></br>
                            <br></br>
                            용돈 30만 원에 지친 남자들에게<br></br>: 허리끈을
                            조이는 40대 남자들 | 고독사로 내몰리는 50대 남자들 |
                            위기와 고립감에서 탈출하는 법<br></br>
                            <br></br>
                            평범한 사람이 비범해지는 유일한 방법<br></br>:
                            달라진 나를 발견하게 해주는 습관 | 좋은 습관을
                            ‘미라클’이라 부르는 이유 | 하루 1시간만 진짜 나로
                            살아보자<br></br>
                            <br></br>
                            4부 | 두 번째 세상과 나를 연결하는 법<br></br>
                            <br></br>
                            퇴사하기 전에 반드시 알아야 할 것들 1<br></br>:
                            40대가 회사 밖을 대비하지 못하는 이유 | 도전
                            정신으로 무장한 가여운 퇴사 | 퇴사 전 ‘임대
                            마인드’를 갖자<br></br>
                            <br></br>
                            퇴사하기 전에 반드시 알아야 할 것들 2<br></br>:
                            회사를 그만두면 잃는 일곱 가지 | 퇴사 준비란 축적의
                            시간을 버는 것 | 가치가 시키는 일을 하기 위하여
                            <br></br>
                            <br></br>
                            불황을 기회로 만드는 세 가지 힘<br></br>: 금리를
                            따라잡는 ‘나’라는 고금리 상품 | 씨종자를 버리는
                            농사꾼은 없다 | 줄이는 대신 채우고 따라잡자 | 결국
                            버텨내는 사람들의 비밀<br></br>
                            <br></br>
                            나는 오늘부터 1인 스타트업이다<br></br>: 슈퍼
                            프리랜서가 등장하자 달라진 것들 | 야생의 사자가
                            되려면 필요한 네 가지<br></br>
                            <br></br>
                            나만의 ‘원씽’으로 성장 근육을 키워라<br></br>:
                            바람을 현실로 만들어줄 단 하나, 원씽 | 생활 근육
                            쓰지 말고 성장 근육 키우자 | 지금 내가 몰입할 원씽을
                            찾는 법 | 원씽이 에브리씽이 되는 기적<br></br>
                            <br></br>
                            미래의 돈을 버는 유일한 방법<br></br>: 생계형 공부가
                            만들어준 놀라운 변화 | 세상의 작동법을 알아야 돈
                            벌기 쉬워진다 | 세상의 돈은 언제나 미래로 흐른다 |
                            마흔, 시작하기 딱 좋은 나이<br></br>
                            <br></br>
                            자본금 없이 시작할 수 있는 최고의 직업<br></br>:
                            꾸준히 하면 브랜드가 된다 | 커뮤니티가 무한 확장되는
                            시대가 온다 | 나를 최고의 전문가로 만드는 법
                            <br></br>
                            <br></br>
                            꼴찌를 두려워 말고 거침없이 연결하라<br></br>:
                            시작은 누구나 초라하다 | 확장의 씨앗을 뿌리기 |
                            당신을 두 번째 세상과 연결하라<br></br>
                            <br></br>
                            에필로그 | 당신의 마흔이 나의 마흔보다 빛나길
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
                          나에게 돌아가고 싶은 나이가 있다면 바로 40대다. 사느라
                          힘들어 미처 못 해준 위로와 칭찬을 마흔의 나에게 마음껏
                          해주고 싶어서다. 이 책은 그런 마흔들을 위해 썼다. 지쳐
                          있는 마흔은 따스하게 안아주고, 포기하고 싶은
                          마흔에게는 삶의 힌트를 주고, 모든 것을 다 그만두고
                          싶다는 마흔에게는 쓴소리를 마다하지 않았다. 내 마흔을
                          진심으로 대하듯 당신의 마흔을 뜨겁게 안아주고 싶었다.
                          이제 나를 위한 특별한 인생 수업을 시작하자. 한 번의
                          마흔 수업이 끝날 때마다 여러분은 스스로를 더 뜨겁게
                          사랑하게 될 것이다. 그리고 인생 절반의 문제를 풀어낸
                          실력으로 마흔 이후의 인생도 행복하게 만들어나갈 수
                          있을 것이다. 마흔은, 당신의 진짜 인생이 시작되는
                          시간이다. -프롤로그 “괜찮다, 이만하면 잘했다. 당신이
                          맞다” 중에서<br></br>
                          <br></br>
                          마흔이 되면 괜찮아질 줄 알았다. 30대에 시달렸던 불안과
                          초조함, 타인과 비교하면서 느끼는 열등감도 한결 잦아들
                          줄 알았다. 마흔이 되면 커리어도 탄탄해지고, 무엇보다
                          내 인생이 ‘안정’될 거라 믿었다. 경제적으로도 조금 더
                          여유롭고 마음도 단단해져서 쉽게 흔들리지 않으리라
                          믿었다. 어디서부터 잘못된 걸까. 열심히 살아왔지만
                          여전히 40대의 나는 하루하루 흔들리고 있었다. 마흔이
                          넘도록 나잇값을 못 하는 것 같아 우울했고, 이제는 정말
                          늦은 것 같아 불안했다.-“지금 당신이 불안하고 우울한
                          이유” 중에서<br></br>
                          <br></br>
                          마흔은 원래 완성되는 나이가 아니라 뭐든지 되다 마는
                          나이다. 과정의 나이지 결과의 나이가 아니라는 말이다.
                          그러니 ‘마흔은 곧 ‘안정’이라는 고정관념은 이제 버리자.
                          마흔에게는 격렬하게 구슬을 만들고 용감하게 꿰어보는
                          ‘도전’이나 ‘성장’이란 꼬리표가 훨씬 더 현실적이다. -
                          “마흔인데 이룬 게 없다고? 정상입니다” 중에서<br></br>
                          <br></br>
                          우리는 100세 시대를 살아가고 있다. 100세를 24시간에
                          빗대어 계산하면 1년은 대략 14분 24초. 40세는 오전 9시
                          36분이 된다. 이제 막 출근해서 한창 열심히 일할
                          시간이다. 50이나 돼야 비로소 정오, 낮 12시가 된다.
                          해가 가장 높이 떠오른 12시를 밤 12시처럼 살 수는 없지
                          않나. 그런데 준비 없이 50대가 된 사람들은 60대부터 밤
                          12시처럼 불을 끄고 ‘오프 모드’ 에 들어간다. 나도 인생
                          시계로 내가 현재 몇 시에 와 있는지 계산해보았더니 이제
                          겨우 오후 2시다. 아직 밖에 해가 쨍쨍하고 일몰이 되기엔
                          너무 멀었다. (중략) 마흔은 해가 저무는 쪽이 아니라
                          해가 떠오르는 쪽에 가깝다. 내 마흔을 오전답게 대해야
                          내 예순과 일흔이 오후다워질 수 있다. 당신의 마흔은
                          아직 오전이다.-“두 번째 인생, 세컨드 라이프가 온다”
                          중에서<br></br>
                          <br></br>
                          인생의 희로애락이 본격적으로 몰아치는 시기는
                          40대부터다. 그때부터 본격적으로 망하고, 아이들이
                          제대로 사고를 치고, 부부 사이가 틀어지고, 부모님이
                          아프기 시작한다. 아직 인생 전반전도 끝나지 않았는데 본
                          게임에 들어가기도 전에 서로의 대차대조표를 보면서
                          비교하는 게 큰 의미가 없다는 얘기다.-“비교하는 마음
                          때문에 힘들어요” 중에서<br></br>
                          <br></br>
                          마흔이 넘어서까지 누군가의 공감과 위로에 의존하는 것은
                          서글픈 일이다. 남을 위로하고 공감하느라 에너지를 다
                          써버려 정작 자기를 일으켜 세우지 못하는 사람은 결국
                          위로해준 대상을 원망하게 된다. ‘내가 너한테 어떻게
                          했는데 이럴 수 있어?’ ‘내가 나로 살지 못한 게 누구
                          때문인데?’ 그런데 따지고 보면 이게 누구의 책임일까?
                          나를 배려하지 못한 그 사람의 잘못일까. 아니면
                          스스로에게 의무를 다하지 않은 내 책임일까? 가까운
                          사람이라도 나를 일으켜줄 ‘의무’는 없다.-“아이를 대하듯
                          나를 대하라” 중에서<br></br>
                          <br></br>
                          마흔 정도 되면 최소한 나에게 무엇이 성공이고 무엇이
                          행복인지는 정의할 수 있어야 한다. 나만의 정의가 없으면
                          끊임없이 남들을 부러워하느라 결국 나답지 않은 선택을
                          하게 되고 무리하게 일을 벌이다 망가지기 쉽다. 살면서
                          가장 막막한 순간은 방향을 잃었을 때다. 자신만의 인생
                          해석집이 없으면 새로운 변수가 생길 때마다 수없이
                          흔들리고 헤맬 수밖에 없다. 무엇보다 나 자신에게
                          정직하게 살 수 없다.-“나만의 인생 해석집을 만들자”
                          중에서<br></br>
                          <br></br>
                          마흔 이후에 인간관계가 줄어드는 이들은 사람에게 게으른
                          경우가 많다. 오랜 친구에게도 연락을 안 하고, 새로운
                          친구를 사귀는 데도 소극적이다. 이 나이에 새로운 친구를
                          만드는 건 어렵다고 지레 결론 내린다. 그러나 품격 있고
                          좋은 사람들은 나이를 가리지 않는다. 사람에 대해서는
                          끝까지 가능성을 열어놓고 애를 써야 한다. 결국 사람에게
                          부지런한 이들이 주변에 좋은 사람들을 두고 안정감 있고
                          성숙한 인생을 살아간다.-“관계에도 밸런스가 필요해”
                          중에서<br></br>
                          <br></br>
                          지금 부부 사이가 50점이라도 괜찮다. 남녀 사이에서
                          100점은 만난 지 일주일 됐을 때의 점수다. 그 뒤로 계속
                          떨어지는 게 정상이다. 친구도 5년이 지나면 점수가
                          깎이는데 일상의 민낯과 성품의 바닥을 10년간 보고 사는
                          부부가 50점이면 나쁘지 않다. 몸이 다르다는 것은 각자의
                          몸 안에서 벌어지는 미세한 슬픔, 서러움, 소망에 똑같이
                          공명하지 못한다는 뜻이다. 그것도 정상이다. 내가
                          생각하고 원하는 것을 상대가 매번 공감하고 응원하는 게
                          오히려 이상한 것이다. 서로가 조금 더 여유 있게
                          배려하고 용서하면 50점도 만점으로 여겨진다. 수십 년을
                          함께 살아가야 할 부부에게 제일 큰 장점은 함께한
                          시간만큼 서로에게 너그러워지는 것이 아닐까? -“부부의
                          새로운 파트너십을 만들어라” 중에서<br></br>
                          <br></br>
                          생계를 위협하는 퇴사라는 어설픈 시도에 함부로
                          도전이라는 이름을 붙여서는 안 된다. 나를 먹여 살리는
                          일만큼 진심으로 성실해야 하는 일은 없다.-“퇴사하기
                          전에 반드시 알아야 할 것들 1” 중에서<br></br>
                          <br></br>
                          새로운 꿈과 커리어를 만드는 원씽은 생활 근육만으로는
                          안 된다. 오랫동안 몰입하고 슬럼프를 견디면서 단 하나의
                          목표를 이루려면 강한 성장 근육이 필요하다. 성장 근육이
                          약해진 사람들은 무거운 원씽을 감당할 엄두가 안 나
                          아무런 꿈도 못 꾼다. 몸은 게을러져 있고 의심만
                          많아지니 이 나이에 이걸 해서 뭐 하겠냐는 생각만 든다.
                          그럼에도 불구하고 마흔에 한 번 근육을 찢는 데 성공하면
                          그 경험이 고스란히 내 육체에 저장된다. 그 근육으로
                          다른 인생 문제들도 풀어갈 수 있고, 어떤 미션이든 나를
                          믿고 맡길 수 있다. 세상의 성공 법칙과 성공 프로세스는
                          과목만 다를 뿐 작동 원리가 거의 비슷하기
                          때문이다.-“나만의 ‘원씽’으로 성장 근육을 키워라”
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
                          ★ 160만 구독 유튜브 채널 MKTV의 국민 멘토 김미경
                          <br></br>★ ≪김미경의 리부트≫ 이후 3년 만의 단독 신작
                          <br></br>★ 방송인 이금희, 코미디언 송은이, 배우 한가인
                          추천<br></br>
                          <br></br>
                          마흔이면 괜찮아질 줄 알았다, 마흔이면 안정될 거라
                          믿었다는<br></br>이 시대의 여전히 불안한 40대를 향해
                          김미경이 들려주는 위로의 문장<br></br>
                          마흔을 앞두었다면, 마흔을 지나왔다면 가슴에 박힐
                          빛나는 응원의 말<br></br>
                          <br></br>
                          학창 시절 IMF를 겪으며 부모의 고통을 지켜보았고,
                          20대엔 취업용 스펙을 쌓느라 치열하게 보냈고, 지금은
                          사회 곳곳에서 기성세대와 Z세대를 연결하며 가장 열심히
                          일하는 세대, 마흔. 가장 많이 벌고 가장 많이 쓰며 여러
                          역할을 동시에 수행하는 마흔은 1990년대 후반부터
                          급변하는 세상을 경험하고 시시각각 적응하며 최선의 삶을
                          살아내온 ‘대한민국 갓생 1세대’다.<br></br>
                          그런데 마흔을 바라보는 우리의 인식은 여전히 30년 전에
                          머물러 있다. ‘불혹’이란 단어가 주는 무게 때문인지,
                          100세 시대가 도래했음에도 ‘마흔’ 하면 퇴사, 은퇴,
                          노후, 치킨집 창업 같은 이미지를 떠올린다. 한창
                          열정적으로, 신나게 일하던 사람들도 30대 후반이 되면
                          자연스레 지금까지의 커리어를 점검하며 인생 성적표를
                          매기기 시작한다.<br></br>
                          평생 공부하며 자기 영역을 확장해온 국민 멘토 김미경.
                          누구보다 치열하게 40대를 보낸 덕분에 60세가 되어서도
                          계속해서 도전하고 꿈꾸는 그는, 판에 박은 듯 똑같은
                          고민을 토로하는 3040 세대가 안타까워 이 책을 쓰게
                          되었다. 지금의 마흔이 얼마나 많은 가능성을 가지고
                          있는지, 앞으로 할 수 있는 일이 얼마나 무궁무진한지
                          알려주고, 어디서도 들려주지 않은 40대를 향한 위로와
                          응원을 전하기 위해서다. 최악의 경제 불황을 어떻게
                          버텨야 할지 막막한 사람들, 급변하는 세상이 두려운
                          사람들, 당장 해내야 하는 여러 의무 속에서도 내 인생을
                          나답게 살고자 고민하는 30~40대라면 이 책이 귀중한
                          만남이 될 수 있다. 지금까지 가져왔던 마흔에 대한
                          편견과 고정관념을 버리고, 자신의 진짜 인생을 위해 지금
                          당장 ‘실천’할 수 있는 구체적인 힌트를 얻을 수 있을
                          것이다.<br></br>
                          <br></br>
                          “지금은 인생 성적표를 들여다볼 때가 아니다.”<br></br>
                          모든 걸 완성해야 한다는 생각부터 버려라<br></br>
                          <br></br>
                          40대는 인생에서 가장 바쁘고 힘든 시기다. 일은
                          넘쳐나고, 아이는 아직 어리고, 돈은 아무리 벌어도
                          부족하다. 전 국민 공통과목인 내 집 마련, 재테크, 육아,
                          직장생활까지 해내다 보면 시간이 어떻게 흐르는지도
                          잊어버린다. 40대에는 저마다 크고 작은 인생의 숙제가
                          수시로 쌓인다. 가족이 아프거나, 집안에 돈 문제가
                          생기거나, 사고를 당하는 등 상상도 해본 적 없는 굵직한
                          사건도 수시로 벌어진다. 누구라도 이런 상황에서는 내
                          인생만 뒤처지는 듯한 기분을 느낄 수밖에 없다.
                          우울감이든 번아웃이든 마음의 병을 앓기도 너무 좋은
                          환경이 만들어지는 것이다.<br></br>
                          김미경은 이것이 “정상”이라고, 그러니 자책하지 말라고
                          말한다. 자기 방도 없는 좁은 집에서 무명 강사로 일하며
                          세 아이를 키워온 워킹맘으로서, 자신 역시 수능 시험을
                          앞둔 고3 수험생의 마음으로 40대의 10년을 살아왔다고.
                          원래 40대는 이룬 게 없는 것이 정상이라고 말이다.
                          <br></br>
                          <br></br>
                          “당신은 잘못 살지 않았어요. 자신의 꿈을 좇아 성실히 잘
                          살아왔으니 스스로를 의심하지 마세요. 잘못된 건 딱
                          하나, 마흔에 모든 걸 이루고 안정을 찾아야 한다는
                          고정관념뿐이에요. 그 생각 때문에 지금 이렇게 우울하고
                          힘든 거예요. 안 해도 될 좌절을 굳이 하고 있는
                          거라고요.”<br></br>
                          <br></br>
                          “마흔에는 조금만 노력하면 금방 뭐라도 완성될 것처럼
                          보이지만, 소리만 요란할 뿐 막상 들여다보면 내실이 없는
                          경우가 많다. 하루하루 열심히 사는데 왜 여전히 돈이
                          없지? 내가 바보같이 살고 있나? 더 열심히 달렸어야
                          했나? 40대 때 나도 스스로에게 수없이 던졌던 질문이다.
                          그런데 아무리 주위를 둘러봐도 나만큼 분주히 사는
                          사람도 드물었다. 그렇다면 결론은 하나다. 하나의
                          커리어가 무르익어 프로페셔널이 되고 돈을 벌기까지는
                          물리적 시간이 필요하다는 것.”<br></br>
                          <br></br>
                          10년 내내 선배 강사들을 따라다니며 새로운 것을
                          경험하고, 강의가 없는 날에는 혼자서 강의 자료를
                          만들고, 독학으로 영상 편집을 배우고, 다른 분야의
                          사람들을 만나면서도 돈이 벌리지 않았던 30대의 강사
                          김미경. 그는 돈을 못 벌면 경험이라도 벌겠다는 생각으로
                          일한 덕분에, 당시로서는 뭐가 될지 알 수 없는 수많은
                          경험과 노하우를 자신만의 ‘실패 창고’에 가득 쌓아갔다.
                          이 경험들이 어느 순간부터 새로운 자신을 만들어내기
                          시작한 것은 그가 40대 중반이 되었을 무렵의 일이다.
                          <br></br>
                          그제야 그는 당장 쓸모도 없고 돈도 안 될 것 같았던 십수
                          년의 경험과 노하우가 사실 자기만의 자산이었음을
                          깨닫는다. 이 자산들은 마치 구슬과 같아서 따로따로
                          들여다보면 뭐가 될지 모르지만, 일단 꿰기 시작하면
                          너무나 귀한 자신만의 보물이 된다는 사실도.<br></br>
                          그는 열심히 살았는데 뭐 하나 이룬 게 없다고 불안해하는
                          마흔에게 이렇게 말한다. 고작 몇 년 모은 구슬로
                          성공하려고 하는 것은 욕심이라고. 자신이 15년의 무명
                          생활 끝에 40대 후반에서야 이름을 알리기 시작했듯, 내
                          구슬을 만드는 데 15년, 꿰는 데 15년, 30년 이상 멀리
                          보는 게 당연한 것이라고.<br></br>
                          <br></br>
                          “당신의 마흔은 잘못이 없다.”<br></br>
                          눈으로 읽고, 소리 내어 말하고, 손으로 쓰며 외우는
                          <br></br>
                          40대를 위한 ‘김미경식 성장 매뉴얼’<br></br>
                          <br></br>
                          나만 빼고 다들 잘 사는 것 같아 속상하다면?<br></br>★
                          누구나 자기만의 밑바닥이 있다<br></br>★ 오늘이 내
                          인생의 전부가 아니다<br></br>★ 지금껏 성실히 살아온
                          나를 의심하지 말자<br></br>
                          <br></br>
                          이미 늦은 것 같아 불안하다면?<br></br>★ 40대도 아직
                          인재다, 자신에게 투자하자<br></br>★ 100세 시대에
                          인생의 황금기는 60대부터다. 아직 20년이 남았다
                          <br></br>★ 마흔은 구슬을 꿰기 시작하는 나이, 벌써 인생
                          정산하지 말자<br></br>
                          <br></br>
                          주변에서 내 꿈을 무시한다면?<br></br>★ 내 공간과 내
                          시간부터 확보하자<br></br>★ 내가 성장하겠다는데, 감히
                          누구도 끼어들게 두지 말자<br></br>★ 나를 가장 잘 아는
                          내 안의 진짜 나, ‘리얼 미’에게 묻자<br></br>
                          <br></br>이 책은 총 4부로 구성되었다. “1부 오늘도
                          불안에 지친 마흔에게”에서는 사람들이 왜 마흔이 되면
                          우울하고 불안한지, 마흔에 대한 우리의 고정관념이 왜,
                          어떻게 잘못되었는지 보여준다. “2부 나를 단단하게
                          만드는 마음가짐”에서는 타인과의 비교 멈추기부터 나
                          자신과 친해지기, 나만의 인생 해석집을 만들기, 나의
                          가능성을 가로막는 주변의 소리를 차단하기, 나만의
                          공간과 시간 확보하기 등 불안을 버리고 내 인생을
                          살아가기 위해 빨리 가져야 할 습관과 자세를 소개한다.
                          <br></br>
                          “3부 인생의 균형을 유지하는 연습”에서는 결혼 생활과
                          자녀 교육을 중심으로 40대 이후의 인간관계를 재정립하는
                          법을 안내한다. 마지막 “4부 두 번째 세상과 나를
                          연결하는 법”에서는 나의 존엄을 지키며 50대 이후의 삶을
                          잘 살아가기 위해 마흔부터 준비해야 할 경제 습관과
                          커리어 확장에 대해 말한다.<br></br>이 책에서 안내하는
                          4가지 주제는 마흔부터 준비해야 할 ‘세컨드 라이프를
                          위한 인생 매뉴얼’의 필수 키워드나 다름없다. 막연한
                          은퇴 준비, 노후 대비가 아닌 50대 이후 내가 살고 싶은
                          모습을 구체적으로 그려보고, 이를 실현하기 위해 최선을
                          다해 계획을 실천하고 싶은 30~40대라면 뜨거운 위로와
                          응원뿐 아니라 유익한 정보도 얻을 수 있을 것이다.
                          <br></br>
                          <br></br>
                          100세가 밤 12시라면, 마흔은 겨우 오전 9시 36분
                          <br></br>
                          다시 뜨거운 인생을 살고 싶은 40대에게<br></br>
                          결코 늦지 않았음을, 그리하여 다시 시작할 힘을 주는 책
                          <br></br>
                          <br></br>
                          우리는 100세 시대를 산다. 100세를 기준으로 인생을
                          24시간에 빗대어 계산하면 1년은 대략 14분 24초,
                          그렇다면 40세는 오전 9시 36분이다. 이제 막 출근해서
                          일에 집중할 시간이다. 문제는 마흔에 덧씌워진 ‘중년’,
                          ‘불혹’이라는 이미지 때문에 대다수가 40대를 ‘꽤 먹은
                          나이’로 생각한다는 것이다. 퇴사하면 뭐 먹고 살지,
                          관심도 없는 카페 창업을 해야 할지를 고민할 것이 아니라
                          50~60대, 70~80대에는 어떤 모습으로 살고 싶은지 꿈을
                          꾸고 계획을 세우고 나에게 시간과 예산을 투자하며
                          미래를 설계할 시간이 마흔이어야 한다.<br></br>
                          스무 살 무렵, 김미경의 꿈은 미국으로 유학을 가서
                          해외에서 살아보는 것이었다. 그때는 돈이 없어 포기해야
                          했던 꿈. 하지만 그는 한 번도 이 꿈을 놓지 않았고
                          30년이 지나 50대에 접어들면서 본격적으로 ‘미국에서
                          영어로 강의하기’를 꿈꾸기 시작했다. 이제 60세가 된
                          그는 마침내 꿈에 한발 가까이 다가가 있다. 세 아이가
                          장성했고, 회사도 안정되고, 해외에서 강의를 요청할 만큼
                          커리어도 탄탄하게 쌓았다. 무엇보다 55세부터 본격적으로
                          영어 공부를 시작한 덕분이다. 자주 잊어버리고 발음도
                          만족스럽지 않지만, 매일 성장 근육을 찢는다는 마음으로
                          꿈에 몰입한 결과다.<br></br>
                          모두가 극심한 불황기를 살아내고 있는 요즘, 어디를
                          둘러보아도 한숨이 가득하고 움츠러드는 일이 다반사다.
                          하지만 IMF, 외환위기, 코로나19가 그랬듯 이 불황이
                          끝나면 우리는 또다시 새로운 세상을 맞이할 것이다. 그때
                          지금보다 더 많이 불안해하며 후회할 것인가, 아니면
                          지금부터라도 진짜 인생을 살아볼 준비를 할 것인가.
                          끝까지 나를 사랑하며 나다운 인생을 살고 싶다면,
                          지금부터 준비하자. 이 책이 당신의 빛나는 마흔을 힘껏
                          응원해줄 것이다.
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
                            9791198013026 ( 1198013028 )
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">발행(출시)일자</p>
                          <p className="info-item-text">2023년 02월 15일</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">쪽수</p>
                          <p className="info-item-text">300쪽</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">크기</p>
                          <p className="info-item-text">
                            146 * 212 * 29 mm / 579 g
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
                    <span class="val">16,200</span>
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

export default BookDetailPage_40class;
