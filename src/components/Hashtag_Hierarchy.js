import React, { Component } from "react"
import { ResponsiveContainer } from 'recharts'
import Tree from 'react-d3-tree';
import Widget from "./Widget";

const myTreeData = [
  {
    name: 'Top Level',
    children: [
      {
        name: 'Level 2: A',
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

class HashHierarcy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: false
    }
  }
  componentDidMount() {
    fetch('http://165.227.158.131/dp/api/v160/hierarchy/twitter/ma/100')
      .then(response => response.json())
      .then(response => {
        let apiData = response.apiData.hierarchy.data;
        let parsArr = this.parseString(apiData)
        // let edges = this.parseEdge(response)
        // let apiData = { nodes, edges }
        console.log(parsArr)
        this.setState({
          //   apiData: apiData,
          apiData: parsArr
        })
      })
  }

  parseString(arr) {
    let workarr = {};
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
          children: {}
        }
        j++
      } else if (parse[i].length === 2) {
        if (parse[1][0] === result[0][0]) {
          fchild = parse[i].splice(1, 1);
          let semiworksndtag = fchild
          main.children[i - 1] = { name: semiworksndtag, children: [] };
        }
        // j=0
        // while (j<result.length){
        //   for (i=0, i < arr.length; i++) {
        //     if(result[j]===parse[i]) {
        //       s
        //     }
        //   }
        // }
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
    workarr = main
    return workarr
  }

  render() {
    console.log(this.state.apiData)
    return (
      <ResponsiveContainer>
        <Widget width="90%">
          <Tree data={myTreeData} />
          {/* <Tree data={[this.state.apiData]} /> */}
        </Widget>
      </ResponsiveContainer >
    )
  }
}

export default HashHierarcy