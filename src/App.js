import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import data from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(data);
    this.setState({
      data: district.stats
    });
  }

  render() {
    return (
      <div>
          <CardContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
