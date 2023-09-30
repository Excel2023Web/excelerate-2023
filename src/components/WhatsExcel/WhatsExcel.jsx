import React from "react";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import "./WhatsExcel.css";
import ExcelCArd from "./WhatExcelCard";
import Aos from "aos";
import { useEffect } from "react";
function WhatsExcel() {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="Whatexcel__continaer">
      <div className="whatexcel__top">
        <div className="whatexcel__heading">
          <img src={titleVectorLeft} alt="" />
          <h1 data-aos="fade-up">What is EXCEL</h1>
          <img src={titleVecotrRight} alt="" />
        </div>
        <p data-aos="fade-up" aos-delay="200" className="whatexcel__para">
          In 2001, the students of Govt. Model Engineering College founded
          Excel, the second-largest techno-managerial festival in the country
          and the first of its kind in South India. Excel has steadily hosted
          students from more than 2000 universities and 1000 institutions across
          the nation as it has grown exponentially over the years.
          <br />
          The 22 successful editions of Excel that have preceded it have a rich
          legacy, and Excel 2022 promises to be even better.
        </p>
      </div>
      <div className="whats__slider">
        <ExcelCArd />
      </div>
    </div>
  );
}

export default WhatsExcel;
