import React, { Component } from 'react'
import {
  BarChart,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'
import moment from 'moment'

class Personality_AccountApproval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
    }
  }

  componentDidMount() {
    fetch(
      'http://165.227.158.131/dp/api/v160/trend/ma/twitter/range/2018-05-01/2018-05-10/order/approval',
    )
      .then(response => response.json())
      .then(response => {
        let apiData = response.apiData.data
        this.setState({
          apiData: apiData,
        })
        console.log(this.state.apiData)
      })
  }

  handleDataLineChart = apiData => {
    let data = apiData.slice()
    let dataLineChart = []
    let tempDay
    data.map(obj => {
      obj.days.forEach(el => {
        tempDay = el.day
        if (dataLineChart.find(els => els.day === tempDay) === undefined) {
          dataLineChart.push({
            day: tempDay,
            index: 0,
            value0: el.value,
            entity0: obj.entity,
          })
        } else {
          let day = dataLineChart.find(els => els.day === tempDay)
          day.index++
          day['value' + day.index] = el.value
          day['entity' + day.index] = obj.entity
        }
      })
    })
    return dataLineChart
  }

  handleTime = data => {
    let dataLineChart = this.handleDataLineChart(data)
    let correctDate = dataLineChart.map(obj => {
      return { ...obj, day: moment(obj.day).format('DD/MM/YYYY') }
    })
    return correctDate
  }

  render() {
    let color = [
      'red',
      'yellow',
      'green',
      'blue',
      '#ccc',
      '#585858',
      '#d786e3',
      '#c6004a',
      '#7480b5',
      '#75b586',
    ]
    let dataLineChart = []
    if (this.state.apiData.length > 0) {
      dataLineChart = this.handleTime(this.state.apiData)
    }
    return (
      <div>
        <ResponsiveContainer width="100%" height={900}>
          <LineChart data={dataLineChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" textAnchor="end" tick={{ angle: -45 }} />
            <YAxis />
            {/* <Line dataKey="value0" fill="#8884d8" /> */}
            {this.state.apiData.map(
              (obj, idx) => (
                console.log('entity' + idx),
                (
                  <Line
                    type="monotone"
                    dataKey={`value${idx}`}
                    stroke={`${color[idx]}`}
                  />
                )
              ),
            )}
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default Personality_AccountApproval
