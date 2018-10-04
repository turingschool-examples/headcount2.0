import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import './DataCard';
import kinderData from './testData.js';
import CardContainer from './CardContainer';

class App extends Component {
  constructor(props){
    super(props)

    let test = new DistrictRepository(kinderData)

    this.state = {
      schoolCards: test.findAllMatches()
    }
  }


  render() {
    return (
      <div>Welcome To Headcount 2.0
          <CardContainer schoolCards={this.state.schoolCards} />
      </div>
    );
  }
}

export default App;
