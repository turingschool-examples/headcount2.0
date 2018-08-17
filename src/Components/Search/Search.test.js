import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe('SEARCH', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<Search />)
		expect(wrapper).toMatchSnapshot();
	})

	it('should call filterLocations prop function with proper arguments', () => {
		const mockChange = jest.fn();
		const wrapper = mount(<Search filterLocations={mockChange} />)
		wrapper.instance().onChange
	})
})