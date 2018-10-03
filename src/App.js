import React, { Component } from "react";
import DistrictRepository from "./helper.js";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import CardContainer from "./CardContainer";
import Search from "./Search";
import "./App.css";

const allSchools = new DistrictRepository(kinderData);

class App extends Component {
  state = {};

  componentDidMount = () => {
    const schoolData = allSchools.findAllMatches();
    this.setState( schoolData );
  };

  render() {
    return (
      <div>
        <Search />
        <CardContainer cards={this.state}/>
      </div>
    );
  }
}

export default App;
