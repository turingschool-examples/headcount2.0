import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../components/Main';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Main', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Main districts={new DistrictRepository(kinderData).findAllMatches()}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should have props matching district info', () => {
    const wrapper = mount(<Main districts={new DistrictRepository(kinderData).findAllMatches()}/>);
    const expected = new DistrictRepository(kinderData).findAllMatches();
    expect(wrapper.props().districts).toEqual(expected)
  })
  
})