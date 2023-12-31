import React, { useState, useContext, useEffect } from "react";
import "./Landing.css";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import AccountHandler from "../../auth/accountHandler";
import PhoneNoDialog from "../PhoneNoDialog/PhoneNoDialog";
import IsAuthRender from "../IsAuthRender/IsAuthRender";
import { UserContext } from "../../contexts/UserContext";
import Bubbles from "../Bubbles/Bubbles";
// import Scroller from "../Scroller/Scroller";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import Lottie from "lottie-react";
import socialAnimation from "../../assets/animations/social_media.json";
function Landing() {

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
        <Lottie
          animationData={socialAnimation}
          loop={true}
          autoplay={true}
          style={{ width: animationSize, height: animationSize }}
        />
        <div className="landing__right__section">
          <h1>
            Excelerate <br /> Campus Ambassador
          </h1>

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
        <div className="landing__card">
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
