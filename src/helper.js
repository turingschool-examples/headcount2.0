import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = data.reduce((obj, district) => {
                  if (!obj[district.Location]) {
                    obj[district.Location] = []
                  }
                  obj[district.Location].push({year: district.TimeFrame, avg: district.Data})
                  return obj;
                }, {})
  }
}
