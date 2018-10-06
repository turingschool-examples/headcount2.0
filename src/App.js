import React, { Component } from "react";
import DistrictRepository from "./helper.js";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import CardContainer from "./CardContainer";
import CompareCardContainer from "./CompareCardContainer";
import Search from "./Search";
import "./App.css";

const allSchools = new DistrictRepository(kinderData);
let instructions = "click two districts to compare stats";

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
    //console.log(this.state)
    const clickedDisctrict = allSchools.stats[location];
    let { comparedCards } = this.state;

    if (clickedDisctrict.clicked !== false) {
      this.handleComparedCardClick(clickedDisctrict);
      return;
    }

    if (!Object.keys(comparedCards[0]).length) {
      clickedDisctrict.clicked = 0;
      comparedCards[0] = clickedDisctrict;
    } else if (!Object.keys(comparedCards[1]).length) {
      clickedDisctrict.clicked = 1;
      comparedCards[1] = clickedDisctrict;
    }
    this.setState({ comparedCards });
    this.prepareComparedStats();
  };

  handleComparedCardClick = clickedDisctrict => {
    const comparedCards = this.state.comparedCards;
    const schoolData = this.state.schoolData;
    comparedCards[clickedDisctrict.clicked] = {};
    schoolData[clickedDisctrict.location].clicked = false;
    this.setState({ schoolData, comparedCards });
    console.log(this.state);
  };

  prepareComparedStats = () => {
    const { comparedCards } = this.state;
    if (
      Object.keys(comparedCards[0]).length &&
      Object.keys(comparedCards[1]).length
    ) {
      instructions = "click either card below to remove it";
      const comparedAvg = allSchools.compareDistrictAverages(
        comparedCards[0].location,
        comparedCards[1].location
      );
      this.setState({ comparedAvg });
    }
  };

  render() {
    return (
      <div>
        <h1 className="main-logo">headcount</h1>
        <Search handleSearch={this.handleSearch} />
        <h4 className="instructions">{instructions}</h4>
        <CompareCardContainer
          comparedCards={this.state.comparedCards}
          comparedAvg={this.state.comparedAvg}
          handleCardClick={this.handleCardClick}
        />
        <CardContainer
          handleCardClick={this.handleCardClick}
          cards={this.state.schoolData}
        />
      </div>
    );
  }
}

export default App;
