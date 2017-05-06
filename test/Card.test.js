import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../src/Card';
import DistrictRepository from '../src/helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';


describe ('Card', () => {

  it.skip('<div> should have a class of data-container', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find('.data-container')).toHaveLength(1);
  })

})
