import React from 'react';
import CardsContainer from '../../CardsContainer';
import {shallow} from 'enzyme';

describe('CardsContainer', () => {
	let districts = {stats: {
		COLORADO: {
			location: 'COLORADO',
			stats: {
				'2017': 0
			}
		}, 
		DENVER: {
			location: 'DENVER',
			stats: {
				'2017': 0
			}
		}
	}
}

	it('should have array of objects as props', () => {
		let cardsContainer = shallow(<CardsContainer districts={districts} />);
		expect(cardsContainer).toMatchSnapshot();
		expect(cardsContainer.props("districts")).toBeDefined();
	});

})