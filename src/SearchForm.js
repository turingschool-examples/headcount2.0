import React, { Component } from 'react';
import kinderData from './testData.js';
import DistrictRepository from './helper';

export default class CreateThought extends Component {
  constructor(props){
    super(props)
    this.state = {
      school: '',
    }
  }

  render() {
    return (
      <form onChange={this.findAllMatches}>
        <input
          placeholder='Search for District'
          />
      </form>
    )
  }
}