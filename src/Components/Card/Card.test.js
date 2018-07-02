import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {

  let wrapper;
  let mockLocation = 'Denver'
  let mockStats = {}
  let mockSelected = true
  let mockSelectCard = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Card
                      location={mockLocation}
                      stats={mockStats}
                      selected={mockSelected}
                      selectCard={mockSelectCard}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call selectCard on click', () => {
    wrapper.find('.card').simulate('click')

    expect(mockSelectCard).toHaveBeenCalledTimes(1)
  })
})