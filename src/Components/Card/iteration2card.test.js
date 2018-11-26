import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Card from './Card'
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Card', () =>  {

  const mockData = {
      location: 'Turing',
      stats: {
        '2018' : 1
      }
    }

  const district = new DistrictRepository(kinderData);

  it('should match the snapshot', () => {

    const wrapper = shallow(<Card {...mockData}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('data should present as white if below 0.5, and grey if above 0.5', () => {

    const wrapper = shallow(<Card {...mockData}/>);

    if(mockData.stats < 0.5){
      expect(wrapper.find('p').hasClass('below50')).toEqual(true);
    }else{
      expect(wrapper.find('p').hasClass('above50')).toEqual(true);
    }

  });

});
