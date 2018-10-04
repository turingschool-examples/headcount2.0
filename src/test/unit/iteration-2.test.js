import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer'

describe('CardContainer iteration 2', () => {
  const district = new CardContainer();

  test('should have 181 district cards initially', () => {
    const wrapper = shallow(<CardContainer />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should have a default state', () => {
    const wrapper = shallow(<CardContainer />)
    const expected = { cards: [] }

    expect(wrapper.state()).toEqual(expected);
  })
})