import React, { Component } from "react";
import DistrictRepository from "./DistrictRepository";
import PropTypes from "prop-types";
import { DistrictContainer } from "./DistrictContainer";

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      dataCards: []
    };
  }

  getInput(e) {
    this.setState({ input: e.target.value });
  }

  submitInput() {
    const foundData = this.props.findDistrict(this.state.input);
    this.setState({
      input: "",
      dataCards: foundData
    });
  }

  render() {
    return (
      <div className="controls-container">
        <input
          value={this.state.input}
          onChange={this.getInput.bind(this)}
          className="search-input"
        />
        <button onClick={this.submitInput.bind(this)} className="search-button">
          Search
        </button>
        <DistrictContainer foundData={this.state.dataCards} />
      </div>
    );
  }
}
