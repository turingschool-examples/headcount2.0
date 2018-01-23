import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
   return data.reduce((obj, district) => {
      const local = district.Location.toUpperCase();

      if (!obj[local]) {
        obj[local] = {}
        obj[local].data = {}
      }
      obj[local].location = local;

      const objData = obj[local].data;
      const year = [district.TimeFrame]

      isNaN(district.Data) ? objData[year] = 0 :
      objData[year] = this.round(district.Data)
      return obj;
    }, {})
  }

  round(num) {
    return Math.round(1000*num)/1000
  }

  findByName(search) {
    if (search === undefined) {
      return undefined
    } else {
      let searched = search.toUpperCase();

      if (!this.data[searched]) {
        return undefined
      } else {
        return this.data[searched]
      }
    }
  }
}