import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';



const CompareContainer = ( { data, display, handleCompare} ) => {
  let counter = 0
  let comparedCards = display.map( comparison => {
  console.log(comparison)
    return <Card 
              {...comparison} 
              className={'card' + [comparison]} 
              key={counter++} 
              handleCompare={ handleCompare }/>
    }
  )

  return (
    <div>
      { comparedCards }
    </div>
    )
}  

CompareContainer.propTypes = {

  display: PropTypes.array
}

export default CompareContainer