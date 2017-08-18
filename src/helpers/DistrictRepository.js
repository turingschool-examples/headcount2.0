// import React, { Component } from 'react';
// import KinderData from '../../data/kindergartners_in_full_day_program';
import "../styles/DistrictRepository.css";

export class DistrictRepository {
  constructor(data) {
    this.data = data;
  }

  cleanData(districtInfo) {
    districtInfo = districtInfo.reduce((acc, item) => {
      if (item.Data === "N/A") {
        item.Data = 0;
      }
      acc[item.TimeFrame] = parseFloat(item.Data.toFixed(3));
      return acc;
    }, {});
    return districtInfo;
  }

  findAllMatches(userInput) {
    if (userInput) {
      userInput = userInput.toUpperCase();
    }

    const dataSet = this.getDistrictData();
    const districtKeys = Object.keys(dataSet).map(key => {
      return key.toUpperCase();
    });

    if (!userInput) {
      return districtKeys;
    }

    let filteredMatches = districtKeys.filter(district =>
      district.includes(userInput)
    );

    return filteredMatches;
  }

  findByName(userInput) {
    if (userInput) {
      userInput = userInput.toUpperCase();
    }
    let newData = this.getDistrictData(this.data);
    const districtKeys = Object.keys(newData).map(key => {
      return key.toUpperCase();
    });

    let districtName = newData[userInput];
    let answer;

    if (districtKeys.includes(userInput)) {
      return (answer = {
        location: userInput,
        data: this.cleanData(districtName)
      });
    }
  }

  getDistrictData() {
    const cleanData = this.data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = [];
      }
      if (acc[obj.Location]) {
        acc[obj.Location].push(obj);
      }
      return acc;
    }, {});
    return cleanData;
  }

  findAverage(districtName) {
    const foundDistrict = this.findByName(districtName);
    const foundDistrictKeys = Object.keys(foundDistrict.data);
    let average = foundDistrictKeys.reduce((acc, year) => {
      acc += foundDistrict.data[year];
      return acc;
    }, 0);
    return parseFloat((average / 11).toFixed(3));
  }

  compareDistrictAverages(district1, district2) {
    district1 = district1.toUpperCase();
    district2 = district2.toUpperCase();
    const district1Average = this.findAverage(district1);
    const district2Average = this.findAverage(district2);
    return {
      [district1]: district1Average,
      [district2]: district2Average,
      compared: parseFloat(
        (district1Average < district2Average
          ? district1Average / district2Average
          : district2Average / district1Average).toFixed(3)
      )
    };
  }
}
