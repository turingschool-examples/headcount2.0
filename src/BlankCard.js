import React from "react";
import applePic from "./images/apple.png";

import "./BlankCard.css";

const BlankCard = () => {
  return (
    <div className="blank-card">
      <img className="apple-pic" src={applePic} />
    </div>
  );
};

export default BlankCard;
