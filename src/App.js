import React, { Component } from 'react';
import kindergartners_in_full_day_program from './data/kindergartners_in_full_day_program'
import DistrictRepository from './helper';
import CardsContainer from './CardsContainer';
import Search from './Search';
import DisplayComparedContainer from './DisplayComparedContainer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      schoolData: []
    }
  }

  componentDidMount() {
    const data = new DistrictRepository(kindergartners_in_full_day_program);
    const schoolData = data.findAllMatches();
    this.setState({ schoolData });
  }

  searchSchoolData = phrase => {
    const data = new DistrictRepository(kindergartners_in_full_day_program);
    const schoolData = data.findAllMatches(phrase);
    this.setState({ schoolData });
  }

  render() {
    return (
      <div className="App">
        <Search searchSchoolData={this.searchSchoolData}/>
        <h4 className="App-title">HeadCount 2.0</h4>
        <DisplayComparedContainer />
        <CardsContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

export default App;
