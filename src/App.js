import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsContainer from './CardsContainer';
import Search from './Search.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: props.districts,
      searchValue: '',
      compareLocations: []
    };
  }

  searchDistrict = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  } 

  clearSearch = () => {
    this.setState({searchValue: ''});
  }

  selectLocation = (location) => {
    if (this.state.compareLocations.includes(location)) {
      this.setState({ 
        compareLocations: this.state.compareLocations
          .filter(compareLocation => compareLocation !== location)})
      return
    }
    if (this.state.compareLocations.length >= 1) {
      this.setState({ compareLocations: [this.state.compareLocations[0], location] })
      return
    }
    this.setState({ 
      compareLocations: [location]
    })
  }

  render() {
    return (
      <div>
        <Search 
          clearSearch={this.clearSearch}
          searchValue={this.state.searchValue}
          searchDistrict={this.searchDistrict} />
        <CardsContainer 
          districts={ this.state.districts } 
          searchValue={this.state.searchValue}
          selectLocation={this.selectLocation} 
          compareLocations={this.state.compareLocations} />
      </div>
    );
  }
}

App.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object).isRequired
};

export default App;
