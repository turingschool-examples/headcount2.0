import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import {shallow, mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import CardContainer from '../../CardContainer'

describe ('App',()=>{
  let app;

  beforeEach(()=>{
    app = shallow(<App />)
  })

  it('matches snapshot', () => {
    
    expect(app).toMatchSnapshot()
  });

  it('state is equal to an object',()=>{

    expect(app.state().schools).toBeInstanceOf(Object)
  })

  it('should have state.data with length of 181',()=>{

  expect(app.state().data).toHaveLength(181)
  })

  it('renders CardContainer with correct props',()=>{
    
    expect(app.find(CardContainer).prop()).toEqual({})
  })


})

