import "../components/top-btn.css";
import "../components/BookDetail.css";
import { Link } from "react-router-dom";
import bookPreviewImage from "../images/bookOfWeek3.jpg";
import bookDetailImg from "../images/i9791168260764.jpg";

function BookDetail_lastIsland() {
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
                  <div className="prod-title-box">마지막 섬</div>
                </div>
              </div>
              <div className="prod-detail-view-wrap">
                <div className="prod-detail-view-area">
                  <div className="col-prod-info">
                    <div className="prod-info-wrap">
                      <div className="prod-author-box">
                        <div className="author">
                          <Link to="">쥴퓌 리바넬리 저자 · 오진혁 번역</Link>
                        </div>
                      </div>
                      <div className="prod-info-text publish-date">
                        <Link to="" className="btn-publish-link">
                          호밀밭
                        </Link>
                        2022년 11월 30일
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
                        <span className="val">14,400</span>
                        <s className="val-origin">16,000</s>
                      </div>
                    </div>
                    <div className="prod-guide-wrap">
                      <div className="prod-guide-box">
                        <div className="prod-guide-row">
                          <div className="prod-guide-title">적립/혜택</div>
                          <div className="prod-guide-cont">
                            <div className="point-text">800p</div>
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
                          기타나라소설
                        </Link>
                        <span className="arw-category"> > </span>
                        <Link to="" className="intro-category-link">
                          기타나라소설
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
                              2022년 12월 2주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 서울신문 >
                              2022년 12월 2주 선정
                            </li>
                            <li className="text-award-item">
                              미디어 추천도서 > 주요일간지소개도서 > 한국일보 >
                              2022년 12월 2주 선정
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-bottom">
                    <div className="info-text fw-bold">
                      ㆍ 권위주의와 정치에 대한 무관심은 어떻게 공동체를
                      파괴하는가
                      <br></br>
                      장강명 소설가 추천, 우리 시대의 탁월한 정치적 우화!
                    </div>
                    <div className="info-text">
                      잣나무로 가득한 숲, 천연 수족관 같은 새파랗고 투명한 바다,
                      형형색색의 물고기들을 볼 수 있는 아름다운 협만, 그리고
                      순백의 유령처럼 쉬지 않고 날아다니는 갈매기들. 그곳은
                      사계절 내내 온화하고, 밤이 되면 사람의 넋을 빼놓는 재스민
                      향기에 뒤덮이는 외딴섬이었다. 숲속에 자리한 낡고 오래된
                      집과 함께 세월에 내맡겨진, 자급자족이 가능한 독립된
                      세상이었다. 그곳은 마지막 섬이자 마지막 은신처, 마지막
                      남은 인간적인 자투리땅이었다.
                      <br></br>
                      작은 공동체를 이루고 있는 평화로운 섬에 탐욕스러운
                      외부인이 들어온다. 그는 쿠데타로 정권을 잡아 대통령
                      자리까지 오른 인물이었다. 그는 대통령 시절 공식 연설마다,
                      국론분열과 벼랑 끝까지 내몰린 국내 상황을 외부세력과 적성
                      국가의 공작 탓으로 돌리곤 했다. 그는 이를 통해 자신이
                      일으킨 쿠데타가 국민의 단합과 단결을 확보하고, 국가를
                      통합하기 위한 행동이었다는 주장을 펼치곤 했다. 그는
                      장기집권을 마친 후 어쩔 수 없이 대통령직을 사임하고 남은
                      노후를 보내기 위해 섬에 정착한 것이다.
                      <br></br>전 대통령이 섬에 정착한 후, 여러 사건이 발생하며
                      섬에는 커다란 변화가 일어난다. 우선 섬 주민들에게 시원한
                      그늘막을 만들어주던 커다란 나무들이 잘려 나간다. 무질서와
                      혼돈, 혼란에서 벗어나 문명 생활을 지향해야 한다는
                      이유에서였다. 나무가 사라진 후 전 대통령의 손녀는 과자를
                      먹다가 갈매기의 공격을 받고 팔을 크게 다친다. 이후 전
                      대통령은 갈매기와의 전쟁을 선언하고, 많은 주민이 그의
                      계획에 적극 동조한다. 그렇게 평화로웠던 마을은 분열이
                      일어나기 시작한다.
                      <br></br>
                      <br></br>
                      “악이 그 모습을 드러낼 때 그에 맞서 대항하지 않는 모두는
                      그 악행에 일정 부분 동참한 것이나 다름없습니다. ‘서서히’
                      독재자의 자리를 차지한 자들에게 처음부터 ‘아니’라고 해야
                      합니다. 저항하는 것은 고귀한 것입니다. 그렇습니다,
                      갈매기들은 저항했기에 승리했지만, 갈매기들의 희생도 적은
                      건 아니었습니다. 이 작품은 사회와 자연은 스스로 균형을
                      잡아간다는 것, 더 정확히 말하자면 균형을 잡아야만 한다는
                      점에 초점을 맞추고 있습니다. 만약 이런 균형을 깨트리려
                      한다면, 그 결과는 재앙이 될 것입니다. 자연도 인간도 파국을
                      맞이하게 되는 것이지요. 이런 학살은 어떤 경우에는 대놓고
                      독재의 방식으로, 또 어떤 경우에는 ‘민주주의’라는 속임수
                      뒤에 숨어서 자행됩니다.” - 작가와의 질의응답 中<br></br>
                      <br></br>전 대통령이 갈매기와 전쟁을 벌인다는 이야기는
                      권위주의가 공동체 내에서 어떻게 만들어지는지, 민주주의라는
                      가면 뒤에 숨은 독재가 어떤 방식으로 작동하는지, 정치에
                      대한 무관심이 어떤 결과를 낳는지를 적나라하게 보여준다.
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
                          <span className="text">쥴퓌 리바넬리</span>
                        </h3>
                      </div>
                      <div className="writer-info-box">
                        <div className="auto-overflow-wrap overflow active">
                          <div className="auto-overflow-contents">
                            <div className="auto-overflow-inner">
                              <p className="info-text">
                                (Zülfü Livaneli)
                                <br></br>
                                1946년생으로 앙카라의 마리프 고등학교를
                                졸업했고, 스톡홀름에서 철학과 음악 교육을
                                받았다. 1972년 사상범으로 군 형무소에
                                수감되었으며, 11년간 망명 생활을 하였다.
                                하버드와 프린스턴 등 유명대학에서 강연과 강의를
                                했고 문학, 음악, 그리고 영화 등 다양한 분야에서
                                세계의 찬사를 받으며 국내외 30개 이상의 수상
                                기록을 갖고 있다.
                                <br></br>
                                그의 작품은 모두 34개 언어로 번역되었고 터키
                                외에도 중국, 스페인, 독일 등에서 베스트셀러가
                                되었으며 발칸 문학상, 미국 반스앤노블 위대한
                                작가상, 이탈리아와 프랑스에서 올해의 책으로
                                선정된 바 있다. 터키에서는 유누스 나디 문학상과
                                오르한 케말 문학상을 수상했다. 리바넬리는 세계
                                문화와 평화에 기여한 공로로 1996년 파리
                                유네스코로부터 명예 대사로 위촉되었고, 유네스코
                                사무총장의 자문 역을 역임했다. 2002~2006년 터키
                                국회와 유럽의회에서 의원직을 역임했다.
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
                              1장<br></br>
                              2장<br></br>
                              3장<br></br>
                              4장<br></br>
                              5장<br></br>
                              6장<br></br>
                              7장<br></br>
                              8장<br></br>
                              9장<br></br>
                              10장<br></br>
                              11장<br></br>
                              12장<br></br>
                              13장<br></br>
                              14장<br></br>
                              15장<br></br>
                              16장<br></br>
                              17장<br></br>
                              18장<br></br>
                              19장<br></br>
                              20장<br></br>
                              <br></br>
                              작가와의 질의응답
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
                                  장강명 (소설가)
                                </p>
                                <p className="info-text">
                                  낙원과도 같았던 작은 공동체에 탐욕스러운
                                  외부인이 들어오고, 마을은 점점 망가져 마침내
                                  사람이 살 수 없는 곳이 된다……. 2008년
                                  튀르키예의 에르도안 독재 정부를 비판하기 위해
                                  쓴 작품이라고 하지만 2022년 한국 독자들에게도
                                  울림이 크다. 이 소설 속 ‘전직 대통령’이
                                  가리키는 바는 상상력이 부족하고 두려움에
                                  시달리는 권위주의적 정치인에 한정되지 않는다.
                                  선동가, 악덕 대기업, 자본주의, 혹은 문명 그
                                  자체로 해석해도 자연스럽게 읽힌다.<br></br>
                                  작품의 힘은 낙원의 파괴자에 대한 단순한 고발을
                                  넘어, 평범한 사람들이 그 작업에 동참하는
                                  과정과 그 후폭풍을 대단히 설득력 있게 살피는
                                  데서 나온다. 왜 우리는 번번이 그런 권위에
                                  굴복하는가. 왜 그런 선동에, 유혹에 휩쓸리는가.
                                  왜 우리는 항상 뒤늦게 깨닫게 될까. 그렇게
                                  『마지막 섬』은 우리 시대의 심오한 우화이자,
                                  숙제가 된다. 분량은 짧지만 주제는 묵직하고,
                                  생각할 거리는 풍성한 책.
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
                            사는 곳의 환경이나 기후가 사람을 바꿔놓는다. 섬에서
                            십여 년 살다 보니 넥타이나 정장과 같은 옷은 목을
                            조르는 듯 답답했다. 시간이 흐르면서 우리도 모르는
                            사이에 우리는 열대 섬의 원주민들처럼 옷을 입기
                            시작했다. 그래서 전 대통령이 우리를 이상하게 볼
                            것이라는 건 충분히 예상했다. 그런데도 그의 정장과
                            목주름 밑을 꽉 죄어 맨 넥타이가 우리의 목을 조이는
                            것처럼 느껴지는 건 어쩔 수 없었다. - 52p
                            <br></br>
                            <br></br>
                            “이 섬에는 운영위원회가 필요합니다, 여러분!”이라며
                            연설을 이어갔다. “필요하면 섬과 관련된 문제에 결정을
                            내리고, 우리 생활이 더 평화롭고 누구에게도 불편을
                            끼치지 않으며 살 수 있도록 만들어주는, 생각의 차이를
                            극복할 수 있게 도와주는 운영위원회 말입니다. 이런
                            위원회를 구성하는데도 방식이 있습니다. 이 방식은
                            물론 민주적이어야 합니다. 민주주의야말로 가장 위대한
                            가치입니다. 그렇지 않습니까? 여러분.” - 67p
                            <br></br>
                            <br></br>
                            “자, 사랑하는 이웃 여러분. 인류는 오늘날의 문명
                            수준에 도달하기 위해 크나큰 노력을 기울여왔습니다.
                            이를 이룩하기 위해 많은 피를 흘렸고, 목숨을
                            잃었습니다. 그렇기 때문에 오늘날 자신이 인간이라고
                            생각하는 그 누구도 문명에 등을 돌려 인류를
                            퇴보시키는 행동을 해서는 안 됩니다. 이 아름다운 섬에
                            도착한 날부터 본인은 몇몇 부정적인 것들과 바로
                            잡아야 하는 잘못된 것들을 마주하게 되었습니다.
                            여러분들은 그런 것들에 익숙해져 있다 보니 어쩌면
                            보지 못했을 수도 있겠습니다. 그렇지만 이런 것들을
                            우리 모두가 협심하여 바로 잡았을 때, 우리 섬에 사는
                            모두에게 안녕과 평화가 찾아오고, 여러분의 재산도
                            늘어날 것입니다. 공동의 이익에 관해 이야기하고 있는
                            겁니다. 누구도 경쟁자가 아닙니다.” - 107p
                            <br></br>
                            <br></br>
                            그들은 오륙십 마리의 갈매기를 죽인 다음, 총질이
                            지겨웠는지, 아니면 힘들어서였는지, 전술을 바꾼
                            것인지 몰라도 다시 돌아가는 게 보였다. 우리가
                            언덕에서 내려와 무서움에 떨며 집으로 돌아왔을 때도
                            갈매기들은 여전히 비명을 지르면 날아다니고 있었다.
                            그렇지만 그 갈매기 중 일부는 자기들의 보금자리인
                            해변과 새끼들이 태어날 알로 다시 돌아올 수 없었다. -
                            135p
                            <br></br>
                            <br></br>
                            정말 희한한 일이 아닌가! 시작은 갈매기와의
                            전쟁이었는데, 마치 갈수록 주민들 간의 문제로 변하는
                            것 같았다. 사람들 간의 싸움으로 바뀌고 있었다.
                            아무리 고통스럽다 하더라도 내가 이건 솔직히
                            고백해야겠다. 그 싸움은 섬에 생기를 불어넣고 있었다.
                            어쩌면 복잡한 우리의 심리상태가 오래전부터 찾고
                            있었던 것이 싸움과 같은 자극적 흥분일지도 모른다는
                            생각이 들었다. 분노로 붉게 달아오른 라라의 얼굴에서,
                            홍조를 띤 광대뼈에서, 가끔은 소설가의 살기를 품은
                            격분의 시선에서 그걸 느낄 수 있었다. - 149p
                            <br></br>
                            <br></br>
                            우리 인간들은 자신의 한계도 모르면서 스스로의 지능에
                            만족한다. 배우려 들지도 않으며, 현명해지지도 못한다.
                            대부분의 경우, 모든 걸 깨달았을 때는 너무 늦다. 그날
                            밤 자네를 어디에 가뒀는지 우리는 물어물어 찾아다니고
                            있었어. 그때 내 마음속에 자리 잡은 걱정과 불길한
                            예감은 이 상황이 더 나쁜 결론으로 치닫고 있다고
                            말하고 있었어. - 161p
                            <br></br>
                            <br></br>
                            이런 천재적인 생각에 이웃들은 박수를 보냈고, 전
                            대통령 상어 대가리는 엄청난 자신의 전술을 공개했다.
                            섬에 여우를 데려다 놓자는 것이었다. 여우는 갈매기의
                            알을 훔쳐서 먹을 것이고, 그런 방식으로 갈매기의
                            개체수를 줄일 수 있다는 설명이었다. 섬에 여우가 한
                            마리도 없는 바람에 갈매기의 수가 늘어나 ‘개떼처럼’
                            되었다고 주장했다. 그는 앞으로 그런 일은 없을
                            것이라고 했다. 섬 주민들이 위험을 감수할 필요 없이,
                            지능의 우위를 이용해 이 두 짐승끼리 싸움을 붙여서
                            적을 없앨 수 있다고 설명했다. - 194p
                            <br></br>
                            <br></br>
                            마침 그때, 나쁜 일이 일어날 것 같던 내 예감대로
                            어디선가 비명이 들렸다. 섬 곳곳에서 비명과 소란이
                            커지고 있었다. 우리는 이게 무엇을 의미하는지 알고
                            있었다. 또 누가 뱀에 물렸고, 어떤 집에서는 우리와
                            마찬가지로 뱀을 잡는 의식을 치르고 있었다. 라라는
                            걱정스러운 얼굴로 나를 보며 “우리 앞으로 어떻게
                            해?”라고 했다. - 219p
                            <br></br>
                            <br></br>섬 주민들의 모든 분노가 여우를 향하고
                            있었지. 갈매기는 이제 잊어버린 것 같았어. 의사가
                            공수병을 가장 많이 퍼트리는 동물이 여우라고 말한
                            뒤로, 섬 주민들의 공포와 분노는 눈에 보일 정도였지.
                            의사의 말에 따르면, 여우가 고양이와 개를 물었을 경우
                            공수병에 걸리고, 여우에게 물린 고양이와 개가 그
                            무시무시한 병을 사람들에게 옮긴다는 거야. 이런
                            이야기를 듣다 보니 ‘공수병이 이제야 퍼진다고?’라는
                            의문이 생겼지. 섬 주민들이 어찌나 흥분해있고, 분노에
                            휩싸여 총질해대던지, 공수병에 걸린 사람들이나 그렇게
                            행동할 거라는 생각이 들었지 뭐야. - 275p
                            <br></br>
                            <br></br>
                            우리는 굴복해서 패배했다. 점차 수위를 높여가던
                            권력의 폭압이 얼마나 더 극에 달할 수 있는지 예상하지
                            못했기에 패배했다. 그 나무들이 잘려나갔을 때, 그리고
                            구멍가게 아들이 얻어맞았을 때, 우리는 우리의
                            목소리를 냈어야 했다. 저항했어야 했다. 우리는 그러지
                            않았다. 전 대통령이 시도했던 모든 것들을 너무나
                            순진하게 받아들였다. 하지만 갈매기들은 저항했고,
                            타협하지 않았기에 승리했다. 이 상황에서 고개를 숙인
                            인류가 더 똑똑했던 건가, 아니면 저항한 갈매기가 더
                            똑똑했던 건가라는 질문을 던져야 맞지 않을까? 우리는
                            이곳 감옥에 갇혀있고, 우리가 저지른 원죄의 값을
                            치르는 중이다. 한 인간의 유혹에 넘어갔고, 눈을 감은
                            채 그 인간의 뒤를 따라나섰던 원죄 말이다. 인간은
                            저항한다는 정의를 망각한 것, 이기주의, 예측 부재,
                            외면, 독재에 굴복, 작은 것에 대한 탐닉과 같은 죄의
                            값을 치르고 있다. 이 글은 우리 일상에서의 작은
                            굴복들이 만들어낸 작은 원죄들에 관한 이야기다. -
                            286p
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
                            ㆍ 반독재, 반전, 친환경, 여성 등 약자와 소수의
                            권익을 대변해온 지식인,<br></br>
                            오르한 파묵 이후 노벨 문학상에 가장 근접한 터키 작가
                            쥴퓌 리바넬리의 화제작!
                            <br></br>
                            <br></br>
                            쥴퓌 리바넬리는 터키의 베스트셀러 작가이자 정치
                            활동가이다. 군 형무소에 수감된 이력이 있으며, 11년간
                            망명 생활을 하기도 했다. 1995년 유네스코 친선대사로
                            임명되면서 그의 문화·정치 활동은 세계 평화에 대한
                            공헌을 인정받았다. 터키 의회와 유럽 평의회에서
                            의원직을 맡았으며, 소설과 음악, 철학 등으로 세계의
                            찬사를 받아오고 있다. 쥴퓌 리바넬리는 문학, 음악,
                            영화 등 다양한 분야에서 국내외 30개 이상의 수상
                            기록을 갖고 있다.<br></br>
                            쥴퓌 리바넬리는 군부뿐만 아니라, 현재까지 장기집권
                            중인 친이슬람 유사 독재정권 아래에서도 자신의 신념을
                            굽히지 않고 있다. 그의 음악과 문학작품은 늘 터키
                            국민을 향한 외침이었다. 여성, 환경, 정의, 평화는
                            빠지지 않는 그의 작품 소재이다.
                            <br></br>
                            <br></br>
                            “『마지막 섬』은 특정 국가에 대한 이야기가 아닙니다.
                            어떻게 보면 저의 정치적 성향이 가장 강하게 드러난
                            소설이라고 할 수 있습니다. 터키와 전 세계에 관해
                            제가 생각했던 것들을 외딴섬에서 살아가는 사람들과
                            갈매기 그리고 독재자라는 세 가지 축으로 설명해보려고
                            했습니다. 수많은 뉴스 속에서 묻혀버리는, 우리가
                            놓치고 있는 진실을 한 걸음 떨어져 객관화시키면 더 잘
                            묘사할 수 있을 것이라고 생각했습니다. 사람들은
                            편향된 뉴스의 홍수 속에서 진실을 거짓과 구분해내고,
                            굽은 것 속에서 곧은 것을 찾아내는 데 어려움을 겪고
                            있습니다. 사실 대다수의 사람은 어제는 잊어버리고,
                            내일은 생각지 않습니다. 오로지 지금을 살고 있을
                            뿐입니다. 집권자들과 언론이 이 ‘지금’을 조작하기
                            때문에 사람들은 대부분 잘못된 판단을 하게 됩니다. -
                            작가와의 질의응답 中<br></br>
                            <br></br>
                            『마지막 섬』은 터키를 대표하는 지식인인 쥴퓌
                            리바넬리의 정치적 성향이 가장 강하게 드러난
                            작품이다. 이 책은 터키에서 총 40만 부가 판매된
                            베스트셀러이며 연극으로 만들어져 무대 위에
                            올라가기도 했다. 『마지막 섬』은 2022년 6월
                            미국에서도 번역출판되었다.
                            <br></br>
                            <br></br>
                            <br></br>ㆍ 2013년 터키 반정부 시위를 예측한,
                            독재정권을 규탄한 이 소설이 지금의 한국 사회에
                            던지는 질문은 무엇인가
                            <br></br>
                            <br></br>
                            소설이 출간된 지 5년이 지난 2013년 터키 이스탄불
                            게지 공원에서 반정부 시위가 일어났다. 초기에는 병영
                            재건과 쇼핑몰 건설을 위한 공원 재개발에 반대한
                            생태주의자를 중심으로 시작되었지만, 터키 경찰이
                            시위대를 공격하면서 자그마한 시위는 반정부 시위
                            형태로 크게 발전했다. 시위대의 범위는 우익과 좌익
                            양쪽 모두뿐 아니라 터키인과 쿠르드인 등 정치
                            이념이나 민족을 가리지 않고 포괄적으로 참가하는
                            것으로 드러났다. 이 시위로 최소 60명이 부상을 입고
                            수백 명이 체포되었다. 독재에 대한 저항, 환경을
                            이유로 권력과 대중이 대립하는 점에서 소설 『마지막
                            섬』은 이 사건을 예고했다는 평가가 있다.
                            <br></br>
                            <br></br>
                            “인생이야말로 예술을 모방한다는 말을 저는 갈수록 더
                            믿게 되었습니다. 사실, 5년 전에 출간한 ‘마지막 섬’이
                            마치 게지 시위와 너무 맞아떨어지더군요. 그러니까
                            삶을 제대로 간파할 수 있다면, 예술을 통해 시간과
                            공간을 초월한 차원으로 옮겨올 수 있다는 말이
                            되겠지요. 세계문학과 터키문학에는 이와 유사한 수많은
                            예가 있습니다. 게지 시위를 즉각 알리는 건 언론의,
                            끝난 이후 사태를 평가하는 건 사회학과 역사학의,
                            그리고 미래를 예측하고 알리는 것은 문학예술의
                            몫입니다.” - 작가와의 질의응답 中<br></br>
                            <br></br>
                            터키에서 일어난 1960년, 1980년 두 번의 군사 쿠데타만
                            보더라도 터키의 현대사는 우리와 닮은 점이 많다.
                            터키는 잦은 쿠데타와 군의 정치개입에 시달리고 있지만
                            이에 맞서는 국민적 저항은 미약했다. 2008년
                            튀르키예의 에르도안 독재 정부를 비판하기 위해 쓴 이
                            작품은 2022년 한국 독자들에게도 울림이 크다. 이 소설
                            속 ‘전직 대통령’이 가리키는 바는 상상력이 부족하고
                            두려움에 시달리는 권위주의적 정치인에 한정되지
                            않는다. 선동가, 악덕 대기업, 자본주의, 혹은 문명 그
                            자체로 해석해도 자연스럽게 읽힌다.
                            <br></br>
                            <br></br>
                            “작품의 힘은 낙원의 파괴자에 대한 단순한 고발을
                            넘어, 평범한 사람들이 그 작업에 동참하는 과정과 그
                            후폭풍을 대단히 설득력 있게 살피는 데서 나온다. 왜
                            우리는 번번이 그런 권위에 굴복하는가. 왜 그런
                            선동에, 유혹에 휩쓸리는가. 왜 우리는 항상 뒤늦게
                            깨닫게 될까. 그렇게 『마지막 섬』은 우리 시대의
                            심오한 우화이자, 숙제가 된다. 분량은 짧지만 주제는
                            묵직하고, 생각할 거리는 풍성한 책.” - 장강명(추천사)
                            中<br></br>
                            <br></br>
                            한국 사회는 지난 20대 대선을 거치며 정치 혐오,
                            정치에 대한 무관심이 팽배해졌다. 소설이 이야기하는
                            것처럼 정치를 우리 삶과 멀리 떨어진 무언가라고
                            생각했을 땐 평화가 유지될 수 없다. 정치에 대한
                            무관심은 귄위주의를 낳고, 권위주의는 독재를 낳는다.
                            독재가 우리 삶 깊숙이 파고들어 왔을 때, 다시금
                            권리를 찾기 위해 노력해도 이미 늦다. 우리의 평화로운
                            일상과 권리를 지키기 위해 어떤 행동을 해야 하는지,
                            무엇을 경계해야 하며 어떤 목소리를 내야 하는지,
                            우리는 함께 고민해야 할 것이다.
                            <br></br>
                            <br></br>
                            “인간은 저항한다는 정의를 망각한 것, 이기주의, 예측
                            부재, 외면, 독재에 굴복, 작은 것에 대한 탐닉과 같은
                            죄의 값을 치르고 있다. 이 글은 우리 일상에서의 작은
                            굴복들이 만들어낸 작은 원죄들에 관한 이야기다.” -
                            본문 中
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
                              9791168260764 ( 1168260760 )
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">발행(출시)일자</p>
                            <p className="info-item-text">2022년 11월 30일</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">쪽수</p>
                            <p className="info-item-text">300쪽</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">크기</p>
                            <p className="info-item-text">
                              154 * 224 * 28 mm / 655 g
                            </p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">총권수</p>
                            <p className="info-item-text">1권</p>
                          </li>
                          <li className="basic-info-item">
                            <p className="info-item-title">원서명/저자명</p>
                            <p className="info-item-text">
                              Son Ada/Livaneli, Zuelfue
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
                      <span className="val">14,400</span>
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

export default BookDetail_lastIsland;
