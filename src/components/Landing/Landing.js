import React, { useState, useContext, useEffect } from "react";
// import { useScreenWidth } from "../../hooks/useScreenWidth";
import "./Landing.css";
// import landing from "../../assets/landing.svg";
import CountUp from "react-countup";
// import AccountHandler from "../../auth/accountHandler";
import { useNavigate } from "react-router-dom";
import AccountHandler from "../../auth/accountHandler";
import PhoneNoDialog from "../PhoneNoDialog/PhoneNoDialog";
import IsAuthRender from "../IsAuthRender/IsAuthRender";
import { UserContext } from "../../contexts/UserContext";
import Bubbles from "../Bubbles/Bubbles";
import Aos from "aos";
import Scroller from "../Scroller/Scroller";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import Lottie from "react-lottie";
import socialAnimation from "../../assets/animations/social_media.json";
function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  const size = useScreenWidth();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: socialAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
  const [open, setOpen] = useState(false);
  const { referrelId, isAmbassador } = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const onLoginClick = () => {
    if (!AccountHandler.isUserLoggedIn()) {
      AccountHandler.logInUser();
    } else {
      navigate("/leaderboard");
    }
  };

  // eslint-disable-next-line
 

  return (
    <div className="landing__container" id="home">
      <PhoneNoDialog open={open} handleClose={handleClose} />
      <div className="landing__container_up">
        {/* <img
          data-aos="zoom-in"
          className="landing__left__section"
          src={landing}
          alt=""
        /> */}
        <Lottie
          options={defaultOptions}
          height={animationSize}
          width={animationSize}
          style={{ margin: 0, zIndex: 1 }}
        />
        <div className="landing__right__section">
          {size < 900 ? <Scroller /> : null}

          <h1>Excelerate <br /> Campus Ambassador</h1>
          {/* <button className="reg__btn" onClick={onLoginClick}>Register</button> */}

          {AccountHandler.isUserLoggedIn() ? (
            <div>
              {AccountHandler.isUserLoggedIn() ? (
                <div>
                  {isAmbassador ? (
                    <IsAuthRender
                      state={2}
                      referrelId={referrelId}
                      open={open}
                      setOpen={setOpen}
                      onLoginClick={onLoginClick}
                    />
                  ) : (
                    <IsAuthRender
                      state={1}
                      referrelId={referrelId}
                      open={open}
                      setOpen={setOpen}
                      onLoginClick={onLoginClick}
                    />
                  )}
                </div>
              ) : (
                <IsAuthRender
                  state={3}
                  referrelId={referrelId}
                  open={open}
                  setOpen={setOpen}
                  onLoginClick={onLoginClick}
                />
              )}
            </div>
          ) : (
            <IsAuthRender
              state={3}
              referrelId={referrelId}
              open={open}
              setOpen={setOpen}
              onLoginClick={onLoginClick}
            />
          )}
        </div>
      </div>

      <div className="landing__features">
        <div className="landing__card">
          <div className="landing__card__heading">
            <h1>
              <CountUp
                end={8}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
              k
            </h1>
          </div>
          <div className="landing__card__content">
            <h4>FootFall</h4>
          </div>
        </div>
        <div data-aos="fade-up" aos-delay="200" className="landing__card">
          <div className="landing__card__heading">
            <h1>
              <CountUp
                end={40}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
              +
            </h1>
          </div>
          <div className="landing__card__content">
            <h4>Events</h4>
          </div>
        </div>
        <div className="landing__card">
          <div className="landing__card__heading">
            <h1>
              <CountUp
                end={4}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
              L+
            </h1>
          </div>
          <div className="landing__card__content">
            <h4>Prize Pool</h4>
          </div>
        </div>
      </div>
      <Bubbles />
    </div>
  );
}

export default Landing;
