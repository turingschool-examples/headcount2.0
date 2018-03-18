import React from 'react'
import { shallow, mount } from 'enzyme'
import ComparisonContainer from '../components/ComparisonContainer'

describe('Comparison Container', () => {

  it('should match the snapshot', () => {
    const comparisonCard = {COLORADO: 0.53, ACADEMY: 0.407, compared: 1.302}
    const clearedComparison = jest.fn() 
    const generateComparisons = jest.fn()

    const wrapper = shallow(<ComparisonContainer 
      cards={}  
      clearedComparison={clearedComparison} 
      />)

    cards, handleComparison, clearedComparison, generateComparisons

    expect(wrapper).toMatchSnapshot()
  })

})