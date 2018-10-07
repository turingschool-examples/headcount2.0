import React from 'react';
import { shallow, mount } from 'enzyme';
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
    wrapper = mount(<App />)

    expect(Object.keys(wrapper.state().kinder).length).toBe(181)
  })

  // it('should find all matches and update state', () => {
  //   const initialState = {'COLORADO': {}, 'ALAMOSA': {}, 'COLLIN COUNTY': {} }
  //   const mockQuery = 'Co'
  //   const expected = {'COLORADO': {}, 'COLLIN COUNTY': {} }

  //   wrapper.setState({ kinder: initialState })
  //   wrapper.instance().findAllMatches(mockQuery)

  //   expect(wrapper.state('kinder')).toEqual(expected)
  // })
})
