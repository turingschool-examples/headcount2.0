import React from 'react'

const Card = ({school, data}) => {

  return(
  <div>
    {Object.keys(data[school].data).map((datapiece, index) => {
      if(data[school].data >= 0.5) {
        return(
            <p className='above' key={index}>{datapiece}: {data[school].data[datapiece]}</p>
        )
      }
      else {
        return(
            <p className='below' key={index}>{datapiece}: {data[school].data[datapiece]}</p>
        )
      }
      })
    }
    </div>
  )
}

export default Card
