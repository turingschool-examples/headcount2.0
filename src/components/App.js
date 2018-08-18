import React, { Component } from "react";
import DistrictsContainer from "./DistrictsContainer";
import DistrictRepository from "../helper";
import SearchForm from "./SearchForm";
import kinderData from "../data/kindergartners_in_full_day_program";
import "../css/App.css";
import ComparisonContainer from "./ComparisonContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      selectedCards: [],
      schoolData: {}
    };
  }

  componentDidMount() {
    this.findDistricts();
  }

  findDistricts = district => {
    const schoolData = new DistrictRepository(kinderData);
    const districts = schoolData.findAllMatches(district);
    if (districts) {
      this.setState({
        districts,
        schoolData
      });
    }
  };

  selectCards = location => {
    let selectedCards;
    const currentDistrict = this.state.districts.find(
      selectedCard => selectedCard.location === location
    );

    if (!currentDistrict.selected && this.state.selectedCards.length < 2) {
      currentDistrict.selected = true;
      selectedCards = [...this.state.selectedCards, currentDistrict];
    } else {
      currentDistrict.selected = false;
      selectedCards = this.state.selectedCards.filter(
        selectedCard => selectedCard.location !== currentDistrict.location
      );
    }
    this.setState({
      selectedCards
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="header">Welcome To Headcount 2.0</h1>
        <SearchForm findDistricts={this.findDistricts} />
        <ComparisonContainer
          selectedCards={this.state.selectedCards}
          selectCards={this.selectCards}
          districts={this.state.districts}
          schoolData={this.state.schoolData}
        />
        <DistrictsContainer
          districts={this.state.districts}
          selectCards={this.selectCards}
        />
      </div>
    );
  }
}

export default App;
