import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../../CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
  let cardContainer;

  beforeEach(() => {
    cardContainer = shallow(<CardContainer />)
  })

  it('matches snapshot', () => {

    expect(cardContainer).toMatchSnapshot()
  });
})