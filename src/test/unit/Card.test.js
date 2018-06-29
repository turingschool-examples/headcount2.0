import React from 'react';
import Card from '../../components/Card/Card';
import { shallow } from 'enzyme';

describe('Card unit test suite', () => {
  
  const mockDistrict = {
    location:'The Moon',
    stats: {
      2002: 1,
      2003: 6,
      2004: 8,
      2005: 0
    }
  }

  const wrapper = shallow(<Card {...mockDistrict} key={mockDistrict.location} />);

  test('When Card is rendered it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});