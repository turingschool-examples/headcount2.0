/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import mockData from '../../data/testing_mocks';

describe('Card', () => {
  let wrapper;
  let mockHandleCompareCards = jest.fn();
  let mockSchoolData = mockData.cleanedCoKinderData;

  beforeEach(() => {
    wrapper = shallow(
      <Card 
        schoolData={mockSchoolData}
        handleCompareCards={mockHandleCompareCards}
        size='large'
      />
    )
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should execute handleCompareCards when clicked', () => {
    wrapper.find('article').simulate('click')
    expect(mockHandleCompareCards.mock.calls.length).toBe(1)
  })
})