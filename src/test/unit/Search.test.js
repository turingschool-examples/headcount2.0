import React from 'react';
import { mount } from 'enzyme';
import Search from '../../Search/Search';

describe('Search', () =>  {
  it('calls changeData when text is entered in input field', () => {
    const changeDataMock = jest.fn();
    const wrapper = mount(<Search changeData={changeDataMock} />);
    const mockEvent = { target: { value: 'string' } };

    wrapper.find('input').simulate('change', mockEvent);
    expect(changeDataMock).toHaveBeenCalled();
  });
});
