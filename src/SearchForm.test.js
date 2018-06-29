import SearchForm from './SearchForm.js';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('SearchForm Tests', () => {

  it('updates the state of when the input value changes', () => {
    const mockInput = jest.fn()
    const wrapper = shallow(<SearchForm
                            type="text"
                            placeholder="Enter your district"
                            value={jest.fn()}
                            onChange={mockInput}
                            onSubmit={jest.fn()} />);
    const mockEvent = { target: { value: 'abc'} }
    const expectedState = {
      district: 'abc' };
    wrapper.instance().handleInput(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should invoke handleInput when the input value changes', () => {
    const mockInput = jest.fn()
    const wrapper = shallow(<SearchForm 
                              type="text"
                              placeholder="Enter your district"
                              value={jest.fn()}
                              onChange={mockInput}
                              onSubmit={jest.fn()}/>)
    
    wrapper.find('input').simulate('keydown', {target: {value: 'abc'}})
    expect(mockInput).toHaveBeenCalled()
  })

  it('should update state when handle input is invoked', () => {
    const wrapper = shallow(<SearchForm />);
    const mockTyping = { target: {value: 'taco'}};
    const expected = 'taco';

    wrapper.instance().handleInput(mockTyping);

    expect(wrapper.state('district')).toEqual(expected)

  })

  it('should invoke updateDistricts when the submit button is clicked', () => {
    const mockUpdateDistricts = jest.fn()
    const wrapper = mount(<SearchForm
                              updateDistricts={mockUpdateDistricts} />)

    wrapper.find('button').simulate('click')

    expect(mockUpdateDistricts.toHaveBeenCalled())
  })
})