import React, { Component } from "react";
import PropTypes from "prop-types";

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
          type="text"
          placeholder="Enter a search here"
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
