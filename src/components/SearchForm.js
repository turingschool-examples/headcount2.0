import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Search.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: ""
    };
  }

  handleChange = event => {
    this.setState({
      district: event.target.value
    });
    this.props.findDistricts(event.target.value);
  };

  render() {
    return (
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Search Districts Here"
          value={this.state.district}
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
