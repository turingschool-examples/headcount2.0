import React from 'react'

const Score = (props) => {
  let color;
  let icon;

  if (props.data >= .5) {
    color = 'green'
    icon = './drop-up-arrow.svg'
  } else {
    color = 'red'
    icon = './drop-down-arrow.svg'
  }
  
  return (
    <section className="score-wrapper">
      <p className='score'><img src={icon} /> {props.year}: {props.data}</p>
    </section>
  )

}

export default Score;