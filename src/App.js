import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';
import Hero from './Hero';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import ComparisonContainer from './ComparisonContainer';
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

    if (tempArray.length === comparisonArray.length &&
      comparisonArray.length < 2) {
      const clickedCard = dataObject.findByName(location);

      tempArray.push(clickedCard);
    }
    tempComparisonCard = this.updateComparisonCards(tempArray);
    this.setState({
      comparisonArray: tempArray,
      comparisonCardArray: tempComparisonCard
    });
  }

  updateComparisonCards(newComparisonArray) {
    if (newComparisonArray.length < 2) {
      return [];
    }
    let tempCompareArray = [];
    tempCompareArray.push(
      this.state.dataObject.compareDistrictAverages(
        newComparisonArray[0].location, newComparisonArray[1].location));
    return tempCompareArray;
  }

  render() {
    let { comparisonArray, displayArray, comparisonCardArray } = this.state;
    return (
      <div className='app-container'>
        <Hero />
        <CardContainer
          comparisonArray={comparisonArray}
          dataArray={displayArray}
          onCardClick={this.onCardClick} />
        <Search cardSearch={this.cardSearch} />
        <ComparisonContainer
          onCardClick={this.onCardClick}
          comparisonArray={comparisonArray}
          comparisonCardArray={comparisonCardArray} />
      </div>
    );
  }
}

export default App;
