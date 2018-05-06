import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DistrictRepository from './helper';
import {shallow, mount} from 'enzyme';
import kinderData from './data/kindergartners_in_full_day_program';

describe('App', () => {
  let wrapper;
  let districts;

  beforeEach(() => {
    districts = new DistrictRepository(kinderData);
    wrapper = shallow(<App districts={ districts } />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state', ()=> {

    expect(wrapper.state().schoolStats).toBe(districts.stats);
    expect(wrapper.state().districts).toBe(districts);
    expect(wrapper.state().selectedCards).toEqual([]);
  });

  it('should set schoolStats to the districts matching the user input', ()=> {
    wrapper = mount(<App districts={ districts } />);

    wrapper.instance().setLocationData('colorado');
    expect(wrapper.state().schoolStats).toEqual(0);
    
  });

  describe('Set selected card function', () => {
    const district1 = { 
      location: 'COLORADO', 
      stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741,
      }, 
      selected: true 
    };

    const district2 = { 
      location: 'ACADEMY 20', 
      stats: {
        "2004": 0.302,
        "2005": 0.267,
        "2006": 0.354,
        "2007": 0.392,
        "2008": 0.385,
        "2009": 0.39,
        "2010": 0.436,
        "2011": 0.489,
        "2012": 0.479,
        "2013": 0.488,
        "2014": 0.49,
      }, 
      selected: true 
    };

    it('should add selected districts to selected state if there are less than two in state', () => {
      const expected = [district1];

      wrapper.instance().setSelectedCard('COLORADO');
      expect(wrapper.state().selectedCards).toEqual(expected);
    });

    it('should remove selected districts from selected state if two cards have already been selected', () => {
      const location1 = 'COLORADO';
      const location2 = 'ACADEMY 20';
      const initialState1 = [district1];
      const initialState2 = [district2, district1];
      const expected = [district2];

      wrapper.instance().setSelectedCard(location1);
      expect(wrapper.state('selectedCards')).toEqual(initialState1);
      
      wrapper.instance().setSelectedCard(location2);
      expect(wrapper.state('selectedCards')).toEqual(initialState2);

      wrapper.instance().setSelectedCard(location1);
      expect(wrapper.state('selectedCards')).toEqual(expected);
    });

    it('should toggle selected value to true when selected', () => {
 
    });

});

});

