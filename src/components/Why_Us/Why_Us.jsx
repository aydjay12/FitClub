import React from "react";
import "../Why_Us/Why_Us.scss";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

const Why_Us = () => {
  return (
    <>
      <section className="Why_Us">
        <div className="left">
          <img className="img1" src={image1} alt="" />
          <img className="img2" src={image2} alt="" />
          <img className="img3" src={image3} alt="" />
          <img className="img4" src={image4} alt="" />
        </div>
        <div className="right">
          <h4>SOME REASONS</h4>
          <h1>
            <span>WHY </span>CHOOSE US?
          </h1>
          <div>
            <img src={tick} alt="" />
            <h3>OVER 140+ EXPERT COACHES</h3>
          </div>
          <div>
            <img src={tick} alt="" />
            <h3>TRAIN SMARTER AND FASTER THAN BEFORE</h3>
          </div>
          <div>
            <img src={tick} alt="" />
            <h3>1 FREE PROGRAM FOR NEW MEMBERS</h3>
          </div>
          <div>
            <img src={tick} alt="" />
            <h3>RELIABLE PARTNERS</h3>
          </div>
          <h2>OUR PARTNERS</h2>
          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Why_Us;
