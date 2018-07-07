import React, { Component } from 'react'
import moment from 'moment'
import { Sigma, RandomizeNodePositions, RelativeSize } from 'react-sigma'
import { Fetcher } from '../components/Fetch'
import Widget from './Widget'
class NetworkchartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: false,
      dateForFetch: {
        minDate: '2018-04-01',
        maxDate: '2018-05-24',
      },
      width: 1300,
    }
  }

  getWidth = () => {
    let width = window.innerWidth
    this.setState({
      width: width,
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.getWidth)

    let minDate = this.state.dateForFetch.minDate
    let maxDate = this.state.dateForFetch.maxDate
    Fetcher(
      this.props.version,
      this.props.category,
      this.props.subCategory,
      this.props.social,
      minDate,
      maxDate,
      this.props.indicator,
      this.props.limit,
    ).then(response => {
      let nodes = this.parseNode(response)
      let edges = this.parseEdge(response)
      let apiData = { nodes, edges }
      this.setState({
        apiData: apiData,
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWidth)
  }

  parseNode(arr) {
    let workarr = []
    let prefix = arr.apiData.network.data.nodes
    for (let i = 0; i < prefix.length; i++) {
      workarr[i] = {
        id: prefix[i].id,
        label: prefix[i].label,
      }
    }
    return workarr
  }
  parseEdge(arr) {
    let workarr = []
    let prefix = arr.apiData.network.data.edges
    for (let i = 0; i < prefix.length; i++) {
      workarr[i] = {
        id: i,
        source: prefix[i].source,
        target: prefix[i].target,
      }
    }
    return workarr
  }

  render() {
    return (
      <Widget width={this.state.width <= 1200 ? '100%' : this.props.width}>
        <div className="graph__barchart__header">
          <h2 className="title__piechart">{this.props.title}</h2>
          <h3 className="subtitle__piechart">
            {`Range: ${moment(this.state.dateForFetch.minDate).format(
              'DD/MM/YYYY',
            )} to ${moment(this.state.dateForFetch.maxDate).format(
              'DD/MM/YYYY',
            )}`}
          </h3>
        </div>

        {this.state.apiData !== false ? (
          <Sigma
            graph={this.state.apiData}
            settings={{
              drawEdges: true,
              clone: false,
              defaultNodeColor: '#EDB63E',
              labelHoverShadowColor: '#605D5E',
              defaultLabelColor: '#605D5E',
              labelSize: 'fixed',
            }}
          >
            <RelativeSize initialSize={15} />
            <RandomizeNodePositions />
          </Sigma>
        ) : (
          <h2>Loading</h2>
        )}
      </Widget>
    )
  }
}

export default NetworkchartComponent
