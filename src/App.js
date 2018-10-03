import React, { Component } from 'react'
import './App.css'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js'

const allSchools = new DistrictRepository(kinderData)

console.log(allSchools)

class App extends Component {
  constructor(){
    super()
    this.state = {
      stats: allSchools.stats
    }
  }
  

  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
