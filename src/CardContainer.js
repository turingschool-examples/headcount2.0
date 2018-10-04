import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

const CardContainer = ({stats}) => {

  //move this map into helper so we bring in an array of the data exactly how we want it.

  const cards = Object.keys(stats).map( district => {
    let years = [];
    const districtData = stats[district].reduce((data, year) => {
    
      if(typeof year.data !== 'number'){ year.data = 0} //ternerary?
      const roundedData = Math.round(year.data * 1000)/1000

      years.push({year: year.year, data: roundedData})
      let orderedYears = years.sort((a, b) => a.year - b.year)

      data = {location: district, stats: orderedYears}
        return data
      }, {})

    return <Card key={Date.now()} districtData={districtData} />
  })
  
  return(
    <div className='cardContainer'>
      {cards}
    </div>

  )
}

export default CardContainer