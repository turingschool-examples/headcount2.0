import React, { Component } from 'react';


class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <article className="result-card">
        <h1>{this.props.entry.location}</h1>
      </article>
     );
  }
}
 
export default Result;