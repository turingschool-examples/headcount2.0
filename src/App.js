import React, { Component } from 'react';
import './App.css';
import DistrictList from './DistrictList'

class App extends Component {
  constructor() {
    super();

    this.state = {
      districts: []
    }
  }



  render() {
    return (
      <React.Fragment> 
        <DistrictList />
      </React.Fragment>
    );
  }
}

export default App;
