import React from 'react';

export const CardData = ({ data, schoolKey }) => {
  return (
    <div className='school-data'>
      {
      Object.keys(data[schoolKey].data)
        .map((key, index) => {
        return (
          <p key={index + Date.now()}>
            {key}: {data[schoolKey].data[key]}
          </p>
        )
      })
      }
    </div>
  )

}
