import React from "react";
import applePic from "../../images/apple.png";
import pencilIcon from "../../images/pencil.svg";
import PropTypes from "prop-types";
import "./ComparisonCard.css";

const ComparisonCard = props => {
  const districtNames = Object.keys(props);
  if (districtNames[0] === "props" || districtNames[1] === "props") {
    return (
      <div className="apple-placeholder">
        <img className="apple-pic" alt="apple" src={applePic} />
      </div>
    );
  } else {
    return (
      <div className="comparison-card">
        <h3 className="avg-top">
          <img className="pencil-icon" alt="pencil" src={pencilIcon} />
          AVERAGE
        </h3>
        <p> {props[districtNames[0]]}</p>
        <h3>COMPARED AVERAGE</h3>
        <p> {props.compared}</p>
        <h3 className="avg-bottom">
          AVERAGE
          <img className="pencil-icon rotate" alt="pencil" src={pencilIcon} />
        </h3>
        <p> {props[districtNames[1]]}</p>
      </div>
    );
  }
};

ComparisonCard.defaultProps = {
  props: PropTypes.obj
};

ComparisonCard.propTypes = {
  compared: PropTypes.number
};

export default ComparisonCard;
