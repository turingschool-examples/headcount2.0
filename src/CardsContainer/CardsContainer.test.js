import React from 'react';
import CardsContainer from './CardsContainer.js';
import DistrictRepository from '../helper.js';
import {kinderData} from '../setupTests.js';
import {shallow} from 'enzyme';

describe('CardsContainer', () => {
	const selectLocation = jest.fn();
	const selectedLocations = [];
	const districts = new DistrictRepository(kinderData);

	it('should have array of objects as props', () => {
		let cardsContainer = shallow(
      <CardsContainer 
        searchValue={''}
        districts={districts} 
        selectLocation={selectLocation} 
				selectedLocations={selectedLocations} />
    );
		expect(cardsContainer).toMatchSnapshot();
	});

})