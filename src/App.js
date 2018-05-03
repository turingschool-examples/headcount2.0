import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import Districts from './components/Districts';
import Search from './components/Search';
import CompareCards from './components/compareCards';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolStats: null || props.districts.stats,
      districts: props.districts,
      selectedCards: []
    };
  }

  setLocationData = ({userInput}) => {
    this.setState({
      schoolStats: this.state.districts.findAllMatches(userInput)
    });
  }

  setSelectedCard = (location) => {
    if(this.state.selectedCards.length < 2 && this.state.schoolStats[location].selected === false) {
      var selectedState = this.state.schoolStats[location].selected ? false: true;
      var selectedCard = Object.assign(this.state.schoolStats[location], {selected: selectedState});

      this.setState({
        selectedCards: [selectedCard, ...this.state.selectedCards]
      });

    } else if (this.state.schoolStats[location].selected === true) {
      var selectedState = this.state.schoolStats[location].selected ? false: true;
      var selectedCard = Object.assign(this.state.schoolStats[location], {selected: selectedState});

      this.setState({
        selectedCards: this.state.selectedCards.filter(card => card.location !== location)
      });
    };
  }
 
  render() {
    return (
      <main>
        <h1>HeadCount 2.0</h1>
        <Search setLocationData={this.setLocationData}/>
        <section className="comparisonContainer">
          <CompareCards selectedCards={this.state.selectedCards} setSelectedCard={this.setSelectedCard} />
        </section>
        <Districts stats={this.state.schoolStats} setSelectedCard={this.setSelectedCard} selectedCards={this.state.selectedCards} />
      </main>
    );
  }
}

export default App;
