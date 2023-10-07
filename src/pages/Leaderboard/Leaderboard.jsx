import React, { useEffect } from "react";
import "./Leaderboard.css";
import Aos from "aos";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import LeaderTable from "./LeaderTable";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Leaderboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="leaderBrd__container">
      <FiArrowLeft onClick={goBack} className="goBack" />
      <div data-aos="fade-up" aos-delay="200" className="resp__upper__heading">
        <img data-aos="zoom-in" aos-delay="200" src={titleVectorLeft} alt="" />
        <h1>LEADERBOARD</h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <LeaderTable />
    </div>
  );
};

export default Leaderboard;
