import React, { useState, useEffect } from "react";
import "./Leaderboard.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
// import LeaderTable from "./LeaderTable";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import Lottie from "lottie-react";
import comingSoonAnimation from "../../assets/animations/coming_soon.json";
const Leaderboard = () => {
  const size = useScreenWidth();
  const [animationSize, setAnimationSize] = useState();
  useEffect(() => {
    if (size > 600) {
      setAnimationSize(450);
    } else if (size > 500) {
      setAnimationSize(450);
    } else if (size > 400) {
      setAnimationSize(400);
    } else {
      setAnimationSize(300);
    }
  }, [size]);
  const navigate = useNavigate();
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
      <div className="coming__son">
        <Lottie
          animationData={comingSoonAnimation}
          loop={true}
          autoplay={true}
          style={{ width: animationSize, height: animationSize }}
        />
      </div>
      

      {/* <LeaderTable /> */}
    </div>
  );
};

export default Leaderboard;
