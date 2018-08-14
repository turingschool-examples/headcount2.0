import React, { Component } from "react";
import DistrictRepository from "./helper";
import kindergarners from "./data/kindergartners_in_full_day_program";
import PropTypes from "prop-types";
import Search from "./Search";
import { DistrictCardContainer } from "./DistrictCardContainer";
import { ControlCards } from "./ControlCards";

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      selectedDistricts: [],
      comparisonData: {},
      cardClick: {}
    };
    this.districtRepository = new DistrictRepository(kindergarners);
  }

  componentDidUpdate() {
    if (this.state.selectedDistricts.length === 2) {
      this.compareDistricts(
        this.state.selectedDistricts[0],
        this.state.selectedDistricts[1]
      );
      this.setState({ selectedDistricts: [] });
    }
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
    if (!this.state.cardClick[location]) {
      this.state.cardClick[location] = true;
    } else {
      this.state.cardClick[location] = false;
    }
    if (
      this.state.selectedDistricts.length < 1 &&
      this.state.cardClick[location]
    ) {
      const selectedDistricts = [
        ...this.state.selectedDistricts,
        this.state.cardClick
      ];
      this.setState({ selectedDistricts: selectedDistricts });
    }
    console.log(this.state.cardClick);
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
    comparisonData[districtOne].cardClick = null;
    comparisonData[districtTwo] = districtTwoInfo;
    comparisonData[districtTwo].cardClick = null;

    this.setState({ comparisonData });
    console.log(comparisonData);
  };

  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <Search handleSubmit={this.handleSubmit} />
        {this.state.comparisonData !== {} && (
          <ControlCards comparisonData={this.state.comparisonData} />
        )}
        {this.state.districts && (
          <DistrictCardContainer
            districts={this.state.districts}
            selectCard={this.selectCard}
            cardClick={this.state.cardClick}
          />
        )}
      </div>
    );
  }
}

export default App;
