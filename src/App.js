import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsContainer from './CardsContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: props.districts
    };

  }

  render() {
    return (
      <div>
        <CardsContainer districts={ this.state.districts }/>
      </div>
    );
  }
}

App.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object).isRequired
};

export default App;
