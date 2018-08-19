import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  it('should render with all of the appropriate elements', () => {
 
    const wrapper = shallow(<Card       
      location={'Colorado'}
      stats={{key:'value'}}
     />)

    expect(wrapper).toMatchSnapshot()
  })

  it('has a class of lessThan if the stat coming in is less than .5', () => {
    const mockStat = {}
    let stat = {stat:.04}

    const wrapper = shallow(
      <Card 
        location={'Colorado'}
        stats={{key: 0.14}}
      />)

     expect(wrapper.find('li').is('.lessThan')).toEqual(true)
  })

  it('has a class of greaterThan if the stat coming in is less than .6', () => {
  const mockStat = {}


  const wrapper = shallow(
    <Card 
      location={'Colorado'}
      stats={{key: 0.6}}
    />)

   expect(wrapper.find('li').is('.greaterThan')).toEqual(true)
  })
})

