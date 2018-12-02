import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import './CompareCard.css'

const CompareCard = ({compareSelections, compareDistrictAverages}) => {

  if (compareSelections.length === 2) {
    const district1 = compareSelections[0]
    const district2 = compareSelections[1]
  
    const comparedObj = compareDistrictAverages(district1.school, district2.school)

    return (
          <div className="compare-card">
             <Card district={district1}/> 
             <section className="comparison">
              <h3 className="compare-title">COMPARISONS BY AVERAGE:</h3>
              <h3>{district1.school}: {comparedObj[district1.school]}</h3>
              <div className="compare-stats"> 
                <h3>COMPARED</h3>
                <h3>----{comparedObj.compared}----</h3>
              </div>
              <h3>{district2.school}: {comparedObj[district2.school]}</h3>
              <button className="remove">REMOVE</button>
             </section>
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
  compareSelections: PropTypes.arrayOf(PropTypes.object),
  compareDistrictAverages: PropTypes.func
}

export default CompareCard; 


