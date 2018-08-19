import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import DistrictContainer from '../components/DistrictContainer';

import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('DistrictContainer component', () => {
  let wrapper;
  let toggleSelected;
  let selectedDistricts;

  const mockState = {
    category: new DistrictRepository(kinderData),
    districts: new DistrictRepository(kinderData).findAllMatches(),
    loading: false
  };

  beforeEach(() => {
    toggleSelected = jest.fn();
    selectedDistricts = [
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
    wrapper = shallow(
      <DistrictContainer
        districts={mockState.districts}
        toggleSelected={toggleSelected}
        category={mockState.category}
        selectedDistricts={selectedDistricts}
      />
    );
  });

  it('renders without crashing', () => {
    const toggleSelected = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(
      <DistrictContainer
        districts={mockState.districts}
        toggleSelected={toggleSelected}
        category={mockState.category}
        selectedDistricts={selectedDistricts}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot;
  });
});
