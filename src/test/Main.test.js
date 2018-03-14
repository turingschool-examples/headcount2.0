import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../components/Main';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Main', () => {
  it('should match the snapshot', () => {
    const handleSelection = jest.fn()
    
    const cards = [{ location: 'Denver', data: {'2006': .098}}, 
      {COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}, 
      { location: 'Golden', data: {'2006': .848}}]
    
    const wrapper = mount(<Main 
      districts={new DistrictRepository(kinderData).findAllMatches()}
      handleSelection={handleSelection}
      cards={cards}
      />);
      
    expect(wrapper).toMatchSnapshot();
  })

  it('should have props matching district info', () => {
    const handleSelection = jest.fn()
    
    const cards = [{ location: 'Denver', data: {'2006': .098}}, 
      {COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}, 
      { location: 'Golden', data: {'2006': .848}}]
    
    const wrapper = mount(<Main 
      districts={new DistrictRepository(kinderData).findAllMatches()}
      handleSelection={handleSelection}
      cards={cards}
      />);

    const expected = new DistrictRepository(kinderData).findAllMatches();
    expect(wrapper.props().districts).toEqual(expected)
  })
  
})