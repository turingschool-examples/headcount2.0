import React from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor() {
    this.stats = this.removeDuplicates(kinderData);
  }

  removeDuplicates = (data) => {
    return data.reduce((acc, location) => {
      let upperCaseName = location.Location.toUpperCase();

      let newData = Math.round(location.Data * 1000) / 1000
    
        if(!acc[upperCaseName]) {
          acc[upperCaseName] = {
            location: upperCaseName,
            stats: {}
          }
        }
        acc[upperCaseName].stats[location.TimeFrame] = newData || 0
        return acc

    },{})
  }

  findByName = (data) => {
    if(!data) return undefined;

    return this.stats[data.toUpperCase()]
  }

  findAllMatches = (districtName) => {
    let statsVals = Object.values(this.stats)
 
    if (!districtName) {
      return statsVals
    } 
    return statsVals.reduce((acc, district) => {
      if(district.location.includes(districtName.toUpperCase())) {
        acc.push(district)
      } 
      return acc
    },[])
  }
}
