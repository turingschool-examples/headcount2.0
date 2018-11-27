import React, { Component } from 'react';
import './App.css';
import Data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
  }

  // componentDidMount = () => {
  //   this.setState({
  //     data: Data 
  //   })
  // }

  render() {
    return (
      <div>Welcome To Headcount 2.0
      </div>

    );
  }
}

export default App;
