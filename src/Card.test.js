import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  let expectedId;
  let districtMockData
  let compareDistrictDataMock = jest.fn();
  let clearComparisonMock = jest.fn();

beforeEach(() => {
  districtMockData = {location: 'denver', stats: [{2007: 0}, {2008: 1}], selected: true};
  wrapper = shallow(<Card 
                    key={expectedId} 
                    district={districtMockData}
                    compareDistrictData={compareDistrictDataMock}
                    clearComparison={clearComparisonMock} 
                    />);
})

  it('should match the snapshot with all data passed in correctly', () => { 
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all the data points', () => {
    expect(wrapper.find('.year-data').length).toEqual(2);
    expect(wrapper.find('.card').length).toEqual(1);
  });

  it('should call compareDistrictData when a card is clicked', () => {
    wrapper.find('.card').simulate('click');
    expect(compareDistrictDataMock).toHaveBeenCalled();
  });
});

