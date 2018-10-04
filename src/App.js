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
    comparedCards: [
      {
        location: "ACADEMY 20",
        stats: {
          2004: 0.302,
          2005: 0.267,
          2006: 0.354,
          2007: 0.392,
          2008: 0.385,
          2009: 0.39,
          2010: 0.436,
          2011: 0.489,
          2012: 0.479,
          2013: 0.488,
          2014: 0.49
        },
        average: 0.407
      },
      {
        location: "ACADEMY 20",
        stats: {
          2004: 0.302,
          2005: 0.267,
          2006: 0.354,
          2007: 0.392,
          2008: 0.385,
          2009: 0.39,
          2010: 0.436,
          2011: 0.489,
          2012: 0.479,
          2013: 0.488,
          2014: 0.49
        },
        average: 0.407
      }
    ],
    comparedAvg: ""
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
    const comparedCards = [
      allSchools.stats[location],
      allSchools.stats[location]
    ];
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
        <CardContainer
          handleCardClick={this.handleCardClick}
          cards={this.state.schoolData}
        />
      </div>
    );
  }
}

export default App;
