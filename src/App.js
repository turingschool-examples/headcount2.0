import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import Districts from './Districts'
import './styles/App.css';

const schoolData = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    console.log(schoolData)
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Districts schoolData={schoolData} />
      </div>
    );
  }
}

export default App;
