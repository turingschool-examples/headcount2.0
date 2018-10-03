import React, { Component } from 'react';

import './App.css';
import CardContainer from './CardContainer.js'
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        districts: []
    }
  }

  componentDidMount() {
    this.populateAllCards(kinderData)
  }

 populateAllCards = (data) => {
  const repository = new DistrictRepository(data)
  this.setState({
    districts: repository.findAllMatches()
  })
 }

  render() {
    const { districts } = this.state
    return (
      <div>
        <CardContainer districts={districts} />
      </div>
    );
  }
}

export default App;
