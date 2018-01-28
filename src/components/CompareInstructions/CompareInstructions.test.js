/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CompareInstructions from './CompareInstructions';
import mockData from '../../data/testing_mocks';

describe('CompareInstructions', () => {
  let wrapper;
  const mockRemoveComparison = jest.fn();
  const mockedComparisonData = {
    school1: mockData.cleanedCoKinderData
  }

  beforeEach(() => {
    wrapper = shallow(
      <CompareInstructions
        comparisonData={mockedComparisonData}
        handleCompareCards={() => {}}
        removeComparison={mockRemoveComparison}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  it('should execute removeComparison when the small card is clicked', () => {
    wrapper.find('div').first().simulate('click');
    expect(mockRemoveComparison.mock.calls.length).toBe(1);
  })
})

