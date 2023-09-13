import React from "react";
import "./Footer.css";
import mec_logo from "../../assets/png/mec_logo.png";
import excel_logo from "../../assets/svg/excel_logo.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer__main">
      <img src={mec_logo} className="mec___logo_footer" alt="" />
      <div className="footer_content">
        <div className="footer_social_logos">
          <AiOutlineInstagram />
          <FiTwitter />
          <FiLinkedin />
          <FiFacebook/>
        </div>
        <p>Made with ❤️ Excel 2023</p>
      </div>
      <img src={excel_logo} className="excel__logo_footer" alt="" />
    </div>
  );
};

export default Footer;
