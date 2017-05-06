import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../../src/components/Card';
import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Card', () => {
  it('has a card class', () => {
    const wrapper = shallow(<Card location={'location'} data={'data'}/>);
    expect(wrapper.find('.card').length).toEqual(1);
  })

  it('has a location and has data', () => {
    const wrapper = shallow(<Card location={'location'} data={'data'}/>);

    expect(wrapper.unrendered.props.location).toBe('location')
    expect(wrapper.unrendered.props.data).toBe('data')
  })
})
