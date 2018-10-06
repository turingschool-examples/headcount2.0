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
        2018 : 1
      }
    }

  const district = new DistrictRepository(kinderData);

  it('should match the snapshot', () => {

    const wrapper = shallow(<Card {...mockData}/>);
    expect(wrapper).toMatchSnapshot();
  });
  //
  // it('calls removeIdea with the correct id', () => {
  //
  //   const wrapper = shallow(<Card {...mockData}/>);
  //   removeIdeaMock = jest.fn();
  //
  //
  // });



  // it('should render an h1, controls, and trivialist component', () => {
  //   expect(wrapper.find('h1').length).toEqual(1);
  //   expect(wrapper.find('Controls').length).toEqual(1);
  //   expect(wrapper.find('TriviaList').length).toEqual(1);
  // })

});
