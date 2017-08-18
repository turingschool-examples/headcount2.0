import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/DistrictRepository.css";
import DistrictContainer from "./DistrictContainer";
import Controls from "./Controls";
import KinderData from "../../data/kindergartners_in_full_day_program";
import { DistrictRepository } from "../helpers/DistrictRepository";

const fullData = new DistrictRepository(KinderData);

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      cards: [],
      data: {},
      input: "",
      selectedCards: []
    };
  }

  componentDidMount() {
    this.setState({
      cards: [...fullData.findAllMatches()],
      data: fullData.getDistrictData()
    });
  }

  handleChange(e) {
    this.setState({
      cards: [...fullData.findAllMatches(e.target.value)],
      input: e.target.value
    });
  }

  clickDistrictCard(e, location) {
    let card = e.currentTarget;
    let selected = this.state.selectedCards;
    if (selected.length >= 2) {
      selected.pop();
    }
    selected.push(location);
    this.setState({
      selectedCards: selected
    });
    return card.classList.toggle("clicked");
  }

  findSearchedDistrict() {
    let found = fullData.findByName(this.state.input);
  }

  render() {
    if (this.state.cards === []) {
      return <div className="no-cards"> hello</div>;
    } else {
      return (
        <div className="app-container">
          <Controls
            findDistrict={this.findSearchedDistrict.bind(this)}
            handleChange={this.handleChange}
            DistrictRepository={fullData}
          />
          <DistrictContainer
            getData={fullData.cleanData}
            foundData={this.state.cards}
            fullData={this.state.data}
            findDistrict={this.clickDistrictCard.bind(this)}
            selected={this.state.selectedCards}
          />
        </div>
      );
    }
  }
}

export default App;
