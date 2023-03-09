import "../components/BookDetail.css";
import "../components/top-btn.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/popularBook2.jpg";
import BookDetailImage from "../images/i9791165213497.jpg";

function BookDetailPage_joguman() {
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
                  <div className="prod-title-box">우리는 조구만 존재야</div>
                </div>
                <div className="prod-desc-area">
                  <p>300만 살 도시공룡 브라키오의 일상 탐험</p>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">조구만 스튜디오 저자</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          더퀘스트
                        </Link>
                        2020년 12월 11일
                      </div>
                      <div className="prod-best-box">
                        주간베스트
                        <span className="best-ranking">시/에세이 242위</span>
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
                        <span className="val">12,150</span>
                        <s className="val-origin">13,500</s>
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
                              <span id="OrderDeliveryType">
                                도서 포함 15,000원 이상무료배송
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
                      “우리는 조구만 존재야.
                      <br></br>
                      조구맣지만 안 중요하단 건 아냐.”
                    </div>
                    <div className="info-text">
                      이 세상의 모든 조구마한 것들에 보내는 따뜻한 찬사!
                      삐뚤빼뚤 귀여운 그림과 줏대 있는 메시지로 수만 팔로워와
                      소통하는 조구만 스튜디오의 첫 번째 에세이다. 300만
                      년이라는 긴 시간 동안 지구 가장자리에서 적당히 살고 있는
                      공룡 브라키오사우루스 캐릭터를 통해 일상의 여러 면면을
                      지그시 들여다보는 내용들이 가득 담겨 있다. 자기 자신에
                      대해, 나를 둘러싼 관계들에 대해, 그리고 인생 전반에 대해
                      조구만 스튜디오가 이제껏 그 어디에도 공개하지 않았던
                      내밀한 이야기가 만화, 에세이, 질문의 형태로 제시된다.
                      킥킥대면서 읽을 수 있는 만화들과 짐짓 생각해보게 하는
                      에피소드들이 읽는 사람들의 마음을 따스하게 감싸 안을
                      것이다.
                      <br></br>
                      <br></br>
                      외계에서 혹은 북극이나 과거에서 온 나와는 다른 누군가가 내
                      일상을 들여다보면 내 삶은 어떤 모습일까? 평범하고 반복적인
                      일상은 누군가의 시선에는 로맨틱 코미디가, 액션영화가,
                      스릴러가 될 수도 있다. 이 에세이는 보통의 하루를 조금은
                      다른 시선으로 보게 하는 책이다. 다르게 바라보면 소소하다
                      여겨졌던 시간이 의미 있는 시간으로 바뀌고, 내 고통과
                      상처가 나만 겪는 것은 아님을 알게 되며, 이전에는 보지
                      못했던 작은 즐거움과 깨달음을 발견할 수 있다
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
                          <span className="text">조구만 스튜디오</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                조디와 벤이 그림을 그리고, 이야기를 하고,
                                무언가를 만드는 곳입니다.
                                <br></br>
                                @joguman.studio
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
                              intro_하루하루를 엮어서<br></br>이 책을 읽는 법
                              <br></br>
                              <br></br>
                              Chapter 1. 나는 이런 공룡이야<br></br>비 오는 날엔
                              새우튀김<br></br>
                              집안일<br></br>
                              희망이 가장 큰 시간<br></br>
                              잠이 오지 않는 밤에는 단호박 스프를<br></br>
                              빨래<br></br>
                              심금을 울리네<br></br>
                              아주아주 사소한 일<br></br>
                              가장 자신 있는 것<br></br>
                              안킬로의 고백<br></br>
                              <br></br>
                              Chapter 2. 너와 함께할 때<br></br>별 거 아니지만
                              좋은 선물<br></br>
                              우리 아빠는 지공남<br></br>
                              이상한 자세의 아주머니<br></br>
                              무너진 탑<br></br>
                              아다리<br></br>
                              마감 중에 연락을 받으면<br></br>
                              세상에서 가장 아름다운 영단어<br></br>개<br></br>
                              노란 집<br></br>한 입의 지분<br></br>
                              무관심 폴더<br></br>
                              부다페스트로 가는 비행기에서<br></br>
                              <br></br>
                              Chapter 3. 세상은 살 만한 곳일까?<br></br>
                              존재론적 위기<br></br>
                              원하는 걸 모두 갖췄다면<br></br>
                              오리백조<br></br>
                              싸구려 소다맛 껌<br></br>
                              달팽이 달리<br></br>
                              국수집<br></br>
                              모를 때가 더 좋았던 것<br></br>
                              낯선 이의 기도<br></br>
                              우주먼지<br></br>
                              <br></br>
                              outro_미로정원
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
                            조구만 스튜디오의 첫 번째 에세이!
                            <br></br>
                            “우리는 조구만 존재야. 조구맣지만 안 중요하단 건
                            아냐!”
                            <br></br>
                            다들 뭐든 잘하고 앞서나가는 것만 같은데 나는 왜
                            이럴까? 나도 돈도 많이 벌고, 성격도 대범해지고, 맺고
                            끊는 것도 확실한 사람이 되고 싶은데… 나는 왜 이렇게
                            그런 게 어려울까? 문득, 스스로에게 이런 질문을
                            던지게 되는 날이 있다. 그 수많은 질문들의 끝은 종종
                            이런 말로 마무리된다. “지금의 나는 어떻게 내가
                            되었을까?”
                            <br></br>
                            삐뚤빼뚤 귀여운 그림과 줏대 있는 메시지로 수만
                            팔로워와 소통하는 조구만 스튜디오가 첫 번째 에세이
                            《우리는 조구만 존재야》로 독자들을 찾아왔다. 300만
                            년이라는 긴 시간 동안 우리 곁에서 살고 있는 공룡
                            브라키오사우루스 캐릭터를 통해 일상의 여러 면면을
                            지그시 들여다보는 내용들이 가득 담겨 있다. 자기
                            자신에 대해, 나를 둘러싼 관계들에 대해, 그리고 인생
                            전반에 대해 조구만 스튜디오가 생각하는 내밀한
                            이야기가 만화, 에세이 그리고 질문의 형태로 제시된다.
                            <br></br>
                            <br></br>
                            웃기기도 하고, 공감이 되기도 하고
                            <br></br>
                            가끔은 고개를 끄덕이며 생각해볼 시간을 선물하는 책!
                            <br></br>
                            <br></br>
                            ”예전에는 타인의 평가에 전전긍긍했는데 그래도 이제는
                            조금 괜찮아졌다. 나도, 너도, 우리 모두도 조금은
                            부족하다는 걸 안다. 내가 정말 많이 부족하다는 걸
                            알지만, 내가 나라는 이유로 사과하고 싶지는 않다.
                            나도 어쩔 수 없이 나로 사는 거니까. 그리고 이런 내가
                            때로는 싫지만 또 좋기도 하니까.
                            <br></br>
                            나를 잘 모르는 사람에게까지 사랑받고 싶어서
                            전전긍긍하던 어린 나에게 이런 이야기를 이제야
                            들려준다.“
                            <br></br>
                            -본문 중에서
                            <br></br>
                            <br></br>
                            외계에서 혹은 북극이나 과거에서 온 나와는 다른
                            누군가가 내 일상을 들여다보면 내 삶은 어떤 모습일까?
                            평범하고 반복적인 일상은 누군가의 시선에는 로맨틱
                            코미디가, 액션영화가, 스릴러가 될 수도 있다.
                            《우리는 조구만 존재야》는 보통의 하루를 조금은 다른
                            시선으로 보게 하는 책이다. 다르게 바라보면 소소하다
                            여겨졌던 시간이 의미 있는 시간으로 바뀌고, 내 고통과
                            상처가 나만 겪는 것은 아님을 알게 되며, 이전에는
                            보지 못했던 작은 즐거움과 깨달음을 발견할 수 있다.
                            <br></br>
                            페이지를 한 장 한 장 넘기며 만화와 글을 읽고 각 글
                            꼭지 말미에 적힌 질문에 답을 적어보자. 이전에는
                            생각하지 못했던 나 자신을 만날 수 있을 것이다.
                            오늘은 브라키오와 행복한 시간을 보내길!
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
                              9791165213497 ( 1165213494 )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text"> 2020년 12월 11일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">250쪽</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">
                              133 * 191 * 19 mm / 317 g
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
                      <span className="val">12,150</span>
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

export default BookDetailPage_joguman;
