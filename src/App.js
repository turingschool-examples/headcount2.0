import React, { Component } from 'react';

import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'
import './App.css';

const district = new DistrictRepository (kinderData)

class App extends Component {
  constructor (props) {
    super (props) 
    this.state = {
      data: district.findAllMatches()
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2</h1>
        {district.findAllMatches().map (entry => {
          let x = Object.keys(entry.stats)
          return x.map (stat => {
            return <p> {entry.stats[stat]}</p>
          })
        })}
      </div>
    );
  }
}

export default App;
