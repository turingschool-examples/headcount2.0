import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      district: []
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
      </div>
    );
  }
}

export default App;
