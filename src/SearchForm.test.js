import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from './SearchForm.js'

describe('SearchForm', () =>{

  it('should match snapshot', () => {
    const school = {filterCards: 'COLORADO'}
    const wrapper = shallow(<SearchForm filterCards={school}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should save user input to state', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<SearchForm filterCards={mockFunc}/>)

    const mockEvent = {target: {value: 'COLORADO'}}
    wrapper.find('input').simulate('change', mockEvent)

    wrapper.instance().saveUserInput(mockEvent)
    expect(wrapper.state()).toEqual({"schoolName": "COLORADO"})

  })

})