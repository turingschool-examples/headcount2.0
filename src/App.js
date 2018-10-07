import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm';
import CompareCardsContainer from './CompareCardsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      compareCards: [],
      compared: []
    };
  }

  componentDidMount() {
    let card = new DistrictRepository(kinderData); 
    let data = card.findAllMatches();
    this.setState({ cards: data });
  }

  setStateOfCompare = (str) => {
    const newSchool = {...str};
    const compareCards = [...this.state.compareCards, newSchool];
    this.setState({ compareCards });
    if (this.state.compareCards.length > 0) {
      let str1 = Object.keys(compareCards[0]);
      str1 = str1.toString();
      let str2 = Object.keys(compareCards[1]);
      str2 = str2.toString();
      this.compareAvrg(str1, str2);
    }
    if (this.state.compareCards.length > 1) {
      this.state.compareCards.slice(0, -1);
      let str1 = Object.keys(compareCards[0]);
      str1 = str1.toString();
      let str2 = Object.keys(compareCards[1]);
      str2 = str2.toString();
      this.compareAvrg(str1, str2);
    }
  }

  clearComparedCards = () => {
    this.setState({compareCards: []});
    this.setState({compared: []});
  }

  searchSchool = (string) => {
    let search = new DistrictRepository(kinderData);
    let data = search.findAllMatches(string);
    this.setState({ cards: data });
  }

  compareAvrg = (str1, str2) => {
    let compare = new DistrictRepository(kinderData);
    let data = compare.compareDistrictAverages(str1, str2);
    this.setState({compared: {...data}});
  }

  render() {
    return (
      <div>
        <header className="header">HeadCount 2.0!</header>
        <SearchForm searchSchool={this.searchSchool}/>
        <CompareCardsContainer 
          className='compare-cards'cards={this.state.compareCards} 
          comparedCard={this.state.compared} resetState={this.resetState} />
        <button className='clear-btn' type='button' 
          onClick={this.clearComparedCards}>Clear Cards</button>
        <CardContainer cards={this.state.cards} 
          compareAvrg={this.compareAvrg} 
          setStateOfCompare={this.setStateOfCompare} />
      </div>
    );
  }
}

export default App;
