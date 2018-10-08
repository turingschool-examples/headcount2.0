import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render all components', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have initial state of all kindergarten districts', () => {
    expect(Object.keys(wrapper.state().kinder).length).toBe(181)
  })

  it('should find all matches and update state', () => {
    const initialState = {}
    const mockQuery = 'Colorado Springs'
    const expected = {
      "COLORADO SPRINGS 11": {
        "location": "COLORADO SPRINGS 11",
        "stats": {
          "2004": 0.069, "2005": 0.509, "2006": 0.638,
          "2007": 0.994, "2008": 0.992, "2009": 1,
          "2010": 0.993, "2011": 0.994, "2012": 0.993,
          "2013": 0.989, "2014": 0.994
        }
      }
    }

    wrapper.setState({ kinder: initialState })
    wrapper.instance().findAllMatches(mockQuery)

    expect(wrapper.state('kinder')).toEqual(expected)
  })
})
