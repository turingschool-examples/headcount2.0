import React, { Component } from 'react'
import Search from './Search'
import SideBarCards from './SideBarCards'

class SideBar extends Component {



  render(){
    let { schools, selectSchool, selectedSchools } = this.props

    const schoolDisplay = schools.map((school, index) =>
      <SideBarCards school={ school }
                    selectSchool={ selectSchool }
                    key={ index } />
    )

    return (
      <div className="sidebar-container">
        <Search />
        <section className="school-card-container">
          {schoolDisplay}
        </section>
      </div>
    )
  }
}

export default SideBar;
