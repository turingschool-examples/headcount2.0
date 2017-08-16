import React from 'react';
import ReactDOM from 'react-dom';
import SchoolCard from '../../src/SchoolCard';
import { mount, shallow } from 'enzyme';

describe('School Card', () => {
  let wrapper;

  const mockData = {
                    Data: {
                      2004: 0, 2005: 0, 2006: 0, 2007: 0.076, 2008: 0.463, 2009: 0.56, 2010: 0.51, 2011: 0.5, 2012: 0.501, 2013: 0.548, 2014: 0.547
                    },
                    DataFormat: "Percent",
                    Location: "WINDSOR RE-4",
                    TimeFrame: 2007
                  }



  beforeEach( () => {
    wrapper = shallow(<SchoolCard data={mockData} />)
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it.skip('should render h3 with a class name of school-name', () => {
    expect(wrapper.find('h3.school-name').length).toEqual(1);
  })

  it.skip('should render p with a class name of average', () => {
    expect(wrapper.find('p.average').length).toEqual(1);
  })

  it.skip('should render ul with a class name of year-percentages', () => {
    expect(wrapper.find('ul.year-percentages').length).toEqual(1);
  })

  it.skip('should render li with a class name of year-data', () => {
    expect(wrapper.find('li.year-data').length).toEqual(11);
  })

  it.skip('should render the correct school name', () => {
    const schoolName = mockData.Location;

    expect(wrapper.find('h3.school-name').text()).toEqual(schoolName);
  })

  it.skip('should render the correct years', () => {
    const newMockData = {
                      Data: {
                        2004: 0
                      },
                      DataFormat: "Percent",
                      Location: "WINDSOR RE-4",
                      TimeFrame: 2007
                    }

    wrapper = shallow(<SchoolCard data={newMockData} />)

    expect(wrapper.find('li.year-data').text()).toEqual("2004: 0");
  })

  it.skip('should render the correct average', () => {
    expect(wrapper.find('p.average').text()).toEqual("0.34");
  })

  it.skip('should pass through the correct props', () => {
    const {className, children} = wrapper.find('li').get(0).props

    const listItemData = children[0].props.children + children[1] + children[2].props.children

    expect(listItemData).toEqual('2004,: 0')
  })

})
