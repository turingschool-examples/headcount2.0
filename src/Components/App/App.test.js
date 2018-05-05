import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import DistrictRepository from '../../helper.js';
import data from '../../data/kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer.js';
const repoHelper = new DistrictRepository(data);

describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  })

  it('it should have a default state of DistrictRepository', () => {
    const app = shallow(<App />);
    expect(app.state('repo')).toEqual(repoHelper.findAllMatches());
  })

  it('should render CardContainer with the correct Props', () => {
    const app = shallow(<App />);
    expect(app.find(CardContainer).props()['repo']).toEqual(app.state('repo'));
  })

})

