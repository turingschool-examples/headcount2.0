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
}
