import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('should have some text inside a paragraph tags', () => {
    // setup
    const wrapper = shallow(<Card stuff="School"/>)
    const expected = <p>School</p>
    // execution

    // expectation
    expect(wrapper.contains(expected)).toEqual(true)
  })

})