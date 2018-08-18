import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import ComparisonContainer from '../components/ComparisonContainer';
import ComparisonCard from '../components/ComparisonCard';
import DistrictCard from '../components/DistrictCard';

import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program';

describe('ComparisonContainer component', () => {
  let wrapper;

  beforeEach(() => {});

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
      <ComparisonContainer
        selectedDistricts={selectedDistricts}
        toggleSelected={toggleSelected}
        category={category}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should not render any DistrictCard components if selectedDistricts is empty', () => {
    const selectedDistricts = [];

    const toggleSelected = jest.fn();
    const category = new DistrictRepository(kinderData);

    wrapper = shallow(
      <ComparisonContainer
        selectedDistricts={selectedDistricts}
        toggleSelected={toggleSelected}
        category={category}
      />
    );

    expect(wrapper.find(DistrictCard).length).toEqual(0);
  });

  it('should render one DistrictCard component if the legnth of selectedDistricts is 1', () => {
    const selectedDistricts = [
      {
        location: 'COLORADO',
        stats: {
          2004: 0.24,
          2005: 0.278
        },
        selected: true
      }
    ];

    const toggleSelected = jest.fn();
    const category = new DistrictRepository(kinderData);

    wrapper = shallow(
      <ComparisonContainer
        selectedDistricts={selectedDistricts}
        toggleSelected={toggleSelected}
        category={category}
      />
    );

    expect(wrapper.find(DistrictCard).length).toEqual(1);
  });

  it('should render two DistrictCards if the length of selectedDistricts is 2', () => {
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
      <ComparisonContainer
        selectedDistricts={selectedDistricts}
        toggleSelected={toggleSelected}
        category={category}
      />
    );

    expect(wrapper.find(DistrictCard).length).toEqual(2);
  });

  it('should render a ComparisonCard if the length of selectedDistricts is 2', () => {
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
      <ComparisonContainer
        selectedDistricts={selectedDistricts}
        toggleSelected={toggleSelected}
        category={category}
      />
    );

    expect(wrapper.find(ComparisonCard).length).toEqual(1);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
