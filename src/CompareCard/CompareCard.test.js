import React from 'react';
import ReactDOM from 'react-dom';
import CompareCard from './CompareCard.js';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import { shallow } from 'enzyme';

describe('CompareCard', () => {
	let wrapper;
	let mockDistricts;

	beforeEach(() => {
		mockDistricts = [{'colorado': {}}, {'academy 20': {}}]
		wrapper = shallow(<CompareCard />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it.skip('renders each district clicked', () => {
		expect(wrapper.find(DistrictCard).length).toEqual(2)
	})

	it.skip('renders a maximum of 2 districts', () => {

	})


})