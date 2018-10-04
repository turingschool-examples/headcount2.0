import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from './DistrictCard.js';
import { shallow } from 'enzyme';

describe('DistrictCard', () => {
	let wrapper;
	let expectedId;

	beforeEach(() => {
		expectedId = 5
		wrapper = shallow(<DistrictCard location='location' stats={'2004': 1, '2005': 2} id={expectedId} />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})


})

