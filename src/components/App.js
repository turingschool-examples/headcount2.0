import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Search from './Search';
import Compare from './Compare'
import '../css/App.css';

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper'


class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      compare: []
    }
  }

  componentDidMount() {
    this.displayAllCards();
  }

  displayAllCards = () => {
    const helper = new DistrictRepository(kinderData);
    const cards = helper.findAllMatches();
    this.setState({ cards })
  }

  render() {
    return (
      <div>
        <Search
          displayAllCards={this.displayAllCards}
        />
        <Compare/>
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
