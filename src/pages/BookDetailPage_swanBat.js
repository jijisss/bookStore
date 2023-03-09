import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bookOfWeek2.jpg";

function BookDetail_swanBat() {
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
                  <div className="prod-title-box">백조와 박쥐</div>
                  <div className="prod-desc-area">
                    <p>히가시노 게이고 장편소설</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">히가시노 게이고 저자 · 양윤옥 번역</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          현대문학
                        </Link>
                        2021년 08월 16일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">소설 286위</span>
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
                              미디어 추천도서 > 주요일간지소개도서 > 경향신문 >
                              2021년 8월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 동아일보 >
                              2021년 8월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 매일경제 >
                              2021년 8월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 문화일보 >
                              2021년 8월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 서울신문 >
                              2021년 9월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 서울신문 >
                              2021년 9월 5주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 조선일보 >
                              2021년 8월 4주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 조선일보 >
                              2021년 10월 3주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 역대 교보문고 베스트셀러 >
                              2021년 > 2021년 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      ‘죄와 벌의 문제는 누가 재단할 수 있는가’
                      <br></br> <br></br>
                      히가시노 게이고 작가 데뷔 35주년 기념작품
                      <br></br>
                    </div>
                    <div className="info-text">
                      “앞으로의 목표는 이 작품을 뛰어넘는 것입니다.”
                      <br></br>
                      히가시노 게이고
                      <br></br>
                      <br></br>
                      “다른 어떤 작품보다 번역의 보람을 진하게 느꼈다.
                      <br></br>
                      의미 있는 독서를 원하는 모든 이들에게 강력하게 추천하고자
                      한다.”
                      <br></br>
                      옮긴이 양윤옥
                      <br></br>
                      <br></br>■ 이 책은
                      <br></br>전 세계 누적 판매 1300만 부 베스트셀러 『나미야
                      잡화점의 기적』 작가이자, 현존하는 일본 추리소설계 최고의
                      거장으로 손꼽히는 히가시노 게이고의 장편소설 『백조와
                      박쥐』가 현대문학에서 출간되었다. 데뷔 35주년을 맞아
                      2021년 4월에 발표한 이 소설은 한국어판 기준 총 568쪽,
                      원고지 2천 매가 넘는 대작으로, 2007년부터 15년 가까이
                      히가시노의 주요 작품들을 우리말로 옮겨온 일본 문학 전문
                      번역가 양윤옥이 번역을 맡았다.
                      <br></br>
                      히가시노는 1985년, 추리 작가들의 등용문이라 불리는
                      에도가와란포상을 수상하면서 작가 생활을 시작한 이래 그
                      누구보다 왕성하게 창작을 이어왔다. 다채로운 소재와
                      주제들에 관심을 가지면서 기발한 트릭과 반전이 빛나는 본격
                      추리소설부터 이과적 상상력을 가미한 SF, 판타지, 의학
                      미스터리에 이르기까지 하나의 장르에 머무르지 않는,
                      그야말로 스펙트럼 넓은 세계를 선보였다. 그중에서도 그에게
                      오늘의 명성을 안겨준 것은 단연 우리 시대의 병폐와
                      복잡다단한 인간 본성 그리고 범죄의 심리를 날카롭게
                      파고드는 ‘사회파 추리소설’ 계열의 작품들이라 할 수 있다.
                      35주년 기념작 『백조와 박쥐』는 히가시노가 이러한 자신의
                      추리소설 본령으로 돌아가서 더욱 원숙해진 기량으로 써낸
                      새로운 대표작이라는 찬사를 받고 있다.
                      <br></br>
                      두툼한 분량에도 하루 이틀 만에 독파했다는 현지 독자들의
                      앞선 리뷰가 증명하듯이, 소설은 33년의 시간차를 두고 일어난
                      두 개의 살인 사건과, 이에 얽히는 인물들이 저마다 진실을
                      좇아가는 장대한 이야기를 탄탄한 틀 안에서 흡인력 있게
                      풀어낸다. 나아가 공소시효 폐지의 소급 적용 문제, 형사재판
                      피해자 참여제도, SNS 시대에 더욱 논란이 되는 범죄자와 그
                      가족에 대한 신상 털기나, 공판 절차의 허점 등 굵직한 사회적
                      논의들을 아우르면서도 추리소설 본연의 재미를 잃지 않으며
                      차곡차곡 서사를 쌓아나가 놀라운 결말에 다다르는 데는
                      거장의 노련함이 물씬 느껴진다. 그리고 무엇보다 그 기저에는
                      인간에 대한 따뜻한 시선을 견지해온 작가가 전하는, 사람들이
                      살아가는 가슴 뭉클한 드라마가 녹아 있다.
                      <br></br>
                      <br></br>■ “전부 내가 했습니다, 그 모든 사건의 범인은
                      나예요” - 도서 줄거리 소개
                      <br></br>
                      도쿄 해안 도로변에 불법 주차된 차 안에서 흉기에 찔린
                      사체가 발견된다. 피해자는 정의로운 국선 변호인으로 명망이
                      높던 변호사 시라이시 겐스케. 주위 인물 모두가 그
                      변호사에게 원한을 품는 사람은 있을 수 없다고 증언하면서
                      수사는 난항이 예상되지만, 갑작스럽게 한 남자가 자백하며
                      사건은 해결된다. 남자는 이어 33년 전 사회를 떠들썩하게
                      했던 ‘금융업자 살해 사건’의 진범이 바로 자신이라고 밝히며
                      경찰을 충격에 빠뜨린다. 이미 공소시효가 만료된 그 사건
                      당시 체포되었던 용의자는 결백을 증명하고자 오래전
                      유치장에서 자살로 생을 마감한 후였다.
                      <br></br>
                      <br></br>
                      1984년, 용의자의 죽음으로 종결됐던 살인 사건이
                      <br></br>
                      2017년, 한 남자의 자백으로 뿌리부터 뒤흔들린다 30여 년에
                      걸친 미스터리를 추적하는, 히가시노 게이고판 『죄와 벌』!
                      <br></br>
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
                          <span className="text">히가시노 게이고</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div class="writer-profile">
                          <img
                            data-kbbfn="s3-image"
                            loading="lazy"
                            alt="히가시노 게이고"
                            src="https://contents.kyobobook.co.kr/dtl/author/2000110201.jpg"
                            data-src="https://contents.kyobobook.co.kr/dtl/author/2000110201.jpg"
                          />
                        </div>
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                東野圭吾
                                <br></br>
                                일본 추리소설계를 대표하는 최고의 베스트셀러
                                작가. 대학에서 전기공학을 전공하고 엔지니어로
                                일하다가 1985년 『방과 후』로 제31회
                                에도가와란포상을 수상하면서 전업 작가의 길로
                                들어섰다. 초기에는 주로 수수께끼 풀이형
                                추리소설을 썼고, 차츰 인간과 사회 문제에 관심을
                                가지면서 이에 중점을 둔 사회파 추리소설들을
                                선보이기 시작했다. 이후, 이과적 지식을 바탕으로
                                기발한 트릭과 반전이 빛나는 본격 추리소설부터
                                서스펜스, 판타지에 이르기까지 미스터리의 외연을
                                넓히는 다양한 시각과 재료로 폭넓은 장르의
                                작품들을 꾸준히 발표했다. 대표작으로
                                『비밀』(제52회 일본추리작가협회상) 『용의자 X의
                                헌신』(제134회 나오키상, 제6회 본격미스터리
                                대상) 『나미야 잡화점의 기적』(제7회
                                주오코론문예상) 『몽환화』(제26회
                                시바타렌자부로상) 『기도의 막이 내릴 때』(제48회
                                요시카와에이지문학상) 『그대 눈동자에 건배』
                                『위험한 비너스』 『백야행』 『유성의 인연』
                                〈가가 형사 시리즈〉 〈라플라스 시리즈〉
                                〈매스커레이드 시리즈〉 외 다수가 있다.
                                <br></br>
                                2021년 작가 생활 35주년을 기념하여 선보인
                                『백조와 박쥐』는 용의자의 죽음으로 종결된 과거
                                사건이 30여 년에 걸쳐 일으킨 비극을 밀도 있게
                                추적해가는 가운데 휴머니즘적인 시선으로 죄와
                                벌에 대해 묻는 소설로, 인간이라는 미스터리를
                                푸는 데 천착해온 히가시노 추리 문학의 집대성이라
                                할 만하다.
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
                              이 도서는 목차가 없습니다.
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
                            “구라키 씨가 뭔 사고라도 쳤어?”
                            <br></br>
                            “그건 아직……. 알아보려고 여기저기 얘기를 듣고 다니는
                            중이죠. 여기도 그렇고.”
                            <br></br>
                            “그러셔? 어떤 수사인지는 모르겠는데 구라키 씨를
                            의심하는 거라면 잘못 짚으셨어. 그 사람이 나쁜 짓을
                            할 리가 없거든.” 요코는 딱 잘라 말했다.
                            <br></br>
                            참고하겠습니다, 라고 대답하면서 고다이는 기묘한
                            느낌이 들었다. 방금 요코가 한 말에서 뭔가 걸리는 게
                            감지되었던 것이다. 그게 무엇인지는 자신도 알 수
                            없었다. _58쪽
                            <br></br>
                            <br></br>
                            미궁에 빠진다…….
                            <br></br>
                            구라키의 자백은 수많은 의문을 풀어주는 것이었다.
                            하지만 한 가지, 큰 수수께끼가 남아 있었다.
                            <br></br>
                            어째서 구라키는 33년 전에 체포되지 않았는가, 어째서
                            용의 선상에서 제외되었는가, 하는 점이었다. 원래는
                            사체 첫 발견자라면 일단 의심부터 하고 보는 것이다.
                            하지만 그 점에 대해서 구라키 본인도 그저 잘
                            모르겠다, 라는 대답을 했을 뿐이다.
                            <br></br>
                            우리는 정말 미궁에 빠지려는 사건을 해결한 것인가.
                            어쩌면 새로운 미궁에 빠져들고 있는 건 아닌가…….
                            <br></br>
                            자꾸만 밀려드는 의심을 고다이는 애써 떨쳐내고
                            있었다. _106쪽
                            <br></br>
                            <br></br>
                            “방금 전에 이번 사건의 유족분들께 사죄드리고 싶다고
                            하셨는데요, 과거 사건의 유족에 대해서는 어떻습니까.
                            역시 사죄할 마음이 있습니까?”
                            <br></br>
                            “그야, 네, 물론입니다.” 반사적으로 대답했다.
                            <br></br>
                            난바라의 입가에 웃음이 번지는 것처럼 보였다. 그
                            순간, 가즈마는 실언을 했다는 것을 깨달았다. 경찰
                            발표에서는 ‘공소시효가 만료된 과거의 사건’이라고
                            했을 뿐, 살인 사건이라고 특정하지는 않았다. 하지만
                            방금 가즈마가 했던 말은 살인 사건이라고 인정한
                            것이나 마찬가지였다. 감쪽같이 유도질문에 걸려든
                            것이다. _175쪽
                            <br></br>
                            <br></br>
                            나도 똑같은 눈빛인지 모른다, 라고 미레이는 생각했다.
                            범인이 자백을 했고 이제 사건의 진상은 다 밝혀졌다고
                            모두들 말한다. 그리고 그 진상을 바탕으로 재판이
                            시작되려 하고 있다. 하지만 그 진상을 도저히
                            받아들이지 못하는 사람이 있다. 그건 이 세상에
                            어머니와 자신뿐이라고 미레이는 생각했었다. 그런데
                            그런 사람이 또 있었다. 가해자의 가족도 역시 이 일을
                            받아들이지 못하고 있다…….
                            <br></br>
                            _274쪽
                            <br></br>
                            <br></br>
                            “그래, 맞는 말인데 그 두 사람은 특수한 경우야.
                            공통의 목적이 있었어.”
                            <br></br>
                            “뭔데요, 그게?”
                            <br></br>
                            “둘 다 사건의 진상을 납득하지 못했다는 점이야. 분명
                            또 다른 진실이 있다, 그것을 꼭 밝혀내겠다, 라고
                            마음먹고 있어. 그런데 경찰은 이미 수사는 끝났다는
                            식이고 검찰이나 변호인은 오로지 재판 준비에만
                            골몰했지. 가해자 측과 피해자 측으로 서로 적의
                            입장이지만 오히려 그 둘의 목적이 같았던 거야.
                            그렇다면 한 팀이 되기로 한 것도 실은 이상할 게
                            없어.”
                            <br></br>
                            “그런가요……라기보다 아무래도 선뜻 이해하기는 어렵죠.
                            나는 그 기분, 잘 모르겠던데요.” 나카마치는 두부를
                            입에 넣고 고개를 갸우뚱했다. “빛과 그림자, 낮과 밤,
                            마치 백조와 박쥐가 함께 하늘을 나는 듯한
                            얘기잖아요.” _420~421쪽
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
                            ■ 일본 서점원과 독자들이 보낸 찬사<br></br>
                            ★★★★★ 수많은 히가시노 작품 중에서도 최상위에 오를
                            걸작. 하나하나의 조각이 퍼즐을 채워가듯이 다양한
                            진실이 밝혀진다. 읽기 시작하면 멈출 수 없다.
                            <br></br>
                            ★★★★★ 『백야행』 『용의자 X의 헌신』을 읽을 때의
                            감정이 밀려왔다. ★★★★★ 인간을 묘사하는 시선에서
                            거대한 선함을 느낀다.<br></br>
                            ★★★★★ 오랜만에 묵직한 히가시노 게이고 작품!<br></br>
                            ★★★★★ 연이어 몰아치는 진실과 마지막의 선명한 대반전.
                            시종 가슴이 뭉클해지는 스토리지만 어딘가 맑은
                            순수함을 남긴 채 막을 내린다. 틀림없는 히가시노
                            게이고 최고 걸작이다!<br></br>
                            ★★★★★ 미스터리로서의 매력과, 원죄와 속죄 그리고
                            피해자 및 가해자 가족의 심경 등 어려운 문제를 멋지게
                            융합시켜 엔터테인먼트로 그려내는 솜씨는 가히
                            발군이다.<br></br>
                            ★★★★★ 불관용의 시대에 한 줄기 빛을 비춰주는 영혼을
                            담은 이야기.<br></br>
                            ★★★★★ 이게 바로 내가 기다리던 히가시노 게이고다-
                            ‘왕의 귀환!’
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
                              9791190885928 ( 1190885921 )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text">2021년 08월 16일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">568쪽</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">
                              138 * 196 * 34 mm / 553 g
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">총권수</p>
                            <p className="info-item-text">1권</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">원서명/저자명</p>
                            <p className="info-item-text">
                              白鳥とコウモリ/東野圭吾
                            </p>
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

export default BookDetail_swanBat;
