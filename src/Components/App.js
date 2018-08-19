import React, { Component } from "react";
import DistrictRepository from "../helper";
import kindergarners from "../data/kindergartners_in_full_day_program";
import Search from "./Search";
import { DistrictCardContainer } from "./DistrictCardContainer";
import { ControlCards } from "./ControlCards";
import "../CSS/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      selectedDistricts: [],
      comparisonData: {}
    };
    this.districtRepository = new DistrictRepository(kindergarners);
  }

  componentDidMount = () => {
    const districts = this.districtRepository.districtsArray();
    this.setState({ districts });
  };

  handleSubmit = district => {
    this.setState({
      districts: district
    });
  };

  selectCard = location => {
    const { districts } = this.state;
    let targetDistrict = districts.find(
      district => district.location === location
    );
    const selectedDistricts = this.checkFoundDistrict(targetDistrict);
    this.setState({ selectedDistricts, districts });
    if (selectedDistricts.length === 2) {
      this.compareDistricts(
        selectedDistricts[0].location,
        selectedDistricts[1].location
      );
    }
  };

  checkFoundDistrict = district => {
    let targetIndex = this.state.districts.indexOf(district);
    let selectedDistricts;
    if (!district["clicked"] && this.state.selectedDistricts.length < 2) {
      district["clicked"] = true;
      selectedDistricts = [...this.state.selectedDistricts, district];
      this.setState({ districts: [this.state.districts[targetIndex]] });
    } else {
      district["clicked"] = false;
      selectedDistricts = this.state.selectedDistricts.filter(
        district => district.clicked === true
      );
    }
    return selectedDistricts;
  };

  clearComparisons = () => {
    this.setState({ comparisonData: {} });
  };

  compareDistricts = (districtOne, districtTwo) => {
    const districtOneInfo = this.districtRepository.findByName(districtOne);
    const districtTwoInfo = this.districtRepository.findByName(districtTwo);
    const districtComparison = this.districtRepository.compareDistrictAverages(
      districtOne,
      districtTwo
    );
    const comparisonData = Object.assign({}, { ...districtComparison });
    comparisonData["comparisonData"] = {
      [districtOne]: comparisonData[districtOne],
      [districtTwo]: comparisonData[districtTwo],
      compared: comparisonData.compared
    };
    delete comparisonData.compared;
    comparisonData[districtOne] = districtOneInfo;
    comparisonData[districtTwo] = districtTwoInfo;
    this.setState({ comparisonData });
  };

  render() {
    return (
      <div className="head-wrapper">
        <Search
          selectedDistricts={this.state.selectedDistricts}
          selectCard={this.selectCard}
          handleSubmit={this.handleSubmit}
          clearComparisons={this.clearComparisons}
        />
        <div
          className={
            this.state.selectedDistricts.length > 1
              ? "title-hide"
              : "title-show"
          }
        >
          HeadCount 2.0
          <p className="instructions">
            Click Districts below for Annual Score Avg.
          </p>
        </div>
        {this.state.comparisonData !== {} && (
          <ControlCards
            selectedDistricts={this.state.selectedDistricts}
            comparisonData={this.state.comparisonData}
            selectCard={this.selectCard}
          />
        )}
        {this.state.districts && (
          <DistrictCardContainer
            districts={this.state.districts}
            selectCard={this.selectCard}
          />
        )}
      </div>
    );
  }
}

export default App;
