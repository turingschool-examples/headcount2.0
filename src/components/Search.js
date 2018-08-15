import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="search"
            name="searchValue"
            onChange={this.handleChange}
            value={this.state.searchValue}
          />
        </form>
      </div>
    );
  }
}

export default Search;
