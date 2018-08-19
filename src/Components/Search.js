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

  suggestDistricts = () => {
    const { districtInputOne } = this.state;
    const searchSuggestions = this.districtRepository.findAllMatches(
      districtInputOne
    );
    this.props.selectedDistricts.forEach(district => {
      searchSuggestions.push(district);
    });

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
            type="text"
            className="search-input"
            placeholder={
              this.props.selectedDistricts.length > 0
                ? "Remove Card to Search"
                : "Search District"
            }
            onChange={event => this.handleChange(event.target)}
            value={this.state.districtInputOne}
            disabled={this.props.selectedDistricts.length > 1}
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

          <span
            className={
              this.state.searchSuggestions.length ? "show" : "show-none"
            }
          >
            Did you Mean?
          </span>
          {this.state.searchSuggestions.map((district, index) => {
            if (
              this.state.searchSuggestions &&
              this.state.districtInputOne.length > 1
            ) {
              var suggestions = (
                <p
                  className="suggestions"
                  key={index}
                  onClick={event => {
                    this.props.selectCard(event.target.textContent);
                    this.clearInput();
                  }}
                >
                  {district.location}
                </p>
              );
            }
            return suggestions;
          })}
        </div>
      </div>
    );
  }
}

const { func, arrayOf, shape, bool, string, number } = PropTypes;

Search.propTypes = {
  selectedDistricts: arrayOf(
    shape({
      clicked: bool,
      location: string,
      stats: shape({ year: number })
    })
  ),
  handleSubmit: func.isRequired,
  selectCard: func.isRequired,
  clearComparisons: func.isRequired
};
