import React from 'react';
import ReactDOM from 'react-dom';
import DistrictsContainer from './DistrictsContainer.js';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import { shallow } from 'enzyme';

describe('DistrictsContainer', () => {
	let wrapper;
	let mockDistricts;

	beforeEach(() => {
		mockDistricts = [{'colorado': {}}, {'academy 20': {}}, {'agate 300': {}}] 
		wrapper = shallow(<DistrictsContainer districts={mockDistricts} key={Math.random()}/>)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('renders each district', () => {
		expect(wrapper.find(DistrictCard).length).toEqual(3)
	})
})
