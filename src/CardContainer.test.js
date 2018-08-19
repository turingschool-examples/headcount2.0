import React from 'react'
import { shallow, mount } from 'enzyme'
import CardContainer from './CardContainer'

describe('CardContainer', () => {
  it('should render with all of the appropriate elements', () => {

    const wrapper = shallow(
      <CardContainer
        data={[
          {2004: 0.24},
          {2004: 0.24}
        ]}
    />)

    expect(wrapper).toMatchSnapshot()
  })
})