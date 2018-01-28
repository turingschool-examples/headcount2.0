/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App/App';
import SearchBar from '../searchbar/SearchBar.js'


describe( 'CardContainer', () => {

  test('should display cards in state', () => {

    const mockCard =  
    [ {location: "Colorado", 
       data: {
        2004 : 0.24,
        2005 : 0.278,
        2006 : 0.337,
        2007 : 0.395,
        2008 : 0.536,
        2009 : 0.598,
        2010 : 0.64,
        2011 : 0.672,
        2012 : 0.695,
        2013 : 0.703,
        2014 : 0.741
        }}]
      
    const renderedComp = shallow(<CardContainer data={mockCard}/>);
    expect(renderedComp).toMatchSnapshot();
  });


  test('should display the number of cards called in filterCards', () => {

    const renderedApp = mount(<App />);

    renderedApp.instance().filterCards('Colorado');
    renderedApp.update();

    expect(renderedApp.instance().state.data.length).toBe(2);

    expect(renderedApp.find('.district-card').length).toBe(2);
  })
  
})

// should display selected cards (length)

//anything that changes state, anything that has a method

