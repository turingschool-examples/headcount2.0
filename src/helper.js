import React from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';


export default class DistrictRepository {
  constructor() {
    this.stats = this.filterData(kinderData)
  }

  filterData = (data) => {
    return data.reduce((acc, location) => {
      if (!acc[location.Location]) {
        acc[location.Location] = []
      }
      acc[location.Location].push(location)
      return acc
    }, {})
  }

  findByName = () => {
    
  }
}
