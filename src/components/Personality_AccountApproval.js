import React, { Component } from 'react'
import {
  BarChart,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
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
    fetch('http://165.227.158.131/dp/api/v160/trend/ma/twitter/order/approval')
      .then(response => response.json())
      .then(response => {
        let apiData = response.apiData.data
        this.setState({
          apiData: apiData,
        })
        console.log(this.state.apiData)
      })
  }

  handleApiData = data => {
    let myData = data.slice()
    let dataAllDates = []

    for (let i = 0; i < myData[0].days.length; i++) {
      let dayCompare = myData[0].days[i].day

      for (let j = 0; j < myData.length; j++) {
        for (let k = 0; k < myData[j].days.length; k++) {
          if (myData[j].days[k].day === dayCompare) {
            myData[j].days[k].value = parseFloat(
              myData[j].days[k].value.toFixed(2),
            )
            break
          } else {
            if (myData[j].days.find(el => el.day === dayCompare) === undefined)
              myData[j].days.push({
                day: dayCompare,
                value: 0,
              })
          }
        }
      }
    }
    return myData
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
            [obj.entity]: el.value,
          })
        } else {
          let day = dataLineChart.find(els => els.day === tempDay)
          day.index++
          day['value' + day.index] = el.value
          day[obj.entity] = el.value
          day['entity' + day.index] = obj.entity
        }
      })
    })
    // console.log(dataLineChart)
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
      let data = this.handleApiData(this.state.apiData)
      dataLineChart = this.handleTime(data)
    }
    return (
      <div>
        <ResponsiveContainer width="100%" height={900}>
          <LineChart data={dataLineChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            {this.state.apiData.map((obj, idx) => (
              <Line
                key={idx}
                type="monotone"
                dataKey={`${obj.entity}`}
                stroke={`${color[idx]}`}
              />
            ))}
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default Personality_AccountApproval
