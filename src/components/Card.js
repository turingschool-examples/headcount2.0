import React, { Component } from 'react';

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
        <h4 className='card-title'>{this.props.location}</h4>
        <ul>
          {Object.keys(stats).map(stat => <li>{stat}: {stats[stat]}</li>)}
        </ul>
      </div>
    )
  }
}

export default Card;
