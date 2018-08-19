import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('Should have a default state of data and selectedCards of empty arrays', () => {
    expect(wrapper.state().data.length).toEqual(0);
    expect(wrapper.state().selectedCards.length).toEqual(0);
  })

  it('Should setState with all data when updateCards is invoked without a parameter', () => {
    wrapper.instance().updateCards();

    expect(wrapper.state().data.length).toEqual(181);
  })

  it('Should update state with correct data data when updateCards is invoked with a parameter', () => {
    const mockData = 'COLORADO';
    const expected = [{
      "location": "COLORADO",
      "stats": {
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
        "2014": 0.741
      }
    }, {
      "location": "COLORADO SPRINGS 11",
      "stats": {
        "2004": 0.069,
        "2005": 0.509,
        "2006": 0.638,
        "2007": 0.994,
        "2008": 0.992,
        "2009": 1,
        "2010": 0.993,
        "2011": 0.994,
        "2012": 0.993,
        "2013": 0.989,
        "2014": 0.994
      }
    }];

    wrapper.instance().updateCards(mockData);
    expect(wrapper.state().data).toEqual(expected);
    expect(wrapper.state().data.length).toEqual(2);
  })

})
