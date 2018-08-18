import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictContainer from '../components/DistrictContainer';

import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('DistrictContainer component', () => {
  let wrapper;
  let category;

  const mockState = {
    category: new DistrictRepository(kinderData),
    districts: new DistrictRepository(kinderData).findAllMatches(),
    loading: false
  };

  beforeEach(() => {
    const toggleSelected = jest.fn();
    wrapper = shallow(
      <DistrictContainer
        districts={mockState.districts}
        toggleSelected={toggleSelected}
        category={mockState.category}
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
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot;
  });
});
