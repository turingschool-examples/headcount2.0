import React, { Component } from 'react';
import './Card.css';


export default class Card extends Component {

  render() {
    return (
      <aside key={this.props.key}> 
        <h3>{this.props.district.location}</h3>
        <table>
          {Object.keys(this.props.district.stats).map((stat, index) => {
            return (
              <tr className={`${this.props.district.stats[stat] > .5 ? 'aboveHalf' : ''}`} key={index}>
                <td>{stat}</td>
                <td  >{this.props.district.stats[stat]}</td>
              </tr>
            );
          })}
        </table>
      </aside>
    );
    
  }
}