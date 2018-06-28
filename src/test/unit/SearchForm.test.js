import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from '../../components/SearchForm/SearchForm';

describe('Search From unit test suite', () => {
  let wrapper;
  let filterSchoolsMock;
  beforeEach(() => {
    filterSchoolsMock = jest.fn();
    wrapper = shallow(<SearchForm filterSchools={filterSchoolsMock} />);
  });

  afterEach(() => wrapper.unmount());

  test('should initial state query of an empty string', () => {
    const mockState = {
      query: ''
    };

    expect(wrapper.state()).toEqual(mockState);
  });

  test('should update state on change', () => {
    const spy = spyOn(wrapper.instance(), 'handleChange');
    const mockEvent = {
      target: {
        value: 'Colorado'
      }
    };

    wrapper.find('input').simulate('change', mockEvent);
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('query')).toBe('Colorado');
    expect(spy).toHaveBeenCalled();
  });

  test('should invoke filterSchools method and clear state on submit', () => {
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.find('form').simulate('submit', mockEvent);
    wrapper.instance().handleSubmit(mockEvent);

    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('query')).toBe('');
    expect(filterSchoolsMock).toHaveBeenCalled();
  });

  test('matches sanpshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
