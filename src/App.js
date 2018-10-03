import React, { Component } from "react";
import DistrictRepository from "./helper.js";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import CardContainer from "./CardContainer";
import Search from "./Search";
import "./App.css";

const allSchools = new DistrictRepository(kinderData);

class App extends Component {
  state = { schoolData: {} };

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

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <CardContainer cards={this.state.schoolData} />
      </div>
    );
  }
}

export default App;
