import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  state = { input: "" };

  handleChange = e => {
    this.setState({ input: e.target.value});
    this.props.handleSearch(this.state);
  };

  render() {
    return (
      <input
        className="search-field"
        placeholder="search"
        value={this.state.input}
        onChange={this.handleChange}
      />
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
