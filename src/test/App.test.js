import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';


describe('App', () => {
  let wrapper;
  let district;

  beforeEach(() => {
    wrapper = shallow(<App />)
    district = new DistrictRepository(kinderData);
  })

  it('should update state with a card when selectLocation is called', () => {
    const expected = [{ location: 'Colorado', stats: 0 }]
    wrapper.instance().setState({ location: district.stats, cards: [] })

    wrapper.instance().selectLocation('Colorado')
    console.log(wrapper.instance().state.cards)
    expect(wrapper.state('cards')).toEqual(expected)
  });

  it('should not ')
})
