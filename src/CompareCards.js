import React, { Component } from 'react';
import kinderData from './testData.js';
import DistrictRepository from './helper';
import PropTypes from 'prop-types';
import DataCard from './DataCard';

export default class CompareCards extends Component {
  constructor(props){
    super(props);
    // console.log(this.props.compareSchool[0])
    let districtsRepo = new DistrictRepository(kinderData)
    //districtsRepo.compareDistrictAverages('COLORADO', 'ACADEMY 20')

    this.state = {
      // compareSchools: [],
      districtsRepo: districtsRepo.findAllMatches()
    }
  }

  componentWillReceiveProps() {
    this.setState({
      schoolComparision: this.props.compareSchool,
      dataComparision: this.props.compareData
    })
  } 

  render() {
    let compareArray = this.state.schoolComparision

    if (compareArray === undefined) {
      return (
        <div>
        </div>
        )
    } else if (compareArray.length === 1) {
      return (
        <div className='compare'>
        <p>{this.props.compareSchool[0]}</p>
          <p>2004: {this.props.compareData[0][2004]}</p>
          <p>2005: {this.props.compareData[0][2005]}</p>
          <p>2005: {this.props.compareData[0][2006]}</p>
          <p>2005: {this.props.compareData[0][2007]}</p>
          <p>2005: {this.props.compareData[0][2008]}</p>
          <p>2005: {this.props.compareData[0][2009]}</p>
          <p>2005: {this.props.compareData[0][2010]}</p>
          <p>2005: {this.props.compareData[0][2011]}</p>
          <p>2005: {this.props.compareData[0][2012]}</p>
          <p>2005: {this.props.compareData[0][2013]}</p>
          <p>2005: {this.props.compareData[0][2014]}</p>
        </div>
        )
    } else if (compareArray.length === 2) {
      let districtsRepo = new DistrictRepository(kinderData)
      let school1 = this.props.compareSchool[0]
      let school2 = this.props.compareSchool[1]
      // console.log('this is what we need', districtsRepo)
      let SchoolAvg = districtsRepo.compareDistrictAverages(school1, school2)
      console.log(SchoolAvg)
      // let x = this.districtsRepo.compareDistrictAverages(this.props.compareSchool[0], this.props.compareSchool[1])
      // this.returnCompareData(this.props.compareSchool[0], this.props.compareSchool[1])

      return (
        <div className='final-result'>
          <div className='compare'>
            <p>{this.props.compareSchool[0]}</p>
            <p>2004: {this.props.compareData[0][2004]}</p>
            <p>2005: {this.props.compareData[0][2005]}</p>
            <p>2005: {this.props.compareData[0][2006]}</p>
            <p>2005: {this.props.compareData[0][2007]}</p>
            <p>2005: {this.props.compareData[0][2008]}</p>
            <p>2005: {this.props.compareData[0][2009]}</p>
            <p>2005: {this.props.compareData[0][2010]}</p>
            <p>2005: {this.props.compareData[0][2011]}</p>
            <p>2005: {this.props.compareData[0][2012]}</p>
            <p>2005: {this.props.compareData[0][2013]}</p>
            <p>2005: {this.props.compareData[0][2014]}</p>
          </div>
          <div className='comparing'>
            <h3 className='top-school'>{school1}</h3>
            <p className='comparing-paragraph'>{SchoolAvg[school1]}</p>
            <h2>Average: {SchoolAvg['compared']}</h2>
            <h3 className='bottom-school'>{school2}</h3>
            <p className='comparing-paragraph'>{SchoolAvg[school2]}</p>
          </div>
          <div className='compare'>
          <p>{this.props.compareSchool[1]}</p>
          <p>2004: {this.props.compareData[1][2004]}</p>
          <p>2005: {this.props.compareData[1][2005]}</p>
          <p>2005: {this.props.compareData[1][2006]}</p>
          <p>2005: {this.props.compareData[1][2007]}</p>
          <p>2005: {this.props.compareData[1][2008]}</p>
          <p>2005: {this.props.compareData[1][2009]}</p>
          <p>2005: {this.props.compareData[1][2010]}</p>
          <p>2005: {this.props.compareData[1][2011]}</p>
          <p>2005: {this.props.compareData[1][2012]}</p>
          <p>2005: {this.props.compareData[1][2013]}</p>
          <p>2005: {this.props.compareData[1][2014]}</p>
            </div>
          </div>
          )
      } 

    return (
      <div>
      </div>
    );
  }
}