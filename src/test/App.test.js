import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should update state when componentDidMount', () => {
    const wrapper = shallow(<App />)
    const expected = {}
  });

  it('should update state when selectLocation is called', () => {

  });

})
