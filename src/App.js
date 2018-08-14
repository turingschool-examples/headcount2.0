import React, { Component } from "react";

import DistrictRepository from "./helper";
import kindergarners from "./data/kindergartners_in_full_day_program";

import Search from "./Search";
import { DistrictCardContainer } from "./DistrictCardContainer";
const districtRepository = new DistrictRepository(kindergarners);

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: districtRepository.districtsArray()
    };
    console.log(this.state.districts);
  }

  handleSubmit = district => {
    this.setState({
      districts: district
    });
  };

  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <Search handleSubmit={this.handleSubmit} />
        <DistrictCardContainer districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
