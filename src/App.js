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
      searchValue: ''
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

  render() {
    return (
      <div>
        <Search 
          clearSearch={this.clearSearch}
          searchValue={this.state.searchValue}
          searchDistrict={this.searchDistrict} />
        <CardsContainer 
          districts={ this.state.districts } 
          searchValue={this.state.searchValue} />
      </div>
    );
  }
}

App.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object).isRequired
};

export default App;
