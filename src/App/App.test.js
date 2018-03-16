import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DistrictRepository from '../helper.js';
import {kinderData} from '../setupTests.js';
import {shallow} from 'enzyme';

describe('App', () => {
  let app;
  const districts = new DistrictRepository(kinderData);

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

  it('should update state with the search value', () => {
    expect(app.state('searchValue')).toEqual('');
    app.instance().searchDistrict({target: {value: 'COLOR'}});
    expect(app.state('searchValue')).toEqual('COLOR');
  });

  it('should be able to clear the search', () => {
    app.setState({searchValue: 'COLOR'});
    app.instance().clearSearch();
    expect(app.state('searchValue')).toEqual('');
  });

  it('should store selected location in an array', () => {
    expect(app.state('selectedLocations')).toEqual([]);
    app.instance().selectLocation('COLORADO');
    const expectedResult = {location: 'COLORADO', stats: {
      '2007': 0.395, '2006': 0.337, '2005': 0.278 }
    };

    expect(app.state('selectedLocations')).toEqual([expectedResult]);
  });

  it('should store two selected locations', () => {
    app.instance().selectLocation('COLORADO');
    app.instance().selectLocation('COLORADO SPRINGS');  
    const expectedResult = [{
      location: 'COLORADO', 
      stats: {
        '2007': 0.395, '2006': 0.337, '2005': 0.278 }
    }, 
    { location: 'COLORADO SPRINGS', 
      stats: {
        '2007': 0.395, '2006': 0.337, '2005': 0.278
      }
    }];

    expect(app.state('selectedLocations')).toEqual(expectedResult);
  });

  it('should swap the second location with the third location', ()=> {
    app.instance().selectLocation('COLORADO');
    app.instance().selectLocation('COLORADO SPRINGS'); 
    app.instance().selectLocation('ACADEMY 20'); 
    const expectedResult = [{
      location: 'COLORADO', 
      stats: {
        '2007': 0.395, '2006': 0.337, '2005': 0.278 }
    }, 
    { location: 'ACADEMY 20', 
      stats: {
        '2007': 0.395, '2006': 0.337, '2005': 0.278
      }
    }];

    expect(app.state('selectedLocations')).toEqual(expectedResult);
  });

});


