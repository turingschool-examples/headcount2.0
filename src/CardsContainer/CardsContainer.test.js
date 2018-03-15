import React from 'react';
import CardsContainer from './CardsContainer.js';
import DistrictRepository from '../helper.js';
import {kinderData} from '../setupTests.js';
import {shallow} from 'enzyme';

describe('CardsContainer', () => {
  let cardsContainer, selectedLocations;
  const selectLocation = jest.fn();
  const districts = new DistrictRepository(kinderData);

  beforeEach(() => {
    selectedLocations = [];
    cardsContainer = shallow(
      <CardsContainer 
        searchValue={''}
        districts={districts} 
        selectLocation={selectLocation} 
        selectedLocations={selectedLocations} />
    )});

  it('should match its snapShot', () => {
    expect(cardsContainer).toMatchSnapshot();
  });

  it('should have a comparedAverage object if the selectedLocations array has a length > 1', () => {
    expect
    selectedLocations = [{ 
      location: 'COLORADO', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }, { 
      location: 'COLORADO SPRINGS', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }]
    expect(cardsContainer.props('comparedAverage')).toBeDefined();
  });

})