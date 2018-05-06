import React from 'react';
import { shallow } from 'enzyme';
import CardArea from '../../CardArea/CardArea';

describe('CardArea', () => {
  it('should match snapshot', () => {
    const props = [{
      location: 'COLORADO',
      stats: [{2007: 1}]
    }];
    const cardArea = shallow(<CardArea data={props} />);

    expect(cardArea).toMatchSnapshot();
  });
});
