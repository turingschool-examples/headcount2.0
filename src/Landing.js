import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = () => {
    console.log("hello");
  };
  render() {
    return (
      <header className="landing">
        <section className="welcome-screen">
          <div className="typewriter">
            <h1>Data:GO</h1>
            <p><span>G</span>lobal <span>O</span>utreach</p>
          </div>
          <form
            className="search-landing "
            onSubmit={this.handleSubmit}
            href="#results-page"
          >
            <input
              placeholder="Search for data"
              aria-label="Search field"
              type="text"
            />
            <svg
              className="submit-svg"
              tabIndex="0"
              onClick={this.handleSubmit}
            >
              <circle />

              <text
                x="35"
                y="35"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                Search
              </text>
            </svg>
          </form>
        </section>
      </header>
    );
  }
}

export default Landing;
