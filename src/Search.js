import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <form>
        <input onChange={event => this.props.searchDistricts(event.target.value)} type="text" placeholder="Search for a district" />
      </form>
    );
  }
}

Search.propTypes = {
  searchDistricts: PropTypes.func
}

export default Search;
