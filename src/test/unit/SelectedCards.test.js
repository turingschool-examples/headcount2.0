import React from 'react';
import { shallow } from 'enzyme';
import SelectedCards from '../../SelectedCards/SelectedCards.js';

describe('SelectedCards', () => {
  it('should match snapshot', () => {
    const cleanData = [{
      location: 'COLORADO',
      stats: [{2007: 1}]
    }];
    const selectedCard = ['COLORADO'];
    const selectedCards = shallow(<SelectedCards cleanData={cleanData} selectedCards={selectedCard} selectCard={jest.fn()}/>);

    expect(selectedCards).toMatchSnapshot();
  });
});
