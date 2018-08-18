import React, { Component } from "react";
import DistrictRepository from "../helper";
import kindergarners from "../data/kindergartners_in_full_day_program";
import PropTypes from "prop-types";
import "../CSS/Search.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtInputOne: "",
      searchSuggestions: []
    };
    this.districtRepository = new DistrictRepository(kindergarners);
  }

  handleChange = ({ value }) => {
    this.setState({ districtInputOne: value });
    this.suggestDistricts();
  };

  suggestDistricts = e => {
    const { districtInputOne } = this.state;
    const searchSuggestions = this.districtRepository.findAllMatches(
      districtInputOne
    );

    this.setState({ searchSuggestions });
    if (districtInputOne.length > 1) {
      this.props.handleSubmit(searchSuggestions);
    } else {
      const newDistricts = this.districtRepository.districtsArray();
      this.props.handleSubmit(newDistricts);
    }
  };

  clearInput = () => {
    this.setState({ districtInputOne: "" });
    const newDistricts = this.districtRepository.districtsArray();
    this.props.handleSubmit(newDistricts);
  };

  searchDistrict = district => {
    const filteredDistricts = this.districtRepository.findByName(district);
    this.props.handleSubmit([filteredDistricts]);
  };

  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            className="search-input"
            placeholder="Search District"
            onChange={e => this.handleChange(e.target)}
            value={this.state.districtInputOne}
          />
          <button onClick={() => this.props.clearComparisons()}>
            Clear Fields
          </button>
        </form>
        <div
          className={
            this.state.districtInputOne.length > 1
              ? "show-suggestions"
              : "hide-suggestions"
          }
        >
          <span
            className={
              this.state.searchSuggestions.length
                ? "show-none"
                : "display-error"
            }
          >
            None Found! Search Again
          </span>
          {this.state.searchSuggestions.map((district, i) => {
            if (
              this.state.searchSuggestions &&
              this.state.districtInputOne.length > 1
            ) {
              return (
                <p
                  className="suggestions"
                  key={i}
                  onClick={e => {
                    this.props.selectCard(e.target.textContent);
                    this.clearInput();
                  }}
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

const { func } = PropTypes;

Search.propTypes = {
  handleSubmit: func.isRequired
};
