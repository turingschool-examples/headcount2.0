import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import Card from '../Card/Card'

describe('CardContainer', () => {

  let wrapper;
  let mockSchoolStats = [{}, {}, {}]
  let mockSearchResults = [{}, {}]
  beforeEach(() => {
    wrapper = shallow(<CardContainer
                        schoolStats={mockSchoolStats}
                        selectCard={jest.fn()}
                        searchResults={mockSearchResults}
                         />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct amount of cards', () => {
    expect(wrapper.find(Card)).toHaveLength(2)
  })

  it('should render the correct amount of cards', () => {
    mockSearchResults = []
    wrapper = shallow(<CardContainer 
                        schoolStats={mockSchoolStats}
                        selectCard={jest.fn()}
                        searchResults={mockSearchResults}
                      />)

    expect(wrapper.find(Card)).toHaveLength(3)
  })
})
