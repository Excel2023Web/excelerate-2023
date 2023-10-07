import React, { useEffect } from "react";
import "./RespAndBenefits.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import benefitsLeftTop from "../../assets/svg/benefits_left_top.svg";
import benefitsRightTop from "../../assets/svg/benefits_right_top.svg";
import benefitsLeftBottom from "../../assets/svg/benefits_left_bottom.svg";
import benefitsRightBottom from "../../assets/svg/benefits_right_bottom.svg";

import Aos from "aos";
function RespAndBenefits() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <>
      <img src={benefitsLeftTop} alt="" className="benefits__left__top" />
      <img src={benefitsRightTop} alt="" className="benefits__right__top" />

      <div className="resp__bene__container" id="benefits">
        <div className="responsibilit__container">
          <div className="responsibilit__heading">
            <div className="resp__upper__heading">
              <img data-aos="zoom-in" src={titleVectorLeft} alt="" />
              <h1 data-aos="fade-up">RESPONSIBILITIES</h1>
              <img src={titleVecotrRight} alt="" />
            </div>
            <h2 data-aos="fade-up" className="resp__second__heading">
              Become the face of Excel in your Campus!
            </h2>
          </div>
          <div className="resposibility__points">
            <ul className="resp___points">
              <li data-aos="fade-up" aos-delay="150">
                Connect your classmates and friends with the innovative and lit
                events that Excel conducts.
              </li>
              <li data-aos="fade-up" aos-delay="200">
                Promote the posters and links shared to you in your college and
                provide sufficient publicity.
              </li>

              <li data-aos="fade-up" aos-delay="300">
                Encourage students of your college to participate in Excel and
                join one of the most reputed tech fests around!
              </li>
            </ul>
          </div>
        </div>

        <div className="responsibilit__container">
          <div className="responsibilit__heading">
            <div
              data-aos="zoom-in"
              aos-delay="200"
              className="resp__upper__heading"
            >
              <img src={titleVectorLeft} alt="" style={{pointerEvents:"none"}}/>
              <h1>BENEFITS</h1>
              <img src={titleVecotrRight} alt="" style={{pointerEvents:"none"}}/>
            </div>
          </div>
          <div className="resposibility__points">
            <ul data-aos="zoom-in" aos-delay="200" className="resp___points">
              <li>
                Get the chance to avail cash prizes and rewards of upto 12k!
              </li>
              <li>
                Enrich your communication, leadership, marketing and team
                skills.
              </li>

              <li>Earn KTU Activity Points through Issued Certificates.</li>
              <li>
                Add Excel Campus Ambassador as a valuable experience to your
                resume!
              </li>
              <li>
                Get discount ticket prices and free entry to selected Excel
                events.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={benefitsLeftBottom} alt="" className="benefits__left__bottom"style={{pointerEvents:"none"}} />
      <img
        src={benefitsRightBottom}
        alt=""
        style={{pointerEvents:"none"}}
        className="benefits__right__bottom"
      />
    </>
  );
}

export default RespAndBenefits;
