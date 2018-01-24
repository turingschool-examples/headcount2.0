import React, { Component } from 'react';
import Controls from './Controls';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <section>
        <Controls />
        <ComparisonContainer />
        <CardContainer />
      </section>
    );
  }
}

export default App;
