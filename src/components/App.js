import React, { Component } from 'react'; 

import kinderData from '../data/kindergartners_in_full_day_program.js';

import DistrictRepository from '../helper.js';

import CardContainer from './CardContainer';
import Comparison from './Comparison';
import Info from './Info';
import Header from './Header';
import TopArrow from './TopArrow';

import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      filter: undefined,
      selection: [],
      modalClass: 'hidden-modal info-modal',
      filterString: '' 
    };
  }

  componentDidMount() {
    this.setState({
      data: new DistrictRepository(kinderData)
    });
  }

  processFilter = (string) => {
    this.setState({
      filterString: string
    });
  }

  processSelection = (district) => {
    if (!this.state.selection.includes(district) && 
      district !== 'close' && 
      this.state.selection.length !== 2) {
      const newData = this.state.data;
      newData.stats[district.location].classLabel = 'card selected';
      this.setState({
        selection: [...this.state.selection, district],
        modalClass: 'hidden-modal info-modal',
        data: newData
      });
    } else if (this.state.selection.includes(district) && 
      this.state.selection.length === 2) {
      const newData = this.state.data;
      newData.stats[district.location].classLabel = 'card';
      this.setState({
        selection: this.state.selection.filter((dist) => {
          return dist.location !== district.location;
        }),
        data: newData
      });
    } else if (district === 'close' || 
      this.state.selection.includes(district)) {
      this.setState({
        selection: [],
        data: new DistrictRepository(kinderData)
      });
    }

  }

  toggleModal = () => {
    if (this.state.modalClass === 'hidden-modal info-modal') {
      this.setState({
        modalClass: 'info-modal'
      });
    } else {
      this.setState({
        modalClass: 'hidden-modal info-modal'
      });
    }
  }

  untoggleModal = () => {
    this.setState({
      modalClass: 'hidden-modal info-modal'
    });
  }

  render() {
    if (this.state.data) {
      return (
        <main className="app">
          <Header 
            processFilter={this.processFilter} 
            toggleModal={this.toggleModal}
          />
          {this.state.selection.length >= 1 &&
            <Comparison
              compareDistrictAverages={this.state.data.compareDistrictAverages}
              selection={this.state.selection} 
              clearSelections={this.clearSelections}
              processSelection={this.processSelection}

            />
          }
          <Info 
            modalClass={this.state.modalClass}
            untoggleModal={this.untoggleModal} 
          />
          <TopArrow />
          <CardContainer 
            data={this.state.filter || this.state.data} 
            processSelection={this.processSelection}
            selection={this.state.selection}
            filterString={this.state.filterString}
          />
        </main>
      );
    } else {
      return (
        <main className="app">
          <h1 
            className="loading"
            aria-label="loading-label"
          >
            Loading...
          </h1>
        </main>
      );
    }
  }
}



export default App;
