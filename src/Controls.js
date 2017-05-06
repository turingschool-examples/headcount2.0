import React from 'react';

export const Controls = ({onChange}) => {

    return(
      <section className='controls-container'>
        <input className='input-field'
                type='text'
                placeholder='Search by district'
                onChange={(event) => onChange(event.target.value)}
          />
      </section>
    )
}
