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
    if (!str.length) {
      console.log(this.state);
      return;
      //this.setState(allSchools.findAllMatches());
    } else {
      const matches = allSchools.findAllMatches(str);
      const schoolData = matches.reduce((acc, match) => {
        acc[match] = allSchools.stats[match];
        return acc;
      }, {});
      this.setState({ schoolData });
      console.log(this.state);
    }
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
