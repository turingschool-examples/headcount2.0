import React from 'react';

const Card = (props) => {
  return(
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
    )
}

export default Card;