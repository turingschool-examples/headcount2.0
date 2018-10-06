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
    comparedAvg: {},
    instructions: "click any two districts to compare stats"
  };

  componentDidMount = () => {
    const schoolData = allSchools.findAllMatches();
    this.setState({ schoolData });
  };

  handleSearch = input => {
    const schoolData = allSchools.findAllMatches();
    const districtDirectory = Object.keys(schoolData);
    input
      ? this.toggleSearchDisplay(schoolData, input, districtDirectory)
      : this.displayAllCards(schoolData, districtDirectory);

    this.setState({ schoolData });
  };

  toggleSearchDisplay = (schoolData, input, districtDirectory) => {
    const searchResults = allSchools.findAllMatches(input);
    districtDirectory.forEach(district => {
      searchResults.includes(district)
        ? (schoolData[district].display = true)
        : (schoolData[district].display = false);
    });
  };

  displayAllCards = (schoolData, districtDirectory) => {
    districtDirectory.forEach(
      district => (schoolData[district].display = true)
    );
  };

  handleCardClick = location => {
    const clickedDisctrict = allSchools.stats[location];
    let { comparedCards } = this.state;

    if (clickedDisctrict.clicked !== false) {
      this.handleComparedCardClick(clickedDisctrict);
      return;
    }
    this.addClickedProp(clickedDisctrict, comparedCards);
    this.setState({ comparedCards });
    this.checkComparedCards();
  };

  addClickedProp = (clickedDisctrict, comparedCards) => {
    for (let i = 0; i < 2; i++) {
      if (!Object.keys(comparedCards[i]).length) {
        clickedDisctrict.clicked = i;
        comparedCards[i] = clickedDisctrict;
        break;
      }
    }
  };

  handleComparedCardClick = clickedDisctrict => {
    const comparedCards = this.state.comparedCards;
    const schoolData = this.state.schoolData;

    comparedCards[clickedDisctrict.clicked] = {};
    schoolData[clickedDisctrict.location].clicked = false;

    this.setState({ schoolData, comparedCards });
    this.checkComparedCards();
  };

  checkComparedCards = () => {
    const { comparedCards } = this.state;

    Object.keys(comparedCards[0]).length && Object.keys(comparedCards[1]).length
      ? this.prepareComparisonCard(comparedCards)
      : this.resetComparisonCard();
  };

  prepareComparisonCard = comparedCards => {
    const instructions = "click either card below to remove it";
    const comparedAvg = allSchools.compareDistrictAverages(
      comparedCards[0].location,
      comparedCards[1].location
    );
    this.setState({ comparedAvg, instructions });
  };

  resetComparisonCard = () => {
    const instructions = "click any two districts to compare stats";
    const comparedAvg = {};
    this.setState({ comparedAvg, instructions });
  };

  render() {
    return (
      <div>
        <h1 className="main-logo">headcount</h1>
        <Search handleSearch={this.handleSearch} />
        <h4 className="instructions">{this.state.instructions}</h4>
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
