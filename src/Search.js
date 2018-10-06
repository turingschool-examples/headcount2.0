import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  state = { input: "" };

  handleChange = event => {
    const input = event.target.value;
    this.props.handleSearch(input);
    this.setState({ input });
  };

  render() {
    return (
      <input
        className="search-field"
        placeholder="search"
        onChange={this.handleChange}
        value={this.state.input}
      />
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
