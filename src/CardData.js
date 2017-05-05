import React from 'react';

export const CardData = ({ data, schoolKey }) => {
  return (
    <div className='school-data'>
      {
      Object.keys(data[schoolKey].data)
        .map((key, index) => {
        if (data[schoolKey].data[key] > 0.5) {
          return (
            <p className='over school-data' key={index + Date.now()}>
              {key}: {data[schoolKey].data[key]}
            </p>
          )
        } else {
          return (
            <p className='under school-data' key={index + Date.now()}>
              {key}: {data[schoolKey].data[key]}
            </p>
          )
        }
      })
      }
    </div>
  )

}
