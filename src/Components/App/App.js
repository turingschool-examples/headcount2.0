import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header'
import Search from '../Search/Search'

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
        <header className="app-header">
          <Header /> 
        </header>
        <Search />
        <CardContainer
          schoolStats={this.state.schoolStats}
        />
      </div>
    );
  }
}

export default App;
