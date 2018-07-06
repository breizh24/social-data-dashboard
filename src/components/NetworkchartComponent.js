import React, { Component } from 'react'
import { ResponsiveContainer } from 'recharts'
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
    }
  }

  componentDidMount() {
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
    console.log(this.state.apiData)
    return (
      <Widget width="100%">
        <div className="graph__barchart__header">
          <h2 className="title__piechart">{this.props.title}</h2>
          <h3 className="subtitle__piechart" />
        </div>
        <ResponsiveContainer>
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
        </ResponsiveContainer>
      </Widget>
    )
  }
}

export default NetworkchartComponent
