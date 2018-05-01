import React from 'react';

const Card = ( props ) => {
  const listItems = props.stats.map(( item, index ) => {
    return (
      <li key={ index }> { item } </li>
    )
  })
  
  return (
    <div> 
      <h1>
        { props.location }
      </h1>
      <ul>
        { listItems }
      </ul>
    </div>

  )
}





export default Card;