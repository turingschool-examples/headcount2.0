import React from 'react';

function Card(props) {
// turn data props into an array, map over it to plug it into <li>
// object.value to get the years
// map over that array and return an array 
// where each object is an index in the array
console.log(props.data)
  return (
    <div>
      <h3> {props.location} </h3>
    </div> 
  )
} 

export default Card