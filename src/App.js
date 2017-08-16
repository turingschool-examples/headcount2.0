import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js'
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainContainer from './components/MainContainer'

import kinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {

  render() {
    let districtData = new DistrictRepository(kinderData)
    console.log(districtData.cleanData(kinderData))
    return (
      <div className="App">
        <Header />
        <SideBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
