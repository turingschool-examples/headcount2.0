import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should render a form with an input', () => {
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should call searchDistricts onChange in the input', () => {
    const mockFn = jest.fn();
    wrapper = mount(<Search searchDistricts={mockFn} />);
    wrapper.find('input').simulate('change');
    expect(wrapper.props().searchDistricts).toHaveBeenCalled();
  });
});
