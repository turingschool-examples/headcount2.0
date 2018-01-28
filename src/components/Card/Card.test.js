/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Card Component', () => {

  test('it should render without crashing', () => {
    const location = "Colorado";

   const mockData =  
     
      {data: {
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
        }};

    const renderedCard = shallow(<Card location={location} data={mockData} />);
    expect(renderedCard).toMatchSnapshot();   
  })
})