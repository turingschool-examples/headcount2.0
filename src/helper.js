import React, { Component } from 'react';

export default class DistrictRepository extends Component {
  constructor(kinderData) {
    super(kinderData);

    this.stats = kinderData.reduce((stats, locationData) => {
      if (!stats[locationData.Location]) {
        stats[locationData.Location] = {};
      }
      stats[locationData.Location] = {...stats[locationData.Location],[locationData.TimeFrame]: locationData.Data}
      return stats
    }, {});
  }
}
