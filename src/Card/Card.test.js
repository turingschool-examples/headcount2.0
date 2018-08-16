import React from 'react';
import { shallow } from 'enzyme';

import { Card } from './Card';

describe('Card Tests', () => {
  it('should match the snapshot when a Card is rendered', () => {
    const wrapper = shallow(<Card
      key={1}
      location={'Colorado'}
      stats={{key:'value'}}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class name of red when stats is less than .5', () => {
    const wrapper = shallow(<Card
      key={1}
      location={'Colorado'}
      stats={{key:.3}}
    />);
    expect(wrapper.find('li').is('.red')).toEqual(true);
  });

  it('should have the class name of green when stats is more than .5', () => {
    const wrapper = shallow(<Card
      key={1}
      location={'Colorado'}
      stats={{key:.7}}
    />);
    expect(wrapper.find('li').is('.green')).toEqual(true);
  });
});
