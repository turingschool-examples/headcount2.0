import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import { shallow } from 'enzyme';

describe('Search', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<Search />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('renders only the district searched by user')
		// expect wrapper id to be x
		// expect wrapper length to be 1
})