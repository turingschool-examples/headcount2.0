import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareContainer from './CompareContainer';

describe('COMPARE CONTAINER', () => {
	it ('should match the snapshot with all data passed in correctly', () => {
		const wrapper = shallow(
			<CompareContainer />

		)

		expect(wrapper).toMatchSnapshot();
	})



})





