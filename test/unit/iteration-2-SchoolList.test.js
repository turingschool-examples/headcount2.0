import React from 'react';
import ReactDOM from 'react-dom';
import SchoolList from '../../src/SchoolList';
import SchoolCard from '../../src/SchoolCard'
import { mount, shallow } from 'enzyme';

describe('School List', () => {
  let wrapper

  const mockData = { data: {
    Data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
    DataFormat: "Percent",
    Location: "ACADEMY 20",
    TimeFrame: 2007
  }
}

  beforeEach( () => {
    wrapper = shallow(<SchoolList data={mockData}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a SchoolCard', () => {
    expect(wrapper.find('SchoolCard').length).toEqual(1);
    expect(wrapper.find('SchoolCard')).toBeDefined();
  })

  it('should pass through the correct props', () => {
    let { Location, Data } = wrapper.find('SchoolCard').node.props;

    console.log(wrapper.find('SchoolCard').node.props.data.Location)
    expect(wrapper.find('SchoolCard').node.props).toEqual(mockData)
  })

})
