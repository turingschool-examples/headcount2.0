import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
  render() {
    return (
      <form>
        <input onChange={event => this.props.searchDistricts(event.target.value)} type="text" />
      </form>
    );
  }
}

export default Search;
