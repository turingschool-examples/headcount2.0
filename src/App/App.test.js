import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('App', () => {
	let wrapper;
	let mockFunction = jest.fn()

	beforeEach(() => {
		wrapper = shallow(<App compareAverages={mockFunction}/>)
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
		expect(wrapper.state('districtsBeingCompared').length).toBe(0)
		wrapper.instance().compareDistrict('colorado')
		expect(wrapper.state('districtsBeingCompared').length).toBe(1)
	})

	it('displays a maximum of 2 cards at top of screen', () => {
		wrapper.setState({ districtsBeingCompared: ['boulder', 'aspen'] })
		wrapper.instance().compareDistrict('colorado')
		// wrapper.instance()
		//use .instance() usually just once, in order to call a method
		console.log(wrapper.state())
		expect(wrapper.state('districtsBeingCompared').length).toBe(2)
	})

	it('compares district averages once 2 cards are in state', () => {
		// const spy = jest.spyOn(wrapper.instance(), 'compareAverages')
		// const mockCompareAverages = jest.fn()
		wrapper.setState({ districtsBeingCompared: ['colorado', 'boulder'] })
		const mockDistrictAvg = wrapper.setState(districtAverages: {})
		expect(mockDistrictAvg).toHaveBeenCalled()

	})
})

