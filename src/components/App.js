import React, { Component } from 'react'; 

import kinderData from '../data/kindergartners_in_full_day_program.js';
import thirdGradeData from '../data/3rd_grade_tests.js'
import higherEdData from '../data/remediation_in_higher_education.js'

import DistrictRepository from '../helper.js'

import CardContainer from './CardContainer'
import InputField from './InputField'
import Comparison from './Comparison'
import Info from './Info'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: undefined,
      filter: undefined,
      selection: [],
      modalClass: 'hidden-modal info-modal'
    }
  }

  componentDidMount() {
    this.setState({
      data: new DistrictRepository(kinderData)
    })
  }

  processFilter = (string) => {
    const filter = this.state.data.findAllMatches(string)
    const reducedFilter = filter.reduce((accu, location) => {
      accu[location.location] = location
      return accu;
    }, {});

    this.setState({
      filter: reducedFilter
    })
  }

  processSelection = (district) => {
    if (!this.state.selection.includes(district)) {
      this.setState({
        selection: [...this.state.selection, district],
        modalClass: 'hidden-modal info-modal'
      })
    } else if (this.state.selection.includes(district) && this.state.selection.length === 2) {
      this.setState({
        selection: this.state.selection.filter((dist) => {
          return dist.location !== district.location
        })
      })
    } else {
      this.setState({
        selection: []
      })
    }

  }

  toggleModal = () => {
    if (this.state.modalClass === 'hidden-modal info-modal') {
      this.setState({
        modalClass: 'info-modal'
      })  
    } else {
      this.setState({
        modalClass: 'hidden-modal info-modal'
      })
    }
  }

  untoggleModal = () => {
    this.setState({
      modalClass: 'hidden-modal info-modal'
    })
  }

  render() {
    if (this.state.data) {
      return (
        <main className="app">
          <header>
            <img className='logo' src="./brain-and-head.svg" alt="logo" />
            <h1 className='banner-title'>Colorado Headcount</h1>
            <img 
              className='info-btn'
              src='./information.svg'
              alt='info-button'
              onClick={() => {
                this.toggleModal()
              }}
            />
            <InputField 
              processFilter={this.processFilter}
            />
          </header>
          {this.state.selection.length === 2 &&
            <Comparison
              compareDistrictAverages={this.state.data.compareDistrictAverages}
              selection={this.state.selection} 
              clearSelections={this.clearSelections}
            />
          }
          <Info 
            modalClass={this.state.modalClass}
            untoggleModal={this.untoggleModal} 
          />
            <CardContainer 
              data={this.state.filter || this.state.data.stats} 
              processSelection={this.processSelection}
              selection={this.state.selection}
            />
        </main>
      );
    } else {
      return (
        <main className="app">
          nuthin
        </main>
      )
    }
  }
}



export default App;
