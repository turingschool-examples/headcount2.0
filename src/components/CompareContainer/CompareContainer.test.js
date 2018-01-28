/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CompareContainer from './CompareContainer';
import mockData from '../../data/testing_mocks';

describe('CompareContainer', () => {
  let wrapper;
  let mockedComparisonData = {};

  it('should match the snapshot if it is given an empty object', () => {
    wrapper = shallow(<CompareContainer 
                        handleCompareCards={() => {}}
                        removeComparison={() => {}}
                        comparisonData={mockedComparisonData}
                      />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if comparisonData has only 1 object', () => {
    mockedComparisonData = { 
      school1: mockData.cleanedCoKinderData
    }
    wrapper = shallow(<CompareContainer 
                        handleCompareCards={() => {}}
                        removeComparison={() => {}}
                        comparisonData={mockedComparisonData}
                      />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when it is given a full comparison', () => {
    mockedComparisonData = {
      school1: mockData.cleanedCoKinderData,
      school2: mockData.cleanedYumaKinderData,
      comparison: mockData.comparison
    }
    wrapper = shallow(<CompareContainer 
                        handleCompareCards={() => {}}
                        removeComparison={() => {}}
                        comparisonData={mockedComparisonData}
                      />)
    expect(wrapper).toMatchSnapshot();  
  })
})