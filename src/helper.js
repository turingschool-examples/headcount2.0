import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleaner(data);
  }

  cleaner(data) {
    let newData = data.reduce((acc, next) => {
      let location = next.Location;
      !acc[location] ? acc[location] = [next] : acc[location].push(next)
      return acc;
    }, []);
    return newData;
  }
}
