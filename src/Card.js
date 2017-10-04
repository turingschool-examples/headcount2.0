import React, { Component } from 'react';

const Card = () => {
  <article>
    <h3>{this.props.districtName}</h3>
    <ul>
      {
        Object.keys(this.props.districtObject).map( (item, index) =>
          <li key={index}>{item}: {this.props.districtObject[item].Data}</li> )
      }
    </ul>
  </article>
}
