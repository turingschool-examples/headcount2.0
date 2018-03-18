import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../components/Main';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Main', () => {
  it('should match the snapshot', () => {
    const handleComparison = jest.fn()
    const clearedComparison = jest.fn()
    const generateComparisons = new DistrictRepository(kinderData).compareDistrictAverages 
    
    const cards = [{ location: 'Denver', data: {'2006': .098}, selected: true},  
      { location: 'Golden', data: {'2006': .848}, selected: true}]
    
    const wrapper = shallow(<Main
      cards={cards}
      districts={new DistrictRepository(kinderData).findAllMatches()}
      handleComparison={handleComparison}
      clearedComparison={clearedComparison}
      generateComparisons={generateComparisons}
      />);
      
    expect(wrapper).toMatchSnapshot();
  })
})