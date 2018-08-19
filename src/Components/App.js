import React, { Component } from 'react';
import './App.css';
import CardCont from './CardCont';
import SelectedCont from './SelectedCont';
import Search from './Search';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {
  constructor() {
    super();
    this.districtRepo = new DistrictRepository(kinderData);
    this.state = {
      data: [],
      selectedCards: [] 
    }
  }

  componentDidMount() {
    this.updateCards()
  }

  updateCards = (input) => {
    const data = this.districtRepo.findAllMatches(input);

    this.setState({ data })
  }

  selectCard = (input) => {
    const foundCard = this.districtRepo.findByName(input);
    const selectedCards = [...this.state.selectedCards, foundCard];
    
    if (this.state.selectedCards.includes(foundCard)) {
      this.deselectCard(foundCard.location)

      foundCard.isSelected = !foundCard.isSelected
      return
    }
    
    if (this.state.selectedCards.length === 2) {
      const deselectedCard = selectedCards.shift();
      deselectedCard.isSelected = false
    } 
    this.setState({ selectedCards })
    foundCard.isSelected = !foundCard.isSelected
  }

  deselectCard = (location) => {
    const selectedCards = this.state.selectedCards.filter(card => 
      card.location !== location
    );

    this.setState({ selectedCards })
  }
   
  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
        </header>
        <Search updateCards={ this.updateCards } />
        <SelectedCont 
          selectedCards={this.state.selectedCards} 
          selectCard={this.selectCard}
          comparedData={this.state.comparedData}
          compareDistrictAverages={this.districtRepo.compareDistrictAverages}
        />
        <CardCont 
          data={this.state.data}
          selectCard={this.selectCard} 
          comparedData={this.state.comparedData}
        />
      </div>
    );
  }
}

export default App;
