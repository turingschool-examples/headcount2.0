import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../Card/Card';

describe('Card', () => {
  it('should match snapshot', () => {
    const props = {
      location: 'COLORADO',
      stats: [{2007: 1}],
      selectedCards: []
    };
    const card = shallow(<Card {...props} selectCard={jest.fn()} />);

    expect(card).toMatchSnapshot();
  });
});
