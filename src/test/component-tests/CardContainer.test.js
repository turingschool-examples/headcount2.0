import React from 'react';
import { shallow, mount } from 'enzyme';
import { CardContainer } from '../../CardContainer';

describe('CardContainer', () => {
  
  it('should match the snapshot', () => {
    let mockData = [{
      '2004': 0.24,
      '2005': 0.278
    }]
    let wrapper = shallow(<CardContainer data={mockData} selectedCards={mockData}/>)

    expect(wrapper).toMatchSnapshot();
  })

})