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
import Widget from './Widget'
import { Checkbox } from 'primereact/components/checkbox/Checkbox'

class Personality_AccountApproval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
    }
    this.color = [
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
  }

  componentDidMount() {
    fetch(
      'http://165.227.158.131/dp/api/v160/trend/ma/twitter/range/2018-05-01/2018-05-20/order/approval',
    )
      .then(response => response.json())
      .then(response => {
        let apiData = response.apiData.data
        this.setState({
          apiData: apiData,
        })
      })
  }

  onChangeCheckbox = (idx, data) => {
    data[idx].checked = !data[idx].checked
    console.log(data)
  }

  handleApiData = data => {
    let myData = data.map((el, idx) => {
      const newObj = el.days.map(element => {
        const obj = { ...element }
        return obj
      })
      const result = {
        ...el,
        days: newObj,
        color: this.color[idx],
        checked: true,
      }
      return result
    })
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
            if (
              myData[j].days.find(el => el.day === dayCompare) === undefined
            ) {
              myData[j].days.push({
                day: dayCompare,
                value: 0,
              })
            }
          }
        }
      }
    }
    console.log(myData)
    return myData
  }

  handleDataLineChart = apiData => {
    let data = apiData.map(el => {
      const newObj = el.days.map(element => {
        const obj = { ...element }
        return obj
      })
      const result = { ...el, days: newObj }
      return result
    })
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
    console.log(dataLineChart)
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
    let dataLineChart = []
    let data = []
    if (this.state.apiData.length > 0) {
      data = this.handleApiData(this.state.apiData)
      dataLineChart = this.handleTime(data)
    }

    return (
      <Widget width="100%">
        <div className="linechart__container">
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={dataLineChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              {data.map((obj, idx) => (
                <Line
                  key={idx}
                  type="monotone"
                  dataKey={`${obj.entity}`}
                  stroke={`${obj.color}`}
                />
              ))}
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          <div className="linechart__legend">
            <ul className="linechart__legend__ul">
              {data.map((obj, idx) => (
                <li key={idx}>
                  <span>
                    <input
                      type="checkbox"
                      data-id={idx}
                      defaultChecked={data[idx].checked}
                      onChange={() => this.onChangeCheckbox(idx, data)}
                    />
                  </span>
                  <span>{obj.entity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Widget>
    )
  }
}

export default Personality_AccountApproval
