import React from 'react'
import { shallow, mount } from 'enzyme'
import CardContainer from './CardContainer'

describe('CardContainer', () => {
  it('should render with all of the appropriate elements', () => {

  
    const wrapper = shallow(<CardContainer
      data={[]}
      />)

    expect(wrapper).toMatchSnapshot()
  })
})