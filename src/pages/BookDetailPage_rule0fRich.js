import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bestSellerBook2.jpg";
import bookDetailImg from "../images/i9791197389450.jpg";

function BookDetailPage_ruleOfRich() {
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
                    사이토 히토리의 1퍼센트 부자의 법칙
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">사이토 히토리 저자 · 김진아 번역</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          나비스쿨
                        </Link>
                        2023년 01월 30일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 5위 · 자기계발 3위
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
                        <span className="val">15,300</span>
                        <s className="val-origin">17,000</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">850p</div>
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
                      전대미문의 부자 사이토 히토리의 최고 베스트셀러!
                      <br></br>
                      중고 서점에서 고가로 거래되던 전설의 절판 도서, 드디어
                      재출간!
                      <br></br>
                      읽는 이의 삶을 바꾸는 놀라운 책<br></br>
                      펼치자마자 단숨에 읽게 되는 유쾌한 책<br></br>
                      당신을 행복한 부자로 만들어 줄 절대 성공의 법칙
                    </div>
                    <div className="info-text">
                      사이토 히토리는 매우 독특한 인물이다. 누적 납세액 1위라는
                      전대미문의 기록으로 일본 최고 부자의 자리에 올랐지만,
                      자신의 얼굴을 단 한 번도 공개한 적이 없다. 주식이나
                      부동산에 손대지 않고, 오직 스스로의 아이디어로 그 많은
                      돈을 벌어들인 그는 행복한 부자로 더욱 이름이 높다. 그
                      비법을 오롯이 담고도 그동안 절판되어 많은 애독자를
                      안타깝게 했던 책, “사이토 히토리의 1퍼센트 부자의 법칙”이
                      드디어 재출간되었다.
                      <br></br>
                      <br></br>
                      잃어버린 30년’으로 불리는 일본의 장기 불황 속에서도
                      끄떡없이 돈을 벌어 온 사이토 히토리. 그가 전하는 다섯 가지
                      법칙으로 이제 당신도 진정한 부자가 될 수 있다. 사이토
                      히토리의 인생 법칙은 쉽고, 별나고, 재미있다. 그에게는 열
                      명의 제자가 있는데, 이 다섯 가지 법칙을 배워 다들 행복한
                      부자가 되었다. 한번 익히면 평생 쓸모 있는 놀라운 법칙을
                      지금 만나 보자.
                      <br></br>
                      <br></br>
                      [수상 내역 및 미디어 추천 분류]
                      <br></br>
                      누적 조회수 5천만, 25만 구독자, 실버 버튼 유튜버 책추남TV
                      강력 추천 도서
                      <br></br>책 추천해 주는 남자, 책추남TV 좋은 책 살리기
                      프로젝트 도서
                    </div>
                  </div>
                </div>
                <div className="prod-detail-area product-trailer">
                  <div className="title-wrap title-size-md">
                    <h2 className="title-heading">북 트레일러</h2>
                  </div>
                  <div className="video-wrap" id="detail-video1">
                    <iframe
                      src="https://www.youtube.com/embed/QUHk-X5KMoo?enablejsapi=1"
                      title="[드디어 재출간] 중고 서점에서 고가로 거래되던 전설의 절판 도서, 드디어 재출간!ㅣ1퍼센트 부자의 법칙 ㅣ나비스쿨"
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
                        <span class="text">사이토 히토리</span>
                      </h3>
                    </div>
                    <div class="writer-info-box">
                      <div class="auto-overflow-wrap overflow">
                        <div class="auto-overflow-contents">
                          <div class="auto-overflow-inner">
                            <p class="info-text">
                              일본에서 가장 행복한 부자. 최종 학력은 중학교
                              졸업. 2005년 개인정보보호법이 시행되기 이전까지
                              일본 국세청이 발표한 고액납세자 순위에 12년 연속
                              이름을 올렸다. 2002년에는 2위, 1997년과 2003년에는
                              1위를 기록했으며, 그동안 낸 세금만 수천억 원에
                              달한다. 화장품과 건강식품 판매 회사인 긴자마루칸의
                              창업자로, ‘괜찮아, 분명 다 잘될 거야!’, ‘이상한
                              사람이 쓴 성공 법칙’, ‘부자의 인간관계’, ‘철들지
                              않은 인생이 즐겁다’ 등 여러 책을 써냈다. 언론에 한
                              번도 모습을 드러낸 적 없는 괴짜 부자로도 이름이
                              높다.
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
                            1장_일천 번의 법칙<br></br>
                            <br></br>
                            사이토 히토리는 말합니다. 세상은 참 단순하다고.
                            <br></br>이 단순한 세상에서 멋지게 살아가려면 무엇이
                            필요할까요?<br></br>
                            1퍼센트 부자가 되기 위한 사이토 히토리의 핵심
                            법칙들.<br></br>
                            <br></br>
                            단순한 세상 / 행복을 향한 첫걸음 / 미소의 위력 /
                            성공의 비결<br></br>
                            자존감의 힘 / 고액 납세자 / 혼자만의 세상 / 마음의
                            크기<br></br>
                            깨끗한 물과 혼탁한 물 / 깨끗한 물을 붓고 싶다면
                            <br></br>
                            걱정 본능 / 말을 꺼내야 할 때 / 뇌의 작용 / 진정한
                            행복<br></br>
                            말과 행동 / 난 참 풍족해 / 마치 소원이 이루어진
                            것처럼<br></br>
                            말로 표현하는 행복 / 일천 번의 법칙 / 저항의 크기
                            <br></br>컵 안의 물 / 노력하지 마세요 / 노력과
                            성공의 관계<br></br>
                            잘못된 노력 / 노력의 부작용 / 말의 강력한 힘
                            <br></br>
                            우주의 법칙 / 쓸모없는 고생담 / 실패는 작은 성공
                            <br></br>
                            법칙의 예외 / 공부와 운동 / 즐거운 아이디어<br></br>
                            <br></br>
                            2장_운의 법칙<br></br>
                            <br></br>
                            좋은 운을 불러오기 위해 과연 무엇을 해야 할까요?
                            <br></br>
                            그저 몇 가지 말을 소리 내어 하는 것만으로
                            충분합니다.<br></br>
                            행복한 부자가 되기 위한 사이토 히토리의 필수 법칙들.
                            <br></br>
                            <br></br>
                            신이 준 선물 / 미래는 항상 멋지다 / 힘들게 시작하면
                            <br></br>
                            버블을 부풀린 두려움 / 운이 좋아지려면 / 운의 파동
                            <br></br>
                            도약의 기회 / 영혼의 수준이 한 단계 올라갈 때
                            <br></br>
                            부부의 숙명 / 200세까지 건강하게 / 조금 큰 목소리
                            <br></br>
                            자연스럽게 적극적인 사람이 되는 법 / 암을 고치는 말
                            <br></br>
                            어울리지 않는 일 / 분홍색 옷과 가난 / 말의 파동
                            <br></br>
                            말이 바뀌면 행동도 바뀐다 / 마음은 곧 따라온다
                            <br></br>
                            즐기면서 하는 공부 / 번뜩이는 아이디어<br></br>
                            미움을 받게 되면 / 운 좋은 사람 / 도쿄대 졸업생
                            <br></br>
                            책과 텔레비전 / 지금이 절호의 기회<br></br>
                            <br></br>
                            3장_균형의 법칙<br></br>
                            <br></br>
                            우리는 처음부터 지혜를 갖고 태어납니다.<br></br>그
                            사실을 깨달을 때 풍요로운 삶이 시작되지요.<br></br>
                            지혜로운 부자가 되기 위한 사이토 히토리의 중심
                            법칙들.<br></br>
                            <br></br>
                            쓰임이 다한 지혜 / 지혜를 나누면 / 책을 쓰는 이유
                            <br></br>
                            세무서는 복의 신 / 매우 소중한 세금 / 신나게 세금
                            내기<br></br>
                            우주의 중심 / 이끌림의 법칙 / 아낌없이 나누는 지혜
                            <br></br>
                            옷을 살 땐 밝은 색으로 / 겉모습이 바뀌면 인생도
                            바뀐다<br></br>
                            <br></br>
                            4장_가속의 법칙<br></br>
                            <br></br>
                            어떤 일이 생겨도 화를 낼 필요가 없습니다.<br></br>
                            어차피 다 잘 될 것이기 때문입니다.<br></br>
                            즐거운 부자가 되기 위한 사이토 히토리의 행복 법칙들.
                            <br></br>
                            <br></br>
                            돈을 산더미처럼 버는 간단한 방법 / 목표를 소리 내어
                            말해라<br></br>
                            내게는 좋은 일만 생긴다 / 저축에 작용하는 ‘가속의
                            법칙’<br></br>
                            가속이 붙게 되면 / 최종 목표를 말하지 마라 / 도미노
                            현상<br></br>
                            풍요로움이 눈덩이처럼 / 인생에 관한 거짓말<br></br>
                            일을 놀이처럼 / 배려는 손님에게 / 화내지 않는 이유
                            <br></br>
                            운이 좋아지는 표정 / 부탁이 늘어날 때 / 운세와 부탁
                            <br></br>
                            대답은 힘차게 / 밝은 얼굴의 힘 / 아이의 미래
                            <br></br>
                            영어를 잘하는 사람의 착각 / ‘한심한 사람’이 성공한다
                            <br></br>
                            가난의 파동 / 동정한 후에는 긍정의 말을<br></br>
                            가난의 신 쫓아내기 / 노력하지 말자<br></br>
                            <br></br>
                            5장_78점의 법칙<br></br>
                            <br></br>
                            완벽한 사람은 이 세상에 존재하지 않습니다.<br></br>
                            활짝 웃는 것만으로 결점은 어느새 매력으로 바뀌지요.
                            <br></br>
                            활달한 부자가 되기 위한 사이토 히토리의 성공 법칙들.
                            <br></br>
                            <br></br>
                            인생에 반성은 필요 없다 / 완벽을 강요하면<br></br>
                            아이에겐 칭찬으로 / 최고 점수는 78점 / 개선할 여지
                            22%<br></br>
                            실패하는 즐거움 / 개선의 법칙 / 악마의 속삭임
                            <br></br>
                            인기 있는 여성 / 자신감 있는 태도 / 활달함의 마법
                            <br></br>
                            결점을 매력으로 만드는 비결 / 멋진 남자 / 10년 뒤의
                            나<br></br>
                            괜찮아, 걱정하지 마 / 마음이 편안해지는 순간
                            <br></br>
                            적극적인 사람 / 열심히 일하면 / 시선이 달라질 때
                            <br></br>
                            우렁찬 나팔 소리 / 성공의 파동 / 인기를 얻는 말
                            <br></br>
                            마치 왕자님처럼 / 아내를 위한 배려 / 부모의 마음으로
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
                          말이 바뀌면 행동은 자연스레 따라갑니다. 즉, 말이
                          바뀌면서 행동도 바뀌고, 병이 낫거나 사업도 잘됩니다.
                          처음부터 무리할 필요는 없습니다. 그저 소리 내어
                          말하기만 해도 충분합니다. 그리고 천 번 소리 내어 말한
                          시점부터 자신과 주변의 모든 것이 변하기 시작합니다.
                          <br></br>
                          <br></br>
                          〈말이 바뀌면 행동도 바뀐다〉 중에서 p.85<br></br>
                          <br></br>
                          “돈이 있다면 우리의 소원은 모두 이루어질까요?”
                          <br></br>
                          “돈으로 소원을 이룬 뒤 우리는 완벽하게 행복할까요?”
                          <br></br>
                          안타깝지만 그렇지 않습니다. 사람에겐 돈 말고도 필요한
                          것이 있습니다. 바로 건강한 몸과 풍요로운 마음입니다.
                          돈, 건강한 몸, 풍요로운 마음. 이 세 가지가 조화를 이룰
                          때 우리는 비로소 행복을 얻을 수 있습니다.<br></br>
                          <br></br>
                          〈단순한 세상〉 중에서　p.16<br></br>
                          <br></br>
                          예로부터 ‘천’이라는 숫자에는 신기한 힘이 깃들어 있다고
                          여겨져 왔습니다. 뭐든 좋으니 천 번을 꾸준히 하면
                          반드시 성공하는 법이지요. 일천 번의 법칙도
                          마찬가지입니다. 재미있게도 뭐든 천 번 실행하면 신이
                          힘을 빌려줍니다.<br></br>
                          <br></br>
                          〈일천 번의 법칙〉 중에서 p.41<br></br>
                          <br></br>이 세상에는 ‘우주의 법칙’이 있고, 우주 만물은
                          이 법칙에 따라 움직이고 있다는 뜻입니다. 이 세상에는
                          절대적인 존재가 있습니다. 저는 이 존재를 신이라고
                          부릅니다. 우주의 법칙은 신이 만든 규칙이라, 그에 따라
                          행동하면 누구든 행복해지고, 누구든 성공할 수 있습니다.
                          반대로 우주의 법칙에서 벗어나는 행동을 하면 금세
                          불행이 찾아옵니다.<br></br>
                          <br></br>
                          〈우주의 법칙〉 중에서 p.53<br></br>
                          <br></br>
                          “힘든 일은 일어나지 않는다. 힘든 것처럼 보일지라도
                          사실은 전혀 그렇지 않다.” 이 사실을 깨닫는 자체가 바로
                          신의 선물입니다. 이 선물을 받은 사람은 예외 없이
                          영혼의 수준이 올라갑니다. 그리고 행복의 길을 향해
                          나아가지요. 영혼의 단계는 사람마다 다릅니다. 일어나는
                          문제도 나와 다른 사람이 서로 다르지요. 기억해야 할 건
                          내게 생긴 문제는 영혼의 성장을 위해 신이 내린
                          선물이라는 것입니다.<br></br>
                          <br></br>
                          〈영혼의 수준이 한 단계 올라갈 때〉 p.72<br></br>
                          <br></br>
                          최근 들어 책을 읽는 사람이 적어진 것 같습니다. 어쩌면
                          그런 상황이 큰 기회일지도 모릅니다. 책을 읽지 않는
                          시대에 많은 책을 읽어 두면 머릿속에 좋은 재료가 늘어나
                          다른 이들보다 풍요로운 삶을 누릴 수 있기 때문입니다.
                          모두가 책을 읽는다면 아무리 열심히 독서를 해도 두각을
                          나타내기 어렵습니다. 하지만 책을 읽는 사람이 거의 없을
                          땐 서너 권만 읽어도 금세 표가 납니다.<br></br>
                          <br></br>
                          〈지금이 절호의 기회〉 p.93<br></br>
                          <br></br>
                          우주의 중심에는 거대한 힘이 존재합니다. 인간의 마음은
                          그 중심과 직접 연결되어 있지요. 모든 지혜는 우주의
                          중심에 놓여 있습니다. 만약 모르는 게 있다면 우주의
                          중심에서 그 지혜를 구하면 됩니다. 해결하고 싶은 문제가
                          있을 때도 마찬가지입니다. 갑자기 어떤 아이디어가
                          떠오른다면, 그것 또한 우주의 중심에서 전해져 온
                          것입니다.<br></br>
                          <br></br>
                          〈우주의 중심〉 중에서 p. 105 ~ 106<br></br>
                          <br></br>
                          대부분의 사람들은 일을 할 때도, 놀이를 할 때도, 심지어
                          가정에서 머물 때도 너무 진지하게 행동합니다. 지나치게
                          진지하기 때문에 작은 일에도 눈을 부릅뜨며 화를 내는
                          걸지도 모릅니다. 일을 놀이라고 생각해 보세요. 그러면
                          어떤 문제가 발생해도 화를 낼 필요가 없습니다.<br></br>
                          <br></br>
                          〈일을 놀이처럼〉 중에서 p. 126<br></br>
                          <br></br>
                          흔히 사람들은 실수하거나 실패하지 않을까 하는 불안감
                          때문에 작은 일에도 눈을 부릅뜨고 화를 냅니다. 하지만
                          절대 실패하지 않는다고, 반드시 일이 잘 풀릴 거라고
                          생각하면 화를 내고 싶은 마음이 들지 않습니다.<br></br>
                          <br></br>
                          〈화내지 않는 이유〉 p. 127 ~ 128<br></br>
                          <br></br>
                          저는 언제나 싱글싱글 웃고 다닙니다. 이런 인상으로
                          지내면　제3의 눈이 활짝 열리기 때문에 멋진 아이디어가
                          끊임없이 떠오릅니다. 입이 옆으로 활짝 벌어져서 양쪽
                          입가가 위로 올라간 인상 또한 운세를 좋게 해 주는
                          효과가 있습니다.<br></br>
                          <br></br>
                          〈운이 좋아지는 표정〉 중에서 p. 128 ~ 129
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
                          실버 버튼 유튜버, 책추남TV 강력 추천 도서 드디어
                          재출간!<br></br>
                          돈과 행복이 ‘눈사태처럼’ 몰려오는 사이토 히토리의 지혜
                          모음집<br></br>
                          <br></br>
                          사이토 히토리는 매스컴에 한 번도 모습을 드러낸 적 없는
                          신비한 인물이다. 그는 상식을 뛰어넘는 독특한 방식으로
                          별난 성공을 이루었다. 그에게는 열 명의 제자가 있는데,
                          다들 그의 가르침을 받아 행복한 부자가 되었다.<br></br>
                          사이토 히토리에겐 평생 변함없는 인생의 지혜가 있는데,
                          세상은 단순하며 그 안에는 우주를 관통하는 다섯 가지
                          법칙이 있다는 것이다. 이 법칙을 따르면 누구나 부자가
                          될 수 있다는 것이 지혜의 핵심이다.<br></br>
                          그가 알려주는 다섯 가지 법칙은 매우 쉽다. 그리고
                          유쾌하다. 이 책에는 사이토 히토리가 중요하게 여기는
                          인생의 지혜가 담뿍 담겨 있다. 단순하지만 명료한 이 한
                          권으로 우리는 평생 지켜갈 부의 원칙을 깨달을 수 있다.
                          <br></br>
                          <br></br>
                          “열 명의 제자에게 가르쳐준 것도 별반 다르지 않습니다.
                          <br></br>
                          저는 사업하는 방법이 아니라, 즐겁게 사는 법을
                          알려주었습니다.<br></br>
                          물론 그들도 제 주장을 금세 이해하진 못했습니다.
                          <br></br>
                          하지만 ‘즐거운 생활’을 시작하자마자 회사의 분위기가
                          달라졌습니다.<br></br>
                          돈이 굴러 들어오기 시작한 것입니다.<br></br>
                          제게 성공의 비결을 묻는다면, 이렇게 대답할 것입니다.
                          <br></br>
                          ‘즐거운 생활’을 하기 위한 방법을 항상 진지하게
                          고민했다고요.”<br></br>
                          <br></br>
                          일천 번의 법칙, 운의 법칙, 균형의 법칙, 가속의 법칙,
                          78점의 법칙으로 다섯 가지 법칙을 요약할 수 있다. 이
                          법칙을 말하며, 그는 너털웃음을 터트리듯 유쾌한 말투로
                          이야기를 풀어 나간다. 버스 옆자리에 우연히 앉은 별난
                          할아버지의 당부처럼, 평소에 우리가 생각하지 못했던
                          인생의 구석구석을 눈앞에 펼치듯 시원하게 보여준다.
                          <br></br>
                          절판된 이 책을 다시 내기까지 여러 차례 고비가 있었다.
                          그리고 운명처럼 재출간이 결정되었을 때, 가장 먼저
                          떠오른 건 긴 시간 기다려 준 많은 애독자 분들이었다.
                          <br></br>
                          수많은 이들이 이 책을 기다린 건, 무엇보다 사이토
                          히토리의 이야기가 쉽고 단순하기 때문일 것이다. 그는
                          어려운 말로 분위기를 잡지 않는다. 누구나 실천 가능한
                          실용적인 말들로 가득 차 있기에, 이 책이 최고의
                          베스트셀러로 자리 잡을 수 있었다.<br></br>
                          오랜 기다림이 결실을 맺어, “사이토 히토리의 1퍼센트
                          부자의 법칙”이 한국의 독자들을 다시 찾아왔다. 모두의
                          고민이 깊어가는 요즘, 큰마음으로 건네는 사이토
                          히토리의 희망찬 메시지에 귀를 기울여 보자.
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
                            9791197389450 ( 1197389458 )
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">발행(출시)일자</p>
                          <p className="info-item-text">2023년 01월 30일</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">쪽수</p>
                          <p className="info-item-text">176쪽</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">크기</p>
                          <p className="info-item-text">
                            140 * 200 * 17 mm / 352 g
                          </p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">총권수</p>
                          <p className="info-item-text">1권</p>
                        </li>
                        <li className="basic-info-item">
                          <p className="info-item-title">원서명/저자명</p>
                          <p className="info-item-text">
                            齋藤一人の絶對成功する千回の法則 普及版/齋藤一人
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
                    <span class="val">15,300</span>
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

export default BookDetailPage_ruleOfRich;
