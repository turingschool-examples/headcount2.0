import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js'


describe('Card', () => {
  const district = {school: 'Colorado', data: {2016: 0.33677}}

  it('should match snapshot', () => {
    const wrapper = shallow(<Card district={district} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a class of card', () => {
    const wrapper = shallow(<Card district={district} />)
    expect(wrapper.exists('.card')).toBe(true)
  })

  it('should render card data filtered by color', () => {
    const district = {school: 'Colorado', data: {2016: 0.33677}}
    const wrapper = shallow(<Card district={district} />)

    expect(wrapper.find('li').hasClass('red'))
  })
})


