import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CompareCard from './CompareCard.js';

describe('CompareCard', () => {
  let comparecard;
  const mockCompareInfo ={"ACADEMY 20": 0.407, "COLORADO": 0.53, compared: 0.768}

  beforeEach(() => {
    comparecard = shallow(<CompareCard compareInfo ={mockCompareInfo} />)
  })

  it('should match snapshot', () => {
    expect(comparecard).toMatchSnapshot()
  })

  it('should render 3 elements', () => {
    expect(comparecard.find('h3').length).toEqual(3)
  })

  it('should render the first district card info in the first header element', () => {
    const expectation = "ACADEMY 20: 0.407"

    expect(comparecard.childAt(0).text()).toBe(expectation)
  })

  it('should render the second district card info in the third header element', () => {
    const expectation = "COLORADO: 0.53"

    expect(comparecard.childAt(2).text()).toBe(expectation)
  })

  it('should render the compared info in the second header element', () => {
    const expectation =  "<------ 0.768 ------>"

    expect(comparecard.childAt(1).text()).toBe(expectation)
  })
})