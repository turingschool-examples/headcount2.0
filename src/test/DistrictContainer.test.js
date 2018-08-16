import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictContainer from '../components/DistrictContainer';

import kinderGartenData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('DistrictContainer component', () => {
  let wrapper;

  const mockState = {
    districts: new DistrictRepository(kinderGartenData).findAllMatches(),
    loading: false
  };

  beforeEach(() => {
    const addSelected = jest.fn();
    wrapper = shallow(
      <DistrictContainer
        districts={mockState.districts}
        addSelected={addSelected}
      />
    );
  });

  it('renders without crashing', () => {
    const addSelected = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(
      <DistrictContainer
        districts={mockState.districts}
        addSelected={addSelected}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot;
  });
});
