import React, { Component } from 'react';
import ReactChartkick, { AreaChart, LineChart, ColumnChart } from 'react-chartkick'
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
    return (
      <div className='card'>
        <div className='card-info'>
          <h3 className='card-title'>{this.props.location}</h3>
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
