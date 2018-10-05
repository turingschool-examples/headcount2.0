import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

it('matches the snapshot', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot()
});

it('has state that matches the helper dataset', () => {
  const wrapper = shallow(<App />)
  let repo = new DistrictRepository(kinderData)

  expect(wrapper.state().DistrictRepository).toEqual(repo.stats)
});


