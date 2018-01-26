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
      cardCompData: []
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
    //set up conditional where if click on card in card container put in cardCompData array 
    //if card click in comparison container remove card from cardCompData array
    //also add condition so that cardCompData is limited to length of 2
    //create new card component for comparison card
    //new card should have condition that makes it appear only when cardComp is 2
    let location1 = DistrictData.findByName(string)
    this.setState({
      cardCompData: location1
    })
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
