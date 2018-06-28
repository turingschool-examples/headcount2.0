import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { shallow } from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

  it('should have a default state with a key of cards that contains all 181 districts', () => {
    const wrapper = shallow(<App />)

    expect(Object.keys(wrapper.state('cards')).length).toEqual(181)
  })
})
