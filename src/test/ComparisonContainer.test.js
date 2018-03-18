import React from 'react';
import { shallow } from 'enzyme';
import ComparisonContainer from '../components/ComparisonContainer';

describe('Comparison Container', () => {

  it('should match the snapshot', () => {
    const clearedComparison = jest.fn();
    const generateComparisons = jest.fn();
    const handleComparison = jest.fn();
    const cards = [
      { location: 'Denver', stats: {'2006': .098}}, 
      { location: 'Golden', stats: {'2006': .848}}
    ];

    const wrapper = shallow(<ComparisonContainer 
      cards={cards}
      handleComparison={handleComparison}
      clearedComparison={clearedComparison}
      generateComparisons={generateComparisons}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});