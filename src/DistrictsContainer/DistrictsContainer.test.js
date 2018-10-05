import React from 'react';
import ReactDOM from 'react-dom';
import DistrictsContainer from './DistrictsContainer.js';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(<DistrictsContainer />, div)
// })

describe('DistrictsContainer', () => {
	let wrapper;
	let mockDistricts;

	beforeEach(() => {
		mockDistricts = {'colorado': {}, 'academy 20': {}} 
		wrapper = shallow(<DistrictsContainer districts={mockDistricts} />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it.skip('renders each district', () => {
		expect(wrapper.find(DistrictCard).length).toEqual(3)
	})
})
