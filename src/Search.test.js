import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should render a form with an input', () => {
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  })

  it('should call searchDistricts onChange in the input', () => {
    let mockFn = jest.fn();
    wrapper = mount(<Search searchDistricts={ mockFn }/>)
    wrapper.find('input').simulate('change');
    expect(wrapper.props().searchDistricts).toHaveBeenCalled()
  })
})
