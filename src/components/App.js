import React, { Component } from 'react';

import '../css/App.css';
import kinderGartenData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

import DistrictContainer from './DistrictContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: {},
      loading: true
    };
  }

  componentDidMount() {
    this.populateDistrictData(kinderGartenData);
  }

  populateDistrictData = data => {
    const category = new DistrictRepository(data);
    this.setState({
      category,
      loading: false
    });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>Welcome To Headcount 2.0</h1>
          <DistrictContainer category={this.state.category} />
        </div>
      </div>
    );
  }
}

export default App;
