import React, { Component } from 'react';
import Search from './Search';
import './styles/App.css';
import CardContainer from './CardContainer';
import Card from './Card';

const testDataObject = {
  'School1': {
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
  },
  'School2': {
    2010: {
      Data: 0.1
    },
    2011: {
      Data: 0.2
    },
    2012: {
      Data: 0.3
    },
    2013: {
      Data: 0.4
    },
    2014: {
      Data: 0.5
    }
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
        <CardContainer dataObj={testDataObject} />
      </div>
    );
  }
}

export default App;
