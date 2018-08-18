import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';


describe('Search', () => {

  it('renders a cardContainer with the correct props', () => {
    const wrapper = shallow(<App />)
    
  });

  it ('initial state is an empty array', () => {
    const wrapper = mount(<App />)
    expect(wrapper.state().districtCards.length).toEqual(0)
  })
})