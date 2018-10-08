import React from 'react';
import { shallow } from 'enzyme';
import SchoolCard from './SchoolCard';

describe('SchoolCard', () => {
  let wrapper;

  beforeEach(() => {
    let compareAvrg = jest.fn();
    let cards = [{"COLORADO": {"2004": 0.24, "2005": 0.278, 
      "2006": 0.337, "2007": 0.395,  "2008": 0.536, "2009": 0.598, 
      "2010": 0.64, "2011": 0.672, "2012": 0.695, "2013": 0.703, 
      "2014": 0.741}}, {"COLORADO SPRINGS 11": {"2004": 0.069, 
      "2005": 0.509, "2006": 0.638, "2007": 0.994, "2008": 0.992, 
      "2009": 1, "2010": 0.993, "2011": 0.994, "2012": 0.993, 
      "2013": 0.989, "2014": 0.994}}];
    wrapper = shallow(<SchoolCard location={cards} 
      data={cards} 
      key={Object.keys(cards)}
      compareAvrg={compareAvrg} />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set a variable to str1', () => {
    let str = {};
    expect(str).toEqual({});
  });

});