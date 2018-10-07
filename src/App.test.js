import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
})

