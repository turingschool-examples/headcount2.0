import React, { Component } from 'react';
import '../styles/CardContainer.css'


class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      district: ''
    }
  }
// Our array is returning a length of 0 even though we can see that it is an array with 181 objects WTF
  render() {
    const newArray = this.props.allDistrictData

    return (
      <section className='container-wrap'>
        <h2>Cards area</h2>
        {console.log(newArray)}
        {newArray.forEach(district => console.log('hey'))}
      </section>
      )
  }

}

export default CardContainer