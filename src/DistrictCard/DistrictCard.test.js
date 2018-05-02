import React from 'react';
import DistrictCard from './DistrictCard';
import { shallow, mount } from 'enzyme';
import '../setupTests';

describe('Card Component', () => {

  it('renders the name of the district in <h1> tags', () => {
    const expectedValues = {
      location: 'COLORADO',
      data: {}
    };
    const wrapper = shallow(<DistrictCard districtData={expectedValues} />)
    const title = <h1>COLORADO</h1>;
    expect(wrapper.contains(title.props.children)).toEqual(true);
  })

  it('renders the data for the district in an unordered list', () => {
  const expectedValues = {
    location: 'COLORADO',
    data: { 
      '2004': 0.24,
    }
  };
  const wrapper = mount(<DistrictCard districtData={expectedValues} />)
  const dataList = <ul><li>2004: 0.24</li></ul>
    // console.log(dataList.props.children.type)
  // expect(wrapper.contains(dataList.props.children.type)).toEqual(true);
  })

})