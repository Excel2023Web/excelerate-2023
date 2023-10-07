import React from "react";
import "./Scroller.css";
import { Link } from "react-scroll";
function Scroller() {
  return (
    <Link className="scroller_body" smooth={true}>
      <div class="box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Link>
  );
}

export default Scroller;
