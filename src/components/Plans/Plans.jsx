import "../Plans/Plans.scss";
import React from "react";
import heartHealth from "../../assets/heartHealth.svg";
import flame from "../../assets/flame.svg";
import dumbell from "../../assets/dumbell.svg";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <>
      <section className="Plans">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <h2>
          READY TO START <span>YOUR JOURNEY </span>NOW WITH US
        </h2>
        <div className="plan">
          <div className="basic-plan">
            <img src={heartHealth} alt="" />
            <h3>BASIC PLAN</h3>
            <h1>$ 25</h1>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>2 hours of exercises</p>
            </div>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>Free consultation with coaches</p>
            </div>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>Access to the community</p>
            </div>
            <button>Join Now</button>
          </div>
          <div className="premium-plan">
            <img src={flame} alt="" />
            <h3>PREMIUM PLAN</h3>
            <h1>$ 30</h1>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>5 hours of exercises</p>
            </div>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>Free consultation with coaches</p>
            </div>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>Access to minibar</p>
            </div>
            <button>Join Now</button>
          </div>
          <div className="pro-plan">
            <img src={dumbell} alt="" />
            <h3>PRO PLAN</h3>
            <h1>$ 45</h1>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>8 hours of exercises</p>
            </div>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>Consultation of private coaches</p>
            </div>
            <div className="ticks">
              <img src={whiteTick} alt="" />
              <p>Free Fitness Merchandises</p>
            </div>
            <button>Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
