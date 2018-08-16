import React from 'react';
import { shallow, mount } from 'enzyme';

import CardContainer from './CardContainer';

describe('CARD CONTAINER', () => {
	it('should match the snapshot with all data passed in correctly', () => {
		const wrapper = shallow(
			<CardContainer 
				districtData = {[
					 {2004: 0.24},
					 {2005: 0.278},
					 {2006: 0.337},
					 {2007: 0.395}
				]}
			/>)
			expect(wrapper).toMatchSnapshot();
		})
})