import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  let expectedId;
  let districtMockData;
  let mockCheckComparison
  let mockClearComparison
  let mockCompareData

  beforeEach(() => {
    districtMockData = {
      location: 'denver', 
      stats: [{2007: 0}, {2008: 1}], 
      selected: true
    };
    mockCheckComparison = jest.fn()
    mockClearComparison = jest.fn()
    mockCompareData = [
      {
        location: 'denver', 
        stats: [{2007: 0}, {2008: 1}], 
        selected: true
      },
      {
        location: 'boulder', 
        stats: [{2007: 2}, {2008: 2}], 
        selected: true
      }
      ]

    wrapper = shallow(<Card 
      district={districtMockData}
      key={expectedId} 
      checkComparison={mockCheckComparison} 
      clearComparison={mockClearComparison}
      compareData={mockCompareData}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => { 
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all the data points', () => {
    expect(wrapper.find('.year-data').length).toEqual(2);
    expect(wrapper.find('.card').length).toEqual(1);
  });

  it('should have a className of selected if it is in the compareData array', () => {})
  
  it('should have a className of year-data greater-than if the data is greater than 0.5', () => {})
  
  it('should have a className of year-data less-than if the data is less than 0.5', () => {})
  
  it('should call checkComparison when a card is clicked', () => {
    wrapper.find('.card').simulate('click');
    expect(mockCheckComparison).toHaveBeenCalled();
  });
});

