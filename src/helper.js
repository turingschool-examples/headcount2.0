import React from 'react';
import kinderData from './data/kindergartners_in_full_day_program';


export default class DistrictRepository {
  constructor() {
    this.stats = this.filterData(kinderData)
  }

  filterData = (data) => {
    return data.reduce((acc, location) => {
      let newLocation = location.Location.toUpperCase();
      let newData = Math.round(location.Data * 1000) / 1000

      if (!acc[newLocation]) {
        acc[newLocation] = {
          location: newLocation,
          stats: {}
        }
      }
      acc[newLocation].stats[location.TimeFrame] = newData || 0;
      
      return acc
    }, {})
  }

  findByName = (name) => {
    if (!name) {
      return undefined
    }
      return this.stats[name.toUpperCase()]    
  }

  findAllMatches = (name) => {
    const statValues = Object.values(this.stats);

    if (!name) {
      return statValues
    }

    return statValues.filter(value => value.location.includes(name.toUpperCase()))

  }
}
