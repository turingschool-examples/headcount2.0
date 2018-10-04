import React from 'react';
import { shallow, mount } from 'enzyme';

import CardContainer from './CardContainer';

describe('CardContainer', () => {


  it('should match a snapshot', () => {
    const mockData = {
      location: 'Turing',
      stats: {
        '2018': 1 
      }
    }
    const wrapper = shallow(<CardContainer data={mockData}/>)
    expect(wrapper).toMatchSnapshot();


  })



  
})