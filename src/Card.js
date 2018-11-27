import React, { Component } from 'react';

class Card extends Component {
  constructor () {
    super()
  }

  render() {
    return(
      <div>
        <h4>put district here</h4>
        <button>Select</button>
        <ul>
          <li>put data here</li>
        </ul>
      </div>
    )
  }
}

export default Card;