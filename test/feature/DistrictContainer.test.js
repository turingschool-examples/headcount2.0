import DistrictContainer from '../../src/components/DistrictContainer';
import KinderData from '../../data/kindergartners_in_full_day_program';
import React from 'react';
import { shallow, render } from 'enzyme';

describe('DistrictContainer Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<DistrictContainer />);
	});

	it('should render a div with a className of district-repository-container', () => {
		console.log(wrapper.debug());
		expect(wrapper.find('div').length).toEqual(1);
	});

	// it('should render DistrictCards for each district on page load', () => {
	// 	expect(wrapper.find('DistrictCard').length).toEqual(181);
	// });
});
