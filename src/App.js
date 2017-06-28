import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import DistrictRepository from './helper'
import CardList from './CardList'
import Input from './Input'
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {
  constructor () {
    super()
    this.helper = new DistrictRepository(kinderData)
    this.state = {
      selectedCards: [],
      filteredCards: []
    }
  }

  sumbitSearch() {
    console.log('Werd')
    // const newState = [...this.state.filteredCards, this.helper.findAllMatches(this.state.searchInput)]
    // this.setState({filteredCards: newState})
  }

  render() {
    return (
      <div>
        <Input helper={this.helper}
               submitSearch={this.submitSearch}/>
        <CardList selectedCards={this.state.selectedCards}
                  helper={this.helper}/>
      </div>
    );
  }
}

export default App;
