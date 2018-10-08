import React from 'react';
import ReactDOM from 'react-dom';
import DataCard from './DataCard';
import { shallow } from 'enzyme';
import App from './App';
import kinderData from './testData.js';

describe('DataCard', () => {

it('should match the snapshot', () => {
  });

it.skip('should save data to be rendered on a new div on click', () => {
  const mockData = {'school': {'location': 'TestLocation'}}
  const mockClick = jest.fn()
  const wrapper = shallow(<DataCard
                          mockClick= {mockClick}/>)
  wrapper.find('.data-card').simulate('click')
    expect(mockClick).toHaveBeenCalled(mockData, mockData)
})
});