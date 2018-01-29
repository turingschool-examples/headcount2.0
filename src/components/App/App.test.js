/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import mockData from '../../data/testing_mocks';

describe('App state', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should have a default state of empty objects, an empty array and false', () => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.state()).toEqual(mockData.defaultState);
  })

  it('should have a state equal to the cleaned kinderData after component did mount', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().schoolData[Object.keys(wrapper.state().schoolData)[0]])
      .toEqual(mockData.cleanedCoKinderData);
  })

  it('should update state with a new instance of DistrictRepository', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().getDistrictRepository(mockData.rawUpdateData);
    expect(wrapper.state().districtRepository).toEqual(mockData.cleanUpdateData);
  })
})

describe('App methods', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it('should update state when handleSearch is activated', () => {    
    expect(wrapper.find('input').simulate('change', {target: {value: 'col'}}));
    expect(wrapper.state().searchResults.length).toEqual(2);
    expect(wrapper.state().searchError).toEqual(false);
    
    expect(wrapper.find('input').simulate('change', {target: {value: 'aca'}}));
    expect(wrapper.state().searchResults.length).toEqual(1);
    expect(wrapper.state().searchResults).toEqual([mockData.mockSearchData]);  
    expect(wrapper.state().searchError).toEqual(false);
  })

  it('when handleSearch is activated and no matches are found, searchError should be toggled', () => {
    expect(wrapper.find('input').simulate('change', {target: {value: 'zzzz'}}));
    expect(wrapper.state().searchResults.length).toEqual(0);
    expect(wrapper.state().searchError).toEqual(true);
  })

  it('when the first card is clicked its object should be entered in state', () => {
    wrapper.find('article').first().simulate('click');
    expect(wrapper.state().comparisonData)
      .toEqual({
        school1 : mockData.cleanedCoKinderData
      });
  })

  it('when a 2nd card is clicked it puts a comparison object in state', () => {
    wrapper.find('article').first().simulate('click');
    wrapper.find('article').last().simulate('click');
    expect(wrapper.state().comparisonData)
      .toEqual({
        comparison: mockData.comparison,
        school1: mockData.cleanedCoKinderData,
        school2: mockData.cleanedYumaKinderData
      });
  })

  it('should reset comparisonData to an empty object in state when called', () => {
    wrapper.find('article').first().simulate('click');
    expect(wrapper.state().comparisonData).toEqual({
      school1: mockData.cleanedCoKinderData,
    })
    wrapper.instance().removeComparison();
    expect(wrapper.state().comparisonData).toEqual({})
  })
})