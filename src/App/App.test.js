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

	it('has a state of data than instantiates a new DistrictRepository', () => {
		const expectedState = {
			data: new DistrictRepository(kinderData),
			searchTerm: '',
			compareDistricts: []
		}
		expect(wrapper.state('data')).toBeInstanceOf(DistrictRepository)
	})

	it('has state searchTerm', () => {
		const expectedState = {
			data: new DistrictRepository(kinderData),
			searchTerm: '',
			compareDistricts: []
		}
	expect(wrapper.state('searchTerm')).toEqual('')
	})

	it('has state compareDistricts', () => {
		const expectedState = {
			data: new DistrictRepository(kinderData),
			searchTerm: '',
			compareDistricts: []
		}
	expect(wrapper.state('compareDistricts')).toEqual([])
	})

})

