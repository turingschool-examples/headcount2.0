import SearchForm from './SearchForm.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchForm Tests', () => {
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
    const wrapper = shallow(<SearchForm
      type="text"
      placeholder="Enter your district"
      value={jest.fn()}
      onChange={jest.fn()}
      onSubmit={mockUpdateDistricts} />)

    wrapper.find('button').simulate('click')
    expect(mockUpdateDistricts).toHaveBeenCalled()
  })
})