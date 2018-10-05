import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from './DistrictCard.js';
import { shallow } from 'enzyme';

describe('DistrictCard', () => {
	let wrapper;
	let expectedId;

	beforeEach(() => {
		expectedId = 5
		wrapper = shallow(<DistrictCard key='COLORADO' schoolName='colorado' stats={2004: 0.24, 2005: 0.543, 2006: 0.789}/>)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('renders each entry of data', () => {
		expect(wrapper.find(p).length).toEqual(3)
	})

	it.skip('adds a class for data less than 0.5', () => {
		//show instance of data less than 5 with one class
		expect(wrapper.find(p).hasClass('less-than-point-5')).toEqual(true)
	})

	it.skip('adds a class for data greater than 0.5', () => {
		//show instance of data greater than 5 with one class
		expect(wrapper.find('.district-card-stat').hasClass('greater-than-point-5')).toEqual(true)
	})	

})

