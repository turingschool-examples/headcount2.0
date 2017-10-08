import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';
import Hero from './Hero';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import CardComparison from './CardComparison';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataObject: new DistrictRepository(kinderData),
      displayArray: [],
      comparisonArray: [],
      comparisonCardArray: []
    };
    this.onCardClick = this.onCardClick.bind(this);
    this.cardSearch = this.cardSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayArray: this.state.dataObject.findAllMatches()
    });
  }

  cardSearch(query) {
    this.setState({
      displayArray: this.state.dataObject.findAllMatches(query)
    });
  }

  onCardClick(location) {
    let { comparisonArray, dataObject } = this.state;
    let tempComparisonCard;
    let tempArray = comparisonArray.filter(card => card.location !== location);

    if (tempArray.length === comparisonArray.length) {
      const clickedCard = dataObject.findByName(location);

      tempArray.push(clickedCard);
      tempComparisonCard = this.updateComparisonCards(tempArray);
      console.log(tempComparisonCard);
    }
    this.setState({
      comparisonArray: tempArray,
      comparisonCardArray: tempComparisonCard
    });
  }

  updateComparisonCards(newComparisonArray) {
    console.log('here we go comparing!');
    if (newComparisonArray.length < 2) {
      return [];
    }
    console.log('array is at least 2!');
    let tempCompareArray = [];
    tempCompareArray.push(
      this.state.dataObject.compareDistrictAverages(
        newComparisonArray[0].location, newComparisonArray[1].location));
    return tempCompareArray;
  }

  render() {
    let { comparisonArray, displayArray } = this.state;
    return (
      <div>
        <Hero />
        <CardContainer
          comparisonArray={comparisonArray}
          dataArray={displayArray}
          onCardClick={this.onCardClick} />
        <Search cardSearch={this.cardSearch.bind(this)} />
        <CardComparison
          onCardClick={this.onCardClick}
          comparisonArray={this.state.comparisonArray}
          comparisonCardArray={this.state.comparisonCardArray} />
      </div>
    );
  }
}

export default App;
