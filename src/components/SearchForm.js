import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Search.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtSearch: ""
    };
  }

  handleChange = event => {
    this.setState({
      districtSearch: event.target.value
    });
    this.props.findDistricts(event.target.value);
  };

  render() {
    return (
      <form onSubmit={event => event.preventDefault()}>
        <input
          className="search-input"
          type="text"
          placeholder="Search Districts Here"
          value={this.state.districtSearch}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  findDistricts: PropTypes.func
};

export default SearchForm;
