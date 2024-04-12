import "../Programs/Programs.scss";
import React from "react";
import Dumbell from "../../assets/dumbell.svg";
import Running from "../../assets/runing.svg";
import heartHealth from "../../assets/heartHealth.svg";
import Flame from "../../assets/flame.svg";
import rightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <>
      <section className="Programs">
        <div className="header">
          <h2>
            EXPLORE OUR <span>PROGRAMS</span> TO SHAPE YOU
          </h2>
        </div>
        <div className="boxes">
          <div>
            <img src={Dumbell} alt="" />
            <h3>Strength Training</h3>
            <p>
              In this program, you are trained to improve your strength through
              many exercises.
            </p>
            <button>
              Join Now
              <img src={rightArrow} alt="" />
            </button>
          </div>
          <div>
            <img src={Running} alt="" />
            <h3>Cardio Training</h3>
            <p>
              In this program, you are trained to do sequential moves in range
              of 20 until 30 minutes.
            </p>
            <button>
              Join Now
              <img src={rightArrow} alt="" />
            </button>
          </div>
          <div>
            <img src={Flame} alt="" />
            <h3>Fat Burning</h3>
            <p>
              This Program is suitable for you who wants to get rid of your fat
              and lose weight.
            </p>
            <button>
              Join Now
              <img src={rightArrow} alt="" />
            </button>
          </div>
          <div>
            <img src={heartHealth} alt="" />
            <h3>Health Fitness</h3>
            <p>
              this program is designed for those who exercises only for their
              body fitness not body building
            </p>
            <button>
              Join Now
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
