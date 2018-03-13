import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import kinderData from '../../data/kindergartners_in_full_day_program';
import DistrictRepository from '../../helper';
import {shallow, mount} from 'enzyme';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('should render the fucking app', () => {
    app = mount(<App />);
    expect(app).toMatchSnapshot();
  });

  it('should hold an object of district data in state', () => {
    expect(app.state('districts')).toEqual(new DistrictRepository(kinderData));
  });
  
});

