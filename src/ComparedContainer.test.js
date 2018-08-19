import React from 'react'
import { shallow, mount } from 'enzyme'
import ComparedContainer from './ComparedContainer'

describe('ComparedContainer', () => {
  it('should render with all of the appropriate elements', () => {
    const wrapper = shallow(
      <ComparedContainer 
        comparedObject={[]}
      />)

    expect(wrapper).toMatchSnapshot()
  })
})