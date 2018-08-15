import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  render() {
    return (
      <div>
        <input 
          className="search"
          type="text"
          placeholder="Search for district"
          onChange={(e) => this.props.updateCards(e.target.value)}
        />
      </div>
    ) 
  }
}

export default Search;