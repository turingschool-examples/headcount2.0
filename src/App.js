import React, { Component } from 'react';
import Search from './Search';
import './styles/App.css';

class App extends Component {


  cardSearch(query) {
    console.log(query);
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Search cardSearch={this.cardSearch}/>

      </div>
    );
  }
}

export default App;
