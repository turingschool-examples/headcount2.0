import React, { Component } from "react";
import DistrictRepository from "./helper";
import kindergarners from "./data/kindergartners_in_full_day_program";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: []
    };
    this.districtRepository = new DistrictRepository(kindergarners);
    this.districtRepository.removeDuplicates();
  }

  searchDistrict = input => {
    let userSearch = this.districtRepository.findAllMatches(input);
    this.setState({ userSearch });
    console.log(this.state.userSearch);
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search District"
          onChange={e => this.searchDistrict(e.target.value)}
        />
      </form>
    );
  }
}
