import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import Card from '../Card/Card'

describe('CardContainer', () => {

  let wrapper;
  let mockSchoolStats = [{}, {}]
  beforeEach(() => {
    wrapper = shallow(<CardContainer
                        schoolStats={mockSchoolStats}
                         />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct amount of cards', () => {
    expect(wrapper.find(Card).length).toEqual(2)
  })
})