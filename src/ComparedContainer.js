import React from 'react'
import ComparedCard from './ComparedCard'
import PropType from 'prop-types'

const ComparedContainer = ({ compareObject }) => {
//   if(compareObject) {
//   const compareKeys = Object.keys(compareObject)
  
 
// }
  return <ComparedCard 
    compareObject={compareObject}
  />

}

export default ComparedContainer;