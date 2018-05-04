import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = mount(<Card />)
  })

  it('matches snapshot', () => {
    // const mockCardData = {location: 'Colorado', stats: {}}

    expect(card).toMatchSnapshot()
  });
})