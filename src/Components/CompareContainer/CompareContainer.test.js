import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareContainer from './CompareContainer';

describe('COMPARE CONTAINER', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <CompareContainer 
        // matchedCards = {[
        // 	 {COLORADO: 0.53},
        // 	 {ACADEMY: 0.407},
        // 	 {compared: 1.302},
        // ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });



});





