import React from "react";
import "./Landing.css";
import landing from "../../assets/landing.svg";
import CountUp from "react-countup";
function Landing() {
  return (
    <div className="landing__container">
      <div className="landing__container_up">
        <div className="landing__left__section">
          <img src={landing} alt="" />
        </div>
        <div className="landing__right__section">
          <div className="landing__right__top">
            <h1>
              Campus
              <br />
              Ambassador
            </h1>
          </div>
          <div className="landing__right__bottom">
            <button className="landing__reg__button">Register</button>
          </div>
        </div>
      </div>
      <div className="landing__features">
        <div className="landing__card">
            <div className="landing__card__heading">
                <h1>
                <CountUp
                end={40}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
                  k</h1>
            </div>
            <div className="landing__card__content">
                <h4>FootFall</h4>
            </div>
        </div>
        <div className="landing__card">
            <div className="landing__card__heading">
                <h1>40+</h1>
            </div>
            <div className="landing__card__content">
                <h4>Events</h4>
            </div>
        </div>
        <div className="landing__card">
            <div className="landing__card__heading">
                <h1>40k</h1>
            </div>
            <div className="landing__card__content">
                <h4>Prize Pool</h4>
            </div>
        </div>
      </div>
        
    </div>
  );
}

export default Landing;
