import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import Search from '../Search/Search.js';
import './App.css';
import '../index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: props.districts,
      searchValue: '',
      selectedLocations: []
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
    const searchLocation = this.state.districts.findByName(location);
    if (this.state.selectedLocations.includes(searchLocation)) {
      this.setState({ 
        selectedLocations: this.state.selectedLocations
          .filter(compareLocation => compareLocation !== searchLocation)});
      return;
    }
    if (this.state.selectedLocations.length >= 1) {
      this.setState({
        selectedLocations: [this.state.selectedLocations[0], searchLocation] 
      });
      return;
    }
    this.setState({ 
      selectedLocations: [searchLocation]
    });
  }

  render() {
    return (
      <div className="App">
        <Search 
          clearSearch={this.clearSearch}
          searchValue={this.state.searchValue}
          searchDistrict={this.searchDistrict} />
        <div className="Cards-container">
          <CardsContainer 
            districts={this.state.districts} 
            searchValue={this.state.searchValue}
            selectLocation={this.selectLocation} 
            selectedLocations={this.state.selectedLocations} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object).isRequired
};

export default App;
