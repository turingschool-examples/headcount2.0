/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'App Component', () => {
  test('renders without crashing', () => {
    const renderedComp = shallow(<App />);

    expect(renderedComp).toMatchSnapshot();
  });

  test('starts with a state of all 181 items in its data object', () => { 
    const renderedComp = shallow(<App />)

    expect(renderedComp.state().data.length).toBe(181);
  });

  test('starts with a state of an empty array in selected', () => {
    const renderedComp = shallow(<App />)

    expect(renderedComp.state().selected.length).toBe(0)
  });

  test('it should update state if we filter for searched districts', () => {
    const renderedComp = shallow(<App />)

    renderedComp.instance().filterCards('Colorado')
    renderedComp.update();

    expect(renderedComp.state().data.length).toBe(2);

    renderedComp.instance().filterCards();
    renderedComp.update();

    expect(renderedComp.state().data.length).toBe(181);
  });

  test('it should start with a of an empty array in compared', () => {
    const renderedComp = shallow(<App />)

    expect(renderedComp.state().selected.length).toBe(0)
  });

  test('it should be able to add a district object to the selected array on a click event', () => {
    const renderedComp = shallow(<App />)
    const expectedState = ([
      {location: 'COLORADO',
       data: 
       {2004: 0.24,
        2005: 0.278,
        2006: 0.337,
        2007: 0.395,
        2008: 0.536,
        2009: 0.598,
        2010: 0.64,
        2011: 0.672,
        2012: 0.695,
        2013: 0.703,
        2014: 0.741},
      style: 'selected'
     }]);

    const e = {
      type: 'click', 
      target: { id: "COLORADO" }
    }

    renderedComp.instance().handleClick(e);
    renderedComp.update();

    expect(renderedComp.state().selected).toEqual(expectedState);
  });

  test('it should be able to add a second district object to the selected array on a click event', () => {
    const renderedComp = shallow(<App />)
    const expectedState = ([
      {location: 'ACADEMY 20',
       data: {2004:0.302,
              2005: 0.267,
              2006: 0.354,
              2007: 0.392,
              2008: 0.385,
              2009: 0.39,
              2010: 0.436,
              2011: 0.489,
              2012: 0.479,
              2013: 0.488,
              2014: 0.49
             },
      style: 'selected'
      },
      {location: 'COLORADO',
       data: {2004: 0.24}
      }
    ])

    renderedComp.setState({
       selected: [ 
       {location: 'COLORADO',
       data: {2004: 0.24}
       }
      ]
    })

    const e = {
      type: 'click', 
      target: { id: "ACADEMY 20" }
    }

    renderedComp.instance().handleClick(e)
    renderedComp.update();

    expect(renderedComp.state().selected).toEqual(expectedState)
  });

  test('on the second click, a comparison card should be created', () => {
    const renderedComp = shallow(<App />);
    const expectedState = 
      [
        ['COLORADO', 0.53],
        ['ACADEMY 20', 0.407],
        ['compared', 1.302]
      ]
    const e1 = {
      type: 'click', 
      target: { id: "ACADEMY 20" }
    }
    const e2 = {
      type: 'click', 
      target: { id: "COLORADO" }
    }

    renderedComp.instance().handleClick(e1)
    renderedComp.update()


    renderedComp.instance().handleClick(e2)
    renderedComp.update()

    expect(renderedComp.state().compared).toEqual(expectedState)
  })

  test('on a third click, it should add the newly found district to the end of the array and the previous last element to the front of the array', () => {
    const renderedComp = shallow(<App />);
    const expectedState = ([
    {location: 'COLORADO',
     data:  
       {2004: 0.24,
        2005: 0.278,
        2006: 0.337,
        2007: 0.395,
        2008: 0.536,
        2009: 0.598,
        2010: 0.64,
        2011: 0.672,
        2012: 0.695,
        2013: 0.703,
        2014: 0.741},
     style: 'selected'},
    ])


  })

})
