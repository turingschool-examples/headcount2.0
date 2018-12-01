import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  it('Matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot;
  });

  it.skip('componentDidMount calls the method prepareDataForDisplay with the correct params', () => {

  });

  it.skip('PrepareDataForDisplay calls findAllMatches on the repository held in state', () => {

  });

  it,skip('PrepareDataForDisplay sets the displayData of state', () => {

  })


})
