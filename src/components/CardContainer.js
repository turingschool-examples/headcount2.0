import React, { Component } from 'react';
import Card from './Card'
import '../styles/CardContainer.css'


class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      district: ''
    }
  }

  render() {
    const dataArray = Object.keys(this.props.allDistrictData)
    const newCard = dataArray.map(location => <Card data={ this.props.allDistrictData[location] }/>)
    
    return (
      <section className='container-wrap'>
        <h2>Cards area</h2>
        { newCard }
      </section>
      )
  }

}

export default CardContainer