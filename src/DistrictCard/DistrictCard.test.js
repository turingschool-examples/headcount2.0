import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from './DistrictCard.js';
import { shallow } from 'enzyme';

describe.skip('DistrictCard', () => {
	let wrapper;
	let expectedId;

	beforeEach(() => {
		expectedId = 5
		wrapper = shallow(<DistrictCard location='location' stats={'stats'} id={expectedId} />)
	})

	it.skip('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})


})

