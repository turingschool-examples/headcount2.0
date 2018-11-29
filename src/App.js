import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: '',
      displayData: [],
      searchWord: '',
      repository: new DistrictRepository(kinderData)
    }
  }

  componentDidMount() {
    const dataSet = kinderData;
    this.setState({ dataSet });
    this.prepareDataForDisplay(dataSet)
  }

  prepareDataForDisplay = (dataSet) => {
    const displayData = this.state.repository.findAllMatches(this.state.searchWord);
    console.log(displayData);
    this.setState({ displayData })
  }

  render() {

    const { cleanData, displayData } = this.state;

    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search />
        <ComparisonContainer />
        <CardContainer 
          displayData={ displayData }/>
      </div>
    );
  }
}

export default App;
