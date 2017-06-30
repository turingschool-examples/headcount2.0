import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../../src/Container';
import { shallow, mount } from 'enzyme';

const mockData = {
  fakeplace: {
    location: 'fake place',
    data: {
      1999: .5,
      2000: 1,
      2001: .8
    }
  }
};

const activeCards = [
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


it('should render', () => {
  const wrapper = shallow(<Container data={{}}/>);
  expect(wrapper.find('div').length).toEqual(1);
});


it('should create cards based on how many districts are in the data', () => {
  const mockFn = jest.fn();
  const wrapper = mount(
    <Container data={mockData}
               activeCards={activeCards}
               clickActive={mockFn}/>);
  console.log(wrapper.debug())
})
