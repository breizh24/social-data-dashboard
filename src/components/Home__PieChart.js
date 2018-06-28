import React, { Component } from 'react'
import { Fetcher } from './Fetch'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts'

class Home__PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      dateForFetch: {
        minDate: '2018-04-24',
        maxDate: '2018-05-24',
      },
    }
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
    ).then(response => {
      let apiData = response.apiData.data
      this.setState({
        apiData: apiData,
      })
      console.log(apiData)
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <h3>Last 30 days</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={this.state.apiData}
              dataKey="frequency"
              nameKey="entity"
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    )
  }
}

export default Home__PieChart
