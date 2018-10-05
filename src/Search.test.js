import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from './Search';
import App from './App';

it('fires the helper.js props function', () => {
  const mockFunction = jest.fn()
  const mockEvent = {target: {value: 'Colorado'}}
  const wrapper = shallow(<Search
                           searchForDistrict={mockFunction}
                           />)

  wrapper.find('.search-bar').simulate('change', mockEvent)
  expect(mockFunction).toHaveBeenCalled()
})