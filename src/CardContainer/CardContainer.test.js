import React from 'react';
import CardContainer from './CardContainer.js';
import Card from '../Card/Card.js'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  const districts = {
    'COLORADO': {
      'location': 'COLORADO',
      'stats': [ { 2007: 0.013 }, { 2009: 3.004 }, { 2013: 1.101 } ]
    }
  }

  beforeEach(() => {
    wrapper = shallow(<CardContainer data={districts}/>);
  });

  it('should render the card components', () => {
    expect(wrapper.find(Card).length).toEqual(1);
  });
});

//setup 

//execution
 
//assertion