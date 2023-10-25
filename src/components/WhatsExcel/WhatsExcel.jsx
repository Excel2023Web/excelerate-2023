import React from "react";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import "./WhatsExcel.css";
import ImageSlider from "./WhatExcelCard";

function WhatsExcel() {
  return (
    <div className="Whatexcel__continaer" id="about">
      <div className="resp__upper__heading">
        <img src={titleVectorLeft} alt="" />
        <h1>WHAT IS EXCEL</h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <p data-aos="fade-up" aos-delay="400" className="whats_excel_content">
        Excel is India’s second largest techno-managerial festival hosted by
        Govt. Model Engineering College, Kochi. Over the years, more than 2000
        universities and 1000 institutions from around the country have been
        part of Excel. With the rich legacy of 23 successful editions of Excel,
        be geared up for an even more exhilarating event this Excel 2023!
      </p>
      <ImageSlider />
    </div>
  );
}

export default WhatsExcel;
