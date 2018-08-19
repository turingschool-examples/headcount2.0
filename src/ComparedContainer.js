import React from 'react'
import ComparedCard from './ComparedCard'
import PropType from 'prop-types'

const ComparedContainer = ({ compareObject }) => {
  console.log(compareObject)
  return <ComparedCard 
    compareObject={compareObject}
  />

}

ComparedContainer.propTypes = {
  compareObject: PropType.object
}

export default ComparedContainer;