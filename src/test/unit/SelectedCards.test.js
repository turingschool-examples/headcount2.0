import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

describe('SelectedCards', () =>  {

  test('should update the state of the selected cards array', () => {
    
    it('should of have a length of one when a card is added', () => {
        // Setup
      const selectCardMock = jest.fn()
      const selectCard = mount(<SelectedCards selectCard={selectCardMock} />)
      const spy = spyOn(selectCard.instance(), 'selectCard')
      selectCard.instance().forceUpdate()
      const mockEvent = { target: { value: 'something' } }

      
      selectCard.find('div').simulate('click', mockEvent)

      // Expectation
      expect(spy).toHaveBeenCalled()
    })
  })
})