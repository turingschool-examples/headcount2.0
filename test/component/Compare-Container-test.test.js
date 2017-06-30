import React from 'react';
import ReactDOM from 'react-dom';
import CompareContainer from '../../src/CompareContainer';
import Card from '../../src/Card';
import { shallow, mount } from 'enzyme';

const mockData = [
  {
    location: 'fictitious place',
    data: {
      1999: .1,
      2000: .4,
      2001: .6
    }
  },
  {
    location: 'imaginary place',
    data: {
      1999: .2,
      2000: .7,
      2001: .9
    }
  }
];

const dataUndefined = [undefined, undefined]

const mockActiveCards = [
  {
    location: 'faker place',
    data: {
      1999: .5,
      2000: 1,
      2001: .8
    }
  },
  {
    location: 'fakest place',
    data: {
      1999: .5,
      2000: 1,
      2001: .8
    }
  }
];

const noActiveCards = [];

const mockCompareAverage = jest.fn();
const mockClickActive = jest.fn();

it('should mount with a className of compare-container', () => {

  const wrapper = shallow(<CompareContainer
      data={mockData}
      compareAverage={mockCompareAverage}
      clickActive={mockClickActive}
      activeCards={mockActiveCards}/>
    );

  expect(wrapper.hasClass('compare-container')).toBe(true)
})

it('should render no cards when there are no active cards', () => {
  const wrapper = shallow(<CompareContainer
      data={dataUndefined}
      compareAverage={mockCompareAverage}
      clickActive={mockClickActive}
      activeCards={noActiveCards}/>
    );

    expect(wrapper.contains(<Card />)).toBe(false)
})

it('should render two cards when two card datasets are passed in', () => {
  const wrapper = shallow(<CompareContainer
      data={mockData}
      compareAverage={mockCompareAverage}
      clickActive={mockClickActive}
      activeCards={mockActiveCards}/>
    );

    expect(wrapper.find('.compare-card-container').children().length).toBe(2)
})
