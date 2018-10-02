import React, { Component } from "react";
import Card from "./Card";

const CardContainer = props => {
  console.log(Object.keys(props.cards))
  return (
    <div>
      {Object.keys(props.cards).map(name => {
        return <h1>{name}</h1>;
      })}
    </div>
  );
};

export default CardContainer;
