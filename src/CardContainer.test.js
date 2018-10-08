import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import Card from './Card';

describe('CardContainer', () => {
  let wrapper;
  let mockData;
  let compareDistrictDataMock;

  beforeEach(() => {
    mockData = [{location: 'denver', stats: [{2001: 2}]},
      {location: 'boulder', stats: [{2002: 1}]}];
    compareDistrictDataMock = jest.fn();  
    wrapper = shallow(<CardContainer 
      data={mockData} 
      compareDistrictData={compareDistrictDataMock}/>);
    
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the cards', () => {
    expect(wrapper.find(Card).length).toEqual(2);
  });
});