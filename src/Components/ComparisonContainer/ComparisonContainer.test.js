import React from 'react';
import { shallow } from 'enzyme';
import ComparisonContainer from './ComparisonContainer';

describe('ComparisonContainer unit test', () => {
  let wrapper;
  let mockComparedDistricts; 
  let mockcompareDistrictAverages;
  let mockselectDistrict;
  let mockFindAverage;

  beforeEach(() => {
    mockComparedDistricts = { COLORADO: 
                              { stats: 
                                  { 2004: 0.24,
                                    2005: 0.278,
                                    2006: 0.337,
                                    2007: 0.395,
                                    2008: 0.536,
                                    2009: 0.598,
                                    2010: 0.64,
                                    2011: 0.672,
                                    2012: 0.695,
                                    2013: 0.703,
                                    2014: 0.741 },
                                location: 'COLORADO' },
                             ACADEMY20: 
                              { stats: 
                                  { 2004: 0.302,
                                    2005: 0.267,
                                    2006: 0.354,
                                    2007: 0.392,
                                    2008: 0.385,
                                    2009: 0.39,
                                    2010: 0.436,
                                    2011: 0.489,
                                    2012: 0.479,
                                    2013: 0.488,
                                    2014: 0.49},
                                location: 'ACADEMY 20' }
                            }
    mockselectDistrict = jest.fn();
    mockFindAverage = jest.fn();
    mockcompareDistrictAverages = jest.fn().mockReturnValue({comparison: {compared: 1}});                        
    wrapper = shallow(<ComparisonContainer 
                              comparedDistricts={mockComparedDistricts} 
                              selectDistrict={mockselectDistrict}
                              compareDistrictAverages={mockcompareDistrictAverages}
                              findAverage={mockFindAverage}
                            />)

  })
  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
    });

  it('should conditionally render district comparison information', () => {
    const actualState = wrapper.find('.comparison-card').length;
    const expectedState = 1
    expect(actualState).toEqual(expectedState);
    })
});
