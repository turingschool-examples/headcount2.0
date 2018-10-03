import React, { Component } from 'react';
import kindergartners_in_full_day_program from './data/kindergartners_in_full_day_program'
import DistrictRepository from './helper';
import CardsContainer from './CardsContainer';
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
      <div>
        <h1>HeadCount 2.0</h1>
        <CardsContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

export default App;
