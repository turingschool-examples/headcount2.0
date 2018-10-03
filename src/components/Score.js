import React from 'react'

const Score = (props) => {
  let color;

  if (props.data >= .5) {
    color = 'green'
  } else {
    color = 'red'
  }
  
  return (
    <section className="score-wrapper">
      <p className={color}>{props.year}: {props.data}</p>
    </section>
  )

}

export default Score;