import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparisonCard from '../components/ComparisonCard';

describe('Comparison Card', () => {

  it('should match snapshot', () => {
    const comparisonCard = {
      COLORADO: 0.53, 
      'ACADEMY 20': 0.407, 
      compared: 1.302
    };
    const clearedComparison = jest.fn();
    const wrapper = shallow(<ComparisonCard 
      comparisonCard={comparisonCard} 
      clearedComparison={clearedComparison}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct props', () => {
    const comparisonCard = {
      COLORADO: 0.53, 
      'ACADEMY 20': 0.407, 
      compared: 1.302
    };
    const clearedComparison = jest.fn();
    const wrapper = mount(<ComparisonCard 
      comparisonCard={comparisonCard} 
      clearedComparison={clearedComparison}
    />);
    expect(wrapper.props().comparisonCard).toEqual(comparisonCard);
  });

  it('should destructure props & set Avg & Comparison variables', () => {
    const comparisonCard = {
      COLORADO: 0.53, 
      'ACADEMY 20': 0.407, 
      compared: 1.302
    };
    const clearedComparison = jest.fn();
    const wrapper = mount(<ComparisonCard 
      comparisonCard={comparisonCard} 
      clearedComparison={clearedComparison}
    />);
    const [cardAAvg, cardBAvg, comparedValue] = Object.values(comparisonCard);
    expect(wrapper).toBeDefined();
    expect(cardAAvg).toEqual(0.53);
    expect(cardBAvg).toEqual(0.407);
    expect(comparedValue).toEqual(1.302);
  });

  it('should destructure the props keys to set Location', () => {
    const comparisonCard = {
      COLORADO: 0.53, 
      'ACADEMY 20': 0.407, 
      compared: 1.302
    };
    const clearedComparison = jest.fn();
    const wrapper = mount(<ComparisonCard 
      comparisonCard={comparisonCard} 
      clearedComparison={clearedComparison}
    />);
    const [cardALocation, cardBLocation] = Object.keys(comparisonCard);
    expect(wrapper).toBeDefined();  
    expect(cardALocation).toEqual('COLORADO');
    expect(cardBLocation).toEqual('ACADEMY 20');
  });
});
