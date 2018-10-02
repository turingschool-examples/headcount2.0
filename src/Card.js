import React, { Component } from 'react';

class Card extends Component {
  state = {  }
  render() { 
    return ( <h1>{this.props.card}</h1> );
  }
}
 
export default Card;