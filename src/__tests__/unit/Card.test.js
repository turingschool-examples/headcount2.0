import React from 'react';
import ReactDOM from 'react-DOM';
import Card from '../../Card';
import {shallow} from 'enzyme';

describe('Card', () => {
	let card;
	let district = {
		location: 'COLORADO',
		stats: {
			'2017': 0
		}
	};

	beforeEach(() => {
		card = shallow(<Card district={district} />);
	});

	it('renders the article' , () => {
		expect(card).toMatchSnapshot();
	});

	it('has props district which is an object', () => {
		expect(card.props("district")).toBeDefined();
	});

})