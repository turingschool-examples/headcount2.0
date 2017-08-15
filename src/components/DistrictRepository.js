import React, { Component } from "react";

export default class DistrictRepository extends Component {
  constructor(districtData) {
    super();
    this.data = districtData.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = [];
      }
      if (acc[obj.Location]) {
        acc[obj.Location].push(obj);
      }
      return acc;
    }, {});
  }

  getData(districtInfo) {
    districtInfo = districtInfo.reduce((acc, item) => {
      if (item.TimeFrame === "N/A") {
        item.Data = 0;
      }
      acc[item.TimeFrame] = parseFloat(item.Data.toFixed(3));
      return acc;
    }, {});
    return districtInfo;
  }

  findByName(thing) {
    if (thing) {
      thing = thing.toUpperCase();
    }
    const dataSet = this.data;
    const districtKeys = Object.keys(dataSet);
    const upKeys = districtKeys.map(key => {
      return key.toUpperCase();
    });

    let newThang = this.data[thing];
    let answer;

    if (upKeys.includes(thing)) {
      answer = {
        location: thing,
        data: this.getData(newThang)
      };

      return answer;
    }
  }
}
