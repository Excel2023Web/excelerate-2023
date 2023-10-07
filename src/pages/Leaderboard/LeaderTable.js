import React from "react";
import "./Leaderboard.css";
import excelLogo from "../../assets/png/excelLogo.png";
const LeaderTable = () => {
  return (
    <div className="leaderTable">
      <div className="leader__card">
        <p>1.</p>
        <div className="leader__name_n_pic">
          <img src={excelLogo} alt="" />
          <p>Achyuth Mohan</p>
        </div>
        <p>100</p>
      </div>
      <div className="leader__card">
        <p>2.</p>
        <div className="leader__name_n_pic">
          <img src={excelLogo} alt="" />
          <p>Sanosh Jacob</p>
        </div>
        <p>100</p>
      </div>
      <div className="leader__card">
        <p>3.</p>
        <div className="leader__name_n_pic">
          <img src={excelLogo} alt="" />
          <p>Adithya Ajith</p>
        </div>
        <p>100</p>
      </div>
      <div className="leader__card">
        <p>3.</p>
        <div className="leader__name_n_pic">
          <img src={excelLogo} alt="" />
          <p>Lekshmi S</p>
        </div>
        <p>100</p>
      </div>
      <div className="leader__card">
        <p>4.</p>
        <div className="leader__name_n_pic">
          <img src={excelLogo} alt="" />
          <p>Abhishek Kurian</p>
        </div>
        <p>100</p>
      </div>
    </div>
  );
};

export default LeaderTable;
