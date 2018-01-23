import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = 
    data.reduce((obj, district) => {
      district.Location = district.Location.toUpperCase()
      if (!obj[district.Location]) {
        obj[district.Location] = {}
      }
      //obj[district.Location].location = district.Location;

      obj[district.Location] = {
        ...obj[district.Location],
         [district.TimeFrame]: district.Data
      }

      return obj;
    }, {})
  }

  findByName(search) {
    if (search === undefined) {
      return undefined
    } else {
      let searched = search.toUpperCase();

      if (!this.data[searched]) {
        return undefined
      } else {
        console.log(this.data[searched])
        return this.data[searched]
      }
    }
  }
}