import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot()
  });

  it('should have a state key of districts set to school district data from DistrictRepository', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData);
    expect(wrapper.state().districts).toEqual(expected)
  })

  it('should update the state when retrieveSchoolData is called', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData)
    wrapper.instance().retrieveSchoolData(kinderData);
    expect(wrapper.state().districts).toEqual(expected)
  })
})
