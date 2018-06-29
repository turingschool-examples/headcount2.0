import React from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import Card from '../../components/Card/Card';
import { shallow } from 'enzyme';

describe('CardContainer test suite', () => {
  let wrapper;
  const mockData = [
    {
      location:'The Moon',
      stats: {
        2002: 1,
        2003: 6,
        2004: 8,
        2005: 0,
      }
    },
    {
      location:'The Sun',
      stats: {
        2002: 1,
        2007: 6,
        2004: 8,
        2009: 0,
      }
    },
    {
      location:'Jupiter',
      stats: {
        2002: 1,
        2009: 6,
        2010: 8,
        2004: 0,
      }
    }
  ];

  beforeEach(() => wrapper = shallow(<CardContainer districts={mockData}/>));

  afterEach(() => wrapper.unmount());

  test('There should be three cards created in the CardContainer when given props array', () => {
    const cards = wrapper.find(Card).length;
    expect(cards).toBe(3);
  });

  test('When CardContainer is rendered it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
