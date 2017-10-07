import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../src/Card';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';

describe('Card component', () => {
  let wrapper;
  const testDataObject = [{
    'School1': {
      2005: {
        Data: 1
      },
      2006: {
        Data: 2
      },
      2007: {
        Data: 3
      },
      2008: {
        Data: 4
      },
      2009: {
        Data: 5
      }
    },
    'School2': {
      2010: {
        Data: 0.1
      },
      2011: {
        Data: 0.2
      },
      2012: {
        Data: 0.3
      },
      2013: {
        Data: 0.4
      },
      2014: {
        Data: 0.5
      }
    }
  }];

  beforeEach(() => {
    wrapper = shallow(<Card districtName={}/>);
  });

});
