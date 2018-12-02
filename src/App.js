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

  searchForDistrict = (searchString) => {
    const searchWord = searchString;
    this.setState( { searchWord } );
    this.prepareDataForDisplay(searchString)
  }

  prepareDataForDisplay = (searchWord) => {
    const displayData = this.state.repository.findAllMatches(searchWord);
    this.setState({ displayData })
  }

  render() {

    const { cleanData, displayData, dataSet } = this.state;

    return (
      <div>
        <h1 className='app'>Welcome To Headcount 2.0</h1>
        <Search 
          searchForDistrict={this.searchForDistrict } />
        <ComparisonContainer />
        <CardContainer 
          displayData={ displayData }
          dataSet={ dataSet }/>
      </div>
    );
  }
}

export default App;
