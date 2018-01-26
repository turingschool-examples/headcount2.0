import React, { Component } from 'react';
import Controls from './Controls';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import '../styles/App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';

const DistrictData = new DistrictRepository(kinderData);

class App extends Component {

  constructor() {
    super()
    this.state = {
      allDistrictData: [],
      compareCardsData: []
    }
  }

  componentDidMount() {
     this.setState({
      allDistrictData: DistrictData.data
    })
  }

  handleSearch = (string) => {
    this.setState({
      allDistrictData: DistrictData.findAllMatches(string)
    })
  }

  compareCards = (string) => {
   
    this.setState({
      compareCardsData: DistrictData.findByName(string)
    })
    //console.log(this.state.compareCardsData)
  }


  render() {
    return (
      <section>
        <Controls handleSearch={this.handleSearch} />
        <ComparisonContainer compareCardsData={this.state.compareCardsData} />
        <CardContainer compareCards={this.compareCards} allDistrictData={ this.state.allDistrictData }/>
      </section>
    );
  }
}

export default App;
