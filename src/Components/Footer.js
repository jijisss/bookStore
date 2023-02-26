import { Link } from "react-router-dom";
import "./Footer.css";

import snsImg_faceBook from "../images/facebook_logo.png";
import snsImg_insta from "../images/insta_logo.png";
import snsImg_youtube from "../images/youtube_logo.png";

function Footer() {
  return (
    <div id="Footer">
      <div className="FooterInner">
        <h1 className="footer-logo en">
          <Link to="/">LifeBooks</Link>
        </h1>
        <div className="footer-menu">
          <ul className="footer-menu-list">
            <li className="footer-menu-item">
              <Link to="">회사소개</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="">이용약관</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="">개인정보처리방침</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="">청소년보호정책</Link>
            </li>
          </ul>
        </div>
        <div className="footer-sns">
          <ul className="footer-sns-list">
            <li className="footer-sns-item footer-sns-item-facebook">
              <Link to="">
                <img src={snsImg_faceBook} />
              </Link>
            </li>
            <li className="footer-sns-item footer-sns-item-insta">
              <Link to="">
                <img src={snsImg_insta} />
              </Link>
            </li>
            <li className="footer-sns-item footer-sns-item-youtube">
              <Link to="">
                <img src={snsImg_youtube} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-cp-info">
          <ul className="footer-cp-info-list">
            <li>ceo : 송지은</li>
            <li>address : 경기도 안양시 동안구 </li>
            <li>call : 031 1234 5678</li>
            <li>fax : 1234-123-1234</li>
          </ul>
        </div>
        <div className="footer-copy">
          <p className="footer-copy-copyright">
            Copyright 2023. SONGJIEUN All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
