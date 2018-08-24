import React from "react";
import Happnen from "./Logo5.png";
import "./Logo.css";

const Logo = (props) => (
    <div>
    <img className="Logo" src={Happnen} {...props}>
    </img>
  </div>

);

export default Logo;