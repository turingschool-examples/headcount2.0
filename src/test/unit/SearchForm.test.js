import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from '../../components/SearchForm/SearchForm';

describe('Search From unit test suite', () => {
  let wrapper;
  let filterSchoolsMock;

  beforeEach(() => {
    filterSchoolsMock = jest.fn();
    wrapper = shallow(<SearchForm filterDistricts={filterSchoolsMock} />);
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


  test('should invoke filterSchools on when handleChange is invoked', () => {
    const mockEvent = {
      target: {
        value: 'Colo'
      }
    };

    wrapper.find('input').simulate('change', mockEvent);
    wrapper.instance().handleChange(mockEvent);

    expect(filterSchoolsMock).toHaveBeenCalled();
  });

  test('matches sanpshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
