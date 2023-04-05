import "../components/default.css";
import "../components/Registation.css";
import { Link } from "react-router-dom";

function Registation() {
  return (
    <>
      <div className="registation-wrap">
        <h1 className="title">책/저자 등록하기</h1>
        <div className="registation-btn-box">
          <div className="bookRegistationBtn resiBtn">
            <Link to="/registationBook">
              <p className="bookRegistationBtn-text resiBtn-text">
                책 등록하기
              </p>
            </Link>
          </div>
          <div className="authorRegistationBtn resiBtn">
            <Link to="/registationAuthor">
              <p className="authorRegistationBtn-text resiBtn-text">
                저자 등록하기
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registation;
