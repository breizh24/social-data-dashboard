import React, { Component } from 'react'
import { ResponsiveContainer } from 'recharts'
import { Sigma, RandomizeNodePositions, RelativeSize } from 'react-sigma'

// let myGraph = {
//   nodes: [{ "n1", "Alice" }, { id: "n2", label: "Rabbit" }],
//   edges: [{ id: "e1", source: "n1", target: "n2", label: "SEES" }]
// };

class HashNetwork extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: false,
    }
  }

  componentDidMount() {
    fetch('http://165.227.158.131/dp/api/v158/network/twitter/ht/100')
      .then(response => response.json())
      .then(response => {
        let nodes = this.parseNode(response)
        let edges = this.parseEdge(response)
        let apiData = { nodes, edges }
        this.setState({
          apiData: apiData,
        })
        // console.log(response)
        // console.log(nodes)
        // console.log(edges)
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
      <ResponsiveContainer>
        {/* {(this.state.apiData !== null || this.state.apiData !== undefined) */}
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
          <h1>Loading</h1>
        )}
      </ResponsiveContainer>
    )
  }
}

export default HashNetwork
