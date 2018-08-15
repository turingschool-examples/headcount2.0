import React, { Component } from "react";
import DistrictRepository from "../helper";
import kindergarners from "../data/kindergartners_in_full_day_program";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      searchSuggestions: []
    };
    this.districtRepository = new DistrictRepository(kindergarners);
  }

  handleChange = ({ value }, name) => {
    this.setState({ userInput: value });
    this.suggestDistricts(this.state.userInput);
  };

  suggestDistricts = e => {
    let suggestions = this.districtRepository.findAllMatches(
      this.state.userInput
    );
    this.setState({ searchSuggestions: suggestions });
    if (e.length > 2) {
      this.props.handleSubmit(this.state.searchSuggestions);
    }
  };

  searchDistrict = district => {
    const filteredDistricts = this.districtRepository.findByName(district);
    this.props.handleSubmit([filteredDistricts]);
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search District"
            onChange={e => this.handleChange(e.target, "userInput")}
            value={this.state.userInput}
          />
          {/* <button onClick={e => this.searchDistrict(e)}>Search</button> */}
        </form>
        <div>
          {this.state.searchSuggestions.map((district, i) => {
            if (
              this.state.searchSuggestions &&
              this.state.userInput.length > 3
            ) {
              return (
                <p
                  className="suggestions"
                  key={i}
                  onClick={e => this.searchDistrict(e.target.textContent)}
                >
                  {district.location}
                </p>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
