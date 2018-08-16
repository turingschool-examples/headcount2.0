import React, { Component } from 'react';

import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
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
