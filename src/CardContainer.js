import React from "react";
import Card from "./Card";
import "./CardContainer.css";

const CardContainer = ({ cards }) => {
  const schoolList = Object.keys(cards);
  const allCards = schoolList.map(school => (
    <Card key={school} {...cards[school]} />
  ));

  return <div>{allCards}</div>;
};

export default CardContainer;
