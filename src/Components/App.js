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
    const selectedCards = [...this.state.selectedCards, foundCard];
    
    if (this.state.selectedCards.includes(foundCard)) {
      this.deselectCard(foundCard.location)

      foundCard.isSelected = !foundCard.isSelected
      return
    }
    
    if (this.state.selectedCards.length === 2) {
      selectedCards.shift();
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
   
  compareSelectedCards = (cards) => {
    if (this.state.selectedCards.length === 2) {
      const location1 = this.state.selectedCards[0].location;
      const location2 = this.state.selectedCards[0].location;
      const comparedData = districtRepo.compareDistrictAverages(location1, location2);

      this.setState({ comparedData })
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
