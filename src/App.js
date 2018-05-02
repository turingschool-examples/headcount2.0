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
      selectedCard: null
    };
  }

  setLocationData = ({userInput}) => {
    this.setState({
      schoolStats: this.state.districts.findAllMatches(userInput)
    });
  };

  setSelectedCard = (location) => {
    this.setState({
      selectedCard: this.state.schoolStats[location]
    });
    console.log(this.state.selectedCard)
  }
 
  render() {
    return (
      <main>
        <h1>HeadCount 2.0</h1>
        <Search setLocationData={this.setLocationData}/>
        <CompareCards selectedCard={this.state.selectedCard} />
        <Districts stats={this.state.schoolStats} setSelectedCard={this.setSelectedCard} selectedCard={this.state.selectedCard} />
      </main>
    );
  }
}

export default App;
