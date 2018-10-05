import React, { Component } from 'react'
import './App.css'
import './Card.css'
import './CardContainer.css'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js'
import CardContainer from './CardContainer'

const allSchools = new DistrictRepository(kinderData)

//try putting above in component did mount then need to set state with data

class App extends Component {
  constructor(){
    super()
    this.state = { data: allSchools.stats }

    // console.log(this.state)
    }
  

  // componentDidMount = () => {
  //   const allSchools = new DistrictRepository(kinderData)
  //   this.setState({
  //     data: allSchools.stats
  //   })

  // }

  
  render() {
    const {data} = this.state
    return (
      <div>
        <h1 className="header">Headcount 2.0</h1>
        <CardContainer data={data} />
      </div>
    );
  }
}

export default App;
