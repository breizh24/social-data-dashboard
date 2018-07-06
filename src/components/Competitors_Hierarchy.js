import React, { Component } from "react"
import { ResponsiveContainer } from 'recharts'
import Tree from 'react-d3-tree';
import Widget from "./Widget";

class CompHierarcy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: false
    }
  }
  componentDidMount() {
    fetch('http://165.227.158.131/dp/api/v158/hierarchy/twitter/ma/100') //competitors
      .then(response => response.json())
      .then(response => {
        let apiData = response.apiData.hierarchy.data;
        let parsArr = this.parseString(apiData)
        this.setState({
          apiData: parsArr
        })
      })
  }

  parseString(arr) {
    let workarr = [];
    let main = {};
    let parents = [];
    let fchild = [];
    let schild = [];
    let parse = [];
    let result = [];
    let j = 0;
    let k = 0;

    for (let i = 0; i < arr.length; i++) {
      parse[i] = arr[i].id.split(';');
      if (parse[i].length === 1) {
        result[j] = parse[i];
        parents[j] = parse[i];
        main = {
          name: parse[i],
          children: []
        }
        j++
      } else if (parse[i].length === 2) {
        // let sndresult = parse[i][1];
        if (parse[1][0] === result[0][0]) {
          // if (parse[i][1] === sndresult[i]) {
          fchild = parse[i].splice(1, 1);
          let semiworksndtag = fchild
          main.children[i - 1] = { name: semiworksndtag, children: [] };
          // }
        }
      } else if (parse[i].length === 3) {
        if (parse[1][0] === result[0][0]) {
          let double = parse[i];
          fchild = parse[i].splice(1, 1);
          let semiworksndtag = fchild;
          main.children[i - 1] = { name: semiworksndtag, children: [] };
          schild = double.splice(parse[i].length - 1, 1);
          let semiworktrdtag = schild;
          main.children[i - 1].children[k] = { name: semiworktrdtag, children: [] };
          // k++;
        }
      }
    }
    workarr[0] = main
    return workarr
  }

  render() {
    return (
      <ResponsiveContainer>
        <Widget width="90%">
          {this.state.apiData ? <Tree orientation="vertical" data={this.state.apiData} /> : <h1>Loading...</h1>}
        </Widget>
      </ResponsiveContainer >
    )
  }
}

export default CompHierarcy