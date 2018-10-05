import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Card from './Card';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

it('matches the snapshot', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

it('has state that matches the helper dataset', () => {
  const wrapper = shallow(<App />);
  let repo = new DistrictRepository(kinderData);

  expect(wrapper.state().DistrictRepository).toEqual(repo.stats);
});

it('renders correct number of cards', () => {
  const wrapper = shallow(<App />);
  
  expect(wrapper.find(Card).length).toEqual(181);
});
