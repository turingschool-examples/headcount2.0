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
		const mockEvent = { target: { value: 'heyy youu guyss' } }
		wrapper.find('.search-input').simulate('change', mockEvent)
	})

	it('updates state when handleInputChange is invoked', () => {
		const mockEvent = { target: { name: 'search', value: 'heyy youu guyss'} }
		wrapper.instance().handleInputChange(mockEvent)
		expect(wrapper.state('search')).toBe('heyy youu guyss')
	})

	it('invokes handleSubmit on submission of form', () => {
		wrapper = mount(<Search searchDistrict={searchDistrictMock}/>)
		const spy = spyOn(wrapper.instance(), 'handleSubmit');
		const mockEvent = { preventDefault: jest.fn() }
		wrapper.instance().forceUpdate();
		wrapper.find('form').simulate('submit', mockEvent)
		expect(spy).toHaveBeenCalled()
	})

	it('invokes searchDistrict when handleSubmit is invokes', () => {
		const mockEvent = { preventDefault: jest.fn() }
		wrapper.instance().handleSubmit(mockEvent)
		expect(searchDistrictMock).toHaveBeenCalled
	})

})

//Questions re: ideabox Search component tests
//why mount instead of shallow
//what is spyOn
//what is instance()
//what is forceUpdate()
//why are we calling mockEvent mockEvent
//what is simulate
//why is preventDefault in braces
//HOW IS THE EVENT AN OBJECT
//How does last test work? How does it know that searchDistrictMock has been called?