import React, { Component } from 'react';
import './App.css';
import CardCont from './CardCont';
import SelectedCont from './SelectedCont';
import Search from './Search';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

const districtRepo = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedCards: [], 
      comparedData: {}
    }
  }

  componentDidMount() {
    this.updateCards()
  }

  updateCards = (input) => {
    const data = districtRepo.findAllMatches(input);

    this.setState({ data })
  }

  selectCard = (input) => {
    const foundCard = districtRepo.findByName(input);
    let selectedState = this.state.selectedCards

    if (!selectedState.includes(foundCard) && selectedState.length < 2) {
      const selectedCards = [...this.state.selectedCards, foundCard];

      this.setState({ selectedCards})
    }
  }
   
  

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
        </header>
        {/* <SelectedCont /> */}
        <Search updateCards={ this.updateCards } />
        <CardCont 
          data={this.state.selectedCards} 
          selectCard={this.selectCard}
        />
        <CardCont 
          data={this.state.data}
          selectCard={this.selectCard} 
        />
      </div>
    );
  }
}

export default App;
