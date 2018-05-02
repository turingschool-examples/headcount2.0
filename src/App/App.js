import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js'

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
      districtsData: {}
    }
  }

  render() {
    return (
      <div> 
        <CardContainer 
          districtsData ={ this.state.districtsData }
        />
      </div>
    );
  }
}


export default App;
