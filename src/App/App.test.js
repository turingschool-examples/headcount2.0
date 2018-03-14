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
});


