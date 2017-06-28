import React, { Component } from 'react';
import './App.css';
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

  submitSearch(searchInput) {
    const newState = this.helper.findAllMatches(searchInput)
    this.setState({filteredCards: newState})
  }

  render() {
    return (
      <div>
        <Input helper={this.helper}
               submitSearch={this.submitSearch.bind(this)}/>
        <CardList selectedCards={this.state.selectedCards}
                  filteredCards={this.state.filteredCards}
                  helper={this.helper}/>
      </div>
    );
  }
}

export default App;
