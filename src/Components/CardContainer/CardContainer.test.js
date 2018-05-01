import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer.js';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Card from '../Card/Card.js';

describe('CardContainer', () => {
  it('renders without crashing', () => {
    const mockProp = {'DISTRICT': [ {"2009": 0.986} ] }
    shallow(<CardContainer repo={mockProp}/>);
  });

  it('should render correct amount of card based on the props passed', () => {
    const mockProp = {'DISTRICT': [ {"2009": 0.986} ] }
    const cardContainer = shallow(<CardContainer repo={mockProp} />);
    expect(cardContainer.find(Card).length).toEqual(1);
  })

  it('should render a card coponent with the caorrect props', () => {
    //Mock prop
    //Find props of title and litstofData

  });

  
})
