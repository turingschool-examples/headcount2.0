import React, { Component } from 'react';
import './Compare.css';

class Compare extends Component {
  constructor( props ){
    super( props );
    this.state = {
      comparedCards: []
    }
  }

  render(){
    return (
      <div className="compare">
        Compare cards here...
      </div>
    )
  }
}

export default Compare;