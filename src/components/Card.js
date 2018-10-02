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
        <h1>{this.props.location}</h1>
        <ul>
          {Object.keys(stats).map(stat => <li>{stat}: {stats[stat]}</li>)}
        </ul>
      </div>
    )
  }
}

export default Card;
