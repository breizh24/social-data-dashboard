import React from 'react'
import ChordDiagram from 'react-chord-diagram'
import Widget from './Widget'
import { Fetcher } from '../components/Fetch'
import { ResponsiveContainer } from 'recharts'

class ChordchartComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      dateForFetch: {
        minDate: '2018-04-01',
        maxDate: '2018-05-24',
      },
    }
    this.matrix = []
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
      let apiData = response.apiData.chord.data
      this.setState(
        {
          apiData: apiData,
        },
        () => this.ProcessData(),
      )
    })
  }

  ProcessData() {
    this.matrix = []
    let data = this.state.apiData
    data = Object.values(data)
    let singleList = []
    let el
    for (let i = 0; i < data.length; i++) {
      this.matrix.push([])
      for (let j = 0; j < data[i].length; j++) {
        el = null
        let tempel = singleList.find(el => {
          if (el === data[i][j].source || el === data[i][j].target) {
            return el
          }
        })
        if (tempel !== undefined) {
          el = tempel
        }
        if (el === null) {
          singleList.push(data[i][j].source)
        } else {
          el = null
        }
      }
    }
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        this.matrix[i].push(0)
      }
    }
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        let source = singleList.findIndex(el => {
          if (el === data[i][j].source) {
            return true
          }
          return false
        })
        let target = singleList.findIndex(el => {
          if (el === data[i][j].target) {
            return true
          }
          return false
        })
        if (
          target !== undefined &&
          source !== undefined &&
          source >= 0 &&
          target >= 0
        ) {
          this.matrix[source][target] =
            this.matrix[source][target] + data[i][j].frequency
        }
      }
    }
    this.setState({
      names: singleList,
    })
  }

  render() {
    if (this.state.apiData.length < 1) {
      return 'Loading'
    }

    return (
      <Widget width="45%">
        <div className="graph__chord__container">
          <div className="graph__barchart__header">
            <h2 className="title__piechart">{this.props.title}</h2>
            <h3 className="subtitle__piechart" />
          </div>
          <div className="chord__chart__container">
            <div className="chord__chart">
              <ChordDiagram
                innerRadius={120}
                outerRadius={150}
                width={550}
                height={550}
                matrix={this.matrix}
                componentId={1}
                style={{ fontSize: '12px' }}
                groupLabels={this.state.names}
                groupColors={[
                  '#0088FE',
                  '#00C49F',
                  '#FFBB28',
                  '#FF8042',
                  '#b61351',
                  '#e6b041',
                  '#6d7eb0',
                  '#a6ba66',
                  '#7ba97d',
                  '#585858',
                ]}
              />
            </div>
          </div>
        </div>
      </Widget>
    )
  }
}
export default ChordchartComponent
