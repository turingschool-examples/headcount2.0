import React from 'react'

import DumbCard from './DumbCard'

import '../css/CardContainer.css'


const Comparison = (props) => {

  console.log(props)
  return (
    <section className='comparison-container'>
      <div className="card-container">
        {props.selection.map((district) => {
          return (
            <DumbCard 
              data={district}
              key={district.location}
            />
          )
        })}
      </div>
      <button onClick={props.clearSelections}>Return</button>
    </section>
  )
}


export default Comparison;