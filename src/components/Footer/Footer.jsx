import React from "react";
import "../Footer/Footer.scss";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <section className="Footer">
        <div className="divider"></div>
        <div className="socialMedia">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </section>
    </>
  );
};

export default Footer;
