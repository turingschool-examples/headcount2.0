import React from 'react'
import { shallow, mount } from 'enzyme'
import ComparisonContainer from '../components/ComparisonContainer'

describe('Comparison Container', () => {

  // it('should match the snapshot', () => {
  //   const wrapper = shallow(<ComparisonContainer />)
  //   expect(wrapper).toMatchSnapshot()
  // })

  it('should have props matching the conditional rendering supplied in App', () => {
    const cards = [{ location: 'Denver', data: {'2006': .098}}] 
    const wrapper = mount(<ComparisonContainer cards={cards}/>)
    expect(wrapper.props().cards).toEqual(cards)
  })

  it('should create three variables if passed three card objects as props', () => {
    const cards = [{ location: 'Denver', data: {'2006': .098}}, 
    { COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}, 
    { location: 'Golden', data: {'2006': .848}}]

    const wrapper = mount(<ComparisonContainer cards={cards} />)
    
    const [ compareCardA, comparisonCard, compareCardB ] = cards

    expect(compareCardA).toEqual(wrapper.props().cards[0])
    expect(comparisonCard).toEqual(wrapper.props().cards[1])
    expect(compareCardB).toEqual(wrapper.props().cards[2])        
  })

  it('should create one variables if passed one card objects as props', () => {
    const cards = [{ location: 'Denver', data: {'2006': .098}}]
    const wrapper = mount(<ComparisonContainer cards={cards} />)
    
    const [ compareCardA, comparisonCard, compareCardB ] = cards
    
    expect(compareCardA).toEqual(wrapper.props().cards[0])
    expect(comparisonCard).toEqual(undefined)
    expect(compareCardB).toEqual(undefined)        
  })


})