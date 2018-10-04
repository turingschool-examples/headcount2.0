import React, { Component } from 'react'
import './App.css'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js'
import CardContainer from './CardContainer'

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
    const {stats} = this.state
    return (
      <div>
        <CardContainer stats={stats} />
      </div>
    );
  }
}

export default App;
