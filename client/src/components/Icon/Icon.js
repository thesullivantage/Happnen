import React from "react";
import Icon from "./HappnenIcon.png";
import "./Icon.css";

const HappnenIcon = (props) => (
    <div>
    <img className="Icon" src={Icon} {...props}>
    </img>
  </div>

);

export default HappnenIcon;