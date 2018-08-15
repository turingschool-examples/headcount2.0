import React, { Component } from 'react';

export default class Card extends Component {

  render() {
    return (
      <aside key={this.props.key}> 
        <h3>{this.props.district.location}</h3>
        <ul>
          {Object.keys(this.props.district.stats).map((stat, index) => {
            return <li key={index}>{stat} {this.props.district.stats[stat]} </li>;
          })}
        </ul>
      </aside>
    );
  }
}