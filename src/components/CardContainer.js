import React, { Component } from 'react';
import '../styles/CardContainer.css'

class CardContainer extends Component {
  constructor(){
    super()
    this.state = {
      district: ''
    }
  }

  render() {
    return (
      <section className='container-wrap'>
        <h2>Cards area</h2>
      </section>
      )
  }

}

export default CardContainer