import React, { Component } from 'react';

class CompareCard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
        <div className="compare-card">
           <section className="school-one"></section>
           <section className="comparison"></section>
           <section className="school-two"></section>
        </div>
    )
  }

}

export default CompareCard; 

