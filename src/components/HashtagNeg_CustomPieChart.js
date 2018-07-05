import React, { Component } from 'react'
import { Fetcher } from './Fetch'
import {
  PieChart, Pie, Sector,
  ResponsiveContainer,
  Tooltip, Cell
} from 'recharts'

class HashtagNeg_CustomPieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      apiData: [],
      dateForFetch: {
        minDate: '2018-04-24',
        maxDate: '2018-05-24',
      },
    }
  }

  onPieEnter(newData, e) {
    newData = newData.slice()
    let index = null
    for (let i = 0; i < newData.length; i++) {
      if (e.name === newData[i].hashtag_name) {
        index = i
      }
    }
    this.setState({
      activeIndex: index,
    });
  }

  renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, frequency } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.entity}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${frequency}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  }

  componentDidMount() {
    fetch('http://165.227.158.131/dp/api/v160/sentiment/twitter/order/negativity/100')
      .then(response => response.json())
      .then(response => {
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
              activeIndex={this.state.activeIndex}
              activeShape={this.renderActiveShape}
              data={this.state.apiData}
              dataKey="activity"
              nameKey="hashtag_name"
              // cx={300}
              // cy={150}
              innerRadius={100}
              outerRadius={130}
              fill="#8884d8"
              // label
              onMouseEnter={(e) => this.onPieEnter(this.state.apiData, e)}
            >
              {this.state.apiData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    )
  }
}

export default HashtagNeg_CustomPieChart