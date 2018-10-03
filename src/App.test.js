import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it.skip('should display school districts', () => {
    // Setup && Execution
    const wrapper = shallow(<App />)

    // Expectation
    expect(wrapper).toMatchSnapshot()
  })

})