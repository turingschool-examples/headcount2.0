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
})
