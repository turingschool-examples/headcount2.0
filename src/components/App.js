import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../App.css";
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
      input: ""
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

  clickDistrictCard(e) {
    let selectedCard = e.target;
    return (selectedCard.style.outline = "3px solid green");
  }

  findSearchedDistrict() {
    console.log("this is the search button");
    let found = fullData.findByName(this.state.input);
    console.log("found", found);
  }

  render() {
    if (this.state.cards === []) {
      return <div> hello</div>;
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
          />
        </div>
      );
    }
  }
}

export default App;
