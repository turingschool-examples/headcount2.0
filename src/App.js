import React, { Component } from "react";
import DistrictsContainer from "./DistrictsContainer";
import DistrictRepository from "./helper";
import kinderData from "./data/kindergartners_in_full_day_program";
import "./App.css";

const districtRepository = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      district: []
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <DistrictsContainer districts={districtRepository} />
      </div>
    );
  }
}

export default App;
