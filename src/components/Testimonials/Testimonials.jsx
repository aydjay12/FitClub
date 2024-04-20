import React, { useState } from "react";
import "../Testimonials/Testimonials.scss";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import tImage1 from "../../assets/t-image1.png";
import tImage2 from "../../assets/t-image2.jpg";
import tImage3 from "../../assets/t-image3.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [activeSlide, setActiveSlide] = useState(1); // Initial active slide

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : 3); // If current slide is first, go to last slide
  };

  const handleNextSlide = () => {
    setActiveSlide(activeSlide < 3 ? activeSlide + 1 : 1); // If current slide is last, go to first slide
  };

  // const settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <>
      <section className="Testimonials">
        <div className="arrows">
          <button onClick={handlePrevSlide}>
            <img src={leftArrow} alt="" />
          </button>
          <button onClick={handleNextSlide}>
            <img src={rightArrow} alt="" />
          </button>
        </div>
        <h3>TESTIMONIALS</h3>
        <div className="slider">
          <div className={`slider${activeSlide}`}>
            <div className="sliderLeft">
              <h1>
                <span>WHAT THEY </span>SAY ABOUT US
              </h1>
              {activeSlide === 1 && (
                <p>
                  I made the right choice by choosing the Fitclub and by
                  choosing the right plan and program. I already achieved my
                  ideal body!
                </p>
              )}
              {activeSlide === 2 && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi ipsam, ab itaque nam perferendis impedit sint
                </p>
              )}
              {activeSlide === 3 && (
                <p>
                  I made the right choice by choosing the Fitclub and by
                  choosing the right plan and program. I already achieved my
                  ideal body!
                </p>
              )}
              <h4>
                {activeSlide === 1 && "MATTHEW HENDRICKSON"}
                {activeSlide === 2 && "JOHN KEVIN"}
                {activeSlide === 3 && "FRANKLIN"}
                <span>
                  {" "}
                  - {activeSlide === 1 ? "ENTREPRENEUR" : "CUSTOMER"}
                </span>
              </h4>
            </div>
            <div className="sliderRight">
              <motion.div
                className="box-1"
                initial={{ left: "-7rem" }}
                whileInView={{ left: "-1rem" }}
                transition={{ duration: 0.5 }}></motion.div>
              <motion.div
                className="box-2"
                initial={{ left: "5rem" }}
                whileInView={{ left: "1rem" }}
                transition={{ duration: 0.5 }}></motion.div>
              {activeSlide === 1 && (
                <motion.img src={tImage1} alt="Slide Image" />
              )}
              {activeSlide === 2 && (
                <motion.img src={tImage2} alt="Slide Image" />
              )}
              {activeSlide === 3 && (
                <motion.img src={tImage3} alt="Slide Image" />
              )}
              <div className="arrows arrow-m">
                <button onClick={handlePrevSlide}>
                  <img src={leftArrow} alt="" />
                </button>
                <button onClick={handleNextSlide}>
                  <img src={rightArrow} alt="" />
                </button>
              </div>
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
