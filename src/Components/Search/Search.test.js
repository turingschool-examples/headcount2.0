import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe('SEARCH', () => {
	
	it('should match the snapshot', () => {
		const wrapper = shallow(<Search />)
		expect(wrapper).toMatchSnapshot();
	})

	it('should call filterLocations prop function when input is changed', () => {
		const mockFilterLocations = jest.fn();
		const wrapper = mount(<Search filterLocations={mockFilterLocations} />)
		wrapper.find('input').simulate('change')
		expect(mockFilterLocations).toHaveBeenCalled()
	})
})