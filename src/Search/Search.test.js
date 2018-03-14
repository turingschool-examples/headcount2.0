import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from  './Search.js';

describe('Search', () => {
  let wrapper;
  const event = { target: { value: 'hello' } };
  const mockClearSearch = jest.fn();
  const mockSearchDistrict = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Search
        searchValue={''}
        clearSearch={mockClearSearch}
        searchDistrict={mockSearchDistrict}
      />
    );
  });

  it('should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should receive a search value string', () => {
    expect(wrapper.props('searchValue')).toBeDefined();
  });

  it('should invoke searchDistrict when input change occurs', () => {
    const input = wrapper.find('input');

    input.simulate('change', event);

    expect(mockSearchDistrict).toHaveBeenCalledWith(event)
  });

  it('should invoke clearSearch when the clear button is clicked', () => {
    const clearButton = wrapper.find('button');

    clearButton.simulate('click');

    expect(mockClearSearch).toHaveBeenCalled();
  });
});

