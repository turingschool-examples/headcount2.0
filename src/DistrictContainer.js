import React, { Component } from 'react';

import Card from './Card.js';
import './DistrictContainer.css';

export default class DistrictContainer extends Component {

  render() {
    return (
      <div className="district-card-container">
        {this.props.districts.map((district, index) => <Card 
          district={district} 
          key={index}
          checkForMaxCards={this.props.checkForMaxCards}/>)}
      </div>
    );
  }
}