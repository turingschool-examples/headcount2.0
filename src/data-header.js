import React, { Component } from 'react';


class DataHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='data-header'>
        <select className='district-dropdown'>
          {
            Object.keys(this.props.data).map( (district, i) => {
              return <option className='district-option' key={Date.now() + i}>
                {district.toUpperCase()}
              </option>
            })
          }
        </select>
        <h3>INFO</h3>
      </div>
    )
  }
}

export default DataHeader;