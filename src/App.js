import React, { Component } from 'react';
import kindergartners_in_full_day_program from './data/kindergartners_in_full_day_program'
import DistrictRepository from './helper';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      schoolData: ''
    }
  }

  componentDidMount() {
    const data = new DistrictRepository(kindergartners_in_full_day_program);
    const schoolData = data.findAllMatches();
    this.setState({ schoolData });
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
