import React from 'react'

import Card from './Card'

import '../css/CardContainer.css'


const Comparison = (props) => {

  console.log(props)
  return (
    <section className='comparison-container'>
      <div className="card-container">
        {props.selection.map((district) => {
          return (
            <Card 
              data={district}
              key={district.location}
              processSelection={props.processSelection}
            />
          )
        })}
      </div>
      <button onClick={props.clearSelections}>Return</button>
    </section>
  )
}


export default Comparison;