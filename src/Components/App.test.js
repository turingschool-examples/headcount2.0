import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have a default state of data with districtRepo.stats and selectedCards with an empty array', () => {
    const districtRepo = new DistrictRepository(kinderData);

    expect(wrapper.state()).toMatchObject({
      data: districtRepo.stats,
      selectedCards: []
    });
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <App 
        
      />)
  })
})
