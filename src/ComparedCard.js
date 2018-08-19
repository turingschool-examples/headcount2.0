import React from 'react'
import './ComparedCard.css'
import PropType from 'prop-types'

const ComparedCard = ({ compareObject }) => {
    if(compareObject) {
  var compareKeys = Object.keys(compareObject)
  console.log(compareObject)
}
  return(
    <div className={compareObject.compared ? 'compareCard' : 'none'}>
      <h2>{compareKeys[0]}</h2>
      <h3>{compareObject.compared}</h3>
      <h3>{compareObject[compareKeys[0]]}</h3>
      <h3>{compareObject[compareKeys[1]]}</h3>
      <h2>{compareKeys[1]}</h2>
    </div>
  )
}

ComparedCard.propTypes = {
  compareObject: PropType.object
}

export default ComparedCard;