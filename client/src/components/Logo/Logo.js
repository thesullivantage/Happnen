import React from "react";
//this is where you import the logo image
// Edit logo source below
import Happnen from "./happnen14.png";
import "./Logo.css";

const Logo = (props) => (
  <div className="LogoCont">
    <img className="Logo" src={Happnen} {...props}></img>
  </div>

);

export default Logo;