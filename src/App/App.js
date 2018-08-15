import React, { Component } from 'react';

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import { CardContainer } from '../CardContainer/CardContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: new DistrictRepository(kinderData).findAllMatches(`${this.state.userInput}`),
      userInput: ''
    };
  }

  handleSearch = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name]:value
    });
  }

  render() {
    return (
      <div>
        <h1 className='main-heading'>HeadCount 2.0</h1>
        <input 
          onChange={this.handleSearch}
          className='search-bar' 
          value={this.state.search}
          name='userInput'
          placeholder='Search'
        />
        <CardContainer schoolData={this.state.data} />
      </div>
    );
  }
}

export default App;
