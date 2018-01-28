/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Comparison from './Comparison';

describe('Comparison', () => {
  let wrapper;
  let mockComparisonData;
  let mockRemoveComparison;
  
  beforeEach( () => {
    mockRemoveComparison = jest.fn();
    mockComparisonData = {
      school1: {
        data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
          2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
        dataType: "Percent",
        location: "ACADEMY 20"
      },
      school2: {
        data: {2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0.844, 2009: 0.96, 
          2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1},
        dataType: "Percent",
        location: "AKRON R-1"
      },
      comparison: {
        "ACADEMY 20": 0.407, "AKRON R-1": 0.619, compared: 0.658
      }
    }
    wrapper = shallow(<Comparison
      comparisonData={mockComparisonData}
      handleCompareCards={ () => {} }
      removeComparison={mockRemoveComparison}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should execute removeComparison when the button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockRemoveComparison.mock.calls.length).toBe(1)
  })
})
