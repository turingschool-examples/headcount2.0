import React, { Component } from 'react';
import '../styles/ComparisonContainer.css'

class ComparisonContainer extends Component {
  constructor(){
    super()
    this.state = {
      district: ''
    }
  }

  render() {
    return (
      <section className='comparison-wrap'>
        <h2>Comparison area</h2>
      </section>
      )
  }

}

export default ComparisonContainer