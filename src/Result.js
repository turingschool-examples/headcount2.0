import React, { Component } from "react"
import PropTypes from 'prop-types' 
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineMarkSeries
} from "react-vis"

class Result extends Component {
  constructor(props) {
    super(props)
    this.sorted = this.sortResults(this.props.entry)
  }

  sortResults = entry => {
    let stats = Object.entries(entry.stats)
    const graphData = stats.reduce(
      (acc, stat) => [
        ...acc,
        {
          x: stat[0],
          y: stat[1],
          fill: "green"
        }
      ],
      [{ x: stats[0][0] - 1, y: 0 }]
    )

    return graphData
  };
  render() {
    return (
      <article className="result-card">
        <h3>{this.props.entry.location}</h3>
        <XYPlot width={window.innerWidth * .2} height={window.innerHeight * .2}>
          <XAxis />
          <YAxis />
          <HorizontalGridLines />
          <LineMarkSeries data={this.sorted} />
        </XYPlot>
      </article>
    )
  }
}

export default Result


Result.propTypes = {
  entry: PropTypes.array
}
