import React, { Component } from 'react';
import '../Styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Comparison />
        <List />
      </div>
    );
  }
}

export default App;
