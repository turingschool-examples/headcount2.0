import React from 'react'

const Card  = ( {location, data, schools} ) => {

  let dataPairs = schools.makeCardArray(data)

  return(
    <section className="card">
      <h3 className="card-school-name">{location}</h3>
      {dataPairs.map((set, i) =>{
        return(
          <div
            className="card-info"
            key = {i}>
            <p className={schools.highLowValues(set)}>{set}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Card
