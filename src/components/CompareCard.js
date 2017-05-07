import React from 'react';


const CompareCard = (props) => {
  const displayCompareCard = Object.keys(props).map((key, index) => {
    return (
      <p key={index}>{key}: {props[key]}</p>
    )
  })
  return (
    <article className='card'>
      {displayCompareCard}
    </article>
  )
}

export default CompareCard;
