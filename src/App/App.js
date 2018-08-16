import React, { Component } from 'react';

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import { CardContainer } from '../CardContainer/CardContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.handleUpdate();
  }

  handleUpdate = (string) => {
    if (string) {
      this.setState({
        data: new DistrictRepository(kinderData).findAllMatches(string)
      });
    } else {
      this.setState({
        data: new DistrictRepository(kinderData).findAllMatches()
      });
    }
  }

  render() {
    return (
      <div>
        <h1 className='main-heading'>HeadCount 2.0</h1>
        <input 
          onChange={(event) => this.handleUpdate(event.target.value)}
          className='search-bar' 
          placeholder='Search'
        />
        <CardContainer schoolData={this.state.data} />
      </div>
    );
  }
}

export default App;
