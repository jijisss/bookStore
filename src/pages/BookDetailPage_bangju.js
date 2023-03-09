import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bookOfWeek4.jpg";
import bookDetailImg from "../images/i9791189571894.jpg";

function BookDetailPage_bangju() {
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
                  <div className="prod-title-box">방주</div>
                  <div className="prod-desc-area">
                    <p>유키 하루오 장편소설</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">유키 하루오 저자 · 김은모 번역</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          블루홀식스(블루홀6)
                        </Link>
                        2023년 02월 20일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 234위 · 소설 22위
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
                        <span className="val">14,850</span>
                        <s className="val-origin">16,500</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">820p</div>
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
                                <strong>내일(3/10, 금) 도착예정</strong>
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
                          일본소설
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          미스터리/스릴러소설
                        </Link>
                      </li>
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
                          장르소설
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          미스터리/스릴러소설
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text">
                      블루홀식스는 창립 이래 매년 미스터리, 추리소설 출판 종수가
                      압도적 1위인 출판사이다. ‘나가우라 교’, ‘미키 아키코’,
                      ‘아사쿠라 아키나리’, ‘저우둥’, ‘하야사카 야부사카’,
                      ‘후루타 덴’ 등 국내 미출간 작가들의 작품들과 국내에서 아직
                      인지도가 없었던 ‘오승호’(고 가쓰히로), ‘우사미 마코토’
                      작가의 작품들을 블루홀식스의 사명(使命)으로 알고 출간하여
                      왔다. 특히 ‘나카야마 시치리’의 작품들을 시리즈별로 꾸준히
                      출간하여 나카야마 시치리는 현재 일본을 대표하는 인기
                      작가가 되었다. 이 또한 블루홀식스 출판사만의 성과이자
                      지향점이라고 할 수 있다. 이번에는 유키 하루오의 『방주』를
                      출간하였다. 『방주』는 유키 하루오의 세 번째 작품으로
                      클로즈드 서클물의 새로운 지평을 연 수작이다. 폐쇄된 지하
                      건축물에서 연달아 벌어지는 불가해한 살인사건. 일주일 안에
                      범인을 찾아야 하는데……극한의 뇌정지! 미친 반전을 반드시
                      처음부터 끝까지 읽어주시길 바란다.
                      <br></br>이 책을 먼저 읽은 아리스가와 아리스의 평을 들자면
                      “이 충격은 평생 간다.”
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
                          <span className="text">유키 하루오</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                夕木 春央
                                <br></br>
                                1993년생. 2019년 「교수상회의 후계인」으로
                                제60회 메피스토상을 수상하고, 같은 해
                                『교수상회』로 데뷔했다. 최근 작품으로는 다이쇼
                                시대를 배경으로 한 미스터리 『서커스에서 온
                                집행관』이 있다.
                                <br></br>
                                『방주』는 유키 하루오의 세 번째 작품으로
                                클로즈드 서클물의 새로운 지평을 연 수작이다.
                                폐쇄된 지하 건축물에서 연달아 벌어지는 불가해한
                                살인사건. 일주일 안에 범인을 찾아야 하는데……
                                ‘주간문춘 미스터리 베스트 10’ 1위와 ‘MRC 대상
                                2022’1위를 동시 수상했으며, ‘2023년 본격
                                미스터리 10’ 1위, ‘이 미스터리가 대단해!’ 4위
                                등을 기록하며 극찬을 받았다.
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
                              방주
                              <br></br>
                              옮긴이의 말
                            </li>
                          </ul>
                        </div>
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
                                <p className="title-heading ">
                                  이마무라 마사히로 (작가)
                                </p>
                                <p className="info-text">
                                  그야말로 '곡예 같은 논리'. 훌륭한 클로즈드
                                  서클물이다.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  아키요시 리카코 (작가)
                                </p>
                                <p className="info-text">
                                  범인이 밝혀지고 난 후에도 방심 금물! 얼얼한
                                  맛의 에필로그에 백퍼센트 경악 보증.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  다케모토 겐지 (작가)
                                </p>
                                <p className="info-text">
                                  ‘리조트 시추에이션’, ‘카르네아데스의 판자’,
                                  ‘와이던잇’의 정교하고 교묘한 융합. 이 책을
                                  읽는 자에게 더없이 행복한 저주 있으라.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  아리스가와 아리스 (작가)
                                </p>
                                <p className="info-text">
                                  극한상황 속의 수수께끼 풀이를 즐긴 독자에게
                                  놀라운 〈진상〉이 덮쳐든다. 이 충격은 평생
                                  간다.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  아오사키 유고 (작가)
                                </p>
                                <p className="info-text">
                                  ‘수수께끼 풀이’도 ‘극한상황’도 우리의 그릇을
                                  가늠하기 위한 시련이다. 쏟아지는 물은 차갑고
                                  아무래도 붉은 듯하다.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  이가라시 리쓰토 (작가)
                                </p>
                                <p className="info-text">
                                  압도적인 경탄과 여운. 수수께끼를 사랑하는
                                  독자의 마음에 두루두루 꽂히기를.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  곤노 덴류 (작가)
                                </p>
                                <p className="info-text">
                                  모두 죽느냐, 범인만 죽느냐. 극한의 〈광차
                                  문제〉 미스터리 개막!
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  시오타니 겐 (작가)
                                </p>
                                <p className="info-text">
                                  가슴을 꽉 죄는 긴박감 속에서 펼쳐지는 극상의
                                  범인 찾기.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  스기에 마쓰코이 (평론가)
                                </p>
                                <p className="info-text">
                                  데스 게임 추리물로서 특출한 완성도를 자랑한다.
                                  어쩌면 이렇게 무서운 생각을 했을까.
                                </p>
                              </div>
                            </li>
                            <li className="recommend-item">
                              <div className="title-wrap title-size-sm">
                                <p className="title-heading ">
                                  센가이 아키유키 (평론가)
                                </p>
                                <p className="info-text">
                                  본격 미스터리와 ‘광차 문제’의 결합이 이렇게
                                  무시무시한 지옥을 낳을 줄이야.
                                </p>
                              </div>
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
                            첫 문장
                            <br></br>
                            복도 천장의 형광등이 불안하게 깜박거렸다.
                            <br></br>
                            발밑의 바닥은 철골에 철판을 용접하고 비닐을 발라서
                            공업 시설 같은 느낌이 든다. 벽에도 철판을 댔고, 몇몇
                            구획에는 암석 표면이 드러나 있다.
                            <br></br>
                            여기는 지하 1층이다. 그래도 지상까지는 10미터 가까이
                            된다.
                            <br></br>
                            <br></br>
                            <br></br>
                            우리는 살인보다 훨씬 큰 위기에 봉착했다. 오히려 그가
                            살해당한 걸, 꽉 막힌 상황을 돌파할 계기로 받아들이는
                            사람도 있을지 모른다.
                            <br></br>
                            산속에 묻힌 이 화물선 같은 지하 건축물에서
                            탈출하려면 아홉 명 중 누군가 한 명을 희생시켜야
                            하니까.
                            <br></br>
                            우리는 희생양을 선택해야 한다. 아니면 모두 죽는다.
                            <br></br>
                            어떻게 선택할까?
                            <br></br>
                            아홉 명 중 죽어도 되는 사람은, 죽어야 할 사람은
                            누구인가?
                            <br></br>
                            그건 그를 죽인 범인밖에 없다.
                            <br></br>
                            범인을 제외한 모두가 그렇게 생각할 것이다. p9
                            <br></br>
                            <br></br>
                            모두의 반응은 내가 고문 기구를 봤을 때와 크게 다르지
                            않았다.
                            <br></br>
                            놀라면서도 여기서 고문이 행해졌을 가능성을 찬찬히
                            따져볼 생각은 없어 보였다. 해외 토픽처럼 자신과는
                            아무 상관도 없는 일이니까. 하지만 다들 지금까지보다
                            얌전하니 말수도 적어졌다. 이 〈방주〉는 우리가
                            있어도 될 곳이 아니다. 어렴풋이 느껴졌던 그 기분이
                            모두의 가슴속에서 더욱 확고해진 것 같았다. p54
                            <br></br>
                            <br></br>
                            내일 날이 밝으면 최대한 빨리 여기서 나가는 편이
                            좋으리라.
                            <br></br>
                            그리고 산길을 걸어 별장으로 돌아가, 차를 타고 도쿄로
                            돌아가야 한다. 아주 분주한 하루가 될 것이다. p60
                            <br></br>
                            <br></br>
                            상황은 아까 이해했다.
                            <br></br>
                            그리고 이제야 공포가 뒤따라왔다.
                            <br></br>
                            산속의 지하다. 우리가 여기 있다는 것을 바깥의 그
                            누구도 모른다. 스마트폰은 당연히 불통이다.
                            <br></br>
                            이대로 바위를 치우지 못한다면?
                            <br></br>
                            물론 우리는 〈방주〉에서 나가지 못하고 죽는다. p67
                            <br></br>
                            <br></br>
                            “정말로 물이 불어났나요? 지진으로 계단이 꺼진 건
                            아니고요?”
                            <br></br>
                            “응 그건 아닌 것 같아. 수면이 흔들려. 분명 흐름이
                            있어. 물이 흘러들고 있다는 뜻이지.”
                            <br></br>
                            지층이 영향을 받은 것이다. 지진 때문에 지금까지는
                            조금씩 흘러들던 물의 기세가 강해진 모양이다.
                            <br></br>
                            쇼타로는 방에서 나가서 곱자를 들고 돌아왔다. 그리고
                            곱자를 계단 세 번째 단에 딱 수직으로 댔다.
                            <br></br>
                            모두 마른침을 삼키며 5분쯤 기다렸다. 류헤이가 눈금이
                            잘 보이도록 스마트폰 손전등으로 수면을 비추었다.
                            잠시 후 쇼타로가 곱자의 눈금을 확인했다.
                            <br></br>
                            “수위가 올라갔어. 틀림없군. 이대로 가면 곧 이 지하
                            건축물은 완전히 수몰될 거야.” p76~77
                            <br></br>
                            <br></br>
                            누군가 한 명을 희생하지 않으면 이 〈방주〉에서
                            탈출할 수 없다.
                            <br></br>
                            누가 희생양이 될 것인가?
                            <br></br>
                            그야 물론 살인을 저지른 사람이어야 한다. p87
                            <br></br>
                            <br></br>
                            그들은 어떤 의미에서 옳았다. 이 지하 건축물은
                            그야말로 지금 묵시록에 예언된 순간을 맞이했다.
                            우리는 최후의 심판을 기다리고 있다.
                            <br></br>
                            하지만 얄궂게도 구약성서 속 노아의 일화와는 달리,
                            홍수가 일어나는 곳은 방주다.
                            <br></br>
                            구원은 여기에 없었다.
                            <br></br>
                            조만간 신인지 뭔지가 심판을 내린다면 나는 도저히
                            살아남을 수 없을 것 같았다. 야자키의 이야기는 내게
                            무의미한 불안을 안겨 주었을 뿐이었다. p193
                            <br></br>
                            <br></br>
                            시간은 쉬지 않고 흘러간다.
                            <br></br>
                            낮밤의 구별이 없는데도 이 지하 건축물만큼 시간의
                            흐름이 무겁게 느껴지는 곳도 없었다. 건물 자체가
                            물시계 비슷한 느낌이다. p280
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
                            ★★★★★ ‘주간문춘 미스터리 베스트 10’ ★★★★★‘MRC대상
                            2022’ 동시 수상!
                            <br></br>
                            ★★★★★ ‘2023년 본격 미스터리 10’ 2위 ★★★★★‘이
                            미스터리가 대단해!’ 4위
                            <br></br>
                            ★★★★★ ‘미스터리가 읽고 싶어’ 6위!
                            <br></br>
                            <br></br>
                            내가 홍수를 땅에 일으켜 무릇 생명의 기운이 있는 모든
                            <br></br>
                            <br></br>
                            육체를 천하에서 멸절하리니 땅에 있는 것들이 다
                            죽으리라
                            <br></br>
                            <br></br>
                            그러나 너와는 내가 내 언약을 세우리니 너는 네
                            아들들과
                            <br></br>
                            <br></br>네 아내와 네 며느리들과 함께 그 방주로
                            들어가고
                            <br></br>
                            <br></br>
                            구약성서 창세기 제6장 17절, 18절
                            <br></br>
                            <br></br>
                            『방주』는 클로즈드 서클물의 진수로 극찬받은
                            작품으로 극한의 뇌 정지 미친 반전!을 선사한다.
                            구체적인 배경은 다음과 같다. 주인공 슈이치는 대학
                            시절 친구들, 그리고 사촌 형과 함께 산속의 지하
                            건축물을 찾아간다. 그러다 우연히 만난 길 잃은 가족
                            세 명과 함께 지하 건축물에서 하룻밤을 보내기로 한다.
                            다음 날 새벽녘, 지진이 발생해 출입문이 커다란 바위로
                            막힌다. 엎친 데 덮친 격으로 지반에 문제가 생겨 물이
                            유입되기 시작한다. 머지않아 지하 건축물은 수몰되게
                            될 것이 분명하다. 지하 건축물에서 탈출할 수 있는
                            방법은 한 명이 희생해 바위에 연결 된 닻감개를 돌려서
                            바위를 떨어뜨리고 혼자 방안에 갇히는 것이다. 그 한
                            명은 물이 차오르는 것을 바라보면서 죽기만을 기다릴
                            수 없게 된다. 이 와중에 살인이 연달아 발생한다.
                            누군가 한 명을 희생하면 탈출할 수 있다. 제한 시간은
                            약 일주일. 살인을 저지른 범인이 모두를 위해 희생해야
                            한다. 범인을 제외한 모두가 그렇게 생각했다. 갇힌
                            아홉 명의 사람 중 누가 희생해야 할까? 살인범은
                            어차피 살아나간다 해도 사형당할 것이다. 그러니
                            여기서 희생당하는 것이 낫다? 그렇다면 살인범이
                            누구인지 찾아야 한다?
                            <br></br>
                            『방주』는 클로즈드 서클물의 전형적인 클리셰인 외딴
                            섬, 저택, 사연 있는 캐릭터, 연쇄 살인 사건 등에서
                            벗어나기 위해 여러 가지 장치를 작품 속에 새겨
                            넣는다. 장치는 제한 조건으로 나타난다. 첫 번째
                            장치는 ‘시간’이다. 공간적 배경인 지하 건축물에서
                            지낼 수 있는 시간을 일주일로 제한한다. 두 번째
                            장치는 ‘탈출 방법’이다. 지하에서 탈출하기 위해서는
                            한 사람을 희생할 수밖에 없는 제한 조건이 걸린
                            것이다. 이와 같은 두 가지 제한 속에서 발생하는
                            갈등과 불안이 기존의 클로즈드 서클물에서는 느낄 수
                            없었던 또 다른 재미를 선사한다. 마지막으로 주목할
                            만한 부분은 작가가 범인이 살인을 저지른 ‘동기’가
                            무엇인지에 관한 수수께끼를 제시한다는 점이다. 다른
                            클로즈드 서클물과는 달리 『방주』에서는 범인이
                            밝혀지는 것에서 끝나지 않는다. 범인이 밝혀지면 그
                            범인은 ‘희생양’이 되어 죽어야 한다. 이러한 상황
                            속에서 연달아 살인을 저지르는 범인의 동기는
                            무엇일까? 섣부른 판단은 무고한 희생양을 발생시킬 수
                            있기에 논리적으로 범인을 찾아내야만 한다. 사건의
                            진상은 무엇일까? 마지막에는 역시 경악할 만한 진실과
                            놀라운 반전이 기다리고 있다.
                            <br></br>
                            <br></br>
                            10년간 많은 본격 미스터리 소설을 번역해 왔지만
                            마지막에 이렇게까지
                            <br></br>
                            소름이 돋는 작품은 없었다. _번역가 김은모
                            <br></br>
                            <br></br>
                            유키 하루오는 2019년에 『교수상회』로 메피스토상을
                            받으며 데뷔한 신예 작가다. 지금까지 다이쇼
                            시대(1912-1926)를 배경으로 미스터리를 써 온 작가는
                            세 번째 작품 만에 현대를 배경으로 깜짝 놀랄 만한
                            클로즈드 서클물을 써낸다. 이는 『방주』에 대한
                            평단의 극찬이 입증한다. “그야말로 곡예 같은
                            논리”(이마무라 마사히로), “더없이 행복한
                            저주”(다케모토 겐지), “압도적인 경탄과
                            여운”(이가라시 리쓰토), “무시무시한 지옥”(센가이
                            아키유키) 등의 찬사가 그러하다.
                            <br></br>
                            그렇다면 이러한 『방주』는 어떤 구상에서 출발했을까.
                            작가의 말을 직접 살펴보도록 하면 다음과 같다.
                            <br></br>
                            <br></br>
                            “제가 미스터리를 구상할 때 중점을 두는 요소 중
                            하나는 ‘탐정이 활약할 동기’입니다.
                            <br></br>
                            수수께끼 해명은 목적이 아니라 어디까지나 수단이어야
                            바람직하다고 생각하거든요.
                            <br></br>
                            클로즈드 서클이 무대인 작품에서는 ‘탐정이 활약할
                            동기’가 늘 어느 정도 유지됩니다.
                            <br></br>
                            폐쇄된 공간에 살인범과 함께 갇혀 있으니까, 범인의
                            정체를 빨리 밝혀내야 자신들의
                            <br></br>
                            안전이 보장되겠죠.『방주』에서는 그러한 동기를 더
                            절실하게 만들어 보려고 했습니다.
                            <br></br>
                            누군가 한 명을 희생해야 탈출할 수 있는 폐쇄된
                            공간에서 살인이 일어나면, 수수께끼
                            <br></br>
                            해명은 생존의 절대적인 조건으로 작용할 겁니다.
                            <br></br>
                            그런 설정에서 출발해 나름대로 마무리를 지은 결과가
                            이 작품 『방주』입니다.”
                            <br></br>
                            <br></br>
                            (『방주』 특별 기획 자기소개 에세이에서 발췌)
                            <br></br>
                            <br></br>
                            작가의 설정 의도는 완벽한 효과를 발휘한다. 신예
                            작가가 선보이는 미친 듯한 필력과 전개, 반전은
                            종국에는 입을 다물지 못할 정도다. 아무리 극찬해도 그
                            충격과 소름 돋는 전율은 온전히 전달되지 않을 것이다.
                            꼭 처음부터 끝까지 읽으면서 미스터리 독자만이 가질
                            수 있는 크나큰 즐거움을 한껏 가져가시기를 바란다.
                            물론 스포는 절대 금지!
                            <br></br>
                            <br></br>
                            *추천사 이어서...
                            <br></br>
                            <br></br>
                            본격 미스터리와 ‘광차 문제’의 결합이 이렇게
                            무시무시한 지옥을 낳을 줄이야.
                            <br></br>
                            _센가이 아키유키(평론가)
                            <br></br>
                            <br></br>
                            절망적인 범인 찾기. 찾지 못하면 죽음. 찾아도 지옥.
                            압도적인 폐쇄감이 넘치는 리얼
                            <br></br>
                            데스 게임 개막! _니타도리 케이
                            <br></br>
                            <br></br>
                            ‘범인’에게 속았다! 추리소설을 처음으로 읽었을 때의
                            감동이 되살아났다.
                            <br></br>
                            _마시타 미코토
                            <br></br>
                            <br></br>
                            멋진 반전에 심장을 꽉 붙들린 것만 같다. _요코제키
                            다이
                            <br></br>
                            <br></br>
                            *평론가 외 전부 작가.
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
                              9791189571894 ( 1189571897 )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text">2023년 02월 20일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">356쪽</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">
                              138 * 197 * 21 mm / 521 g
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">총권수</p>
                            <p className="info-item-text">1권</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">원서명/저자명</p>
                            <p className="info-item-text">方舟/夕木春央</p>
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
                      <span className="val">14,850</span>
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

export default BookDetailPage_bangju;
