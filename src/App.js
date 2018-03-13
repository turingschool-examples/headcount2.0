import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsContainer from './CardsContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: props.districts,
      searchValue: ''
    };
  }

  searchDistrict = (e) => {
    this.setState({
      searchValue: e.target.value.toUpperCase()
    });
  } 

  render() {
    return (
      <div>
        <input 
          type='search' 
          value={this.state.searchValue} 
          onChange={this.searchDistrict} />
        <CardsContainer districts={ this.state.districts } searchValue={this.state.searchValue} />
      </div>
    );
  }
}

App.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object).isRequired
};

export default App;
