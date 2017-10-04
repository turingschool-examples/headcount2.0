import React, { Component } from 'react';
import Search from './Search';
import './styles/App.css';
import Card from './Card';

const testDistrictObject = {
  2005: {
    Data: 1
  },
  2006: {
    Data: 2
  },
  2007: {
    Data: 3
  },
  2008: {
    Data: 4
  },
  2009: {
    Data: 5
  }
};

class App extends Component {


  cardSearch(query) {
    console.log(query);
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Search cardSearch={this.cardSearch} />
        <Card districtObject={testDistrictObject} districtName='my district' />
      </div>
    );
  }
}

export default App;
