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
      schoolData: {},
      cards: {}
    };
  }

  componentDidMount() {
    const schoolData = new DistrictRepository(kinderData);
    this.setState({
      schoolData
    });
  }

  findDistricts = district => {
    const foundDistricts = schoolData.findByName(district);
    if (foundDistricts) {
      this.setState({
        cards: { ...foundDistricts }
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="header">Welcome To Headcount 2.0</h1>
        <SearchForm findDistricts={this.findDistricts} />
        <DistrictsContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

export default App;
