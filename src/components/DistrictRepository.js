import React, { Component } from "react";
import Controls from "./Controls";
import { DistrictContainer } from "./DistrictContainer";
import KinderData from "../../data/kindergartners_in_full_day_program";
import "../styles/DistrictRepository.css";

export default class DistrictRepository extends Component {
  constructor(rawData) {
    super();
    // this.state.data = this.getDistrictData();
    this.state = {
      cards: [...this.findAllMatches()],
      data: this.getDistrictData()
    };
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

    const filteredMatches = districtKeys.filter(district =>
      district.includes(userInput)
    );

    return filteredMatches;
  }

  findByName(userInput) {
    if (userInput) {
      userInput = userInput.toUpperCase();
    }
    const dataSet = this.state.data;
    const districtKeys = Object.keys(dataSet).map(key => {
      return key.toUpperCase();
    });

    let districtName = dataSet[userInput];
    let answer;

    if (districtKeys.includes(userInput)) {
      return (answer = {
        location: userInput,
        data: this.getData(districtName)
      });
    }
  }

  getData(districtInfo) {
    districtInfo = districtInfo.reduce((acc, item) => {
      if (item.Data === "N/A") {
        item.Data = 0;
      }
      acc[item.TimeFrame] = parseFloat(item.Data.toFixed(3));
      return acc;
    }, {});
    return districtInfo;
  }

  getDistrictData() {
    var rawData = KinderData;

    const cleanData = rawData.reduce((acc, obj) => {
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

  // componentDidMount()

  render() {
    return (
      <div className="district-repository-container">
        <Controls findDistrict={this.findByName.bind(this)} />
        <DistrictContainer
          foundData={this.state.cards}
          fullData={this.state.data}
        />
      </div>
    );
  }
}
