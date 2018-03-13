import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../../App'

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should instantiate our good friend App', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {

  })






})