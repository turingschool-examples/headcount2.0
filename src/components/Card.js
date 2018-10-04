import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class Card extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  compareSelectedCards = (location) => {
    this.props.compareDistricts(location)
    this.setState({ selected: !this.state.selected })
  }

  render() {
    const { stats, location } =  this.props;
    return (
      <div 
        onClick={() => this.compareSelectedCards(location)}
        className={`card ${this.state.selected ? 'selected' : ''}`}
        >
        <div className='card-info'>
          <h3 className='card-title'>{location}</h3>
          <LineChart 
            data={stats} 
            min={0} max={1} 
            colors={["gray",]}
            width="100%"   
          />
        </div>
      </div>
    )
  }
}

export default Card;
