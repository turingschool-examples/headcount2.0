import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleaner(data);
    console.log(this.cleaner(data))
  }

  cleaner(data) {
    let newData = data.reduce((acc, next) => {
    let { Location, TimeFrame, Data } = next;

    if (!acc[Location]) {
      acc[Location] = {Location: Location, [TimeFrame]: Data};
    }
    acc[Location][TimeFrame] = Data;
    return acc
  }, [])
  return newData;
}

  findByName(name) {
    
  }
}
