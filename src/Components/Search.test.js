import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('SEARCH', () => {
  it('Should exist', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper).toBeDefined();
  })
})