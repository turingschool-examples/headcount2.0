import React from 'react';
import ReactDOM from 'react-dom';
import CompareCard from './CompareCard.js';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import { shallow } from 'enzyme';

describe('CompareCard', () => {
	let wrapper;
	let mockDistricts;
	let cardWrapper;

	beforeEach(() => {
		mockDistricts = [{'colorado': {}}, {'academy 20': {}}]
		wrapper = shallow(<CompareCard />)
		cardWrapper = shallow(<DistrictCard />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

})