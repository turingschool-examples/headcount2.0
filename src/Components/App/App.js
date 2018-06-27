import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header'


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      schoolStats: this.props.districts.stats
    }
  }


  render() {
    return (
      <div className="app">
        <header>
          <Header /> 
        </header>
        <CardContainer
          schoolStats={this.state.schoolStats}
        />
      </div>
    );
  }
}

export default App;
