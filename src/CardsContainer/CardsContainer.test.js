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
    );
  })

  it('should match its snapShot', () => {
    expect(cardsContainer).toMatchSnapshot();
  })

	it('should have an array of objects as props', () => {
		
		expect(cardsContainer.props("districts")).toBeDefined();
	});

  it('should have an searchValue that is passed as a props', ()=> {
    expect(cardsContainer.props('searchValue')).toBeDefined();
  })

  it('should have a select location function that is passed as props', () =>{
    expect(cardsContainer.props('selectLocation')).toBeDefined();
  })

  it('should have a array of selectedLocations as props', () => {
    expect(cardsContainer.props('selectedLocations')).toBeDefined();
  })

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
    expect(cardsContainer.props('comparedAverage')).toBeDefined()
  })

})