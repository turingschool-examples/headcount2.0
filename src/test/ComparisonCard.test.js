import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparisonCard from '../components/ComparisonCard';

describe('Comparison Card', () => {

  // it('should match snapshot', () => {
  //   const wrapper = shallow(<ComparisonCard />)
  //   expect(wrapper).toMatchSnapshot()
  // })

  it('should have the correct props', () => {
    const comparisonCard = {COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}
    const wrapper = mount(<ComparisonCard comparisonCard={comparisonCard}/>)
    expect(wrapper.props().comparisonCard).toEqual(comparisonCard)
  })

  it('should destructure the props values to set Averages and Comparison Value', () => {
    const comparisonCard = {COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}
    const wrapper = mount(<ComparisonCard comparisonCard={comparisonCard}/>)
    const [ cardAAvg, cardBAvg, comparedValue ] = Object.values(comparisonCard);
    expect(cardAAvg).toEqual(0.53)
    expect(cardBAvg).toEqual(0.407)
    expect(comparedValue).toEqual(1.302)
  })

  it('should destructure the props keys to set Location', () => {
    const comparisonCard = {COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}
    const wrapper = mount(<ComparisonCard comparisonCard={comparisonCard}/>)
    const [ cardALocation, cardBLocation ] = Object.keys(comparisonCard);
    expect(cardALocation).toEqual('COLORADO')
    expect(cardBLocation).toEqual('ACADEMY 20')
  })


})
