import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocationList from './LocationList';

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

  clearSearch = () => {
    this.setState({ value: '' });
  }

  render() {
    return (
      <aside className='LocationList'>
        <input 
          value={this.state.value}
          className='Search'
          placeholder='SEARCH'
          onChange={this.handleInput} >
        </input>
        <LocationList 
          cards={this.props.cards}
          displayedLocations={this.props.displayedLocations}
          selectLocation={this.props.selectLocation} 
          clearSearch={this.clearSearch} />
      </aside>
    );
  }
}

export default Search;

Search.propTypes = {
  searchLocations: PropTypes.func,
  displayedLocations: PropTypes.arrayOf(PropTypes.string),
  selectLocation: PropTypes.func
};