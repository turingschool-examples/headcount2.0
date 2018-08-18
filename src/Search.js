import React, { Component } from 'react';

import './style/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  render() {
    return (
      <form className="form">
        <input className="search-input" onKeyUp={(event) => {
          this.setState({ searchValue: event.target.value });
          this.props.searchDistricts(this.state.searchValue);
        }} placeholder='Search' />
      </form>
    );
  }
}
