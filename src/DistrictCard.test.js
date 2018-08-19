import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictCard from './DistrictCard';

describe('DistrictCard', () => {
  let wrapper;
  const mockFn = jest.fn();
  const stats = {
    2004: 1, 2005: 1, 2006: 1, 2007: 1, 2008: 1, 2009: 1, 2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1,
  };

  beforeEach(() => {
    wrapper = shallow(<DistrictCard location="COLORADO" stats={stats} addToCompare={mockFn} />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addToCompare when clicked', () => {
    wrapper = mount(<DistrictCard location="COLORADO" stats={stats} addToCompare={mockFn} />);
    wrapper.simulate('click');
    expect(wrapper.props().addToCompare).toHaveBeenCalled();
  });

  it('should display the correct stats', () => {
    wrapper = mount(<DistrictCard location="COLORADO" stats={stats} addToCompare={mockFn} handleClick={mockFn} />);
    expect(wrapper.props().stats).toEqual({
      2004: 1, 2005: 1, 2006: 1, 2007: 1, 2008: 1, 2009: 1, 2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1,
    });
  });

  it('should render p tags with stats', () => {
    wrapper = mount(<DistrictCard location="COLORADO" stats={stats} addToCompare={mockFn} />);
    expect(wrapper.find('p').length).toEqual(11);
    expect(wrapper.find('p').first().hasClass('green-text')).toEqual(true);
  });

  it('should call handleClick when clicked', () => {
    wrapper = mount(<DistrictCard location="COLORADO" stats={stats} addToCompare={mockFn} handleClick={mockFn} />);

    wrapper.find('article').simulate('click');
    expect(wrapper.props().handleClick).toHaveBeenCalled();
    expect(wrapper.state().clicked).toEqual(true);
  });
});
