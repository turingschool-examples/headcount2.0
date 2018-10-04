import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DistrictsContainer from '../DistrictsContainer/DistrictsContainer.js';
import { shallow } from 'enzyme';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	



})

