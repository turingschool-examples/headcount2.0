import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleInput = (event) => {
    const value = event.target.value;
    this.setState({ value });
    this.props.searchLocations(value);
  }

  handleClearForm = (event) => {
    event.preventDefault();
    this.setState({ value: '' });
  }

  render() {
    return (
      <input 
        value={this.state.value}
        className='Search'
        placeholder='SEARCH'
        onChange={this.handleInput}>
      </input>
    );
  }
};

export default Search;

Search.propTypes = {
  searchLocations: PropTypes.func
};