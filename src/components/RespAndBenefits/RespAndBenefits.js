import React from "react";
import "./RespAndBenefits.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import benefitsLeftTop from "../../assets/svg/benefits_left_top.svg";
import benefitsRightTop from "../../assets/svg/benefits_right_top.svg";
import benefitsLeftBottom from "../../assets/svg/benefits_left_bottom.svg";
import benefitsRightBottom from "../../assets/svg/benefits_right_bottom.svg";
function RespAndBenefits() {
  return (
    <>
      <img src={benefitsLeftTop} alt="" className="benefits__left__top" />
      <img src={benefitsRightTop} alt="" className="benefits__right__top" />

      <div className="resp__bene__container" id="benefits">
        <div className="responsibilit__container">
          <div className="responsibilit__heading">
            <div className="resp__upper__heading">
              <img src={titleVectorLeft} alt="" />
              <h1 data-aos="fade-up">RESPONSIBILITIES</h1>
              <img src={titleVecotrRight} alt="" />
            </div>
            <h2 data-aos="fade-up" className="resp__second__heading">
              Be a prominent representative of Excelerate 2023 on your campus!
            </h2>
          </div>
          <div className="resposibility__points">
            <ul className="resp___points">
              <li data-aos="fade-up" aos-delay="150">
                Foster connections among your peers by promoting the exciting
                and cutting-edge events organized by Excel.
              </li>

              <li data-aos="fade-up" aos-delay="200">
                Share and amplify posters, links, and promotional materials
                provided to you within your college community, ensuring maximum
                publicity.
              </li>

              <li data-aos="fade-up" aos-delay="300">
                Inspire and motivate fellow students to actively engage in Excel
                and become part of one of the most esteemed techno-managerial
                festivals in the region.
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
              <img
                src={titleVectorLeft}
                alt=""
                style={{ pointerEvents: "none" }}
              />
              <h1>BENEFITS</h1>
              <img
                src={titleVecotrRight}
                alt=""
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
          <div className="resposibility__points">
            <ul data-aos="zoom-in" aos-delay="200" className="resp___points">
              <li>Avail cash prizes and benefits from a prize pool of ₹15K!</li>
              <li>Earn KTU points through issued certificates.</li>

              <li>
                Get discounts on ticket prices and free entry to certain Excel
                events.
              </li>
              <li>
                Enrich your communication, leadership, marketing and
                collaboration skills.
              </li>
              <li>
                Add Excel Campus Ambassador as a valuable experience to your
                resume!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={benefitsLeftBottom}
        alt=""
        className="benefits__left__bottom"
        style={{ pointerEvents: "none" }}
      />
      <img
        src={benefitsRightBottom}
        alt=""
        style={{ pointerEvents: "none" }}
        className="benefits__right__bottom"
      />
    </>
  );
}

export default RespAndBenefits;
