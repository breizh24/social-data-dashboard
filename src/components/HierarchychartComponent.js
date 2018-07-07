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
      widthContainer: 0,
    }
    this.myRef = React.createRef()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWidth)
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
      let apiData = response.apiData.hierarchy.data
      console.log(apiData)
      let parsArr = this.hierarchyData(apiData)
      console.log(parsArr)
      this.setState(
        {
          apiData: parsArr,
        },
        this.getWidth(),
      )
    })
  }

  hierarchyData = data => {
    let tree = []
    let list = data.map(el => el.id.split(';'))
    let childrenList = null
    list.forEach(element => {
      childrenList = findChildrenList(element)
      let name = element.slice(-1)[0]
      addChildren(childrenList, name)
    })

    function findChildrenList(element) {
      let path = element.slice(0, -1)
      let subtree = tree

      for (let i = 0; i < path.length; i++) {
        for (let j = 0; j < subtree.length; j++) {
          if (subtree[j].name == path[i]) {
            subtree = subtree[j].children
            break
          }
        }
      }
      return subtree
    }

    function addChildren(childrenList, element) {
      childrenList.push({ name: element, children: [] })
    }
    return tree
  }

  getWidth = () => {
    const element = this.myRef.current.getBoundingClientRect().width / 2
    this.setState({ widthContainer: element })
  }

  render() {
    return (
      <Widget width={this.props.width}>
        <div className="graph__barchart__header">
          <h2 className="title__piechart">{this.props.title}</h2>
          <h3 className="subtitle__piechart" />
        </div>
        <div className="hierarchy__container" ref={this.myRef}>
          {this.state.apiData ? (
            <Tree
              data={this.state.apiData}
              separation={{ siblings: 0.4, nonSiblings: 0.25 }}
              zoom={0.7}
              pathFun="elbow"
              translate={{ x: this.state.widthContainer, y: 50 }}
              nodeSize={{ x: 100, y: 160 }}
              textLayout={{
                textAnchor: 'end',
                x: -10,
                y: 15,
                transform: 'rotate(-45)',
              }}
              orientation="vertical"
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
