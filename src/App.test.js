import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

it('renders CardContainer with the correct props', () => {

  expect(wrapper.find(CardContainer).prop('data')).toEqual([])
})

}) 
