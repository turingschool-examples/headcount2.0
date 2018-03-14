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

  it('should have a state key of districtRepository set to an object of school district data from DistrictRepository', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData);
    expect(wrapper.state().districtRepository).toEqual(expected)
    expect(typeof wrapper.state().districtRepository).toEqual('object')
  })

  it('should have a state key of districtsArray set to an array of school district data from DistrictRepository', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData).findAllMatches()
    expect(wrapper.state().districtsArray).toEqual(expected)
  })

  it('should set the districtsArray state on invoking handleSearch', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData).findAllMatches('CO');
    wrapper.instance().handleSearch('CO')
    expect(wrapper.state().districtsArray).toEqual(expected)
  })

  it('should update the state when retrieveSchoolData is called', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData)
    wrapper.instance().retrieveSchoolData(kinderData);
    expect(wrapper.state().districtRepository).toEqual(expected)
  })

  it('should run handleSearch on change of the Nav input', () => {
    const wrapper = mount(<App />);
    const expected = new DistrictRepository(kinderData).findAllMatches('a');
    wrapper.find('input').props().value = 'a'
    wrapper.find('input').simulate('change', {target: {value: 'a'}})
    expect(wrapper.state().districtsArray).toEqual(expected)
  })
})
