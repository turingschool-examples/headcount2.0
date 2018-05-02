import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardContainer from "../CardContainer/CardContainer.js";
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App', () => {
  let app;

  beforeEach(()=>{
    app = shallow(<App />);
    app.state.districtsData = { 
      COLORADO: { 
          location: "COLORADO", 
          stats: [{ 2007: 0.013 }, { 2009: 3.004 }, { 2013: 1.101 }]
      } 
    };
  }) 

  it.skip('renders without crashing', () => {
    const app = renderer.create(<App />);

    expect(app).toMatchSnapshot();
  });

  it('should render a CardContainer', () => {
    expect(app.find(CardContainer))
  })

  it('should have a districtsData state of an object', () => {
    console.log(app.state.districtsData);
    
    expect(app.state('districtsData')).toEqual({});
  })

  it('should render CardContainer component with the correct prop', () => {
    expect(app.find(CardContainer).prop('districtsData')).toEqual({});
  })
})



