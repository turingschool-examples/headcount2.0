import React from 'react';
import { shallow } from 'enzyme';

import App from '../App/App';

describe('App test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot when a App is rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of an empty array', () => {
    expect(wrapper.state().data).toEqual([]);
  });

  it('should populate school data in state when handleSearch is invoked', () => {
    wrapper.instance().handleUpdate();
    expect(wrapper.state().data.length).toEqual(181);
  });

  it('should populate only the school data that matches the user input', () => {
    const mockUserInput = 'COLORADO';
    wrapper.instance().handleUpdate(mockUserInput);
    expect(wrapper.state().data.length).toEqual(2);
    const mockSearchData = [{
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
    expect(wrapper.state().data).toEqual(mockSearchData);
  });
});
