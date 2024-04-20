import "./Hero.scss";
import Logo from "../../assets/logo.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import HeroImage from "../../assets/hero_image.png";
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import menu from "../../assets/bars.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import React, { useState } from "react";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const items = ["Home", "Programs", "Why Us", "Plans", "Testimonials"];
  const [showMobilePages, setShowMobilePages] = useState(false);
  const toggleMobilePages = () => {
    setShowMobilePages(!showMobilePages);
  };
  const isMobileView = window.innerWidth <= 768;

  return (
    <>
      <div className="blur hero-blur"></div>
      <section className="Hero">
        <div className="orange-background"></div>
        <div className="Navbar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="menu" onClick={toggleMobilePages}>
            <img src={menu} alt="" />
          </div>
          <motion.div
            initial={{ left: "100px", opacity: "0" }}
            whileInView={{ left: "150px", opacity: "1", duration: "1" }}
            transition={{ duration: "1", type: "tween" }}
            className={`pages pages2 ${showMobilePages ? "pages-mobile" : ""}`}>
            {items.map((item) => (
              <motion.a href={`#${item}`} key={item}>
                {item}
              </motion.a>
            ))}
          </motion.div>
          <div className="pages">
            {items.map((item) => (
              <motion.a href={`#${item}`} key={item}>
                {item}
              </motion.a>
            ))}
          </div>
          <div className="join">
            <button>Join Now</button>
          </div>
        </div>
        <div className="home">
          <div className="leftSide">
            <div className="switch">
              <p>THE BEST FITNESS CLUB IN TOWN</p>
              <motion.div
                initial={{ left: "238px" }}
                whileInView={{ left: "8px" }}
                transition={{ ...transition, type: "tween" }}
                className="bar"></motion.div>
            </div>
            <div className="text">
              <h1>
                <span>SHAPE</span> YOUR IDEAL BODY
              </h1>
              <p>
                In here we will help you shape and build your ideal body and
                live your life to the fullest
              </p>
            </div>
            <div className="counters">
              <div>
                <h3>
                  <NumberCounter
                    end={140}
                    start={100}
                    delay="4"
                    preFix="+"></NumberCounter>
                </h3>
                <p>EXPERT COACHES</p>
              </div>
              <div>
                <h3>
                  <NumberCounter
                    end={978}
                    start={700}
                    delay="4"
                    preFix="+"></NumberCounter>
                </h3>
                <p>MEMBERS JOINED</p>
              </div>
              <div>
                <h3>
                  <NumberCounter
                    end={50}
                    start={30}
                    delay="4"
                    preFix="+"></NumberCounter>
                </h3>
                <p>FITNESS PROGRAMS</p>
              </div>
            </div>
            <div className="buttons">
              <button>Get Started</button>
              <button>Learn More</button>
            </div>
          </div>
          <div className="rightSide">
            <motion.div
              // initial={{ left: "5rem" }}
              // whileInView={{ left: "-6rem" }}
              initial={{ left: isMobileView ? "5rem" : "5rem" }}
              whileInView={{ left: isMobileView ? "0rem" : "-6rem" }}
              transition={transition}
              className="hero-image-back">
              <img src={HeroImageBack} alt="" />
            </motion.div>
            <div className="hero-image">
              <img src={HeroImage} alt="" />
            </div>
            <motion.div
              initial={{ right: isMobileView ? "-5rem" : "-1rem" }}
              whileInView={{ right: isMobileView ? "0rem" : "4rem" }}
              transition={transition}
              className="heart">
              <img src={Heart} alt="" />
              <p>Heart Rate</p>
              <h3>116 bpm</h3>
            </motion.div>
            <motion.div
              // initial={{ left: "-20rem" }}
              // whileInView={{ left: "-12rem" }}
              initial={{ left: isMobileView ? "5rem" : "-20rem" }}
              whileInView={{ left: isMobileView ? "0rem" : "-12rem" }}
              transition={transition}
              className="calories">
              <img src={Calories} alt="" />
              <div>
                <p>Calories Burned</p>
                <h3>220 kcal</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
