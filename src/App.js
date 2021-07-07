import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    let card = new DistrictRepository(kinderData) 
    let data = card.findAllMatches()
    this.setState({ cards: data })
  }

  searchSchool = (string) => {
    let search = new DistrictRepository(kinderData)
    let data = search.findAllMatches(string)
    this.setState({ cards: data })
  }

  render() {
    return (
      <div>
        <SearchForm searchSchool={this.searchSchool}/>
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
