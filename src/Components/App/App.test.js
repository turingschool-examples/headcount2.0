import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
	let wrapper;
	
	beforeEach(() => { 
		wrapper = shallow(<App />)
	})	
	
		it('should match the snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});

		it('should have a default state with an empty array for districtData', () => {
			expect(wrapper.state().districtData).toEqual([])
		});

		it('should update state with district cards when the filterLocations method is invoked', () => {
			wrapper.instance().filterLocations();
			expect(wrapper.state().districtData.length).toEqual(181);
		})

		it('should update state with ')

	
})

