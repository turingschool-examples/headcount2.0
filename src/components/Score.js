import React from 'react'

const Score = (props) => {
  return (
    <section>
      <p className="score">{props.year}: {props.data}</p>
    </section>
  )

}

export default Score;