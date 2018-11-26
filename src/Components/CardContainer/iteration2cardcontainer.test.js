import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer', () =>  {

  const district = new DistrictRepository(kinderData);

  const mockData = {
      location: 'Turing',
      stats: {
        2018 : 1
      }
    }

  const wrapper = shallow(<CardContainer {...mockData} />);

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
