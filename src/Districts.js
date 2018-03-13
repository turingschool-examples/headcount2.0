import React from 'react';
import Card from './Card'

const Districts = (props) => {

  // const schoolKeys = Object.keys(props.schoolData.stats)
  console.log(props.searchArray)
  return (
    <div>
      {
        
        props.searchArray.map((school, i) => {
          console.log(school)
          return <Card key={i} school={school} />
        })
      }
    </div>
  )
}

export default Districts