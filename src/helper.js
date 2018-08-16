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
      return this.data[newName]
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

  // compareDistrictAverages = () => {

  // }
}

