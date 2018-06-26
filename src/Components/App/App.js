import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      schoolStats: this.props.districts.stats
    }
  }


  render() {
    return (
      <div className="app">Welcome To Headcount 2.0
        <CardContainer
          schoolStats={this.state.schoolStats}
        />
      </div>
    );
  }
}

export default App;
