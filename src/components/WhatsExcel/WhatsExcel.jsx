import React from "react";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import "./WhatsExcel.css";
import ImageSlider from "./WhatExcelCard";
import Aos from "aos";
import { useEffect } from "react";
function WhatsExcel() {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="Whatexcel__continaer" id="about">
      <div className="resp__upper__heading">
        <img src={titleVectorLeft} alt="" />
        <h1 data-aos="fade-up">WHAT IS EXCEL</h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <p data-aos="fade-up"aos-delay="400" className="whats_excel_content">
        In 2001, the students of Govt. Model Engineering College founded Excel,
        the second-largest techno-managerial festival in the country and the
        first of its kind in South India. Excel has steadily hosted students
        from more than 2000 universities and 1000 institutions across the nation
        as it has grown exponentially over the years. The 22 successful editions
        of Excel that have preceded it have a rich legacy, and Excel 2022
        promises to be even better.
      </p>
      <ImageSlider />
    </div>
  );
}

export default WhatsExcel;
