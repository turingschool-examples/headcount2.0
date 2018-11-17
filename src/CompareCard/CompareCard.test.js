import React from 'react';
import ReactDOM from 'react-dom';
import CompareCard from './CompareCard.js';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import { shallow } from 'enzyme';

describe('CompareCard', () => {
	
	it('matches the snapshot', () => {
		let wrapper = shallow(<CompareCard />)
		expect(wrapper).toMatchSnapshot()
	})


})