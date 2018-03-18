import React from 'react'
import { shallow, mount } from 'enzyme'
import ComparisonContainer from '../components/ComparisonContainer'

describe('Comparison Container', () => {

  it('should match the snapshot', () => {
    const clearedComparison = jest.fn() 
    const generateComparisons = jest.fn()
    const handleComparison = jest.fn()
    const cards = [{ location: 'Denver', data: {'2006': .098}}, 
    { location: 'Golden', data: {'2006': .848}}]

    const wrapper = shallow(<ComparisonContainer 
      cards={cards}  
      handleComparison={handleComparison}
      clearedComparison={clearedComparison}
      generateComparisons={generateComparisons} 
      />)
    expect(wrapper).toMatchSnapshot()
  })
})