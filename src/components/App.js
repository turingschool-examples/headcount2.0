import React, { Component } from "react";
import DistrictsContainer from "./DistrictsContainer";
import DistrictRepository from "../helper";
import SearchForm from "./SearchForm";
import kinderData from "../data/kindergartners_in_full_day_program";
import "../css/App.css";
const schoolData = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      schoolData: []
    };
  }

  componentDidMount() {
    this.findDistricts();
  }

  findDistricts = district => {
    const foundDistricts = schoolData.findAllMatches(district);
    if (foundDistricts) {
      this.setState({
        schoolData: foundDistricts
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="header">Welcome To Headcount 2.0</h1>
        <SearchForm findDistricts={this.findDistricts} />
        <DistrictsContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

export default App;
