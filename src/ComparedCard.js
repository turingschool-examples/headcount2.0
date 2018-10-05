import React from "react";
import PropTypes from "prop-types";
import "./ComparedCard.css";

const ComparedCard = props => {
  const districtNames = Object.keys(props);

  return (
    <div className="compared-card">
      <h3>AVERAGE: </h3>
      <p> {props[districtNames[0]]}</p>
      <h3>COMPARED AVERAGE:</h3> 
      <p> {props.compared}</p>
      <h3>AVERAGE:</h3>
      <p> {props[districtNames[1]]}</p>
    </div>
  );
};

ComparedCard.defaultProps = {
  props: PropTypes.obj
};

export default ComparedCard;
