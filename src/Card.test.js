import React from 'react'
import { shallow, mount } from 'enzyme'

import Card from './Card'

describe('Card', () => {

  it('should match the snapshot with all data passed in correctly', () => { //change to say what data
    const wrapper = shallow(<Card 
                              propName='propname'
                            />)
    expect(wrapper).toMatchSnapshot()
  })
})
