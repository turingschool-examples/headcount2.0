import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ComparisonCard from '../components/ComparisonCard';

import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('ComparisonCard component', () => {
  let wrapper;

  beforeEach(() => {
    const selectedDistricts = [
      {
        location: 'COLORADO',
        stats: {
          2004: 0.24,
          2005: 0.278
        },
        selected: true
      },
      {
        location: 'ACADEMY 20',
        stats: {
          2010: 0.64,
          2011: 0.672
        },
        selected: true
      }
    ];

    const toggleSelected = jest.fn();
    const category = new DistrictRepository(kinderData);
    wrapper = shallow(
      <ComparisonCard
        selectedDistricts={selectedDistricts}
        toggleSelected={toggleSelected}
        category={category}
      />
    );
  });

  it('renders without crashing', () => {
    const selectedDistricts = [
      {
        location: 'COLORADO',
        stats: {
          2004: 0.24,
          2005: 0.278
        },
        selected: true
      },
      {
        location: 'ACADEMY 20',
        stats: {
          2010: 0.64,
          2011: 0.672
        },
        selected: true
      }
    ];

    const toggleSelected = jest.fn();
    const category = new DistrictRepository(kinderData);
    const div = document.createElement('div');
    ReactDOM.render(
      <ComparisonCard
        selectedDistricts={selectedDistricts}
        toggleSelected={toggleSelected}
        category={category}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
