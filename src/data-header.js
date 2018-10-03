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
            this.props.data.map(place => {
              return (
                <option value={place.location}>               >
                  {place.location.toUpperCase()}
                </option>
              )
            })
          }
        </select>
        <h3>INFO</h3>
      </div>
    )
  }
}

export default DataHeader;