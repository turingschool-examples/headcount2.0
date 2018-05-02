import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import {shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CardContainer from '../../CardContainer'

describe ('App',()=>{
  
  it('renders', () => {
    const app = shallow(<App />)

    expect(app).toHaveLength(1)
  });


})

