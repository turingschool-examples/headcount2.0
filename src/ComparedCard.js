import React from "react";
import PropTypes from "prop-types";
import "./ComparedCard.css";

const ComparedCard = props => {
  const districtNames = Object.keys(props);

  return (
    <div className="compared-card">
      <h3>
        average: <br /> {props[districtNames[0]]}
      </h3>
      <h3>
        compared average: <br /> {props.compared}
      </h3>
      <h3>
        average: <br /> {props[districtNames[1]]}
      </h3>
    </div>
  );
};

ComparedCard.defaultProps = {
  props: PropTypes.obj
};

export default ComparedCard;
