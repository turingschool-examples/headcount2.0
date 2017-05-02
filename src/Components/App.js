import React, { Component } from 'react';
import '../Styles/App.css';
import Search from './Search.js'
import CardGrid from './CardGrid.js'



class App extends Component {

  render() {
    return (
      <div>
        <Search/>
        <CardGrid/>
      </div>
    );
  }
}

export default App;
