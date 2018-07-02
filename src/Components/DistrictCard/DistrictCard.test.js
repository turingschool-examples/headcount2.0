import React from 'react';
import { shallow } from 'enzyme';
import DistrictCard from './DistrictCard';


describe('DistrictCard unit test', () => {
  let wrapper;
  let mockDistrict; 
  let mockHandleClick

  beforeEach(() => {
    mockDistrict =  { stats: 
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
                             location: 'COLORADO', 
                             selected: true 
                    }
                    
    mockHandleClick = jest.fn();
    wrapper = shallow(<DistrictCard district={mockDistrict} selectDistrict={mockHandleClick}/>);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
    });

  it('calls handleClick with the correct location ', () => {
    const expectedLocation = 'COLORADO' 
    const card = wrapper.find('.card')
    card.simulate('click')
    expect(mockHandleClick).toHaveBeenCalledWith(expectedLocation)

    const actualState = wrapper.find('.selected').length

    const expectedState =  1
    expect(actualState).toEqual(expectedState)
    });
  });
});
