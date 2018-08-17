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

  findAverage = (district) => {
    let districtData = this.findByName(district)
    let districtKeys = Object.keys(districtData.stats)
    let districtAverage = districtKeys.reduce((acc, data) => {
      acc += districtData.stats[data]

      return acc 
    },0) / districtKeys.length

   let finalAverage = Math.round(1000 * districtAverage) / 1000
 
    return finalAverage
  }

  compareDistrictAverages = (district1, district2) => {
    let district1Upper = district1.toUpperCase()
    let district2Upper = district2.toUpperCase()
    let districtData1 = this.findAverage(district1Upper)
    let districtData2 = this.findAverage(district2Upper)

    const districtsCompared = {[district1Upper]: districtData1, [district2Upper]: districtData2, compared: Math.round(1000 * (districtData1 / districtData2)) / 1000}
    console.log(districtsCompared)
    return districtsCompared
  }
}




