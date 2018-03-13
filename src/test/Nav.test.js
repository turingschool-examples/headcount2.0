import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a state of search set to empty string by default', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.state().search).toEqual('')
  })

  it('should run the search prop method when searchInput is invoked', () => {
    const mockSearch = jest.fn();
    const mockEvent = {target: {value: 'example'}};
    const wrapper = shallow(<Nav search={mockSearch}/>)
    wrapper.instance().searchInput(mockEvent);
    expect(mockSearch).toHaveBeenCalled();
  })

  it('should update state on invoking searchInput', () => {
    const mockSearch = jest.fn();
    const mockEvent = {target: {value: 'example'}};
    const wrapper = shallow(<Nav search={mockSearch}/>);
    wrapper.instance().searchInput(mockEvent);
    expect(wrapper.state().search).toEqual(mockEvent.target.value)
    expect(wrapper.state().search).toEqual('example')
  })
})