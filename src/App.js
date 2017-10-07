import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';
import Hero from './Hero';
// import Card from './Card';
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

  onCardClick = (location) => {
    let { comparisonArray } = this.state;
    let tempArray = comparisonArray.filter(card => card.location !== location);

    if (tempArray.length === comparisonArray.length) {
      const clickedCard = this.state.dataObject.findByName(location);

      tempArray.push(clickedCard);
    }
    this.setState({
      comparisonArray: tempArray
    });
  }

  render() {
    return (
      <div>
        <Hero />
        <Search cardSearch={this.cardSearch.bind(this)} />
        <CardContainer dataArray={this.state.displayArray} />
      </div>
    );
  }
}

export default App;
