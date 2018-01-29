/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Comparison from './Comparison';
import mockData from '../../data/testing_mocks';

describe('Comparison', () => {
  let wrapper;
  let mockRemoveComparison = jest.fn();
  let mockComparisonData = {
    school1: mockData.cleanedCoKinderData,
    school2: mockData.cleanedYumaKinderData,
    comparison: mockData.comparison
  };
  
  beforeEach( () => {
    wrapper = shallow(
      <Comparison
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
