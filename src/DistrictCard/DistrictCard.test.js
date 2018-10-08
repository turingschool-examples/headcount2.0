import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from './DistrictCard.js';
import { shallow } from 'enzyme';

describe('DistrictCard', () => {
	let wrapper;
	let expectedId;

	beforeEach(() => {
		wrapper = shallow(<DistrictCard key='COLORADO' schoolName='colorado' stats={{'2004': 0.624, '2005': 0.124, '2006': 0.224}}/>)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('renders each entry of data', () => {
		expect(wrapper.find('p').length).toEqual(3)
	})

	it('adds a class for data greater than 0.5', () => {
		const greaterThanWrapper = shallow(<DistrictCard key='COLORADO' schoolName='colorado' stats={{'2004': 0.624}}/>)
		expect(greaterThanWrapper.find('p').hasClass('greater-than-point-5')).toBe(true)
	})	

	it('adds a class for data less than 0.5', () => {
		const lessThanWrapper = shallow(<DistrictCard key='COLORADO' schoolName='colorado' stats={{'2004': 0.324}}/>)
		expect(lessThanWrapper.find('p').hasClass('less-than-point-5')).toBe(true)
	})

	it('renders each entry of data', () => {
		expect(wrapper.find('p').length).toEqual(3)
	})

})

