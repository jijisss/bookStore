import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/popularBook1.jpg";
import BookDetailImage from "../images/i9791187033882.jpg";

function BookDetailPage_mangeul() {
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
                    망그러진 만화(벚꽃 에디션)
                  </div>
                  <div className="prod-desc-area">
                    <p>망그러진 곰과 햄터의 귀염뽀짝 일상다반사!</p>
                  </div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">유랑 글/그림</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          좋은생각
                        </Link>
                        2022년 11월 01일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">시/에세이 57위</span>
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
                        <span className="val">15,120</span>
                        <s className="val-origin">16,800</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">840p</div>
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
                          테마에세이
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          그림에세이
                        </Link>
                      </li>
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
                      카카오 이모티콘 다운로드 1위 인기 캐릭터
                      <br></br>
                      ‘망그러진 곰’과 ‘망그러진 햄터’의 봄 기념 벚꽃 에디션
                    </div>
                    <div className="info-text">
                      “항상 기억하기! 인생의 주인공은 바로 당신이란 걸!”
                      <br></br>
                      <br></br>
                      출간되자마자 많은 독자에게 큰 사랑을 받은 〈망그러진
                      만화〉가 봄을 맞아 새로운 표지로 돌아왔다! ‘이모티콘
                      캐릭터 장인’ 유랑 작가가 완벽하지 않은 상태에 대한
                      두려움을 줄여보고자 일부러 힘을 빼고 그리기 시작한 웹툰
                      ‘망그러진 만화’는 ‘꼭 내 얘기 같다’ ‘나도 이렇게 살고
                      싶다’ 등 엄청난 공감을 받으며 SNS 팔로워 수 약 14만 명,
                      카카오 이모티콘 다운로드 수 1위를 기록하며 인기를 얻었다.
                      <br></br>
                      이번 벚꽃 에디션은 흩날리는 벚꽃 나무 아래에 두 주인공은
                      물론, 깨알 조연인 다람쥐와 토끼까지 등장한다. 망그러진
                      친구들과 함께 봄 소풍 가는 기분이 드는 이 책으로 봄 기운을
                      만끽해 보면 어떨까?
                      <br></br>
                      <br></br>
                      “봄에는 더 신나게, 더 귀엽게, 마음껏 망그러지자!”
                      <br></br>
                      <br></br>
                      삐뚤빼뚤한 선 때문에 다른 곰들에게 ‘망그러진 것 같다’며
                      놀림 받지만, 우울한 기분은 좋은 친구와 맛있는 음식, 귀여운
                      고양이로 훌훌 털어 버릴 줄 아는 멋진 곰! 일상을 자연스럽고
                      즐겁게 보낼 줄 아는 ‘망그러진 곰’과 친구들은 우리에게 있는
                      그대로의 행복해지는 법을 알려 준다.
                      <br></br>
                      <br></br>
                      몸은 크지만 여린 마음을 가진 ‘망그러진 곰(일명 망글곰)’과
                      조그맣지만 대담하고 엉뚱한 매력의 ‘망그러진
                      햄터(망글햄터)’는 피지컬의 차이만큼이나 성격은
                      정반대이지만, 오히려 그래서 함께 있으면 더 즐거운 찰떡같은
                      케미를 자랑한다.
                      <br></br>
                      <br></br>
                      ‘완벽하지 않으면 좀 어때!’라고 외치며 유쾌한 일상을 보내는
                      이들의 모습은, 삭막한 현실 속에서 늘 긴장하며 살아가는
                      우리에게 소소한 웃음과 따뜻한 위로를 건넨다. 치열하게
                      경쟁하며 살고 있는 자신에게 가끔은 이런 말을 건네 보자!
                      <br></br>
                      <br></br>
                      “완벽하기만 하면 무슨 재미가 있나.
                      <br></br>
                      가끔은 망그러져야 인생이지~”
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
                          <span className="text">유랑</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                이모티콘도 그리고, 만화도 그리고, 그리고 싶은 걸
                                마음 내키는 대로 자유롭게 그리며 사는 작가.
                                떼려야 뗄 수 없는 존재가 되어 버린 캐릭터
                                ‘망그러진 곰’, ‘망그러진 햄터’로 다양한 콘텐츠와
                                굿즈를 만들고 있다.
                                <br></br>
                                @yurang_official
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
                              프롤로그
                              <br></br>
                              <br></br>
                              망그러진 곰 / 망그러진 곰을 마주쳤습니다<br></br>
                              어른이 된다는 것 ① / 어른이 된다는 것 ②<br></br>K
                              - 엄마 ① / K - 엄마 ②/ K - 엄마 ③<br></br>
                              안아 주세요 / 인류의 희망/ 좋아하는 마음/ 운동 /
                              샤워 / 결심 / 거기 / 온라인 vs 현실<br></br>
                              해바라기 씨앗 / 더 빨리 / 곰 조심 / 요즘 11살 /
                              10만 팔로워 / 고양이 구름 / 꺼내 줘요<br></br>
                              관종 / 핼러윈 데이 / 이해하면 무서운 이야기 /
                              프로필 사진 / 크리스마스 선물 포장하는 법<br></br>
                              프로필 사진 / 손난로 / 폭주족 / 변기가 너무 차가울
                              때 꿀팁 / 붕어빵 / 따뜻한 곳<br></br>K - 부모님 /
                              숨바꼭질 / 햄스터 빵집 / 겨울방학 ① / 거울방학 ②
                              <br></br>
                              상술 ① / 상술 ② / 쳇바퀴 같은 일상 / 테이크아웃 /
                              봄옷 쇼핑 / 혼자 있고 싶을 때<br></br>
                              닮은꼴 / 여행 / 애인 있는지 묻는 방법 / 편의점
                              알바생 / 김 부스러기<br></br>
                              곰은 사람을 찢어 / 당근마켓/ 곰을 만났을 때 대처법
                              / 힘이 센 이유<br></br>
                              반항/ 멘탈 관리법/ 할머니 / 친구 / 신입사원 /
                              복면가왕<br></br>
                              부모의 마음 / 우울 / 키 크면 좋은 점 / 망그러진 곰
                              무의식 테스트<br></br>
                              헬스 / 타임머신 / 취준생 / 지구 멸망 / 귀신 / 틱톡
                              / 다이어트 ① / 다이어트 ②<br></br>
                              건강해지는 법 / 건강해지는 법 비하인드 스토리 /
                              10명 중 1명<br></br>
                              엄마 / 여름휴가 / 지방인 특 / N의 망상 / 자리 비움
                              <br></br>
                              2025년 / 너의 한마디 / 커다란 박스 / 바로 나 /
                              택배 왔어요
                              <br></br>
                              <br></br>
                              에필로그
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
                            “삐뚤빼뚤 망그러졌지만, 이대로도 좋아!”
                            <br></br>
                            <br></br>
                            “완벽하지 않아도 괜찮아!”
                            <br></br>이 말은 사실 제 자신에게 하는
                            응원이었습니다. 저는 지나치게 완벽을 추구하는
                            성격이거든요. 모든 것이 완벽해야 한다는 강박은 어느
                            순간 제 자신을 갉아먹고 있었습니다. 《망그러진
                            만화》는 이런 저를 위해, 완벽하게 준비되지 않은
                            상태에 대한 두려움을 극복해 보고자 그리기 시작한
                            만화입니다. (중략)
                            <br></br>
                            모든 분야를 완벽하게 해내야만 능력 있는 사람이라고
                            인정받는 것이 현실입니다. 그런 시선에 지친 분들께
                            가볍게 미소 지으며 즐길 수 있는 만화가 되길
                            바랍니다.
                            <br></br>
                            _유랑 올림
                            <br></br>
                            <br></br>
                            소소해서 더 신나는 일상 스토리와 귀여운 캐릭터들의
                            환상 케미
                            <br></br>
                            <br></br>
                            ‘망글곰’과 ‘망글햄터’는 평범한 일상 속 유머 코드를
                            탁월하게 짚어낸다. 가족과 친구, 이웃들과 함께하며,
                            자주 겪으면서도 쉽게 지나쳤던 순간들이 만화로
                            그려진다! 회사에 가기 싫지만 전화만 받으면 바로
                            ‘회사어’가 나오는 어른들, ‘엄마들은 다 똑같아?‘
                            소리가 절로 나오는 K-엄마, K-할머니 에피소드,
                            함께하는 것만으로도 힘이 되는 친구 관계 등 읽는 내내
                            ‘나도!’ 하며 공감하게 된다.
                            <br></br>
                            곰과 햄스터라는 동물 캐릭터의 특징을 살린 에피소드는
                            유쾌하고 신선한 발상으로 피식 웃음이 터져 나온다.
                            <br></br>
                            “너 건강해지라고” 하며 귀여움을 펼쳐 보이는 망글곰과
                            망글햄터의 ‘잔망미’ 역시 관전 포인트! 기존 망그러진
                            곰의 팬은 물론, 책으로 두 친구를 처음 접하는 독자들
                            또한 열렬한 팬으로 만들 것이다. 이번 책에는 미공개
                            장편 작품을 포함해 엄선된 에피소드 총 84편이
                            수록됐다.
                            <br></br>
                            <br></br>
                            “아무 생각 없이, 편안한 마음으로 웃을 수 있으면
                            좋겠다!”
                            <br></br>
                            <br></br>
                            작가는 “만화를 보는 사람들이 아무 생각 없이 웃을 수
                            있으면 좋겠다”라는 가벼운 마음으로 ‘망그러진 만화’를
                            SNS에 업로드하기 시작했다고 한다. 그러던 어느 날 한
                            팔로워로부터 ‘힘들 때 망그러진 만화를 보면 하루가
                            행복하다’는 메시지를 받게 됐다. 그 후 거창한
                            메시지가 있는 건 아니더라도 삭막한 현실에서 소소한
                            웃음과 위로를 줄 수 있는 만화를 그리자는 새 목표가
                            생겼다.
                            <br></br>
                            삐뚤빼뚤한 선으로 그려져 어딘가 어설퍼 보이는
                            망글곰과 망글햄터의 이야기는 우리에게 완벽하지
                            않아도, 지금 모습 그대로 얼마든지 행복할 수 있다는
                            소소하지만 잊기 쉬운 메시지를 전한다.
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
                              9791187033882 ( 118703388X )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text">2022년 11월 01일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">344쪽</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">140 * 190 mm</p>
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
                      <span className="val">15,120</span>
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

export default BookDetailPage_mangeul;
