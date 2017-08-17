import React, { Component } from 'react'

class SideBarCards extends Component {
  constructor() {
    super()
    this.state={
      selected: false
    }
  }

  handleSelectSchools(selectSchool, school) {
    console.log('working')
    let selectStatus = !this.state.selected
    selectSchool(selectStatus, school)
    this.setState({ selected: selectStatus })
  }

  render() {
    let { school, selectSchool } = this.props;

    return (
      <div className={ this.state.selected ? "sidebar-card selected" : "sidebar-card"}
           onClick={ () => this.handleSelectSchools(selectSchool, school) }
      >
        <h4>{school.location}</h4>
      </div>
    )
  }
};

export default SideBarCards;
