import React, { Component } from 'react'
import Tree from 'react-d3-tree'
import Widget from './Widget'
import { Fetcher } from './Fetch'

class HierarchychartComponent extends Component {
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
      let apiData = response.apiData.hierarchy.data
      let parsArr = this.parseString(apiData)
      this.setState({
        apiData: parsArr,
      })
    })
    //   //fetch('http://165.227.158.131/dp/api/v160/hierarchy/twitter/ma/100') //personality
    //   // fetch('http://165.227.158.131/dp/api/v158/hierarchy/twitter/ma/100') //competitors
    //   fetch('http://165.227.158.131/dp/api/v155/hierarchy/twitter/ma/100')
    //     .then(response => response.json())
    //     .then(response => {
    //       let apiData = response.apiData.hierarchy.data
    //       let parsArr = this.parseString(apiData)
    //       this.setState({
    //         apiData: parsArr,
    //       })
    //     })
  }

  parseString(arr) {
    let workarr = []
    let main = {}
    let parents = []
    let fchild = []
    let schild = []
    let parse = []
    let result = []
    let j = 0
    let k = 0

    for (let i = 0; i < arr.length; i++) {
      parse[i] = arr[i].id.split(';')
      if (parse[i].length === 1) {
        result[j] = parse[i]
        parents[j] = parse[i]
        main = {
          name: parse[i],
          children: [],
        }
        j++
      } else if (parse[i].length === 2) {
        // let sndresult = parse[i][1];
        if (parse[1][0] === result[0][0]) {
          // if (parse[i][1] === sndresult[i]) {
          fchild = parse[i].splice(1, 1)
          let semiworksndtag = fchild
          main.children[i - 1] = { name: semiworksndtag, children: [] }
          // }
        }
      } else if (parse[i].length === 3) {
        if (parse[1][0] === result[0][0]) {
          let double = parse[i]
          fchild = parse[i].splice(1, 1)
          let semiworksndtag = fchild
          main.children[i - 1] = { name: semiworksndtag, children: [] }
          schild = double.splice(parse[i].length - 1, 1)
          let semiworktrdtag = schild
          main.children[i - 1].children[k] = {
            name: semiworktrdtag,
            children: [],
          }
          // k++;
        }
      }
    }
    workarr[0] = main
    return workarr
  }

  render() {
    return (
      <Widget width={this.props.width}>
        <div className="graph__barchart__header">
          <h2 className="title__piechart">{this.props.title}</h2>
          <h3 className="subtitle__piechart" />
        </div>
        <div className="hierarchy__container">
          {this.state.apiData ? (
            <Tree
              orientation="vertical"
              data={this.state.apiData}
              initialDepth={10000}
              zoom={0.5}
              separation={{ siblings: 0.4, nonSiblings: 0.25 }}
              pathFun="elbow"
              nodeSize={{ x: 400, y: 260 }}
              textLayout={{
                textAnchor: 'end',
                x: -10,
                y: 15,
                transform: 'rotate(-45)',
              }}
            />
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </Widget>
    )
  }
}

export default HierarchychartComponent
