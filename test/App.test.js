import React from 'react';
import{ shallow, mount } from 'enzyme';

import App  from '../src/App';

describe('App', () => {

  it('renders a page title', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1')).toHaveLength(1);
  })

  it('renders Search component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Component').first()).toHaveLength(1);
  })

  it('renders Cards component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Component').last()).toHaveLength(1);
  })

  it('state should start out with 181 objects', () => {
    const wrapper = shallow(<App />);
    const keys = Object.keys(wrapper.state().data);

    expect(keys).toHaveLength(181)
  })

  it('should return searched data', () => {
    const mockSearch = jest.fn();
    const wrapper = mount(<App handleSearch={mockSearch}/>);
    const expectedState = {
       "data": [
         {
          "data":  {
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
          "location": "Colorado",
         },
         {
          "data":  {
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
            "2014": 0.994,
            },
          "location": "COLORADO SPRINGS 11",
         },
      ],
    }

    const input = wrapper.find('input');

    input.simulate('change', {target: {value: 'colo'}});

    expect(wrapper.state()).toEqual(expectedState);
    expect(wrapper.find('.card')).toHaveLength(2);
  })
})
