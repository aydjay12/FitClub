import "./Hero.scss";
import Logo from "../../assets/logo.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import HeroImage from "../../assets/hero_image.png";
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import menu from "../../assets/bars.png";
import React from "react";

const Hero = () => {
  const items = ["Home", "Programs", "Why Us", "Plans", "Testimonials"];

  return (
    <>
      <section className="Hero">
        <div className="orange-background"></div>
        <div className="Navbar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="menu">
            <img src={menu} alt="" />
          </div>
          {/* <div className="pages">
            <a href="">Home</a>
            <a href="">Programs</a>
            <a href="">Why Us</a>
            <a href="">Plans</a>
            <a href="">Testimonials</a>
          </div> */}
          <div className="pages">
            {items.map((item) => (
              <a href={`#${item}`} key={item}>
                {item}
              </a>
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
              <div className="bar"></div>
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
                <h3>+ 140</h3>
                <p>EXPERT COACHES</p>
              </div>
              <div>
                <h3>+ 978</h3>
                <p>MEMBERS JOINED</p>
              </div>
              <div>
                <h3>+ 50</h3>
                <p>FITNESS PROGRAMS</p>
              </div>
            </div>
            <div className="buttons">
              <button>Get Started</button>
              <button>Learn More</button>
            </div>
          </div>
          <div className="rightSide">
            <div className="hero-image-back">
              <img src={HeroImageBack} alt="" />
            </div>
            <div className="hero-image">
              <img src={HeroImage} alt="" />
            </div>
            <div className="heart">
              <img src={Heart} alt="" />
              <p>Heart Rate</p>
              <h3>116 bpm</h3>
            </div>
            <div className="calories">
              <img src={Calories} alt="" />
              <div>
                <p>Calories Burned</p>
                <h3>220 kcal</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
