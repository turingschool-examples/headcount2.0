import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { shallow } from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

  it('should have a default state with a key of cards that is an array', () => {
    // setup
    const wrapper = shallow(<App />)
    // execution
    // expectation
    expect(wrapper.state('cards')).toEqual([])
  })
})
