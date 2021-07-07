import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a state of 181 cards on load', () => {

    expect(wrapper.state().cards).toHaveLength(181)
  })
})