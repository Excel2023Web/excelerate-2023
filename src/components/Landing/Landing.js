import React, { useState, useContext } from "react";
// import { useScreenWidth } from "../../hooks/useScreenWidth";
import "./Landing.css";
import landing from "../../assets/landing.svg";
import CountUp from "react-countup";
// import AccountHandler from "../../auth/accountHandler";
import { useNavigate } from "react-router-dom";
import AccountHandler from "../../auth/accountHandler";
import PhoneNoDialog from "../PhoneNoDialog/PhoneNoDialog";
import IsAuthRender from "../IsAuthRender/IsAuthRender";
import { UserContext } from "../../contexts/UserContext";
function Landing() {
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
  const onLogoutClick = () => {
    AccountHandler.logOutUser();
  };

  return (
    <div className="landing__container">
       <PhoneNoDialog open={open} handleClose={handleClose} />
      <div className="landing__container_up">
        <img className="landing__left__section" src={landing} alt="" />
        <div className="landing__right__section">
          <h1>Campus Ambassador</h1>
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
                end={40}
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
              k
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
                end={40}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
              k
            </h1>
          </div>
          <div className="landing__card__content">
            <h4>Prize Pool</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
