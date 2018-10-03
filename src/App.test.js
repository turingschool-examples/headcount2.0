import React from 'react';
import { shallow } from 'enzyme';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

import App from './App';

describe('App', () => {
  const repository = new DistrictRepository(kinderData)
  const data = repository.findAllMatches()

  it('should display school districts', () => {
    // Setup && Execution
    const wrapper = shallow(<App />)

    // Expectation
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state of 181 school districts', () => {
    const wrapper = shallow(<App />)
    const expected = { districts: [...data] }

    expect(wrapper.state()).toEqual(expected)
  })

})