import React, {  useState } from "react";
import "./Navbar.css";
import excelLogo from "../../assets/png/excelLogo.png";
import { Link as NavLink } from "react-scroll";
import AccountHandler from "../../auth/accountHandler";
// import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const onLogoutClick = () => {
    AccountHandler.logOutUser();
  };
  return (
    <div className="nav__main_container">
      <img
        className="nav__outside_logo"
        src={excelLogo}
        onClick={() => {
          window.open("https://excelmec.org");
        }}
        alt="excelLogo"
      />
      <div className="menu-wrap">
        {/* onChange={e => {}} is added to avoid an error msg in the console: ' You provided a `checked` prop to a form field without ........' */}
        <input
          type="checkbox"
          className="toggler"
          onClick={handleClick}
          checked={checked}
          onChange={(e) => {}}
        />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul style={{ padding: "0" }} className="overlay-content pt-2">
                <li onClick={handleClick}>
                  <NavLink to="home" smooth={true} onClick={handleClick}>
                    HOME
                  </NavLink>
                </li>
                <li onClick={handleClick}>
                  <NavLink to="about" smooth={true} onClick={handleClick}>
                    ABOUT
                  </NavLink>
                </li>
                <li onClick={handleClick}>
                  <NavLink to="benefits" smooth={true} onClick={handleClick}>
                    BENEFITS
                  </NavLink>
                </li>
                <li onClick={handleClick}>
                  <NavLink to="rewards" smooth={true} onClick={handleClick}>
                    REWARDS
                  </NavLink>
                </li>
                <li onClick={handleClick}>
                  <NavLink to="faq" smooth={true} onClick={handleClick}>
                    FAQ
                  </NavLink>
                </li>
                <li onClick={handleClick}>
                  <NavLink to="contacts" smooth={true} onClick={handleClick}>
                    CONTACTS
                  </NavLink>
                </li>
                {AccountHandler.isUserLoggedIn() ? (
                  <button className="logout_btn" onClick={onLogoutClick}>
                    Logout
                  </button>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
