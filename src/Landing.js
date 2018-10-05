import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.query(this.state.query)
  };
  render() {
    return (
      <header className="landing l-landing">
        <section className="welcome-screen">
          <div className="typewriter">
            <h1>Data:GO</h1>
            <p>Global Outreach</p>
          </div>
          <form
            className="search-landing "
            onSubmit={this.handleSubmit}
            href="#results-page"
          >
            <input
              value={this.state.query}
              onChange={this.handleChange}
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
