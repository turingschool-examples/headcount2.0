import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import Card from './Card';

describe('CardContainer', () => {
  it('matches the snapshot', () => {
    let mockDataSet = 'College';
    let mockDisplayData = 
    [{location: 'NorthCarolina', 
    stats: {1999: 0.007, 2099: 1.999 }}, 
    {location: 'VIRGINIA', 
    stats: {1909: 0.107, 3999: 5.999 }}];
    let wrapper = shallow(<CardContainer displayData={mockDisplayData}
      dataSet={mockDataSet}/>);

    expect(wrapper).toMatchSnapshot()
  });

  it('renders all the cards', () => {
    let mockDataSet = 'College';
    let mockDisplayData = 
    [ {location: 'NorthCarolina', 
    stats: {1999: 0.007, 2099: 1.999 }}, 
    {location: 'VIRGINIA', 
    stats: {1909: 0.107, 3999: 5.999 }}];

    let wrapper = shallow(<CardContainer
        displayData={ mockDisplayData }
        dataSet={mockDataSet} />)
    expect(wrapper.find(Card).length).toEqual(2)
  });

  it.skip('Assigns a unique key to each card', () => {


  });

})