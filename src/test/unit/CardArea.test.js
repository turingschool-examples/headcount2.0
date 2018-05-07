import React from 'react';
import { shallow } from 'enzyme';
import CardArea from '../../CardArea/CardArea';

describe('CardArea', () => {
  it('should match snapshot', () => {
    const cleanData = [{
      location: 'COLORADO',
      stats: [{2007: 1}]
    }];
    const cardArea = shallow(<CardArea cleanData={cleanData} selectedCards={[]} selectCard={jest.fn()}/>);

    expect(cardArea).toMatchSnapshot();
  });
});
