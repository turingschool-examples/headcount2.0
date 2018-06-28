import React from 'react';
import Card from './Card.js';

const CardContainer = ({ cards, title, content}) => {
  const container = title.map(card => <Card title={title}
                                            content={content}/>)
  return(
    <div className="Container">
    {container}
    </div>
  )

}


export default CardContainer;