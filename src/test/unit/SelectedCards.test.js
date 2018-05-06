import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SelectedCards from '../../SelectedCards.js'

describe('SelectedCards', () =>  {
  it('should display a single card when a card is clicked', () => {
    const data = []
    const selectedCards = []
    const wrapper = shallow(<SelectedCards data={data} selectedCards={selectedCards}/>)

    expect(wrapper.find('.selected-cards').length).toEqual(1)
  })
})
