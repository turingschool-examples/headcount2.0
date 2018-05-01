import React, { Component } from 'react';

export default class DistrictRepository extends Component {
  constructor(props) {
    super(props);
    const cleanData = props.reduce((stats, locationData) => {
      if (!stats[locationData.Location]) {
        stats[locationData.Location.toUpperCase()] = {
          location: locationData.Location.toUpperCase(), 
          stats: {}
        }
      }
      stats[locationData.Location.toUpperCase()].stats = { ...stats[locationData.Location.toUpperCase()].stats, [locationData.TimeFrame]: parseFloat(parseFloat(locationData.Data).toFixed(3)) || 0 }
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
