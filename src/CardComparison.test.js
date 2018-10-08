import React from 'react';
import { shallow } from 'enzyme';
import CardComparison from './CardComparison';
import Card from './Card';

describe('CardComparison', () => {
  let wrapper;
  let mockCompareData;
  let mockAnalysis;
  let compareDistrictDataMock;
  let clearComparisonMock;

  beforeEach(() => {
    mockCompareData = [{location: 'denver', stats: [{2001: 2}], selected: true},
      {location: 'boulder', stats: [{2002: 1}], selected: true}];
    mockAnalysis = {'AGATE 300': 0.909, 'ARICKAREE R-2': 0.739, compared: 1.23};
    compareDistrictDataMock = jest.fn();
    clearComparisonMock = jest.fn();
    wrapper = shallow(<CardComparison 
      compareData={mockCompareData}
      analysis={mockAnalysis}
      compareDistrictData={compareDistrictDataMock} 
      clearComparison={clearComparisonMock} />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the cards', () => {
    expect(wrapper.find(Card).length).toEqual(2);
  });

  it('should call clearComparison when clear-btn is clicked', () => {
    wrapper.find('.clear-btn').simulate('click');
    expect(clearComparisonMock).toHaveBeenCalled();
  });
});

