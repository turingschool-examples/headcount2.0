import DistrictRepository from '../../src/components/DistrictRepository';
import Controls from '../../src/components/Controls';
import KinderData from '../../data/kindergartners_in_full_day_program';
import React from 'react';
import { shallow, render } from 'enzyme';

describe('District Repository', () => {
	let wrapper;
	let DCPropsArray;

	beforeEach(() => {
		wrapper = shallow(<DistrictRepository />);
		DCPropsArray = Object.keys(wrapper.find('DistrictContainer').node.props);
	});

	it('should render one Controls Component', () => {
		expect(wrapper.find('Controls').length).toEqual(1);
	});

	it('should pass a function of findDistrict to Controls as a prop', () => {
		expect(wrapper.find('Controls').get(0).props.findDistrict).toBeInstanceOf(
			Function
		);
	});

	it('should render one DistrictContainer component', () => {
		expect(wrapper.find('DistrictContainer').length).toEqual(1);
	});

	it('should render a div with a class of district-repository-container', () => {
		expect(wrapper.find('div.district-repository-container').length).toEqual(1);
	});

	it('should have a default state property of cards whose value is an array', () => {
		const componentState = wrapper.state();
		expect(componentState.cards).toBeInstanceOf(Array);
	});

	it('should have a default state property of data whose value is an object', () => {
		const componentState = wrapper.state();
		expect(componentState.data).toBeInstanceOf(Object);
	});

	it('should pass three props to the DistrictContainer', () => {
		expect(DCPropsArray.length).toEqual(3);
	});

	it('should pass a getData prop', () => {
		expect(DCPropsArray.includes('getData'));
	});

	it('should pass a foundData prop', () => {
		expect(DCPropsArray.includes('foundData'));
	});

	it('should pass a fullData prop', () => {
		expect(DCPropsArray.includes('fullData'));
	});
});
