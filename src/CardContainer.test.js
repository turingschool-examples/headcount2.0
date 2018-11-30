import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<CardContainer 
          displayData={ mockDisplayData }/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('renders all the cards', () => {
    const wrapper = shallow(<CardContainer
        displayData={ mockdisplayData }
          />)
    let mockDisplayData = [
    {location: NorthCarolina, 
      stats: [{1999: 0.007}, {2099: 1.999}]}, 
    {location: VIRGINIA, 
      stats: [{1909: 0.107}, {3999: 5.999}]}];
    expect(wrapper.find(mockDisplayData).length).toEqual(2)
  })

})