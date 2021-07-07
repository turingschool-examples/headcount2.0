import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it.skip('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call the function on input change', () => {
    wrapper.instance().
      expect(searchSchoolMock.mock.calls.length).toBe(1);
  });

  it.skip('updates state when searchSchool is called', () => {
    const mockEvent = { target: { name: 'title', value: 'something' } };

    wrapper.instance().handleInputChange(mockEvent);

    expect(wrapper.state('title')).toBe('something');
  });

});