import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SelectedCards from '../../SelectedCards.js'

describe('SelectedCards', () => {

  it('should match snapshot', () => {
    const props = [{
      location: 'COLORADO',
      stats: [{2007: 1}]
    }]
    const selectedCard = ['COLORADO']
    const selectedCards = shallow(<SelectedCards data={props} selectedCards={selectedCard}/>)

    expect(selectedCards).toMatchSnapshot();
  })
})
