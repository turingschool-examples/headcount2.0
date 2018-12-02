import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import Kindergartner from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: 'Kindergartner',
      displayData: [],
      searchWord: '',
      repository: new DistrictRepository(Kindergartner)
    }
  }

  componentDidMount() {
    this.prepareDataForDisplay();
  }

  prepareDataForDisplay = () => {
    const displayData = this.state.repository.findAllMatches(this.state.searchWord);
    this.setState({ displayData })
  }

  render() {

    const { cleanData, displayData, dataSet } = this.state;

    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search />
        <ComparisonContainer />
        <CardContainer 
          displayData={ displayData }
          dataSet={ dataSet }/>
      </div>
    );
  }
}

export default App;
