import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should set state of districtData when mounted', () => {
    expect(wrapper.state('districtData').length).toBe(181);
  })

  describe('handleChange', () => {
    it('changes the state of searchInput based on the value of the event target', () => {
      const mockEvent = {target: {value: 'search me'}}
      
      expect(wrapper.state('searchInput')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('searchInput')).toEqual('search me');
    })
  })

  describe('search', () => {
    it('should create a new instance of DistrictRepository when called', () => {

    })

    it('should call findAllMatches on the new instance of DistrictRepositories when called', () => {
      // let data = new DistrictRepository(kinderData);
      // const searchTerm = 'colorado';
      // const spy = spyOn(wrapper.instance(), 'search');
      // expect(spy).toHaveBeenCalledWith(searchTerm)
    })
    
    it('should update the state of districtData based on the search input', () => {
      expect(wrapper.state('districtData').length).toBe(181);

      wrapper.instance().search('colorado');
      expect(wrapper.state('districtData').length).toBe(2);
    })
  })

  describe('toggleDistrictToCompare', () => {

    it('should set the state of districtsToCompare to the district object that matches the passed in value if districtsToCompare is empty', () => {
      const expected = {
        location: 'COLORADO', 
        stats: {
          2004: 0.24,
          2005: 0.278,
          2006: 0.337,
          2007: 0.395,
          2008: 0.536,
          2009: 0.598,
          2010: 0.64,
          2011: 0.672,
          2012: 0.695,
          2013: 0.703,
          2014: 0.741,
        }}

      expect(wrapper.state('districtsToCompare')).toEqual([]);
      wrapper.instance().addDistrictToCompare('colorado');
      expect(wrapper.state('districtsToCompare')).toEqual([expected])
    })

    it('should set the state of compareMessage to "Select another district" when a district object is added to districtsToCompare', () => {
      expect(wrapper.state('compareMessage')).toBe('Select two districts to compare')
      wrapper.instance().addDistrictToCompare('colorado');
      expect(wrapper.state('compareMessage')).toBe('Select another district');
    })

    it('should add another location to the state of districtsToCompare if it has one district', () => {
      
        wrapper.instance().addDistrictToCompare('colorado');
        wrapper.instance().addDistrictToCompare('academy 20');
        expect(wrapper.state('districtsToCompare').length).toEqual(2);
    })

    it('should only be able to have two district objects in districtsToCompare', () => {
      wrapper.instance().addDistrictToCompare('colorado');
      wrapper.instance().addDistrictToCompare('academy 20');
      wrapper.instance().addDistrictToCompare('adams county 14');
      expect(wrapper.state('districtsToCompare').length).toEqual(2);
    })

    it('should set the state of districtAverages if there is one item in districtsToCompare', () => {
      const expected = {
        'ACADEMY 20': 0.407,
        'COLORADO': 0.53,
        compared: 0.768
      }

      expect(wrapper.state('districtAverages')).toEqual({});
      wrapper.instance().addDistrictToCompare('academy 20');
      expect(wrapper.state('districtAverages')).toEqual({});
      wrapper.instance().addDistrictToCompare('colorado');
      expect(wrapper.state('districtAverages')).toEqual(expected)
    })
  })
})
