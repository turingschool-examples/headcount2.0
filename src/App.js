import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';
import Hero from './Hero';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataObject: new DistrictRepository(kinderData),
      displayArray: [],
      comparisonArray: []
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
    let tempArray = comparisonArray.filter(card => card.location !== location);

    if (tempArray.length === comparisonArray.length) {
      const clickedCard = dataObject.findByName(location);

      tempArray.push(clickedCard);
    }
    this.setState({
      comparisonArray: tempArray
    });
  }

  render() {
    let { comparisonArray, displayArray } = this.state;
    return (
      <div>
        {/* <Hero /> */}
        <Search cardSearch={this.cardSearch} />
        <CardContainer
          dataArray={displayArray}
          onCardClick={this.onCardClick}
          comparisonArray={comparisonArray} />
      </div>
    );
  }
}

export default App;
