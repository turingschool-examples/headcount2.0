import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('initializes with correct state', () => {
		const expectedState = {
			data: new DistrictRepository(kinderData),
			searchTerm: ''
		}
		expect(wrapper.state()).toEqual(expectedState)
	})

})

