import React from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';


export default class DistrictRepository {
  constructor() {
    this.stats = this.filterData(kinderData)
  }

  filterData = (data) => {
    return data.reduce((acc, location) => {
      let newLocation = location.Location.toUpperCase();

      if (!acc[location.Location]) {
        acc[newLocation] = {
          location: newLocation,
          stats: {}
        }
      }
     
      
      return acc
    }, {})
  }

  findByName = (name) => {
    if (!name) {
      return undefined
    }
    // if (this.stats[name.toUpperCase()]) {
      return this.stats[name.toUpperCase()]
    // }
    
  }
}
