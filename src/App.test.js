import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';

it ('matches the snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
});

// it ('initial state is an empty array', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.state().districtCards.length).toEqual(0)
// })