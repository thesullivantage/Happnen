import React from "react";
//this is where you import the logo image
import Happnen from "./Screenshot (72).png";
import "./Logo.css";

const Logo = (props) => (
    <div>
    <img className="Logo" src={Happnen} {...props}>
    </img>
  </div>

);

export default Logo;