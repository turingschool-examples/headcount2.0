import React, { Component } from 'react';
// import kindergartners from './data/kindergartners_in_full_day_program.js';


class DistrictRepository extends Component {
  constructor(kindergartners) {
    super();
    // this.state = {}
    this.kindergartners = kindergartners
    this.stats = this.statsReduce()
  }

  statsReduce = (kindergartners) => {
    return this.kindergartners.reduce((acc, currentData) => {
      if (!acc[currentData.Location]) {
        acc[currentData.Location] = { [currentData.TimeFrame]: currentData.Data }
      } else {
        acc[currentData.Location] = {
          ...acc[currentData.Location],
          [currentData.TimeFrame.toString()]: currentData.Data
        }
      }
      return acc;
    }, {})
  }

}

export default DistrictRepository;
