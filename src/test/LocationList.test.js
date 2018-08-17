import React from 'react';
import LocationList from '../LocationList';
import { shallow } from 'enzyme';

describe('LocationList', () => {

    it('should match the snapshot', () => {
        const wrapper = shallow(<LocationList displayedLocations={[]} />)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should match the snapshot with one location', () => {
        const wrapper = shallow(<LocationList displayedLocations={['COLORADO']} />)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should match the snapshot with multiple locations', () => {
        const wrapper = shallow(<LocationList displayedLocations={['COLORADO', 'ACADEMY 20', 'AGATE 300']} />)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should call selectLocation when a location button is clicked', () => {
        const selectLocationMock = jest.fn()
        const wrapper = shallow(<LocationList displayedLocations={['COLORADO']} selectLocation={selectLocationMock} />)

        wrapper.find('.LocationList__btn').simulate('click')

        expect(selectLocationMock).toHaveBeenCalled()
    })
})