import React from "react";
import "../Testimonials/Testimonials.scss";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import tImage1 from "../../assets/t-image1.png";
import tImage2 from "../../assets/t-image2.jpg";
import tImage3 from "../../assets/t-image3.jpg";

const Testimonials = () => {
  return (
    <>
      <section className="Testimonials">
        <h3>TESTIMONIALS</h3>
        <div className="slider">
          <div className="slider1">
            <div className="sliderLeft">
              <h1>
                <span>WHAT THEY </span>SAY ABOUT US
              </h1>
              <p>
                I made the right choice by choosing the Fitclub and by choosing
                the right plan and program. I already achieved my ideal body!
              </p>
              <h4>
                MATTHEW HENDRICKSON<span> - ENTREPRENEUR</span>
              </h4>
            </div>
            <div className="arrows">
              <button>
                <img src={leftArrow} alt="" />
              </button>
              <button>
                <img src={rightArrow} alt="" />
              </button>
            </div>
            <div className="sliderRight">
              <div></div>
              <div></div>
              <img src={tImage1} alt="" />
            </div>
          </div>
          <div className="slider2">
            <div className="sliderLeft">
              <h1>
                <span>WHAT THEY </span>SAY ABOUT US
              </h1>
              <p>
                I made the right choice by choosing the Fitclub and by choosing
                the right plan and program. I already achieved my ideal body!
              </p>
              <h4>
                MATTHEW HENDRICKSON<span> - ENTREPRENEUR</span>
              </h4>
            </div>
            <div className="arrows">
              <button>
                <img src={leftArrow} alt="" />
              </button>
              <button>
                <img src={rightArrow} alt="" />
              </button>
            </div>
            <div className="sliderRight">
              <div></div>
              <div></div>
              <img src={tImage1} alt="" />
            </div>
          </div>
          <div className="slider3">
            <div className="sliderLeft">
              <h1>
                <span>WHAT THEY </span>SAY ABOUT US
              </h1>
              <p>
                I made the right choice by choosing the Fitclub and by choosing
                the right plan and program. I already achieved my ideal body!
              </p>
              <h4>
                MATTHEW HENDRICKSON<span> - ENTREPRENEUR</span>
              </h4>
            </div>
            <div className="arrows">
              <button>
                <img src={leftArrow} alt="" />
              </button>
              <button>
                <img src={rightArrow} alt="" />
              </button>
            </div>
            <div className="sliderRight">
              <div></div>
              <div></div>
              <img src={tImage1} alt="" />
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contactLeft">
            <div className="line"></div>
            <h1>
              <span>READY TO </span>LEVEL UP YOUR BODY <span>WITH US?</span>
            </h1>
          </div>
          <div className="contactRight">
            <input type="text" placeholder="Enter your email address here" />
            <button>Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
