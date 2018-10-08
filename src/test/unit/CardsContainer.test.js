import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardsContainer from '../../../src/CardsContainer';
import Card from '../../../src/Card';

describe('CardsContainer', () => {
  it('should render 181 cards', () => {
    const wrapper = shallow(<CardsContainer schoolData={[]} />);    
    
    expect(wrapper).toMatchSnapshot();
  })

  it('should render all the the cards', () => {
    const mockData = [{title: 'hey', body: 'yall'}, {title: 'war', body: 'eagle'}]
    const wrapper = shallow(<CardsContainer schoolData={mockData} />);

    expect(wrapper.find(Card).length).toEqual(2);
  })

})
