import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CompareCard = ({compareSelections, compareDistrictAverages}) => {

  if (compareSelections.length === 2) {
    const district1 = compareSelections[0]
    const district2 = compareSelections[1]

    // const comparedObj = compareDistrictAverages(compareSelections[0].school, compareSelections[1].school)
    
    return(
          <div className="compare-card">
             <Card district={district1}/> 
             <section className="comparison"></section>
             <Card district={district2}/> 
          </div>
      )
  } else {
    return (
      <div></div>
    )
  }
}

CompareCard.propTypes = {
 
}

export default CompareCard; 


