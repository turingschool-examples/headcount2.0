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

  const mockFn= jest.fn()

  beforeEach( () => {
    wrapper = shallow(<SchoolCard data={mockData} findAverage={mockFn}/>)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render h3 with a class name of school-name', () => {
    expect(wrapper.find('h3.school-name').length).toEqual(1);
  });

  it('should render p with a class name of average', () => {
    expect(wrapper.find('p.average').length).toEqual(1);
  });

  it('should render ul with a class name of year-percentages', () => {
    expect(wrapper.find('ul.year-percentages').length).toEqual(1);
  });

  it('should render li with a class name of year-data', () => {
    expect(wrapper.find('li.year-data').length).toEqual(11);
  });

  it('should render the correct school name', () => {
    const schoolName = mockData.Location;

    expect(wrapper.find('h3.school-name').text()).toEqual(schoolName);
  });

  it('should render the correct years', () => {
    const newMockData = {
                      Data: {
                        2004: 0
                      },
                      DataFormat: "Percent",
                      Location: "WINDSOR RE-4",
                      TimeFrame: 2007
                    }

    wrapper = shallow(<SchoolCard data={newMockData}
                           findAverage={mockFn} />)

    expect(wrapper.find('li.year-data').text()).toEqual("2004: 0");
  });

  it('should render the correct average', () => {
    expect(wrapper.find('h3.school-name').text()).toEqual("WINDSOR RE-4");
  });

  it.skip('should render the correct average', () => {
    expect(wrapper.find('p.average').text()).toEqual("0.34");
  });

  it('should pass through the correct props', () => {
    wrapper = mount(<SchoolCard data={mockData}
                         findAverage={mockFn} />);

    expect(wrapper.props().data).toHaveProperty('Data', mockData.Data);
  });

})
