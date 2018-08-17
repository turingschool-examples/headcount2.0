import React from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor() {
    this.stats = this.removeDuplicates(kinderData) || []
  }
  
  removeDuplicates = (districtData) => {
    return districtData.reduce((cleanData, districtData) => {
      if (!cleanData[districtData.Location.toUpperCase()]) {
        cleanData[districtData.Location.toUpperCase()] = {
          location: districtData.Location.toUpperCase(),
          stats: {},
        }
      }
      cleanData[districtData.Location.toUpperCase()].stats[districtData.TimeFrame] = Math.round(1000*districtData.Data)/1000 || 0
      return cleanData
    }, {})
  }

  findByName = (name) => {
    if (name) {
      const newName = name.toUpperCase()
      return this.stats[newName]
    }
  }

  findAllMatches = (data) => {
    const statsVals = Object.values(this.stats)
    if (!data) {
      return statsVals
    }
    const newData = data.toUpperCase()
    return statsVals.filter((district) => {
      return district.location.includes(newData)
    })
  }

  findAverage = (district) => {
    const foundDistrict = this.findByName(district)
    const statValues = Object.values(foundDistrict.stats)
    const sum = statValues.reduce((sum, value) => {
      sum = sum + value
      return sum
    }, 0)
    return Math.round(1000*(sum / statValues.length))/1000
  }

  compareDistrictAverages = (districtA, districtB) => {
    let districtAUpper = districtA.toUpperCase()
    let districtBUpper = districtB.toUpperCase()
    const comparedObject = {
                            [districtAUpper]: this.findAverage(districtA),
                            [districtBUpper]: this.findAverage(districtB),
                            compared: Math.round(1000*((this.findAverage(districtA)/(this.findAverage(districtB)))))/1000
    }
    return comparedObject
  }
}