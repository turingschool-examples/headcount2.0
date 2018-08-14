import React from 'react'
import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.removeDuplicates(kinderData)
  }

  removeDuplicates = (data) => {
    return data.reduce((acc, location) => {
        let upperCaseName = location.Location.toUpperCase()
       
        if(!acc[location.Location]) {
          acc[upperCaseName] = {
            location: upperCaseName,
            stats: {}
          }
        }
        return acc

    },{})
  }

  findByName = (data) => {
    if(!data) return undefined;
    // console.log(this.stats) 
    return this.stats[data.toUpperCase()]
  }
}


//{'COLORADO'}



