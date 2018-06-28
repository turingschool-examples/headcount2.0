import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';

describe('Card Container', () => {
  it('should render main tags to the app', () => {
    // setup
    const wrapper = shallow(<CardContainer />)

    // expectation
    const expected = <main></main>
    expect(wrapper.contains(expected)).toEqual(true)
  })

})