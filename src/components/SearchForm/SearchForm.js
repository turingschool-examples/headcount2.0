import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState({ query: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;

    this.props.filterSchools(query);
    this.setState({ query: '' });
  }

  render() {
    const { query } = this.state;

    return (
      <form
        className="search-form"
        onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="query"
          value={query}
        />
        <button>Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  filterSchools: PropTypes.func.isRequired
};

export default SearchForm;
