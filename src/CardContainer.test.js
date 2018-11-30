import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  it('matches the snapshot', () => {
    let mockDisplayData = [
    {location: 'NorthCarolina', 
      stats: [{1999: 0.007}, {2099: 1.999}]}, 
    {location: 'VIRGINIA', 
      stats: [{1909: 0.107}, {3999: 5.999}]}];
    let wrapper = shallow(<CardContainer 
          displayData={ mockDisplayData }/>);
    expect(wrapper.find(mockDisplayData).length).toEqual(2);

    expect(wrapper).toMatchSnapshot()
  });

  it('renders all the cards', () => {
    let mockDisplayData = [
    {location: 'NorthCarolina', 
      stats: [{1999: 0.007}, {2099: 1.999}]}, 
    {location: 'VIRGINIA', 
      stats: [{1909: 0.107}, {3999: 5.999}]}];
    let wrapper = shallow(<CardContainer
        displayData={ mockDisplayData }
          />)

    expect(wrapper.find(mockDisplayData).length).toEqual(2)
  })

})