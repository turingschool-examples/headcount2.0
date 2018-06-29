import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';
import Card from './Card.js'

describe('Card Container', () => {
  it('should match the snapshot', () => {
    const mockCards = { 'ACADEMY 20': { 2004: 0.75 }, 'TacoLand': { 2004: 0.75 } }
    const wrapper = shallow(<CardContainer cards={mockCards} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render all of the districts', () => {
    const mockCards = { 'ACADEMY 20': { 2004: 0.75 }, 'TacoLand': { 2004: 0.75 }}
    const wrapper = shallow(<CardContainer cards={mockCards}/>)

  
    const expected = wrapper.find(Card).length
    expect(expected).toEqual(2)
  })

})