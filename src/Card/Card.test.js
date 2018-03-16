import React from 'react';
import ReactDOM from 'react-DOM';
import Card from './Card';
import {shallow} from 'enzyme';

describe('Card', () => {
	let card, district, stats, selectedLocations;
	const selectLocation = jest.fn();
	selectedLocations = [{ 
      location: 'COLORADO', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }, { 
      location: 'COLORADO SPRINGS', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }];

	beforeEach(() => { 
		stats = { '2017': 0 }
		card = shallow(<Card 
			location="COLORADO"
			stats={stats} 
			selectLocation={selectLocation} 
			selectedLocations={selectedLocations} />);
	});
	
	it('should match the snapshot' , () => {
		expect(card).toMatchSnapshot();
	});

	it('has a class of selected if the location prop matches a location in the selectedLocations array', () => {
		selectedLocations = [];
		card = shallow(<Card 
			location="COLORADO"
			stats={stats} 
			selectLocation={selectLocation} 
			selectedLocations={selectedLocations} />);
		expect(card.find('.selected').length).toEqual(0);
		selectedLocations = [{ 
      location: 'COLORADO', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }, { 
      location: 'COLORADO SPRINGS', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }]
    card = shallow(<Card 
			location="COLORADO"
			stats={stats} 
			selectLocation={selectLocation} 
			selectedLocations={selectedLocations} />);
    expect(card.find('.selected').length).toEqual(1);
	})

	it('has a class "red" if district percentile is less than 0.5', () => {
		expect(card.find('.red').length).toEqual(1);
		stats['2017'] = 0.51;
		card = shallow(<Card
			location="COLORADO"
			stats={stats} 
			selectLocation={selectLocation} 
			selectedLocations={selectedLocations} />);
		expect(card.find('.red').length).toEqual(0);
	});

	it('When the article is clicked it should call the selectedLocations function', ()=> {
		card.find('article').simulate('click');
		expect(selectLocation).toHaveBeenCalled()
	})

})