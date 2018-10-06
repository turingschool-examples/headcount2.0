import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Card from './Card'
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Search', () =>  {

  const mockData = {
      district: 'ADAMS'
    }

  const district = new DistrictRepository(kinderData);

  it('should match the snapshot', () => {

    const wrapper = shallow(<Search {...mockData}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should c', () => {

    const wrapper = shallow(<Search {...mockData}/>);

    const expectedState = { district: 'Adams'}



    expect(wrapper).toMatchSnapshot();
  });

});
