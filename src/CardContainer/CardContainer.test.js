import React from 'react';
import { shallow } from 'enzyme';

import { CardContainer } from './CardContainer';

describe('CardContainer Tests', () => {
  it('should match the snapshot when a CardContainer is rendered', () => {
    const wrapper = shallow(<CardContainer
      schoolData={[{key:'value'}, {key:'value2'}]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
