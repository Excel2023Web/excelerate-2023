import React from "react";
import "./Landing.css";
import landing from "../../assets/landing.svg";
import CountUp from "react-countup";
function Landing() {
  return (
    <div className="landing__container">
      <div className="landing__container_up">
        <img className="landing__left__section" src={landing} alt="" />
        <div className="landing__right__section">
          <h1>Campus Ambassador</h1>
          <button className="reg__btn">Register</button>
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
              k
            </h1>
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
