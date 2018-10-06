import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
	let searchDistrictMock;
	let wrapper;

	beforeEach(() => {
		searchDistrictMock = jest.fn()
		wrapper = shallow(<Search searchDistrict={searchDistrictMock} />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('invokes handleInputChange when input is entered', () => {
		wrapper = mount(<Search searchDistrict={searchDistrictMock}/>)
		const spy = spyOn(wrapper.instance(), 'handleInputChange')
		wrapper.instance().forceUpdate()
		const mockEvent = { target: { value: 'hey you guys' } }
		wrapper.find('.search-input').simulate('change', mockEvent)
	})

	it('updates state when handleInputChange is invoked', () => {

	})

	it('invokes handleSubmit on submission of form', () => {

	})

	it('invokes searchDistrict when handleSubmit is invokes', () => {

	})

	it.skip('renders only the district searched by user', () => {
		
	})
		// expect wrapper id to be x
		// expect wrapper length to be 1
})

//Questions re: ideabox Search component tests
//why mount instead of shallow
//what is spyOn
//what is instance()
//what is forceUpdate()
//why are we calling mockEvent mockEvent
//what is simulate
//why is preventDefault in braces