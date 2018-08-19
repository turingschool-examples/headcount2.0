import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';


describe('App', () => {
  let wrapper;
  let initialState;

  beforeEach(() => {
    wrapper = shallow(<App />);
    initialState = {
      districts: new DistrictRepository(kinderData),
      searchedDistrict: [],
      cardsToCompare: [],
      comparedObject: {},
    };
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state ', () => {
    wrapper.setState(initialState);
    expect(wrapper.state()).toEqual(initialState);
  });

  it('should update the searchedDistricts array when searchDistricst is called', () => {
    wrapper.instance().searchDistricts('COLO');
    expect(wrapper.state().searchedDistrict.length).toEqual(2);
  });

  it('should add a district to the cardsToCompare array when addToCompare is called', () => {
    wrapper.instance().addToCompare('colorado');
    expect(wrapper.state().cardsToCompare).toEqual([{
      location: 'COLORADO',
      stats: {
        2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741,
      },
    }]);
  });

  it('should update comparedObject when there are two objects in the cardsToCompare array', () => {
    wrapper.instance().addToCompare('colorado');
    wrapper.instance().addToCompare('academy 20');
    expect(wrapper.state().cardsToCompare).toEqual([{
      location: 'COLORADO',
      stats: {
        2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741,
      },
    }, {
      location: 'ACADEMY 20',
      stats: {
        2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49,
      },
    }]);
    expect(wrapper.state().comparedObject).toEqual({ 'ACADEMY 20': 0.407, COLORADO: 0.53, compared: 0.768 });
  });

  it('addToCompare should remove an object from the cardstoCompare array if the same card is selected twice', () => {
    wrapper.instance().addToCompare('colorado');
    wrapper.instance().addToCompare('academy 20');

    expect(wrapper.state().cardsToCompare).toEqual([{
      location: 'COLORADO',
      stats: {
        2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741,
      },
    }, {
      location: 'ACADEMY 20',
      stats: {
        2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49,
      },
    }]);

    wrapper.instance().addToCompare('colorado');
    wrapper.instance().addToCompare('academy 20');

    expect(wrapper.state().cardsToCompare).toEqual([]);
  });
});
