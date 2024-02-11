import React from "react";
import "./Reward.css";
// import firstplace from "../../assets/svg/first place medal_.svg";
// import secondplace from "../../assets/svg/second place medal_.svg";
// import thirdplace from "../../assets/svg/third place medal_.svg";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import reward_section_img from "../../assets/svg/reward_section_img.svg";
function Reward() {
  return (
    <div className="rewards__container" id="rewards">
      <div className="reward__section">
        <div data-aos="fade-up" aos-delay="200" className="section__title">
          <img
            data-aos="zoom-in"
            aos-delay="200"
            src={titleVectorLeft}
            alt=""
          />
          <h1>
            REWARDS <span className="reward__middle_head">AND</span> PERKS
          </h1>
          <img src={titleVecotrRight} alt="" />
        </div>
        <div className="reward__top__section">
          <div className="reward__left">
            <img
              data-aos="zoom-in"
              aos-delay="200"
              src={reward_section_img}
              alt=""
              style={{ pointerEvents: "none" }}
            />
          </div>
          <div className="reward__right">
            <div className="reward__right__top">
              <div
                data-aos="zoom-in"
                aos-delay="200"
                className="reward__cards__priz reward__first__prize"
              >
                
                <h2 style={{textAlign:'center'}}>Exciting rewards worth 15k !</h2>
              </div>
              
            </div>
            <div className="reward__right__middle">
              
            </div>
            <div className="reward__ul__item">
              <ul
                data-aos="fade-up"
                aos-delay="200"
                className="reward___points"
              >
                <li>1st: Awarded based on individual points.</li>
                <li>2nd: Awarded based on individual points.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
