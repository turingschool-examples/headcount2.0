import React, { Component } from 'react';
import Card from './Card.js';

export default class DistrictContainer extends Component {

  render() {

    const districtArray = Object.keys(this.props.data).map(district => {
      return this.props.data[district];
    });
    return (

      <div>
        {districtArray.map((district, index) => <Card district ={district} key={index} />)}
      </div>
    );
  }

}