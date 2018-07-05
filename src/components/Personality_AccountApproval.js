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
import { Calendar } from 'primereact/components/calendar/Calendar'
import { Fetcher } from '../components/Fetch'

class Personality_AccountApproval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      dataLineChart: [],
      dateFromCalendar: null,
      dateForFetch: {
        minDate: '2018-04-01',
        maxDate: '2018-05-24',
      },
    }
    this.nameColor = []
    this.color = [
      '#D83A00',
      '#6D7AB2',
      '#6BAF7D',
      '#7971ea',
      '#ECB02E',
      '#C6004A',
      '#D786A3',
      '#A4C46B',
      '#74dbef',
      '#fab2ac',
    ]
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    let minDate = this.state.dateForFetch.minDate
    let maxDate = this.state.dateForFetch.maxDate
    Fetcher(160, 'ma', 'trend', 'twitter', minDate, maxDate, 'approval').then(
      response => {
        let apiData = response.apiData.data
        if (this.state.apiData.length < 1) {
          this.setState(
            {
              apiData: apiData,
            },
            () => this.handleApiData(this.state.apiData),
          )
        } else {
          let oldData = this.state.apiData.map((el, idx) => {
            const newObj = el.days.map(element => {
              const obj = { ...element }
              return obj
            })
            const result = { ...el }
            return result
          })

          for (let i = 0; i < apiData.length; i++) {
            for (let j = 0; j < oldData.length; j++) {
              if (apiData[i].entity === oldData[j].entity) {
                apiData[i].checked = oldData[j].checked
                apiData[i].color = oldData[j].color
              }
            }
          }
          this.setState(
            {
              apiData: apiData,
            },
            () => this.handleApiData(this.state.apiData),
          )
        }
      },
    )
  }

  getDateFromCalendar = e => {
    this.setState(
      {
        dateFromCalendar: e.value,
      },
      () => {
        if (
          this.state.dateFromCalendar[0] !== null &&
          this.state.dateFromCalendar[1] !== null
        ) {
          this.handleDate(this.state.dateFromCalendar)
        }
      },
    )
  }

  handleDate = date => {
    let minDate = moment(date[0]).format('YYYY-MM-DD')
    let maxDate = moment(date[1]).format('YYYY-MM-DD')
    let dateForFetch = {
      minDate: minDate,
      maxDate: maxDate,
    }

    this.setState(
      {
        dateForFetch: dateForFetch,
      },
      () => this.getData(),
    )
  }

  onClickCheckbox = (idx, data) => {
    let newData = data.map((el, idx) => {
      const newObj = el.days.map(element => {
        const obj = { ...element }
        return obj
      })
      const result = { ...el }
      return result
    })
    newData[idx].checked = !newData[idx].checked
    this.setState({
      apiData: newData,
    })
  }

  giveColor = entity => {
    let color
    for (let i = 0; i < this.nameColor.length; i++) {
      if (this.nameColor[i].entity === entity) {
        color = this.nameColor[i].color
        break
      }
    }
    return color
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
        color:
          this.nameColor.length < 1
            ? this.color[idx]
            : this.giveColor(el.entity),
        checked:
          typeof this.state.apiData[idx].checked === 'undefined'
            ? true
            : this.state.apiData[idx].checked,
      }
      return result
    })
    if (this.nameColor.length < 1) {
      myData.forEach(el => {
        this.nameColor.push({ entity: el.entity, color: el.color })
      })
    }

    myData.sort(function(b, a) {
      return a.days.length - b.days.length
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
    myData.forEach(el =>
      el.days.sort(function(b, a) {
        return new Date(b.day) - new Date(a.day)
      }),
    )

    myData = myData.sort((b, a) => {
      if (a.entity > b.entity) return -1
      else if (a.entity < b.entity) return 1
      else return 0
    })

    this.setState(
      {
        apiData: myData,
      },
      () => this.handleTime(this.state.apiData),
    )
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
    return dataLineChart
  }

  handleTime = data => {
    let dataLineChart = this.handleDataLineChart(data)
    let correctDate = dataLineChart.map(obj => {
      return { ...obj, day: moment(obj.day).format('DD/MM/YYYY') }
    })
    this.setState({
      dataLineChart: correctDate,
    })
  }

  render() {
    let dataLineChart = this.state.dataLineChart
    console.log(this.state.apiData)

    return (
      <Widget width="100%">
        <div className="linechart__container">
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={dataLineChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              {this.state.apiData.map(
                (obj, idx) =>
                  obj.checked ? (
                    <Line
                      key={idx}
                      type="monotone"
                      dataKey={`${obj.entity}`}
                      stroke={`${obj.color}`}
                    />
                  ) : null,
              )}
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          <div className="linechart__legend">
            <ul className="linechart__legend__ul">
              {this.state.apiData.map((obj, idx) => (
                <li key={idx}>
                  <span>
                    <input
                      type="checkbox"
                      defaultChecked={this.state.apiData[idx].checked}
                      onClick={() =>
                        this.onClickCheckbox(idx, this.state.apiData)
                      }
                      style={{
                        backgroundColor: 'red',
                        border: obj.color,
                        borderRadius: '15px',
                      }}
                    />
                  </span>
                  <span>{obj.entity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`calendar__range ${this.props.classColorRange}`}>
            <Calendar
              minDate={new Date('2018-04-01')}
              maxDate={new Date('2018-05-24')}
              defaultDate={new Date('2018-04-01')}
              dateFormat="dd/mm/yy"
              selectionMode="range"
              placeholder="Range di date"
              value={this.state.dateFromCalendar}
              onChange={e => this.getDateFromCalendar(e)}
            />
          </div>
        </div>
      </Widget>
    )
  }
}

export default Personality_AccountApproval
