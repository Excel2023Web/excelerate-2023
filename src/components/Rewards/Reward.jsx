import React from "react";
import "./Reward.css";
import firstplace from "../../assets/svg/first place medal_.svg";
import secondplace from "../../assets/svg/second place medal_.svg";
import thirdplace from "../../assets/svg/third place medal_.svg";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import reward_section_img from "../../assets/svg/reward_section_img.svg";
function Reward() {
  return (
    <div className="reward__section">
      <div className="section__title">
        <img src={titleVectorLeft} alt="" />
        <h1>
          Reward <span className="reward__middle_head">and</span> Perks
        </h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <div className="reward__top__section">
        <div className="reward__left">
          <img src={reward_section_img} alt="" />
        </div>
        <div className="reward__right">
          <div className="reward__right__top">
            <div className="reward__cards__priz reward__first__prize">
              <img src={firstplace} alt="" />
              <h2>10,000</h2>
            </div>
            <div className="reward__cards__priz reward__second__prize">
              <img src={secondplace} alt="" />
              <h2>10,000</h2>
            </div>
          </div>
          <div className="reward__right__middle">
            <div className="reward__cards__priz reward__third__prize">
              <img src={thirdplace} alt="" />
              <h2>10,000</h2>
            </div>
          </div>
          <div className="reward__ul__item">
            <ul className="reward___points">
              <li>
              Remaining 7 participants in the top 10 of the leaderboard will get <span className="reward__pink">Rs 500 each</span>.

              </li>
              <li>
              Get <span className="reward__pink">discount</span>  ticket prices and <span className="reward__pink">free entry</span>  to selected Excel events.
              </li>

              <li>
                
                Certificate and <span className="reward__pink">activity points</span>  will be awarded on completing minimum criteria.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
