import React from 'react'

const Card  = ( {school, data} ) => {

  const dataPairs = Object.keys(data).map((yearData) =>{
    return `${yearData}: ${data[yearData]}`
  })
  // console.log(dataPairs)

  return(
    <section>
      <h3>{school}</h3>
      {dataPairs.map((set, i) =>{
        return(
          <div key = {i}>
            <p>{set}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Card
