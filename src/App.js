import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import './App.css';


const schoolData = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
  }
  


  // should used WillMount or DidMount?
  componentDidMount() {
    console.log(schoolData) 
  }



  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
