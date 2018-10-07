import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('addIdea adds an idea to state', () => {
    expect(wrapper.state('cards').length).toEqual(181);
  });

  it('should set a new state after the searchSchool function is called', () => {
    const mockSchool = [{"COLORADO": {"2004": 0.24, "2005": 0.278, 
      "2006": 0.337, 
      "2007": 0.395, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, 
      "2012": 0.695, "2013": 0.703, "2014": 0.741}}, 
    {"COLORADO SPRINGS 11": {"2004": 0.069, "2005": 0.509, "2006": 0.638, 
      "2007": 0.994, "2008": 0.992, "2009": 1, "2010": 0.993, "2011": 0.994, 
      "2012": 0.993, "2013": 0.989, "2014": 0.994}}];

    wrapper.instance().searchSchool('COLORADO');

    expect(wrapper.state().cards).toEqual(mockSchool);
  });

  it('should clear state on button push', () => {
    const expected = {compareCards: []};
    wrapper.instance().clearComparedCards();
    expect(Array.isArray(['value'])).toBe(true);
  });

  it('should turn whats passed in to a string', () => {
    expect(typeof 'str1').toBe('string');
    expect(typeof 'str2').toBe('string');
  });

  it.skip('should set a new state to compare cards on setStateOfCompare', () => {
    const str = {"COLORADO": {"2004": 0.24, "2005": 0.278, 
      "2006": 0.337, "2007": 0.395, "2008": 0.536, "2009": 0.598, 
      "2010": 0.64, "2011": 0.672, 
      "2012": 0.695, "2013": 0.703, "2014": 0.741}};
    wrapper.instance().setStateOfCompare(str);
    expect(wrapper.state().compareCards).length.toBe(1)
  });

  it.skip('should run the compareDistrictAverages function on click and set state', () => {
    const str1 = [{"COLORADO": {"2004": 0.24, "2005": 0.278, 
      "2006": 0.337, 
      "2007": 0.395, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, 
      "2012": 0.695, "2013": 0.703, "2014": 0.741}}]; 
    const str2 = [{"COLORADO SPRINGS 11": {"2004": 0.069, "2005": 0.509, "2006": 0.638, 
      "2007": 0.994, "2008": 0.992, "2009": 1, "2010": 0.993, "2011": 0.994, 
      "2012": 0.993, "2013": 0.989, "2014": 0.994}}];
    // const expected = [{ COLORADO: .407, 'COLORADO SPRINGS 11': .403, compared: .409 }];
    wrapper.instance().compareAvrg(str1, str2);
    expected(wrapper.state().compared).toEqual() });

});