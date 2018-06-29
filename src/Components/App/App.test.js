import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper';
import data from '../../data/kindergartners_in_full_day_program';

describe('App', () => {

  let wrapper;
  let mockDistricts;
  
  beforeEach(() => {
    mockDistricts = new DistrictRepository(data);
    wrapper = shallow(<App
                        districts={mockDistricts}
                        disableLifeCycleMethods={true}
    />)
  })

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should have an initial state', () => {

    expect(wrapper.state().schoolStats).toBe(mockDistricts.stats)
    expect(wrapper.state().districtMethods).toBe(mockDistricts)
    expect(wrapper.state().searchResult).toEqual([])
    expect(wrapper.state().selectedCards).toEqual([])
  })

  it('should set state based on search entry', () => {
    
    const mockSearch = 'Adams'

    wrapper.instance().submitSearch(mockSearch)

    expect(wrapper.state().searchResult).toHaveLength(2)
  })

  describe('selectCard', () => {
    const unselected = {
          location: "ACADEMY 20",
          selected: false,
          stats: {2004: 0.302, 
                  2005: 0.267,
                  2006: 0.354,
                  2007: 0.392,
                  2008: 0.385,
                  2009: 0.39,
                  2010: 0.436,
                  2011: 0.489,
                  2012: 0.479,
                  2013: 0.488,
                  2014: 0.49
                  }
                }

    const expected = [{
      location: "ACADEMY 20",
      selected: true,
      stats: {2004: 0.302, 
              2005: 0.267,
              2006: 0.354,
              2007: 0.392,
              2008: 0.385,
              2009: 0.39,
              2010: 0.436,
              2011: 0.489,
              2012: 0.479,
              2013: 0.488,
              2014: 0.49
              }
            }] 

    it('should call setSelected', () => {
      const location = "ACADEMY 20"

      wrapper.setSelected = jest.spyOn(wrapper.instance(), 'setSelected')
      
      wrapper.instance().selectCard(location)

      expect(wrapper.setSelected).toHaveBeenCalled()
    })

  });
  
})

