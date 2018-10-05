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

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('renders each entry of data', () => {
		expect(wrapper.find('.card-stats').length).toEqual(11)
	})

	it('adds a class for data less than 0.5', () => {
		//show instance of data less than 5 with one class
		expect(wrapper.find('.district-card-stat').hasClass('less-than-point-5')).to.Equal(true)
	})

	it.skip('adds a class for data greater than 0.5', () => {
		//show instance of data greater than 5 with one class
		expect(wrapper.find('.district-card-stat').hasClass('greater-than-point-5')).to.Equal(true)
	})	

})

