import React from "react";
import Happnen from "./Logo.png";
import "./Logo.css";

const Logo = (props) => (
    <div>
    <img className="Logo" src={Happnen} {...props}>
    </img>
  </div>

);

export default Logo;