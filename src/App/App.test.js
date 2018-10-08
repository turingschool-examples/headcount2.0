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
			districtsBeingCompared: [],
			districtAverages: {}
		}
		expect(wrapper.state('data')).toBeInstanceOf(DistrictRepository)
	})

	it('has state searchTerm', () => {
		const expectedState = {
			data: new DistrictRepository(kinderData),
			searchTerm: '',
			districtsBeingCompared: [],
			districtAverages: {}
		}
	expect(wrapper.state('searchTerm')).toEqual('')
	})

	it('has state districtsBeingCompared', () => {
		const expectedState = {
			data: new DistrictRepository(kinderData),
			searchTerm: '',
			districtsBeingCompared: [],
			districtAverages: {}
		}
	expect(wrapper.state('districtsBeingCompared')).toEqual([])
	})

	it('has state districtAverages', () => {
		const expectedState = {
			data: new DistrictRepository(kinderData),
			searchTerm: '',
			districtsBeingCompared: [],
			districtAverages: {}
		}
	expect(wrapper.state('districtAverages')).toEqual({})		
	})

	it('displays clicked cards at top of screen', () => {

	})

	it('displays a maximum of 2 cards at top of screen', () => {

	})

	it('sets district averages summary to state for 2 clicked cards', () => {

	})

})

