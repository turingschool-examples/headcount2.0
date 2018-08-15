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
      const cardClick = { ...this.state.cardClick };
      cardClick[location] = true;
      this.setState({ cardClick });
    } else {
      delete this.state.cardClick[location];
      console.log(this.state.cardClick);
    }
    if (this.state.selectedDistricts.length <= 1) {
      const selectedDistricts = [...this.state.selectedDistricts, location];
      this.setState({ selectedDistricts });
    }
    console.log(this.state.selectedDistricts);
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
  };

  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <Search handleSubmit={this.handleSubmit} />
        {this.state.comparisonData !== {} && (
          <ControlCards
            comparisonData={this.state.comparisonData}
            cardClick={this.state.cardClick}
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
