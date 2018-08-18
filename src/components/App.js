import React, { Component } from "react";
import DistrictsContainer from "./DistrictsContainer";
import DistrictRepository from "../helper";
import SearchForm from "./SearchForm";
import kinderData from "../data/kindergartners_in_full_day_program";
import "../css/App.css";
import ComparisonContainer from "./ComparisonContainer";
const schoolData = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      schoolData: [],
      selectedCards: []
    };
  }

  componentDidMount() {
    this.findDistricts();
  }

  componentDidUpdate() {
    console.log(this.state.selectedCards[0]);
  }

  findDistricts = district => {
    const foundDistricts = schoolData.findAllMatches(district);
    if (foundDistricts) {
      this.setState({
        schoolData: foundDistricts
      });
    }
  };

  selectCards = location => {
    let selectedCards;
    const currentDistrict = this.state.schoolData.find(
      selectedCard => selectedCard.location === location
    );

    if (!currentDistrict["selected"] && this.state.selectedCards.length < 2) {
      currentDistrict["selected"] = true;
      selectedCards = [...this.state.selectedCards, currentDistrict];
    } else {
      currentDistrict["selected"] = false;
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
          selectedDistrict={this.state.selectedCards}
          selectCards={this.selectCards}
          schoolData={this.state.schoolData}
          comparedData={this.state.comparedData}
        />
        <DistrictsContainer
          schoolData={this.state.schoolData}
          selectCards={this.selectCards}
          comparedData={this.state.comparedData}
        />
      </div>
    );
  }
}

export default App;
