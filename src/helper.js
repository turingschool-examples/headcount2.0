import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleaner(data);
    // console.log(this.cleaner(data))
  }

  cleaner(data) {
    let newData = data.reduce((acc, next) => {
    let { Location, TimeFrame, Data } = next;
    let sanitizedData = this.sanitizeNumbers(Data)

    if (!acc[Location.toUpperCase()]) {
      acc[Location.toUpperCase()] = {location: Location, data: { [TimeFrame]: sanitizedData }};
    }
    acc[Location.toUpperCase()].data[TimeFrame] = sanitizedData;
    return acc
  }, [])
  return newData;
}

  sanitizeNumbers(data) {
    if (typeof data === 'number') {
      return Math.round(data * 1000) / 1000
    } else {
      return 0
    }
  }

  findByName(nameToFind) {
    let name = '';
    if (nameToFind) {
      name = nameToFind.toUpperCase();
    }
    return this.data[name]
  }
}
