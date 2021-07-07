import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from "./helper.js"


describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
  it('filtered districtss')
  // it('Renders a Search component with the right props', () => {
  //   const wrapper = shallow(<App />)
  //   expect(wrapper.find('Search').prop('filterDistricts')).toEqual(wrapper.instance().filterDistricts)
  // })
  // it('renders a CardContainer with the right props', () => {
  //   const districts = new DistrictRepository(kinderData)
  //   const wrapper = shallow(<App />)
  //   expect(wrapper.find('CardContainer').prop('districts')).toEqual(districts)
  //   expect(wrapper.find('CardContainer').prop('filteredDistricts')).toEqual([])
  //   expect(wrapper.find('CardContainer').prop('selectedCards')).toEqual([])
  //   expect(wrapper.find('CardContainer').prop('displaySelected')).toEqual(wrapper.instance().displaySelected)
  //   expect(wrapper.find('CardContainer').prop('displayCompared')).toEqual(wrapper.instance().displayCompared)
  //   expect(wrapper.find('CardContainer').prop('comparedCard')).toEqual({})
  // })
})
