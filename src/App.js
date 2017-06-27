import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import DistrictRepository from './helper'
import CardList from './CardList'
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {
  constructor () {
    super()
    this.helper = new DistrictRepository(kinderData)
    this.state = {
      selectedCards: []
    }
  }

  // componentWillMount() {
  //   console.log(kinderData);
  // }

  render() {
    return (
      <div>
        <CardList selectedCards={this.state.selectedCards}
                  helper={this.helper}/>

      </div>
    );
  }
}

export default App;
