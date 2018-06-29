import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleChange =  event => {
    const { value } = event.target;

    this.props.filterDistricts(value);

    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;

    return (
      <input
        onChange={this.handleChange}
        type="text"
        name="query"
        value={query}
        placeholder="Search"
      />
    );
  }
}

SearchForm.propTypes = {
  filterDistricts: PropTypes.func.isRequired
};

export default SearchForm;
