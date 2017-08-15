import React, { Component } from "react";
import "../App.css";
import DistrictRepository from "./DistrictRepository";
import Controls from "./Controls";
import KinderData from "../../data/kindergartners_in_full_day_program";

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtCards: []
    };
  }

  render() {
    return (
      <div className="app-container">
        <DistrictRepository rawData={KinderData} />
      </div>
    );
  }
}

export default App;
