import React, { Component } from 'react';
import './Search.css';
import PropType from 'prop-types';

class Search extends Component {
  render() {
    return (
      <div>
        <input 
          className="search"
          type="text"
          placeholder="Search for district"
          onChange={(event) => this.props.updateCards(event.target.value)}
        />
      </div>
    ); 
  }
}

Search.propTypes = {
  updateCards: PropType.func
};

export default Search;