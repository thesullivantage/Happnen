import React from "react";
import Icon from "./Icon10.png";
import "./Icon.css";

const HappnenIcon = (props) => (
    <div>
    <img className="Icon" src={Icon} {...props}>
    </img>
  </div>

);

export default HappnenIcon;