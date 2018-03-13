import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import {shallow} from 'enzyme';

describe('App', () => {
  let app;

  const districts = {
    stats: {
      'ASPEN 1': {
        location: 'ASPEN 1',
        stats: {
          '2004': 0.302,
          '2005': 0.267,
          '2006': 0.354,
          '2007': 0.392,
          '2008': 0.385,
          '2009': 0.39,
          '2010': 0.436,
          '2011': 0.489,
          '2012': 0.479,
          '2013': 0.488,
          '2014': 0.49
        }
      },
      "PRIMERO REORGANIZED 2": {
        location: 'PRIMERO REORGANIZED 2',
        stats: {
          '2004': 0.302,
          '2005': 0.267,
          '2006': 0.354,
          '2007': 0.392,
          '2008': 0.385,
          '2009': 0.39,
          '2010': 0.436,
          '2011': 0.489,
          '2012': 0.479,
          '2013': 0.488,
          '2014': 0.49
        }
      },
      'OTIS R-3': {
        location: 'OTIS R-3',
        stats: {
          '2004': 0.302,
          '2005': 0.267,
          '2006': 0.354,
          '2007': 0.392,
          '2008': 0.385,
          '2009': 0.39,
          '2010': 0.436,
          '2011': 0.489,
          '2012': 0.479,
          '2013': 0.488,
          '2014': 0.49
        }
      }                  
    }
  };


  beforeEach(() => {
    app = shallow(<App districts={districts}/>);
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App districts={districts} />, div);
  });

  it('should render the app', () => {
    expect(app).toMatchSnapshot();
  });

  it('should hold an object of district data in state', () => {
    expect(app.state('districts')).toBeDefined();
  });
});


