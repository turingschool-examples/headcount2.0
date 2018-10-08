import React, { Component } from "react"
import PropTypes from "prop-types"
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
    this.state = {
      selected: '',
      class: ''
    }
  }

  className = () => {
    return 'hello'
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

  selected = (boolean) => {
    if (boolean) return 'selected'
    return ''
  }

  handleSelect = () => {
    let condition = (this.props.selectedResults[0] === this.props.entry || this.props.selectedResults[1] === this.props.entry)
    this.props.handleSelect(this.props.entry, condition)
    this.setState({
      selected: this.selected(!condition)
    })
    
  }


  render() {
    return (
      <article className={`result-card ${this.state.selected}`} onClick={this.handleSelect}>
        <h3>{this.props.entry.location}</h3>
        <XYPlot
          width={window.innerWidth * 0.35}
          height={window.innerHeight * 0.35}
        >
          <XAxis />
          <YAxis />
          <HorizontalGridLines animation={({ duration: 2 }, true)} />
          <LineMarkSeries
            data={this.sorted}
            lineStyle={{ stroke: "red" }}
            markStyle={{ stroke: "blue" }}
          />
        </XYPlot>
      </article>
    )
  }
}

export default Result

Result.propTypes = {
  entry: PropTypes.object,
  selectedResults: PropTypes.array,
  handleSelect: PropTypes.func
}
