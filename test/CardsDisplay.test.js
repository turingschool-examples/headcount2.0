import React from 'react';
import ReactDOM from 'react-dom';
import CardsDisplay from '../src/CardsDisplay';
import { shallow } from 'enzyme';
import DistrictRepository from '../src/helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';


describe('CardsDisplay', () => {

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardsDisplay cards={() => {}}/>, div);
  });

  it.skip('CardsDisplay section has a class of card-container', () => {
    const wrapper = shallow(<CardsDisplay cards={() => {}} />);

    expect(wrapper.find('section').hasClass('card-container')).toEqual(true);
  })


})
