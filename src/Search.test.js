import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

it('fires the helper.js props function', () => {
  const mockFunction = jest.fn();
  const mockEvent = {target: {value: 'Colorado'}};
  const wrapper = shallow(<Search
    searchForDistrict={mockFunction}
  />);

  wrapper.find('.search-bar').simulate('change', mockEvent);
  expect(mockFunction).toHaveBeenCalled();
});