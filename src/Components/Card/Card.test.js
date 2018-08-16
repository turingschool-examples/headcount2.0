import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from './Card';

describe('CARD', () => {
	it('should match the snapshot with all data passed in correctly', () => {
		const wrapper = shallow(<Card 
															key={1}
															location='COLORADO'
															stats = {{key: 'value'}}
															/>)
		expect(wrapper.html()).toMatchSnapshot();
	})

	it('should have a className of "lessThan" if the number is less than 0.5', () => {
		const wrapper = shallow(
			<Card 
				key={1}
				location={'COLORADO'}
				stats = {{key: 0.24}}
			/>
			);
		expect(wrapper.find('h4').is('.lessThan')).toEqual(true);
	})

	it('should have a className of "greaterThan" if the number is greater than 0.5', () => {
		const wrapper = shallow(
			<Card 
				key={1}
				location={'COLORADO'}
				stats = {{key: 0.94}}
			/>
			);
		expect(wrapper.find('h4').is('.greaterThan')).toEqual(true);
	})
})