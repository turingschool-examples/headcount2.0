import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from './DistrictCard.js';
import { shallow } from 'enzyme';

describe.skip('DistrictCard', () => {
	let wrapper;
	let expectedId;

	beforeEach(() => {
		expectedId = 5
		wrapper = shallow(<DistrictCard key='colorado' schoolName='colorado' />)
	})

	it.skip('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('renders each entry of data', () => {
		expect(wrapper.find('.card-stats').length).toEqual(11)
	})

	it('shows visual indication of data less than or greater than 0.5', () => {
		//show instance of data less than 5 with one class
		//show instance of data greater than 5 with another class
		expect(wrapper.find('.district-card-stat')hasClass('.card-stats-less-than-5')).toEqual(true)
	})

})

