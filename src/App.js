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
      schoolData: [],
      comparedCards: [],
      districtNames: [],
      results: []
    }
    this.data = new DistrictRepository(kindergartners_in_full_day_program);
  }

  componentDidMount() {
    const schoolData = this.data.findAllMatches();
    this.setState({ schoolData });
  }

  componentDidUpdate() {
    this.checkComparedCards();
  }

  searchSchoolData = phrase => {
    const schoolData = this.data.findAllMatches(phrase);
    this.setState({ schoolData });
  }

  checkComparedCards = () => { 
    if (this.state.comparedCards.length > 2) {
      let comparedCards = this.state.comparedCards;
      let districtNames = this.state.districtNames;
      districtNames.shift();
      comparedCards.shift();
      this.setState({
        comparedCards,
        districtNames
      });
    }
  }

  compareDistricts = () => {
    if (this.state.comparedCards.length > 1) {
      const district1 = this.state.districtNames[0];
      const district2 = this.state.districtNames[1];
      const disctrictsResults = this.data.compareDistrictAverages(district1, district2);
      return disctrictsResults;
    }
  }

  highLightCard = e => {
    const results = e.target.parentNode.firstChild.textContent;
    e.target.parentNode.className = 'card active';
    this.setState({
      comparedCards: [...this.state.comparedCards, this.data.findByName(results)],
      districtNames:[...this.state.districtNames, results]
    });
  }

  render() {
    return (
      <div className="App">
        <Search searchSchoolData={this.searchSchoolData} />
        <h4 className="App-title">HeadCount 2.0</h4>
        <DisplayComparedContainer comparedCards={this.state.comparedCards} compareDistricts={this.compareDistricts}/>
        <CardsContainer schoolData={this.state.schoolData} highLightCard={this.highLightCard} />
      </div>
    );
  }
}

export default App;
