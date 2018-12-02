import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

describe('Card', () => {

  it('should match the snapshot with all appropriate data', () => {
    const stats = {
      2007: 1,
      2008: 0,
      2006: 1,
      2009: 0.5,
      2010: 1
    }
    const wrapper = shallow(<Card location="COLORADO" stats={stats} />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should render a list item with the class of "yellow" if the stat passed in is below 0.5', () => {

  })

  it('should render a list item with the class "purple" if the stat passed in is above 0.5', () => {

  })
})