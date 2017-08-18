import React, { Component } from "react";
import "./App.css";
import "normalize.css";
import DistrictRepository from "./DistrictRepository";
import SchoolList from "./SchoolList";
import Search from "./Search";
import kinderData from "../data/kindergartners_in_full_day_program";
import Comparison from "./Comparison";

const districtInfo = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      compareCards: []
    };
  }

  componentDidMount() {
    this.setState({
      data: districtInfo.data
    });
  }

  updateData(location) {
    this.setState({
      data: districtInfo.findAllMatches(location)
    });
  }

  clickedCard(item, info) {
    this.setState({
      compareCards: this.removeClickedCard(item, info)
    });
    item.classList.toggle("clicked-card");
  }

  removeClickedCard(item, info) {
    const { compareCards } = this.state;

    if (compareCards[0] && info.Location === compareCards[0].Location) {
      return compareCards.splice(1, 1);
    } else if (compareCards[1] && info.Location === compareCards[1].Location) {
      return compareCards.splice(0, 1);
    } else if (compareCards.length === 2) {
      item.classList.toggle("clicked-card");
      return [...compareCards];
    } else {
      compareCards.push(info);
      return [...compareCards];
    }
  }

  render() {
    const data = this.state.data;
    return (
      <div>
        <Search findSchool={this.updateData.bind(this)} />

        <SchoolList
          data={data}
          findAverage={districtInfo.findAverage.bind(districtInfo)}
          clickedCard={this.clickedCard.bind(this)}
        />

        <Comparison
          cardData={this.state.compareCards}
          findAverage={districtInfo.findAverage.bind(districtInfo)}
          clickedCard={this.clickedCard.bind(this)}
          districtRatio={districtInfo.compareDistrictAverages.bind(
            districtInfo
          )}
        />
      </div>
    );
  }
}

export default App;
