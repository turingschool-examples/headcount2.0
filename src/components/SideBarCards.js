import React, { Component } from 'react'

class SideBarCards extends Component {
  constructor() {
    super()
    this.state={
      selected: false
    }
  }

  handleSelectSchools(selectSchool, location) {
    console.log('working')
    let selectStatus = !this.state.selected
    selectSchool(selectStatus, location)
    this.setState({ selected: selectStatus })
  }

  render() {
    let { location, data, selectSchool } = this.props;

    return (
      <div className={ this.state.selected ? "sidebar-card selected" : "sidebar-card"}
           onClick={ () => this.handleSelectSchools(selectSchool, location) }
      >
        <h4>{location}</h4>
      </div>
    )
  }
};

export default SideBarCards;
