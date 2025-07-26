import { Link } from "react-router-dom";

import logoFooterImg from "/assets/images/logo_footer_w.png";
import logoFooterImgMobile from "/assets/images/logo_footer_m.png";
import bannerImg_01 from "/assets/images/banner_w_01.png";
import bannerImgMobile_01 from "/assets/images/banner_m_01.png";
import bannerImg_02 from "/assets/images/logo_footer_w2.png";
import bannerImgMobile_02 from "/assets/images/logo_footer_m2.png";

function EgovFooter() {
  return (
    <div className="footer">
      <div className="inner">
        <h1>
          <Link to="">
            <img className="w" src={logoFooterImg} alt="" />
            <img className="m" src={logoFooterImgMobile} alt="" />
          </Link>
        </h1>
        <div className="info">
          <p>
            대표문의메일 : gjh999@hanmail.net{" "}
            <span className="m_hide">|</span>
            <br className="m_show" /> 대표전화 : 0000-0000 (010-9872-7559)
          </p>
          <p className="copy">
            Copyright © 2025 JennySoft. All Rights Reserved.
          </p>
        </div>
        <div className="right_col">
          <Link to="">
            <img className="w" src={bannerImg_02} alt="" />
            <img className="m" src={bannerImgMobile_02} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EgovFooter;
