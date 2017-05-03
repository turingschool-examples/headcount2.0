import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import Controls from './Controls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  render() {
    return (
      <main>
        <div>Welcome To Headcount 2.0</div>
        <Controls />
        <Cards />
      </main>

    );
  }
}

export default App;
