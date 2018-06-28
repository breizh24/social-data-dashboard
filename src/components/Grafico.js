import React, { Component } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import { Fetcher } from '../components/Fetch'
import { Calendar } from 'primereact/components/calendar/Calendar'
import moment from 'moment'

class Grafico extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      dateFromCalendar: null,
      dateForFetch: {
        minDate: '2018-04-01',
        maxDate: '2018-05-24',
      },
    }
  }

  getData = () => {
    let minDate = this.state.dateForFetch.minDate
    let maxDate = this.state.dateForFetch.maxDate
    Fetcher(155, 'ma', 'trend', 'twitter', minDate, maxDate, 'activity').then(
      response => {
        let apiData = response.apiData.data
        this.setState({
          apiData: apiData,
        })
      },
    )
  }

  componentDidMount() {
    this.getData()
  }

  getDateFromCalendar = e => {
    console.log('datefromcalendar')
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
    console.log(date)
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

  render() {
    if (this.state.apiData.length === 0) {
      return <h2>Loading...</h2>
    }
    return (
      <div>
        <ResponsiveContainer width="98%" height={500}>
          <BarChart data={this.state.apiData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="entity"
              textAnchor="end"
              tick={{ angle: -45 }}
              minTickGap={-200}
            />
            <YAxis />
            <Bar dataKey="frequency" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <Calendar
          minDate={new Date('2018-04-01')}
          maxDate={new Date('2018-05-24')}
          defaultDate={new Date('2018-04-01')}
          dateFormat="dd/mm/yy"
          selectionMode="range"
          value={this.state.dateFromCalendar}
          onChange={e => this.getDateFromCalendar(e)}
        />
      </div>
    )
  }
}

export default Grafico
