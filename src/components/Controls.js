import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { DistrictContainer } from './DistrictContainer';

export class Controls extends Component {
  constructor() {
    super();
    this.submitInput = this.submitInput.bind(this);
  }

  submitInput() {
    const foundData = this.props.findDistrict(this.state.input);
    this.props.findDistrict(this.state.input);
    this.setState({
      input: ""
      // dataCards: foundData
    });
  }

  render() {
    return (
      <div className="controls-container">
        <input
          onChange={this.props.handleChange}
          className="search-input"
          placeholder="Search district"
        />
        <button onClick={this.props.findDistrict} className="search-button">
          Search
        </button>
      </div>
    );
  }
}
