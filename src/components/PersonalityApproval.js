import React, { Component } from 'react'
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Cell,
  CartesianGrid,
  Legend,
} from 'recharts'

class PersonalityApproval extends Component {
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

  render() {
    if (this.state.apiData == []) {
      return ''
    }
    let entities = this.state.apiData.data.map(function(d) {
      return d.entity
    })
    console.log(entities)

    // this.state.apiData[x].days
    return (
      <React.Fragment>
        <h2 className="title__piechart">{this.props.title}</h2>
        <h3 className="subtitle__piechart">Last 30 days</h3>
        {this.state.apiData.length < 1 ? null : (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={this.state.apiData[0].days}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                type="category"
                allowDuplicatedCategory={false}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              {entities.map(entity => {
                return (
                  <Line type="monotone" stroke="#8884d8" dataKey={entity} />
                )
              })}
            </LineChart>
          </ResponsiveContainer>
        )}
      </React.Fragment>
    )
  }
}

export default PersonalityApproval
