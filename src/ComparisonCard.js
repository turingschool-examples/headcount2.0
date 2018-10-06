import React from "react";
import PropTypes from "prop-types";

import pencilIcon from "./images/pencil.svg";
import "./ComparisonCard.css";

const ComparisonCard = props => {
  const districtNames = Object.keys(props);

  return (
    <div className="comparison-card">
      <h3 className="avg-top">
        <img className="arrow-icon" alt="arrow" src={pencilIcon} />
        AVERAGE
      </h3>
      <p> {props[districtNames[0]]}</p>
      <h3>COMPARED AVERAGE</h3>
      <p> {props.compared}</p>
      <h3 className="avg-bottom">
        AVERAGE
        <img className="arrow-icon rotate" alt="arrow" src={pencilIcon} />
      </h3>
      <p> {props[districtNames[1]]}</p>
    </div>
  );
};

ComparisonCard.defaultProps = {
  props: PropTypes.obj
};

export default ComparisonCard;
