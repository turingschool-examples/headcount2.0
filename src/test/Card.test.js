import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

describe('Card', () => {

  it('should match the snapshot', () => {
    const card = {
      average: 0.53,
      location: 'COLORADO',
      stats: {}
    };
    const wrapper = shallow(<Card {...card} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot with stats', () => {
    const card = {
      average: 0.53,
      location: 'COLORADO',
      stats: {
        "2004": 0.24,
      }
    };
    const wrapper = shallow(<Card {...card} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot with multiple stats', () => {
    const card = {
      average: 0.53,
      ocation: 'COLORADO',
      stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
      }
    };
    const wrapper = shallow(<Card {...card} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should make a stat list item have a className of red if the stat value is 0.5 or less', () => {
    const card = {
      average: 0.53,
      location: 'COLORADO',
      stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.68,
        "2007": 0.5,
      }
    };
    const wrapper = shallow(<Card {...card} />);

    expect(wrapper.find('.red')).toHaveLength(3);
  });

  it('should make a stat list item have a className of green if the stat value is greater than 0.5', () => {
    const card = {
      average: 0.53,
      location: 'COLORADO',
      stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.5,
        "2007": 0.68,
      }
    };
    const wrapper = shallow(<Card {...card} />);

    expect(wrapper.find('.green')).toHaveLength(1);
  });

});