import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';

import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import '../styles/App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      districts: new DistrictRepository(kinderData)
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main districts={this.state.districts}/>
      </div>
    );
  }
}

export default App;
