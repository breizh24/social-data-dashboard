import React, { Component } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Fetcher } from '../components/Fetch'
import { Calendar } from 'primereact/components/calendar/Calendar'
import moment from 'moment'
import Widget from './Widget'

class BarchartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      apiDataCompare: [],
      showData: [],
      dateFromCalendar: null,
      dateFromCalendarCompare: null,
      dateForFetch: {
        minDate: '2018-04-01',
        maxDate: '2018-05-24',
      },
      dateForFetchCompare: {
        minDate: '',
        maxDate: '',
      },
      marginBottom: '0',
    }
  }

  getData = () => {
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
    ).then(response => {
      let apiData = response.apiData.data
      this.setState(
        {
          apiData: apiData,
        },
        () => {
          this.getLongerString()
          this.showInChart()
        },
      )
    })
  }

  componentDidMount() {
    this.getData()
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

  getDateFromCalendarCompare = e => {
    let date = e.value
    this.setState(
      {
        dateFromCalendarCompare: date,
      },
      () => {
        if (
          this.state.dateFromCalendarCompare[0] !== null &&
          this.state.dateFromCalendarCompare[1] !== null
        ) {
          this.handleDateCompare(this.state.dateFromCalendarCompare)
        }
      },
    )
  }

  handleDateCompare = date => {
    let minDate = moment(date[0]).format('YYYY-MM-DD')
    let maxDate = moment(date[1]).format('YYYY-MM-DD')
    let dateForFetchCompare = {
      minDate: minDate,
      maxDate: maxDate,
    }
    this.setState(
      {
        dateForFetchCompare: dateForFetchCompare,
      },
      () => this.getDataCompare(),
    )
  }

  getDataCompare = () => {
    let minDate = this.state.dateForFetchCompare.minDate
    let maxDate = this.state.dateForFetchCompare.maxDate
    Fetcher(
      this.props.version,
      this.props.category,
      this.props.subCategory,
      this.props.social,
      minDate,
      maxDate,
      this.props.indicator,
    ).then(response => {
      let apiDataCompare = response.apiData.data
      this.setState(
        {
          apiDataCompare: apiDataCompare,
        },
        () => (this.getLongerString(), this.showInChart()),
      )
    })
  }

  showInChart = () => {
    let showData = this.state.showData.slice()
    let apiData = this.state.apiData.slice()
    if (showData.length < 1) {
      showData = apiData
      this.setState({
        showData: showData,
      })
    } else {
      let apiDataCompare = this.state.apiDataCompare.slice()
      for (let i = 0; i < apiDataCompare.length; i++) {
        let counter = 0
        let entityCompare = apiDataCompare[i].entity
        let frequencyCompare = apiDataCompare[i].frequency
        for (let j = 0; j < apiData.length; j++) {
          if (entityCompare === apiData[j].entity) {
            apiData[j].frequencyCompare = frequencyCompare
          }
          if (entityCompare !== apiData[j].entity) {
            counter = counter + 1
            if (counter === apiData.length) {
              apiData.push({
                days: apiDataCompare[i].days,
                entity: apiDataCompare[i].entity,
                frequencyCompare: apiDataCompare[i].frequency,
              })
            }
          }
        }
      }
      this.setState({
        showData: apiData,
      })
    }
  }

  getLongerString = () => {
    let apiData = this.state.apiData.slice()
    let longerString = ''
    for (let i = 0; i < apiData.length; i++) {
      if (apiData[i].entity.length > longerString.length) {
        longerString = apiData[i].entity
      }
      if (this.state.apiDataCompare.length > 0) {
        let apiDataCompare = this.state.apiDataCompare.slice()
        for (let i = 0; i < apiDataCompare.length; i++) {
          if (apiDataCompare[i].entity.length > longerString.length) {
            longerString = apiDataCompare[i].entity
          }
        }
      }
    }
    this.getHeightForMargin(longerString)
  }

  getHeightForMargin = longerString => {
    setTimeout(() => {
      let textNode = document.getElementsByTagName('text')
      console.log(textNode)
      let margin = ''
      for (let i = 0; i < textNode.length; i++) {
        if (textNode[i].textContent === longerString) {
          let element = textNode[i].getBoundingClientRect()
          margin = parseInt(element.height + 10, 10).toString() + 'px'
          break
        }
      }
      this.setState({
        marginBottom: margin,
      })
    }, 1)
  }

  render() {
    if (this.state.apiData.length === 0) {
      return <h2>Loading...</h2>
    }
    const color = this.props.color
    return (
      <Widget width={this.props.width}>
        <div className="graph__barchart__header">
          <h2 className="title__piechart">{this.props.title}</h2>
          <h3 className="subtitle__piechart">
            {`Range: ${moment(this.state.dateForFetch.minDate).format(
              'DD/MM/YYYY',
            )} to ${moment(this.state.dateForFetch.maxDate).format(
              'DD/MM/YYYY',
            )} ${
              this.state.apiDataCompare.length > 0
                ? `compared with ${moment(
                    this.state.dateForFetchCompare.minDate,
                  ).format('DD/MM/YYYY')} to ${moment(
                    this.state.dateForFetchCompare.maxDate,
                  ).format('DD/MM/YYYY')}`
                : ''
            }`}
          </h3>
        </div>
        <div
          className="graph__barchart"
          style={{ marginBottom: this.state.marginBottom }}
        >
          <ResponsiveContainer width="98%" height={500}>
            <BarChart data={this.state.showData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="entity"
                textAnchor="end"
                tick={{ angle: -45 }}
                minTickGap={-200}
              />
              <YAxis />
              <Bar dataKey="frequency" fill={this.props.colour1} />
              {this.state.apiDataCompare < 1 ? null : (
                <Bar dataKey="frequencyCompare" fill={this.props.colour2} />
              )}
            </BarChart>
          </ResponsiveContainer>
          {this.props.calendarRange === false &&
          this.props.calendarCompare === false ? null : (
            <div className="calendar__container">
              {this.props.calendarRange === false ? null : (
                <div
                  className={`calendar__range ${this.props.classColorRange}`}
                >
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
              )}
              {this.props.calendarRange === false ? null : (
                <div
                  className={`calendar__compare ${
                    this.props.classColorCompare
                  }`}
                >
                  <Calendar
                    minDate={new Date('2018-04-01')}
                    maxDate={new Date('2018-05-24')}
                    defaultDate={new Date('2018-04-01')}
                    dateFormat="dd/mm/yy"
                    selectionMode="range"
                    placeholder="Compare"
                    value={this.state.dateFromCalendarCompare}
                    onChange={e => this.getDateFromCalendarCompare(e)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </Widget>
    )
  }
}

export default BarchartComponent
