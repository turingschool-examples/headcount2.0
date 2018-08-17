import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer.js'

describe('CardContainer', () => {

  it('should match the snapshot with no cards', () => {
    const mockProp = {
                      districts: []
    }
    const wrapper = shallow(<CardContainer districts={mockProp}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with cards', () => {
    const mockProp = {
                      districts: [{
                        location: "COLORADO",
                        stats: {2004: 0.24}
                      }]
    }
    const wrapper = shallow(<CardContainer districts={mockProp}/>)
    expect(wrapper).toMatchSnapshot()
  })

})