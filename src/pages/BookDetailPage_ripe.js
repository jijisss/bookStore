import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/popularBook3.jpg";
import BookDetailImage from "../images/i9791192625188.jpg";

function BookDetailPage_ripe() {
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
                    그대 늙어가는 것이 아니라 익어가는 것이다
                  </div>
                  <div className="prod-desc-area">
                    <p>인생 절반을 지나고 깨달은 인생 문장 65</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">오평선 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          포레스트북스
                        </Link>
                        2022년 12월 21일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">
                          국내도서 142위 · 시/에세이 8위
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
                        <span className="val">14,220</span>
                        <s className="val-origin">15,800</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">790p</div>
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
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      “맡겨둔 행복을 찾으러 왔습니다!”
                      <br></br>
                      인생 절반을 지나고 깨달은 인생 문장 65
                      <br></br>
                      ★50만이 감동한 카카오스토리 화제의 글★
                    </div>
                    <div className="info-text">
                      “좋은 아침입니다”라는 상투적인 인사 대신 “행복은 내일을
                      것을 당겨서라도 누려야 한다” “깊이 후회한다는 것은 새로운
                      삶을 산다는 것이다”처럼 마음을 뭉근하게 데우는 응원의 글을
                      받아본 적 있을 것이다. 자신이 받은 감동을 사랑하는
                      사람에게 전하고픈 마음은 민들레 씨처럼 잔잔히 퍼져 무려
                      50만 명이 넘는 이들의 마음속에 작은 꽃을 피워냈다.
                      <br></br>
                      꽃씨의 주인은 바로 작가 오평선. 그가 지난 2016년 펴낸
                      『그대 늙어가는 것이 아니라 익어가는 것이다』 속 알알이
                      여문 문장들은 SNS와 메신저를 통해 중년들 사이에서 활발히
                      공유되었고, 앞만 보며 달려가느라 미처 챙기지 못했던 이들의
                      행복과 삶의 의미를 일깨워주었다. 그리고 마침내 2022년
                      12월, 오평선의 글을 오롯이 느끼고자 하는 수많은 독자들의
                      요청에 힙입어 기존에 사랑받았던 글과, 더욱 풍성하고
                      지혜로운 오평선만의 철학을 담은 새로운 생각이 더해져 총
                      65개의 인생 문장으로 재탄생하게 되었다. 여기에 시간이
                      흐를수록 더 사랑받는 40여 점의 명화와 몽테뉴,
                      아리스토텔레스, 법정 스님 등 인생 선배들이 격언까지 덧붙여
                      더욱 다채롭고 깊이 있는 위로를 전한다.
                      <br></br>
                      지금껏 가족을 위해 행복을 뒤로 미루며 살아온 부모님에게,
                      세상의 기준에 맞추며 사느라 내 삶을 뒤로 미뤘던 나에게 이
                      책을 선물하자. 인생 후반을 따스하게 감싸줄 햇볕 같은
                      문장들이 외롭고 지친 날 다정한 곁을 내어줄 것이다.‘
                      <br></br>
                      <br></br>
                      “해마다 농사가 끝나면 땅이 회복될 수 있도록 봄까지 밭을
                      비운다. 그래야 다시 작물을 풍성히 채울 수 있다. 땅도
                      이렇게 숨 돌릴 시간이 필요할진대 정작 나는 숨을 돌릴
                      시간을 나에게 주었던가.”
                      <br></br>- 「비움을 잘하는 삶이 잘 사는 삶이다」 중에서
                    </div>
                  </div>
                  <div className="prod-detail-area product-trailer">
                    <div className="title-wrap title-size-md">
                      <h2 className="title-heading">북 트레일러</h2>
                    </div>
                    <div className="video-wrap" id="detail-video1">
                      <iframe
                        src="https://www.youtube.com/embed/EdUtr59nxZw?enablejsapi=1"
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
                        Window7의 경우 사운드 연결이 없을 시, 동영상 재생에
                        오류가 발생할 수 있습니다. 이어폰, 스피커 등이 연결되어
                        있는지 확인 하시고 재생하시기 바랍니다.
                      </li>
                    </ul>
                  </div>
                  <div className="prod-detail-area product-person">
                    <div className="title-wrap title-size-md">
                      <h2 className="title-heading">작가정보</h2>
                    </div>
                    <div className="gray-box">
                      <div className="title-wrap title-size-def">
                        <h3 className="title-heading">
                          <span className="title-prefix">저자(글)</span>
                          <span className="text">오평선</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                매일 일상을 기록하는 사람. 쉬는 날에 종종 텃밭
                                농사를 하며 호사를 맛보는 사람. 남은 삶은
                                사랑하는 아내와 아름다운 노을을 함께 걷고 싶은
                                사람. 눈을 감기 전 “잘 살았구나”라는 말을 남기며
                                미소 지으며 떠나고 싶은 사람.
                                <br></br>
                                내로라하는 교육 회사에서 26년간 직장 생활을
                                했다. 다들 그랬듯이 자신보다 가족을 위해, 생계를
                                위해 치열하게 살다 보니 얻은 것도 있었지만 많은
                                것을 놓쳤다. 자의든 타의든 틀 속에 갇혀 사는
                                기분이었다. 오십 후반에 접어들자 세상의 시계가
                                아닌 자신만의 시계에 세상을 맞추며 살아보고
                                싶어졌다. 지켜야 할 것과 놓아줘야 할 것이
                                무엇인지, 남은 인생은 무엇을 해야 행복하고
                                즐거울지 고민한 뒤 퇴직 후 인생 2막을 시작했다.
                                현재 그는 ㈜티앤씨파트너스 진로적성연구원장으로,
                                교육 현장에서 터득한 지혜와 지식을 바탕으로
                                청소년의 진로를 함께 고민하는 컨설턴트를
                                육성하고 있다. 또한, 진로와 리더십을 주제로 전국
                                각지에서 강연을 진행하며, ‘강연 여행자’로서 어느
                                때보다 즐겁게 살아가고 있다.
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
                              들어가는 말. 남은 인생을 어떻게 살아갈 것인가
                              <br></br>
                              <br></br>
                              1장. 이제는 채울 때가 아니라 비워낼 때다<br></br>
                              모서리가 부드러운 나이<br></br>
                              운무가 낀 눈으로 세상을 보고 있다면<br></br>
                              자신이 친 철책을 허물어라<br></br>
                              버려야 할 것, 지켜야 할 것<br></br>
                              이러나저러나 어차피 종착역은 같다<br></br>
                              가끔씩 현실과 결별하여 쉬어보자<br></br>
                              연은 역풍에 가장 높이 난다<br></br>
                              당신만의 해우소가 있는가<br></br>
                              나이 들수록 둔감해져야 한다<br></br>
                              기대치를 낮추면 만족은 저절로 온다<br></br>
                              비움을 잘하는 삶이 잘 사는 삶이다<br></br>
                              그때의 나는 어떻게 기억될 것인가<br></br>
                              풍요롭지 않아도 모자랄 것도 없는 삶<br></br>
                              후회를 지혜롭게 이용하라<br></br>
                              모든 것을 잃어도 본질만 변하지 않는다면<br></br>
                              얻는 것보다 잃는 것이 많아지는 나이<br></br>
                              <br></br>
                              2장. 늙어가는 것이 아니라 익어가는 것이다<br></br>
                              나다운 꽃을 피울 때 가장 아름답다<br></br>
                              늙어가는 게 아니라 익어가는 것이다<br></br>
                              시간을 때우지 않고 채우며 사는 삶<br></br>
                              내리막길에만 보이는 풍경이 있다<br></br>
                              삶이라는 배에 태우고 싶은 선원<br></br>
                              해만 보느라 땅은 보지 못한 해바라기<br></br>
                              일찍 핀 꽃도 봄이고 늦게 핀 꽃도 봄이다<br></br>
                              노화를 막는 가장 좋은 습관<br></br>
                              너의 발걸음을 의심하지 말라<br></br>
                              다음에 필 꽃을 사랑하면 그만이다<br></br>
                              겨울은 멈춤이 아닌 또 다른 시작이다<br></br>
                              어려움의 크기만큼 성장할 수 있다<br></br>
                              사막이 아름다운 건 오아시스가 있기 때문이다
                              <br></br>
                              마디 없이 곧게 자란 어른은 없다<br></br>
                              뭐가 그리 급하다고 빨리만 달리나<br></br>
                              살아가는 이유를 찾는 것이 인생의 전부다<br></br>
                              나의 말을 가장 먼저 듣는 사람은 나다<br></br>
                              나이를 먹을수록 실한 열매가 되어간다<br></br>
                              <br></br>
                              3장. 남을 위해서가 아니라 나를 위해서 살 때다
                              <br></br>
                              남들이 뭐라 하든 행복할 수 있는 이유<br></br>한
                              배를 탔다면 같은 곳을 바라볼 것<br></br>
                              당신이 있기에 내 삶이 아름답다<br></br>
                              자식이 실패하는 것을 두려워 마라<br></br>
                              따뜻한 마음을 쓰면 내 마음이 먼저 녹는다<br></br>
                              같은 나무에서도 다른 색의 꽃이 피듯이<br></br>
                              사랑한다는 말은 이해한다는 말이다<br></br>
                              함께라는 단어에 익숙해지자<br></br>
                              마지막까지 잃지 말아야 할 것<br></br>
                              나이가 들어 SNS를 한다는 것<br></br>
                              이제는 공감대화가 필요하다<br></br>
                              상대의 마음에 흔적을 남긴다는 것<br></br>
                              나를 평생 유치하게 만드는 친구<br></br>
                              빵집에서 추억을 꺼내 먹는다<br></br>
                              마음을 알아주는 친구가 몇이나 되는가<br></br>
                              <br></br>
                              4장. 행복은 아끼는 것이 아니라 누리는 것이다
                              <br></br>
                              행복은 저축하는 것이 아니다<br></br>
                              여섯 번째 돌다리를 건너며<br></br>
                              제대로 봐야 온전히 보인다<br></br>
                              무엇이 귀한지 이제야 알겠다<br></br>
                              행복과 추억도 다 때가 있는 법이다<br></br>
                              애정하는 일을 하고 살았다면<br></br>
                              사랑이 주는 포만감<br></br>
                              누구도 부럽지 않은 부자가 되는 법<br></br>
                              번데기들에게 전하지 못한 응원<br></br>
                              설렘이 있는 사람이 청춘이다<br></br>꼭 필요할 때
                              꺼내 먹어야겠다<br></br>
                              고드름처럼 맑은 시절<br></br>
                              아버지의 취미는 오직 낚시밖에 없었다<br></br>
                              느리게 걸으면 보이는 행복이 있다<br></br>
                              여전히 세상에 필요한 존재라는 감각<br></br>
                              지금이 인생의 전부다<br></br>
                              <br></br>
                              작품 정보
                            </li>
                          </ul>
                        </div>
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
                            “꽃길이 따로 있나, 내 삶이 꽃인 것을!”<br></br>
                            하루 한 번, 비타민처럼 챙겨 읽어야 할 마음에 좋은 책
                            <br></br>
                            <br></br>
                            인생 절반을 지나다 보면 그런 순간이 찾아온다. 뒤를
                            돌아보면 후회가 밀려오고, 앞을 바라보면 까마득해
                            막막하다. 어느덧 머리가 커진 자식은 부모에게 선을
                            긋고, 평생의 동반자라 생각했던 배우자는 말도 마음도
                            잘 통하지 않는다. 얼굴을 아는 사람은 많지만, 마음
                            알아주는 사람은 없는 것 같아 문득 외로움이 치민다.
                            그런 순간, 당신의 삶을 진심으로 이해하고 응원하는
                            존재가 곁에 있다면 어떨까?<br></br>
                            『그대 늙어가는 것이 아니라 익어가는 것이다』는
                            이처럼 이따금 쓸쓸해지는 인생 후반, 당신에게 다정한
                            곁을 내어줄 따스한 위로이자, 응원 그리고 행복한 인생
                            2막을 열어줄 지혜가 가득 담긴 책이다. 마치 영양제를
                            먹듯 이 책을 머리맡에 두고 하루 한 번 읽어보자. 어떤
                            페이지를 펼쳐도 상관없다. 펼친 페이지에 그림이
                            있다면 그 그림만 가만히 들여다봐도 좋다. 그저 하루에
                            한순간이라도, 당신을 위해 마련된 이 따스한 선물에
                            눈길과 손길을 줄 여유를 갖길 바란다. 그런 시간이
                            동력이 되어, 내 삶을 더 나답게 아끼고 곱게 가꿔낼 수
                            있을 것이다. 꽃길을 걷길 바라는 마음을 넘어, 당신의
                            삶 자체가 꽃임을 느끼길 바라며.<br></br>
                            <br></br>
                            “눈 속에 피는 매화는 봄의 시작을 알리고 오뉴월에
                            피는 철쭉은 봄의 끝을 알린다고 한다. 일찍 핀 꽃도
                            봄이고, 늦게 핀 꽃도 봄이다. 인간도 그렇다. 일찍
                            피든 늦게 피든 그 계절은 온전히 당신이다.”<br></br>-
                            「일찍 핀 꽃도 봄이고, 늦게 핀 꽃도 봄이다」 중에서
                            <br></br>
                            <br></br>
                            <br></br>
                            “남을 위해서가 아니라, 이제는 나를 위해서 살 때다”
                            <br></br>
                            지금껏 앞만 보며 달린 당신에게 늦지 않게 전하고 싶은
                            말<br></br>
                            <br></br>
                            쳇바퀴처럼 돌아가는 인생을 멈추는 데는 용기가
                            필요하다. 오십 후반, 저자는 스스로 그 쳇바퀴에서
                            내려왔다. 내로라하는 교육 회사에서 26년간 직장
                            생활을 한 그는 다들 그랬듯이 자신보다 가족을 위해
                            치열하게 살았다. 그러다 어느 순간 세상의 기준이 아닌
                            나의 기준을 세워 살아보고 싶다는 생각을 했다. 지켜야
                            할 것과 놓아줘야 할 것이 무엇인지, 남은 인생은
                            무엇을 해야 행복하고 즐거울지 고민하며 하루하루를
                            기록하기 시작했다. 마치 숙제를 하듯이, 일상에서
                            순간순간 깨달은 것들을 정리해 SNS에서 올렸다. 그렇게
                            15년 가까이 차곡차곡 쌓은 글은 2000개에 다다랐고
                            그의 글에 공감하는 이들 역시 점점 늘어났다.<br></br>
                            “모든 것을 쥐려 하면 정작 중요한 것을 붙잡을 힘을
                            잃는다”, “행복은 내일의 것을 당겨서라도 누려야
                            한다”, “나이가 들수록 모서리가 부드러워야 한다”,
                            “깊이 후회한다는 것은 새로운 삶을 산다는 것이다”. 이
                            책에 담긴 이야기는 인생 2막을 맞이한 한 중년이
                            치열하게 고민해 얻은 지혜이자, 그 시간 동안 자신에게
                            전하고 싶었던 위로이다. 그렇기에 그의 글에는 때론
                            투박하지만 진솔하고, 쉽게 읽히면서도 농익어 있다.
                            그의 글이 그 시간을 지나는 중년들에게 짙은 공감을
                            얻고 수없이 회자되는 이유이기도 하다.<br></br>
                            <br></br>
                            “중요한 것은 시들지 않는 마음입니다”<br></br>
                            지혜롭고 우아한 인생 2막을 위한 10가지 마음<br></br>
                            <br></br>
                            사람들은 흔히 든든한 노후를 책임지는 것은 ‘돈’과
                            ‘건강’이라고 한다. 그러나 이 두 가지만큼이나 중요한
                            것이 바로 단단한 마음이다. 몽테뉴가 “늙은이는
                            얼굴보다 마음에 더 많은 주름이 있다”라고 말했듯이,
                            나이가 들수록 우아하고 여유로워 보이는 사람과
                            무기력과 회의감에 빠진 사람의 차이는 바로 마음가짐에
                            있다. 아무리 돈이 많고 건강하다 해도 삶을 누릴 줄
                            모르는 사람에게 긴 인생은 재앙과도 같다. 이 책에
                            담긴 지혜와 위로가 우리의 인생을 늙어가는 것이
                            아니라 향기롭게 익어가도록 도울 것이다.<br></br>
                            <br></br> 행복은 저축하는 것이 아니다. 아끼지 말고
                            그때그때 누리자.<br></br> 자식의 실패를 두려워하지
                            말자. 실패는 삶을 소모하는 것이 아니라 삶을 단단하게
                            만드는 과정이다.<br></br> 두려움과 불안이 아니라
                            설렘과 즐거움으로 가슴 뛰는 일을 찾자.<br></br>
                            내가 틀릴 수도 있다. 아는 길도 물어가는 겸손과
                            바쁠수록 돌아가는 여유를 갖자.<br></br>
                            이기적일지라도 내가 전부고 즉흥적일지라도 지금이
                            전부라고 생각하자.<br></br> 내 자식을 남의 집 자식
                            대하듯 관대하고 독립적으로 대하라.<br></br> 일찍 핀
                            꽃도 봄이고, 늦게 핀 꽃도 봄이다. 나이에 얽매이지
                            말자.<br></br> 내가 살아가는 이유를 찾는 것이
                            어쩌면 내 인생의 전부다.<br></br> 긍정적으로
                            말하자. 내가 밖으로 내보낸 말을 가장 먼저 듣는 것은
                            바로 자신이다.<br></br> 배우자가 좋아하는 일을 찾기
                            전에 싫어하는 짓부터 하지 말자.
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
                              9791192625188 ( 1192625188 )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text">2022년 12월 21일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">216쪽</p>
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
                      <span className="val">14,220</span>
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

export default BookDetailPage_ripe;
