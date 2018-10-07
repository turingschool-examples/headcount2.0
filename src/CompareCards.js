import React, { Component } from 'react';
import kinderData from './testData.js';
import DistrictRepository from './helper';
import PropTypes from 'prop-types';

export default class CompareCards extends Component {
  constructor(props){
    super(props);
    let schoolData = new DistrictRepository(kinderData)

    this.state = {
      compareSchools: [],
      schoolData: schoolData.findAllMatches()
    }
  }

  componentWillReceiveProps() {
    this.setState({
      schoolComparision: this.props.compareSchool,
      dataComparision: this.props.compareData
    })
  }

  //  compareTwoCards = (location, data) => {
  //   console.log(location, data);
  //   return location;
  // }

  
  render() {

      if (this.state.schoolComparision && this.state.dataComparision){
        return (
          <div>
            <p>{this.props.compareSchool}</p>
          </div>
          )
      } 

    return (
      <div>
      </div>
    );
  }
}