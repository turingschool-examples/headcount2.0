import React from 'react';
import { shallow } from 'enzyme';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

import App from './App';

describe('App', () => {
  const repository = new DistrictRepository(kinderData)
  const data = repository.findAllMatches()

  it('should display school districts', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state of 181 school districts', () => {
    const wrapper = shallow(<App />)
    const expected = { districts: data, data: repository, schoolName: '', compareSelections: []}

    expect(wrapper.state()).toEqual(expected)
  })

  it('should save a school name to state after search input', () => {
    const wrapper = shallow(<App />)
    const schoolName = 'Colorado' 
   
    wrapper.instance().filterCards(schoolName)
    expect(wrapper.state('schoolName')).toEqual(schoolName)
  })

  it('should save two school selections to be compared to state', () => {
  

  })
  
})





