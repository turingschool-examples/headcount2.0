import React from 'react'

import DumbCard from './DumbCard'
import ComparisonCard from './ComparisonCard'

import '../css/CardContainer.css'


const Comparison = (props) => {

  return (
    <section className='comparison-container'>
      <div className="card-container">
        <DumbCard 
          data={props.selection[0]}
          key={props.selection[0].location}
        />
        <ComparisonCard
          data={props.selection}
          compareDistrictAverages={props.compareDistrictAverages}
        />
        <DumbCard 
          data={props.selection[1]}
          key={props.selection[1].location}
        />
        
      </div>
      <button onClick={props.clearSelections}>Return</button>
    </section>
  )
}


export default Comparison;