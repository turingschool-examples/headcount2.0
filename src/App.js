import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import { CardContainer } from './CardContainer';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
      selectedCards: []
    }
  }

  getData = (newData) => {
    this.district = new DistrictRepository(newData);
    const data = this.district.findAllMatches()
    this.setState({
      data
    })
  }

  filterData = (userInput) => {
    const matchedData = this.district.findAllMatches(userInput)
    this.setState({data: matchedData})
  }

  componentDidMount() {
    this.getData(kinderData)
  }

  selectCard = (card) => {
    console.log(card)
    const clickedCard = [...this.state.selectedCards ]
    { clickedCard.length < 2 ? clickedCard.push(card) : clickedCard[1] = card }
    console.log(clickedCard)
    this.setState({selectedCards: clickedCard})
    if(clickedCard.length === 2){
      this.compareCards(clickedCard[0].location, clickedCard[1].location)
    }
  }

  compareCards = (district1, district2) => {
    this.comparison = this.district.compareDistrictAverages(district1, district2)
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search filterData={this.filterData}/>
        {
          this.state.selectedCards.length && <ComparisonContainer selectedCards={this.state.selectedCards} comparison={this.comparison} />
        }
        <CardContainer  data={this.state.data} 
                        selectCard={this.selectCard}
                        selectedCards={this.state.selectedCards} 
        />
      </div>

    );
  }
}

export default App;
