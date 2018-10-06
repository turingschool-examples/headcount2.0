import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Card from './Card'
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('App', () =>  {

  const district = new DistrictRepository(kinderData);

  const mockData = {
      location: 'Turing',
      stats: {
        2018 : 1
      }
    }

  const wrapper = shallow(<Card {...mockData}/>);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should render an h1, controls, and trivialist component', () => {
  //   expect(wrapper.find('h1').length).toEqual(1);
  //   expect(wrapper.find('Controls').length).toEqual(1);
  //   expect(wrapper.find('TriviaList').length).toEqual(1);
  // })

});
