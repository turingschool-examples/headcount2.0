import React from 'react';
import Card from '../../components/Card/Card';
import { shallow } from 'enzyme';

describe('Card unit test suite', () => {
  //I think I need to simulate the function that maps the info onto the card that is
  //then put into the card container.

  const wrapper = shallow(<Card {mockDistrict} key={mockDistrict.location} />);

  const mockDistrict = {
    location:'The Moon',
    stats: {
      2002: 1,
      2003: 6,
      2004: 8,
      2005: 0,
    }
  }

  wrapper.instance().districtData(jest.fn())

  test('When Card is rendered it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});