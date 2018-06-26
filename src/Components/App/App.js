import React, { Component } from 'react';
import './App.css';
import ControlledForm from '../ControlledForm/ControlledForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      matchingDistricts: [],
    }
  }



  render() {
    return (
      <div>
        <h1>Count dem Heads</h1>
        <ControlledForm />
      </div>
    );
  }
}

export default App;
