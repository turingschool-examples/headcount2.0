import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  render () {
    return(

      <section className='controls-container'>
        <input className='input-field'
                type='text'
                placeholder='Search by district'
                value={this.state.input}
          />
        <button className='filter-btn'>Filter</button>
      </section>
    )
  }
}
