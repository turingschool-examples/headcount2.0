import React, { Component } from 'react';
import ReactChartkick, { LineChart, AreaChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class Card extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const stats =  this.props.stats;
    console.log(stats)
    return (
      <div className='card'>
        <h4 className='card-title'>{this.props.location}</h4>
        <AreaChart 
          data={stats} 
          min={0} max={1} 
          colors={["#b00",]}
          label="Value"
        />
      </div>
    )
  }
}

export default Card;
