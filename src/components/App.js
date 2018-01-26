import React, { Component } from 'react';
import Controls from './Controls';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import '../styles/App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';

const DistrictData = new DistrictRepository(kinderData);

class App extends Component {

  constructor() {
    super()
    this.state = {
      allDistrictData: [],
      cardCompData: [{data: {2004: 0, 2005: 0, 2006: 0, 2007: 0, 
                    2008: 0, 2009: 0, 2010: 0, 2011: 0, 2012: 0, 
                    2013: 0, 2014: 0}, 
                    location: 'Location 1 for Comparison'}, 
                    {data: {2004: 0, 2005: 0, 2006: 0, 2007: 0, 
                    2008: 0, 2009: 0, 2010: 0, 2011: 0, 2012: 0, 
                    2013: 0, 2014: 0}, 
                    location: 'Location 2 for Comparison'}]
    }
  }

  componentDidMount() {
     this.setState({
      allDistrictData: DistrictData.data
    })
  }

  handleSearch = (string) => {
    this.setState({
      allDistrictData: DistrictData.findAllMatches(string)
    })
  }

  compareCards = (string) => {
    //if clicked 1 time replace cardCompData[0]
    //2nd card clicked replace cardCompData[2]
    //if card clicked 2 time toggle back to mock data
    console.log(string)
    this.setState({
      cardCompData: DistrictData.findByName(string)
    })
    console.log(this.state.cardCompData)
  }

  render() {
    return (
      <section>
        <Controls handleSearch={this.handleSearch} />
        <ComparisonContainer cardCompData={ this.state.cardCompData }/>
        <CardContainer allDistrictData={ this.state.allDistrictData } compareCards={ this.compareCards }/>
      </section>
    );
  }
}

export default App;
