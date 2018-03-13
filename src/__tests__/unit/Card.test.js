import React from 'react';
import ReactDOM from 'react-DOM';
import Card from '../../Card';
import {shallow} from 'enzyme';

describe('Card', () => {
	let card, district;

	beforeEach(() => {
		district = {
			location: 'COLORADO',
			stats: {
				'2017': 0
			}
		}
		card = shallow(<Card district={district} />);
	});

	it('renders the article' , () => {
		expect(card).toMatchSnapshot();
	});

	it('has props district which is an object', () => {
		expect(card.props("district")).toBeDefined();
	});

	it('has a class "red" if district percentile is less than 0.5', () => {
		expect(card.find('.red').length).toEqual(1);
		district.stats['2017'] = 0.51;
		card = shallow(<Card district={district} />);
		expect(card.find('.red').length).toEqual(0);
	});

})