import React from "react";

const ComparedCard = props => {
  const districtNames = Object.keys(props);
  console.log(districtNames);

  return (
    <div className="card-comparison">
      <h3>average: {props[districtNames[0]]}</h3>
      <h3>average: {props[districtNames[1]]}</h3>
      <h3>compared average: {props.compared}</h3>
    </div>
  );
};

export default ComparedCard;
