import React from 'react';
import Card from './Card'

const Districts = (props) => {

  const schoolKeys = Object.keys(props.schoolData.stats)

  return (
    <div>
      {
        schoolKeys.map((school, i) => {
          return <Card key={i} school={props.schoolData.stats[school]} />
        })
      }

    </div>
  )
}

export default Districts