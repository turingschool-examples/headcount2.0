import React, { Component } from "react";
import DistrictRepository from "./helper.js";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import CardContainer from "./CardContainer";
import CompareCardContainer from "./CompareCardContainer";
import Search from "./Search";
import "./App.css";

const allSchools = new DistrictRepository(kinderData);

class App extends Component {
  state = {
    schoolData: {},
    comparedCards: [{}, {}],
    comparedAvg: {}
  };

  componentDidMount = () => {
    const schoolData = allSchools.findAllMatches();
    this.setState({ schoolData });
  };

  handleSearch = str => {
    let schoolData = allSchools.findAllMatches(str);
    if (str) {
      schoolData = schoolData.reduce((acc, match) => {
        acc[match] = allSchools.stats[match];
        return acc;
      }, {});
    }
    this.setState({ schoolData });
  };

  handleCardClick = location => {
    const clickedDisctrict = allSchools.stats[location];
    let comparedCards = this.state.comparedCards;
    if (!Object.keys(comparedCards[0]).length) {
      comparedCards[0] = clickedDisctrict
    } else if (!Object.keys(comparedCards[1]).length) {
      comparedCards[1] = clickedDisctrict
    }
    const comparedAvg = allSchools.compareDistrictAverages(
      "coLorado",
      location
    );
    this.setState({ comparedCards, comparedAvg });
  };

  render() {
    return (
      <div>
        <h1 className="main-logo">headcount</h1>
        <Search handleSearch={this.handleSearch} />
        <CompareCardContainer
          comparedCards={this.state.comparedCards}
          comparedAvg={this.state.comparedAvg}
        />
        <h4 className="instructions">click two districts to compare stats</h4>
        <CardContainer
          handleCardClick={this.handleCardClick}
          cards={this.state.schoolData}
        />
      </div>
    );
  }
}

export default App;
