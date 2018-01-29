/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import mockData from '../../data/testing_mocks';

describe('CardContainer', () => {
  let wrapper;
  const mockHandleCompareCards = jest.fn();
  const mockState = [mockData.cleanedCoKinderData];

  beforeEach(() => {
    wrapper = shallow(<CardContainer 
                        schoolData={mockState}
                        handleCompareCards={mockHandleCompareCards}
                        comparisonData={{}}
                      />)

  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})