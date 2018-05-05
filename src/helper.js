// import React, { Component } from 'react';

export default class DistrictRepository {
  constructor(props) {
    // super(props);

    const cleanData = props.reduce((stats, locationData) => {
      let sanitizedLocation = locationData.Location.toUpperCase()
      if (!stats[sanitizedLocation]) {
        stats[sanitizedLocation] = {
          location: sanitizedLocation, 
          stats: {}
        }
      }
      stats[sanitizedLocation].stats = { ...stats[sanitizedLocation].stats, [locationData.TimeFrame]: parseFloat(parseFloat(locationData.Data).toFixed(3)) || 0 }
      return stats;
    }, {});

    this.stats = cleanData;
  }

  findByName = (district = undefined) => {
    if (typeof district !== 'string' ) {
      return undefined;
    } else {
      const uppercaseDistrict = district.toUpperCase();

      return this.stats[uppercaseDistrict];
    }
  }

  findAllMatches = ( district ) => {
    if (!district){
      return Object.keys(this.stats)
    }
    const uppercaseDistrict = district.toUpperCase();
    if (!this.stats[uppercaseDistrict]){
      return [];
    }
    return Object.keys(this.stats[uppercaseDistrict])
  }

  findAverage = ( district ) => {
    const foundDistrict = Object.keys( this.stats )
    .map( districtKey => this.stats[ districtKey ])
    .find( districtInfo => districtInfo.location === district );
    const districtValues = Object.values( foundDistrict.stats ).reduce(( sum, value ) => {
      return sum + value
    }, 0)
    const valueAverage = districtValues / Object.values(foundDistrict.stats).length;
    return Math.round(valueAverage * 1000) / 1000;
  }

  compareDistrictAverages = ( district1, district2 ) => {
    district1 = district1.toUpperCase();
    district2 = district2.toUpperCase();
    const avg1 = this.findAverage( district1 );
    const avg2 = this.findAverage( district2 );
    const roundedAverge = Math.round((avg1 / avg2) * 1000) / 1000;
    const comparedValue = { [this.stats[district1].location]: avg1, [this.stats[district2].location]: avg2, compared: roundedAverge };
    return comparedValue;
  }
  
} 
