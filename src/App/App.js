import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import Search from '../Search/Search.js';
import './App.css';

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
    if (this.state.selectedLocations.includes(location)) {
      this.setState({ 
        selectedLocations: this.state.selectedLocations
          .filter(compareLocation => compareLocation !== location)})
      return
    }
    if (this.state.selectedLocations.length >= 1) {
      this.setState({ selectedLocations: [...this.state.selectedLocations, location] })
      return
    }
    this.setState({ 
      selectedLocations: [location]
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
          selectedLocations={this.state.selectedLocations} />
      </div>
    );
  }
}

App.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object).isRequired
};

export default App;
