import React, { Component } from 'react';
import CardContainer from './CardContainer';
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
    this.displayAllCards(kinderData);
  }

  displayAllCards = (data) => {
    const helper = new DistrictRepository(data);
    const cards = helper.findAllMatches();
    this.setState({ cards })
  }

  render() {
    return (
      <div>
        {/* <Search/>
        <Compare/> */}
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
