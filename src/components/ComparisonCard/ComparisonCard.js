import React from 'react';

const ComparisonCard = ({comparedObject}) => {
  //console.log(comparedObject)
  if (comparedObject) {
    console.log(Object.keys(comparedObject)[0])
  return (
    <article>
      <h3>{Object.keys(comparedObject)[0]}</h3>
      <h3>{comparedObject[Object.keys(comparedObject)[0]]}</h3>
      <h1>{comparedObject.compared}</h1>
      <h3>{comparedObject[Object.keys(comparedObject)[1]]}</h3>
      <h3>{Object.keys(comparedObject)[1]}</h3>

    </article>
  )
}
return (
  <div></div>
)
}

export default ComparisonCard;