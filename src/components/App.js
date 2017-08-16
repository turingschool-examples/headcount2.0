import React, { Component } from "react";
import "../App.css";
import DistrictContainer from "./DistrictContainer";
import Controls from "./Controls";
import KinderData from "../../data/kindergartners_in_full_day_program";
import { DistrictRepository } from "../helpers/DistrictRepository";

class App extends Component {
  constructor() {
    super();
    this.fullData = new DistrictRepository(KinderData);
    this.state = {
      cards: [],
      data: this.fullData.getDistrictData()
    };
  }

  componentDidMount() {
    this.setState({
      cards: [...this.fullData.findAllMatches()],
      data: this.fullData.getDistrictData()
    });
  }

  render() {
    if (this.state.cards === []) {
      return <div> hello</div>;
    } else {
      return (
        <div className="app-container">
          <Controls findDistrict={this.fullData.findByName} />
          <DistrictContainer
            getData={this.fullData.cleanData}
            foundData={this.state.cards}
            fullData={this.state.data}
          />
        </div>
      );
    }
  }
}

export default App;
