import React from 'react'
import PropType from 'prop-types'

const ComparedCard = ({ compareObject }) => {
    if(compareObject) {
  var compareKeys = Object.keys(compareObject)
  console.log(compareObject)
}
  return(
    <div>
      <h2>{compareKeys[0]}</h2>
      <h3>{compareObject.compared}</h3>
      <h3>{compareObject[compareKeys[0]]}</h3>
      <h3>{compareObject[compareKeys[1]]}</h3>
      <h2>{compareKeys[1]}</h2>
    </div>
  )
}

export default ComparedCard;