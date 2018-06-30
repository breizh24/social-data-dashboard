import React, { Component } from 'react'
import { Fetcher } from './Fetch'
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts'

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
    })
  }

  render() {
    const COLORS = [
      '#b61351',
      '#BE2B63',
      '#C54274',
      '#CC5A86',
      '#D37197',
      '#D37197',
      '#DB89A8',
      '#E2A1BA',
      '#E9B8CB',
      '#edc2d3',
    ]
    return (
      <React.Fragment>
        <h2 className="title__piechart">{this.props.title}</h2>
        <h3 className="subtitle__piechart">Last 30 days</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={this.state.apiData}
              dataKey="frequency"
              nameKey="entity"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {this.state.apiData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    )
  }
}

export default Home__PieChart
