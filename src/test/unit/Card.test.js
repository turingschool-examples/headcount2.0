import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from '../../Card';
import renderer from 'react-test-renderer';
import App from '../../App'

describe('Card', () => {
  it('should match snapshot', () => {
    const props = {
      location: 'COLORADO',
      stats: [{2007: 1}],
      selectedCards: []
    }

    const card = shallow(<Card {...props} selectCard={jest.fn()} />)

    expect(card).toMatchSnapshot();
  })


})
